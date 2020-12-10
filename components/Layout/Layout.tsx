import {CopyRights, MainWrapper} from './Layout.styles'
import {Header} from '../Header/Header'

export function Layout(props): JSX.Element {
    return (
        <>
            <Header/>
            <MainWrapper>
                {props.children}
            </MainWrapper>
            <CopyRights>© 2016 – ...</CopyRights>
        </>
    )
}
