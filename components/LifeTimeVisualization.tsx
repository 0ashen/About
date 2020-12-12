import React from 'react'
import styled from 'styled-components'
import { dots } from './dots'

const SC_canvas = styled.canvas`
  box-shadow: 0 0 0 1px red;
`

export class LifeTimeVisualization extends React.Component {
    private canvasRef: React.RefObject<HTMLCanvasElement>

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
    }
    componentDidMount() {
        dots(this.canvasRef.current.getContext("2d"), 500, 700)
    }

    render() {
        return (
            <div className='wrapper'>
                <SC_canvas width='500' height='700' ref={this.canvasRef}/>
                <div><p>text after canvas</p></div>
            </div>
        )
    }
}