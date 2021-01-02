import React from 'react'




export class InnerComponent extends React.Component<
    { text: string },
    { text: string }
> {
    state = {
        text: '123',
    }

    constructor(props) {
        super(props)
    }




    render() {
        console.log('render')
        console.log(React)
        return (
            <div>
                inner component {this.state.text}
                <p>props :::::::: {this.props.text}</p>
            </div>
        )
    }
}
