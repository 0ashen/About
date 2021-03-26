import { DataSkillsGroup, Group, SKillsProps } from './Skills.inteface';
import {
    Chip,
    GroupTitle,
    ListSkillsWrapper,
    SkillsGroup,
    SkillsWrapper,
} from './Skills.styles';
import { withTranslation } from 'next-i18next';
import { PageAboutMeNamespaceEnum } from '../../about-translate-name-space.enum';
import React from 'react';

export function Skills({ t }: SKillsProps) {
    const data = Object.entries(
        t('skills', { returnObjects: true }),
    ) as DataSkillsGroup[];
    const List = ({ baseWords }) => {
        return (
            <ListSkillsWrapper>
                {baseWords.map((skill: string, idx) => (
                    <Chip key={skill}>
                        {skill}
                        {baseWords.length - 1 != idx && ', '}
                    </Chip>
                ))}
            </ListSkillsWrapper>
        );
    };

    return (
        <SkillsWrapper>
            {data.map(
                ([title, baseWords]: DataSkillsGroup): JSX.Element => {
                    const isListWithoutSubGroups = Array.isArray(baseWords);

                    return (
                        <SkillsGroup key={title}>
                            <GroupTitle>{title}</GroupTitle>
                            {isListWithoutSubGroups ? (
                                <List baseWords={baseWords} />
                            ) : (
                                ((Object.entries(
                                    baseWords,
                                ) as undefined) as Group).map(
                                    ([title, baseWords]) => {
                                        return (
                                            <React.Fragment key={title}>
                                                <GroupTitle>{title}</GroupTitle>
                                                <List baseWords={baseWords} />
                                            </React.Fragment>
                                        );
                                    },
                                )
                            )}
                        </SkillsGroup>
                    );
                },
            )}
        </SkillsWrapper>
    );
}

export default withTranslation(
    PageAboutMeNamespaceEnum['page-about-skills-contacts'],
)(Skills);
