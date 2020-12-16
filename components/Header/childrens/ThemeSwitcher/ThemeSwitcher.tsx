import React from "react";
import {Circle, Toggler} from "./ThemeSwitcher.styles";
import {IconMoon} from "../../../../public/static/icons/moon.icon";
import {IconSun} from "../../../../public/static/icons/sun.icon";
import {useCookies} from "react-cookie";

export const colorModeSwitched = 'colorModeSwitched';

export function ThemeSwitcher() {

    const [, setCookie, removeCookie] = useCookies([colorModeSwitched]);

    const htmlDocument = process.browser && document.querySelector('html');

    const setTheme = () => {
        htmlDocument.dataset[colorModeSwitched] = 'true'
        setCookie(colorModeSwitched, true, {path: '/'})
    }
    const deleteTheme = () => {
        delete htmlDocument.dataset[colorModeSwitched]
        removeCookie(colorModeSwitched, {path: '/'})
    }

    const handleSwitchTheme = () => {
        if (htmlDocument.dataset[colorModeSwitched] === 'true') {
            deleteTheme()
        } else {
            setTheme()
        }
    }

    return (
        <Toggler
            onClick={handleSwitchTheme}
            className="focusable">
            <div className="focusable-inner"
                 title="switch theme, default sourced from system"
                 tabIndex={-1}>
                <Circle>
                    <IconMoon className={'moon'}/>
                    <IconSun className={'sun'}/>
                </Circle>
            </div>
        </Toggler>
    )
}
