import React from 'react'
import { DataSkillsGroup, SKillsProps } from './Skills.inteface'
import { SC_group } from './Skills.styles'


export function Skills({ skillsData }: SKillsProps) {

    const data = Object.entries(skillsData) as DataSkillsGroup[]

    return (
        <>
            {data.map(([title, items]: DataSkillsGroup): (JSX.Element | null) => (
                <SC_group key={title}>
                    <mark>{title}</mark>
                    {
                        Array.isArray(items) ?
                            <div>
                                {items.map((el: string) => <span key={el}>{el}, </span>)}
                            </div>
                            : <Skills skillsData={items} />
                    }
                </SC_group>
            ))}
        </>
    )
}