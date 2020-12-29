import { withTranslation } from '../../../i18-next'
import { PageProjectsNamespaceEnum } from './projects-translate-name-space.enum'
import { InnerComponent } from './childrens/InnerComponent'
import { useState } from 'react'

export function ProjectsComponent() {
    const [state, setState] = useState({text: 'empty'});

    if (state.text === 'empty') {
        setTimeout(()=> {
            setState({text: 'PAGE COMPONENT STATE, FROM PROPS'})
        }, 1000);
    }
    return (
        <div>
            <p>Projects page</p>
            <div>
                <InnerComponent text={state.text}/>
            </div>
        </div>
    )
}

export const Projects = withTranslation(
    PageProjectsNamespaceEnum['page-projects']
)(ProjectsComponent)
