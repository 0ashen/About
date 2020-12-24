import { withTranslation } from '../../../i18-next'
import { PageProjectsNamespaceEnum } from './projects-translate-name-space.enum'

export function ProjectsComponent() {
    return <div>projects 123</div>
}

export const Projects = withTranslation(
    PageProjectsNamespaceEnum['page-projects']
)(ProjectsComponent)
