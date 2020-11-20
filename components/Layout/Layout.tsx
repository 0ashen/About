import { Navigation } from '../Navigation/Navigation'
import { CopyRights, MainWrapper } from './Layout.styles'

export function Layout(props): JSX.Element {
    return (
        <MainWrapper>
            <Navigation />
            {props.children}
            <CopyRights>© 2016 – ...</CopyRights>
        </MainWrapper>
    )
}