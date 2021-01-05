import {useRef} from "react";

export function InteractiveJsCanvasDots() {
    const canvasRef = useRef(null);

    const params = {
        width: 300,
        height: 300,
    };

    return (
        <canvas width={params.width} height={params.height} ref={canvasRef}>
            123
        </canvas>
    );
}

//
// // setup
// const canvasHtmlNode: HTMLCanvasElement = document.querySelector('#canvas'),
//     ctx: CanvasRenderingContext2D = canvasHtmlNode.getContext("2d"),
//     canvasWidth: number = canvasHtmlNode.width = 300,
//     canvasHeight: number = canvasHtmlNode.height = 300;
//
// type ICursorPos = { x: number, y: number }
// const GLOBAL_CURSOR_POS: ICursorPos = {
//     x: 0,
//     y: 0
// }
// document.querySelector('body').addEventListener('mousemove', (event: MouseEvent): void => {
//     GLOBAL_CURSOR_POS.y = event.clientY;
//     GLOBAL_CURSOR_POS.x = event.clientX;
//     // console.log(
//     //     event.clientX,
//     //     event.offsetX,
//     //     event.pageX,
//     // )
//
// });
//
// class Dot {
//     private currentX: number;
//     private currentY: number;
//     private currentColor: string;
//
//     constructor(private originalX: number,
//                 private originalY: number,
//                 private radius: number,
//                 private ctx: CanvasRenderingContext2D,
//                 private GLOBAL_CURSOR_POS: ICursorPos,
//                 private GLOBAL_CANVAS_HTML_NODE: HTMLCanvasElement,
//                 private defaultColor: string,
//                 private id: number
//     ) {
//         this.currentColor = defaultColor;
//
//     }
//
//     private checkCursorPos() {
//         const d = Math.hypot(this.GLOBAL_CANVAS_HTML_NODE.offsetLeft + this.originalX - GLOBAL_CURSOR_POS.x,
//             this.GLOBAL_CANVAS_HTML_NODE.offsetTop + this.originalY - GLOBAL_CURSOR_POS.y
//         )
//
//         if (d >= 5 * 5) {
//             this.currentColor = this.defaultColor
//             this.radius = 5
//         } else {
//             this.currentColor = "#114eec"
//             this.radius = 3
//         }
//
//
//     }
//
//     public draw() {
//         this.checkCursorPos();
//         ctx.fillStyle = this.currentColor;
//         ctx.beginPath();
//         ctx.arc(
//             this.originalX,
//             this.originalY,
//             this.radius,
//             0,
//             2 * Math.PI,
//         );
//         ctx.fill();
//     }
//
// }
//
// // generate dots
//
// const dots: Dot[] = [],
//     center = canvasHeight / 2;
//
// let dotsCount = 10;
//
// for (let y = 1; y < 6; y++) {
//     dotsCount = y * 6;
//     for (let i = 0; i < dotsCount; i++) {
//         const distanceFromCenter = dotsCount * 2
//         const getPos = (mathMethod: ('sin' | 'cos')): number =>
//             center + Math[mathMethod](i * Math.PI / (dotsCount / 2)) * distanceFromCenter
//
//         dots.push(new Dot(
//             getPos('sin'),
//             getPos('cos'),
//             5,
//             ctx,
//             GLOBAL_CURSOR_POS,
//             canvasHtmlNode,
//             "#fd0202",
//             dots.length
//         ))
//     }
// }
//
// for (let y = 7; y < 10; y++) {
//     dotsCount = y * 6;
//     for (let i = 0; i < dotsCount; i++) {
//         const distanceFromCenter = dotsCount * 2
//         const getPos = (mathMethod: ('sin' | 'cos')): number =>
//             center + Math[mathMethod](i * Math.PI / (dotsCount / 2)) * distanceFromCenter
//
//         dots.push(new Dot(
//             getPos('sin'),
//             getPos('cos'),
//             5,
//             ctx,
//             GLOBAL_CURSOR_POS,
//             canvasHtmlNode,
//             "#030303",
//             dots.length
//         ))
//     }
// }
//
//
// mainDraw();
// function mainDraw() {
//     requestAnimationFrame(mainDraw)
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//
//     // background
//     ctx.fillStyle = "#5e96fe";
//     ctx.beginPath();
//     ctx.rect(0, 0, canvasWidth, canvasHeight);
//     ctx.fill();
//
//     // center
//     ctx.strokeStyle = "#4be314";
//     ctx.beginPath();
//
//     ctx.moveTo(canvasWidth / 2, 0);
//     ctx.lineTo(canvasWidth / 2, canvasHeight);
//
//     ctx.moveTo(0, canvasHeight / 2);
//     ctx.lineTo(canvasWidth, canvasHeight / 2);
//     ctx.stroke();
//     //center-end
//
//     // dots
//     dots.forEach(el => el.draw())
// }
//
//
//
//
