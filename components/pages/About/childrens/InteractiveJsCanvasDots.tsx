import React, { useEffect, useRef } from 'react';

type ICursorPos = { x: number; y: number };

export function InteractiveJsCanvasDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWidth = 250;
  const canvasHeight = 250;
  const CURSOR: ICursorPos = { x: 0, y: 0 };
  let dots: Dot[];

  const draw = (ctx): void => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    dots.forEach((el) => el.draw());
  };
  const mouseMoveHandle = (event: MouseEvent): void => {
    CURSOR.x = event.offsetX;
    CURSOR.y = event.offsetY;
  };

  useEffect((): (() => void) => {
    const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');

    if (window.devicePixelRatio > 1) {
      canvasRef.current.width = canvasWidth * window.devicePixelRatio;
      canvasRef.current.height = canvasHeight * window.devicePixelRatio;
      canvasRef.current.style.width = canvasWidth + "px";
      canvasRef.current.style.height = canvasHeight + "px";

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    let animationFrameId: number;

    // generate dots
    dots = [...generateDots(ctx, canvasHeight, CURSOR)];

    canvasRef
      .current
      .addEventListener('mousemove', mouseMoveHandle);

    render();

    function render(): void {
      draw(ctx);
      animationFrameId = window.requestAnimationFrame(render);
    }

    return (): void => {
      window.cancelAnimationFrame(animationFrameId);
      canvasRef
        .current
        .removeEventListener('mousemove', mouseMoveHandle);
    };
  }, [draw]);
  if (!process.browser) return null;
  return (
    <canvas
      width={canvasWidth}
      height={canvasHeight}
      ref={canvasRef}
      style={{
        alignSelf: 'flex-start',
        shapeOutside: 'circle()',
        float: 'right',
        display: 'inline-block',
      }}
    />
  );
}

function generateDots(
  ctx: CanvasRenderingContext2D,
  canvasHeight: number,
  CURSOR: ICursorPos,
): Dot[] {
  const center = canvasHeight / 2;
  const dots: Dot[] = [];
  let dotsCount = 10;

  // center
  dots.push(
    new Dot(
      canvasHeight / 2,
      canvasHeight / 2,
      ctx,
      CURSOR,
      '#307bff',
      dots.length,
    ),
  );
  // inner circle
  for (let y = 1; y < 6; y++) {
    dotsCount = y * 6;
    for (let i = 0; i < dotsCount; i++) {
      const distanceFromCenter = dotsCount * 2;
      const getPos = (mathMethod: 'sin' | 'cos'): number =>
        center +
        Math[mathMethod]((i * Math.PI) / (dotsCount / 2)) * distanceFromCenter;

      dots.push(
        new Dot(
          getPos('sin'),
          getPos('cos'),
          ctx,
          CURSOR,
          '#307bff',
          dots.length,
        ),
      );
    }
  }
  // outside circle
  for (let y = 7; y < 10; y++) {
    dotsCount = y * 6;
    for (let i = 0; i < dotsCount; i++) {
      const distanceFromCenter = dotsCount * 2;
      const getPos = (mathMethod: 'sin' | 'cos'): number =>
        center +
        Math[mathMethod]((i * Math.PI) / (dotsCount / 2)) * distanceFromCenter;

      dots.push(
        new Dot(
          getPos('sin'),
          getPos('cos'),
          ctx,
          CURSOR,
          '#27313e',
          dots.length,
        ),
      );
    }
  }
  return dots;
}

class Dot {
  private readonly springFactor: number = 0.5;
  private readonly friction: number = 0.1;
  private radiusCur = 5;
  private radiusOriginal = 5;
  private currentX: number;
  private currentY: number;
  private readonly currentColor: string;
  private vx = 0;
  private vy = 0;

  constructor(
    private originalX: number,
    private originalY: number,
    private ctx: CanvasRenderingContext2D,
    private CURSOR: ICursorPos,
    private defaultColor: string,
    private id: number,
  ) {
    this.currentColor = defaultColor;
    this.currentX = this.originalX;
    this.currentY = this.originalY;
  }

  private think() {
    const distX = this.originalX - this.CURSOR.x;
    const distY = this.originalY - this.CURSOR.y;

    const dist = Math.hypot(distX, distY);

    // interaction
    const radius = 50;
    if (dist < radius) {
      const _angle = Math.atan2(distY, distX);
      const tx = this.CURSOR.x + distX * 0.9;
      const ty = this.CURSOR.y + distY * 0.9;

      this.vx += tx - this.currentX;
      this.vy += ty - this.currentY;
      this.radiusCur =
        Math.abs((this.radiusOriginal / 100) * (dist / (radius / 100))) + 2;
    } else {
      this.radiusCur = this.radiusOriginal;
    }

    // spring back
    const dx1 = -(this.currentX - this.originalX);
    const dy1 = -(this.currentY - this.originalY);

    this.vx += dx1 * this.springFactor;
    this.vy += dy1 * this.springFactor;

    // friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    // actual move
    this.currentX += this.vx;
    this.currentY += this.vy;
  }

  public draw() {
    this.think();
    this.ctx.fillStyle = this.currentColor;
    this.ctx.beginPath();
    this.ctx.arc(
      this.currentX,
      this.currentY,
      this.radiusCur > 5 ? 5 : this.radiusCur,
      0,
      2 * Math.PI,
    );
    this.ctx.fill();
  }
}
