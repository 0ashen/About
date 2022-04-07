import React from 'react';
// noinspection ES6PreferShortImport
import { withTranslation } from '../../../i18-next';
import { PageProjectsNamespaceEnum } from './projects-translate-name-space.enum';
import { Wrapper } from './Projects.styles';
import { Project } from './childrens/Projects/Project';
import { TFunction } from 'next-i18next';

type ProjectsComponentProps = { readonly t: TFunction; i18n };

export function ProjectsComponent({ t }: ProjectsComponentProps) {
  return (
    <Wrapper>
      {(t('projects', { returnObjects: true }) as [])
        .reverse()
        .map((projectData, idx) => (
          <Project {...projectData} key={idx} />
        ))}
    </Wrapper>
  );
}

export const Projects = withTranslation(
  PageProjectsNamespaceEnum['page-projects'],
)(ProjectsComponent);
