import React from 'react'
import { routes } from '../components/Header/childrens/Navigation/routes'
import { Link } from '../i18n'

export default function PageHome(): JSX.Element {
    return <Link href={routes[0].href}>redirect 301 link</Link>
}
