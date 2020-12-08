import React from "react";
import {SC_SwitchTheme} from "./ThemeSwitcher.styles";


const switchTheme = (Event: React.ChangeEvent<HTMLSelectElement>) => {
    const bodyClassList = document.querySelector('html');
    const value = Event.target.value;
    if (value === 'system') {
        bodyClassList.classList.remove('theme-dark')
        bodyClassList.classList.remove('theme-light')
    } else {
        bodyClassList.classList.add(`theme-${value}`)
        bodyClassList.classList.remove(`theme-${value === 'light' ? 'dark' : 'light'}`)
    }
}

export function ThemeSwitcher() {
    return (
        <SC_SwitchTheme onChange={switchTheme}>
            <option value="system">system</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
        </SC_SwitchTheme>
    )
}
