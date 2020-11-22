import { SC_NavigationItem, SC_NavigationPanel } from './Navigation.styles'
import { NavigationItem } from './Navigation.interface'
import { routes } from './routes'
import { Link, withTranslation } from '../../../../i18n'
import { IconExternalLink } from '../../../../public/static/icons/external-link.icon'
import { IconDownloadLink } from '../../../../public/static/icons/download.icon'
import React from 'react'

function NavigationComponent({ t }): JSX.Element {
    console.log()
    return (
        <SC_NavigationPanel>
            <ul>
                {routes.map((item: NavigationItem, idx: number) => {
                    return (
                        <li key={idx}>
                            <Link href={item.href}>
                                <SC_NavigationItem href={item.href}
                                                   target={item.type === 'download-file' ? '_blank' : ''}>
                                    {item.type === 'external-link' && <IconExternalLink />}
                                    {item.type === 'download-file' && <IconDownloadLink />}
                                    <span>{(item.type == null && '/')}{t(item.text)}</span>
                                </SC_NavigationItem>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </SC_NavigationPanel>
    )
}

export const Navigation = withTranslation('navigation')(NavigationComponent)
