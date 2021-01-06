export type ICursorPos = { x: number, y: number }

export class Dot {
    private currentX: number;
    private currentY: number;
    private currentColor: string;

    constructor(private originalX: number,
                private originalY: number,
                private radius: number,
                private ctx: CanvasRenderingContext2D,
                private GLOBAL_CURSOR_POS: ICursorPos,
                private GLOBAL_CANVAS_HTML_NODE: HTMLCanvasElement,
                private defaultColor: string,
                private id: number
    ) {
        this.currentColor = defaultColor;

    }

    private checkCursorPos() {
        const d = Math.hypot(
            this.GLOBAL_CANVAS_HTML_NODE.offsetLeft + this.originalX - this.GLOBAL_CURSOR_POS.x,
            this.GLOBAL_CANVAS_HTML_NODE.offsetTop + this.originalY - this.GLOBAL_CURSOR_POS.y
        )

        if (d >= 5 * 5) {
            this.currentColor = this.defaultColor
            this.radius = 5
        } else {
            this.currentColor = "#114eec"
            this.radius = 3
        }
    }

    public draw() {
        this.checkCursorPos();
        this.ctx.fillStyle = this.currentColor;
        this.ctx.beginPath();
        this.ctx.arc(
            this.originalX,
            this.originalY,
            this.radius,
            0,
            2 * Math.PI,
        );
        this.ctx.fill();
    }

}