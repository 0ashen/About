import {useEffect, useRef} from 'react';
import {Dot, ICursorPos} from './Dot.class';

export function InteractiveJsCanvasDots() {
    const canvasRef = useRef<HTMLCanvasElement>(null),
        canvasWidth: number = 250,
        canvasHeight: number = 250,
        draw = (ctx): void => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            dots.forEach(el => el.draw())
        },
        GLOBAL_CURSOR_POS: ICursorPos = {
            x: 0,
            y: 0
        },
        mouseMoveHandle = (event: MouseEvent): void => {
            GLOBAL_CURSOR_POS.y = event.clientY;
            GLOBAL_CURSOR_POS.x = event.clientX;
        };
    let dots: Dot[];


    useEffect((): () => void => {

        const canvasHtmlNode: HTMLCanvasElement = canvasRef.current,
            ctx: CanvasRenderingContext2D = canvasHtmlNode.getContext('2d');
        let animationFrameId: number;

        // generate dots
        dots = [...generateDots(ctx, canvasHeight, GLOBAL_CURSOR_POS, canvasHtmlNode)];

        document.querySelector('body').addEventListener('mousemove', mouseMoveHandle);

        render()

        function render(): void {
            draw(ctx)
            animationFrameId = window.requestAnimationFrame(render)
        }

        return (): void => {
            window.cancelAnimationFrame(animationFrameId)
            document.querySelector('body').removeEventListener('mousemove', mouseMoveHandle);
        }
    }, [draw])

    return (
        <canvas width={canvasWidth}
                height={canvasHeight}
                ref={canvasRef}
                style={{
                    alignSelf: 'flex-start',
                    shapeOutside: 'circle()',
                    float: 'right',
                    display: 'inline-block'
                }}/>
    );
}

function generateDots(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    GLOBAL_CURSOR_POS: ICursorPos,
    canvasHtmlNode: HTMLCanvasElement
): Dot[] {
    const center = canvasHeight / 2,
        dots: Dot[] = [];
    let dotsCount: number = 10;

    // center
    dots.push(new Dot(
        canvasHeight / 2,
        canvasHeight / 2,
        5,
        ctx,
        GLOBAL_CURSOR_POS,
        canvasHtmlNode,
        '#307bff',
        dots.length
    ))
    // inner circle
    for (let y = 1; y < 6; y++) {
        dotsCount = y * 6;
        for (let i = 0; i < dotsCount; i++) {
            const distanceFromCenter = dotsCount * 2
            const getPos = (mathMethod: ('sin' | 'cos')): number =>
                center + Math[mathMethod](i * Math.PI / (dotsCount / 2)) * distanceFromCenter

            dots.push(new Dot(
                getPos('sin'),
                getPos('cos'),
                5,
                ctx,
                GLOBAL_CURSOR_POS,
                canvasHtmlNode,
                '#307bff',
                dots.length
            ))
        }
    }
    // outside circle
    for (let y = 7; y < 10; y++) {
        dotsCount = y * 6;
        for (let i = 0; i < dotsCount; i++) {
            const distanceFromCenter = dotsCount * 2
            const getPos = (mathMethod: ('sin' | 'cos')): number =>
                center + Math[mathMethod](i * Math.PI / (dotsCount / 2)) * distanceFromCenter

            dots.push(new Dot(
                getPos('sin'),
                getPos('cos'),
                5,
                ctx,
                GLOBAL_CURSOR_POS,
                canvasHtmlNode,
                '#27313e',
                dots.length
            ))
        }
    }
    return dots
}





