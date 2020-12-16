import { TFunction } from 'next-i18next'

export type SKillsProps = {
    skills?: {},
    readonly t?: TFunction,
}

export type DataSkillsGroup = [string, string[]] | [string, {}];