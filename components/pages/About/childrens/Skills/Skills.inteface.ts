import {TFunction} from 'next-i18next'

export type SKillsProps = {
    skills?: {},
    readonly t?: TFunction,
}
export type Group = [string, string[]];
export type GroupWithSubGroups = [string, {}];

export type DataSkillsGroup = Group | GroupWithSubGroups;