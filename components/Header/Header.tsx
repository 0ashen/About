import React from "react";
import {Navigation} from './childrens/Navigation/Navigation'
import {withTranslation} from '../../i18n'
import {LanguageSwitcher} from "./childrens/LanguageSwitcher/LanguageSwitcher";
import {SC_Header} from "./Header.styels";
import {ThemeSwitcher} from "./childrens/ThemeSwitcher/ThemeSwitcher";


function HeaderComponent({i18n}) {
    return (
        <SC_Header>
            <Navigation/>
            <LanguageSwitcher i18n={i18n}/>
            <ThemeSwitcher/>
        </SC_Header>
    )
}

export const Header = withTranslation('common')(HeaderComponent)
