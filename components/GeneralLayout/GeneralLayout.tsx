import { SC_copyRights, SC_mainWrapper, SC_wrapper } from './GeneralLayout.styles'
import { Header } from '../Header/Header'

export function GeneralLayout(props): JSX.Element {
    return (
        <SC_wrapper>
            <Header />
            <SC_mainWrapper>
                {props.children}
            </SC_mainWrapper>
            <SC_copyRights>© 2016 – ...</SC_copyRights>
        </SC_wrapper>
    )
}
