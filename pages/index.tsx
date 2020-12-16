import React from 'react'
import {Link} from '../i18-next'
import {routes} from "../components/Header/childrens/Navigation/Navigation";

export default function PageHome(): JSX.Element {
    return <Link href={routes[0].href}>redirect 301 link</Link>
}
