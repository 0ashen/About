import { CopyRights, MainWrapper } from './Layout.styles'
import { Header } from '../Header/Header'

export function Layout(props): JSX.Element {
    return (
        <MainWrapper>
            <Header />
            {props.children}
            <CopyRights>© 2016 – ...</CopyRights>
        </MainWrapper>
    )
}
