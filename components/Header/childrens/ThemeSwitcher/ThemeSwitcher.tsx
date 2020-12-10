import React from "react";
import {SC_Circle, SC_Toggler} from "./ThemeSwitcher.styles";
import {IconMoon} from "../../../../public/static/icons/moon.icon";
import {IconSun} from "../../../../public/static/icons/sun.icon";
import {useCookies} from "react-cookie";

export const colorModeSwitched = 'colorModeSwitched';

export function ThemeSwitcher() {

    const [cookies, setCookie, removeCookie] = useCookies([colorModeSwitched]);

    const htmlDocument = process.browser && document.querySelector('html');

    const setTheme = () => {
        htmlDocument.dataset[colorModeSwitched] = 'true'
        setCookie(colorModeSwitched, true)
    }
    const deleteTheme = () => {
        delete htmlDocument.dataset[colorModeSwitched]
        removeCookie(colorModeSwitched)
    }

    if (cookies[colorModeSwitched]) {
        setTheme()
    }

    const handleSwitchTheme = () => {
        if (htmlDocument.dataset[colorModeSwitched] === 'true') {
            deleteTheme()
        } else {
            setTheme()
        }
    }

    return (
        <SC_Toggler
            onClick={handleSwitchTheme}
            className="focusable">
            <div className="focusable-inner"
                 title="switch theme, default sourced from system"
                 tabIndex={-1}>
                <SC_Circle>
                    <IconMoon className={'moon'}/>
                    <IconSun className={'sun'}/>
                </SC_Circle>
            </div>
        </SC_Toggler>
    )
}
