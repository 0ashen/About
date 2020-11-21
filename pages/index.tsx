import React from 'react'
import { navigationList } from '../components/Navigation/Navigation'

export default function PageHome(): JSX.Element {
    return <a href={navigationList[0].href}>redirect 301 link</a>
}
