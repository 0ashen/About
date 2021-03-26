import React from 'react';
import { Navigation } from './childrens/Navigation/Navigation';
// noinspection ES6PreferShortImport
import { withTranslation } from '../../i18-next';
import { LanguageSwitcher } from './childrens/LanguageSwitcher/LanguageSwitcher';
import { ScHeader } from './Header.styles';
import { ThemeSwitcher } from './childrens/ThemeSwitcher/ThemeSwitcher';

function HeaderComponent({ i18n }) {
    return (
        <ScHeader>
            <Navigation />
            <LanguageSwitcher i18n={i18n} />
            <ThemeSwitcher />
        </ScHeader>
    );
}

export const Header = withTranslation('common')(HeaderComponent);
