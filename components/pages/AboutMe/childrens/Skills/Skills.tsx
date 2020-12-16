import { DataSkillsGroup, SKillsProps } from './Skills.inteface'
import { Group, ScSkills } from './Skills.styles'
import { withTranslation } from 'next-i18next'
import { PageAboutMeNamespaceEnum } from '../../about-me-translate-name-space.enum'


export function Skills({ skills, t }: SKillsProps) {

    const data = Object.entries(
        skills ||
        t('skills', { returnObjects: true }),
    ) as DataSkillsGroup[]

    return (
        <ScSkills>
            {
                data.map(([title, baseWords]: DataSkillsGroup): JSX.Element => {
                    let skillList: JSX.Element
                    if (Array.isArray(baseWords)) {
                        skillList = (
                            <div>
                                {
                                    baseWords.map((skill: string) => (
                                        <span key={skill}>
                                            {skill},
                                        </span>
                                    ))
                                }
                            </div>
                        )
                    } else {
                        skillList = <Skills skills={baseWords} />
                    }

                    return (
                        <Group key={title}>
                            <mark>{title}</mark>
                            {skillList}
                        </Group>
                    )
                })
            }
        </ScSkills>
    )
}

export default withTranslation(PageAboutMeNamespaceEnum['page-about-me-skills-contacts'])(Skills)