import {IconGoogleTranslate} from "../../../../public/static/icons/google-translate.icon";
import React from "react";
import {SC_SwitchLanguage} from "./LanguageSwitcher.styles";


export function LanguageSwitcher({i18n}) {
    return (
        <button className="focusable"
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
        >
            <SC_SwitchLanguage
                tabIndex={-1}
                className="focusable-inner"
                title={'switch language to ' + (i18n.language === 'en' ? 'russian' : 'english') + ', default sourced from system '}
            >
                <IconGoogleTranslate/>
                <span>{i18n.options.allLanguages.filter(el => el !== (i18n.language || i18n.options.defaultLanguage))}</span>
            </SC_SwitchLanguage>
        </button>
    )
}
