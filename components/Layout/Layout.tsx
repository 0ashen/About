import { Navigation } from '../Navigation/Navigation'
import { MainWrapper } from './Layout.styles'

export function Layout(props): JSX.Element {
    return (
        <MainWrapper>
            <Navigation />
            {props.children}
        </MainWrapper>
    )
}