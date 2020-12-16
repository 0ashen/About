import { DataSkillsGroup, SKillsProps } from './Skills.inteface'
import { SC_group, SC_skills } from './Skills.styles'
import { withTranslation } from 'next-i18next'
import { PageAboutMeNamespaceEnum } from '../../pages/about-me-skills-contacts'


export function Skills({ skills, t }: SKillsProps) {

    const data = Object.entries(
        skills ||
        t('skills', { returnObjects: true }),
    ) as DataSkillsGroup[]

    return (
        <SC_skills>
            {
                data.map(([title, items]: DataSkillsGroup): JSX.Element => {
                    let skillList
                    if (Array.isArray(items)) {
                        skillList = (
                            <div>
                                {
                                    items.map((el: string) => (
                                            <span key={el}>
                                                {el},
                                            </span>
                                        ),
                                    )
                                }
                            </div>
                        )
                    } else {
                        skillList = <Skills skills={items} />
                    }

                    return (
                        <SC_group key={title}>
                            <mark>{title}</mark>
                            {skillList}
                        </SC_group>
                    )
                })
            }
        </SC_skills>
    )
}

export default withTranslation(PageAboutMeNamespaceEnum['page-about-me-skills-contacts'])(Skills)