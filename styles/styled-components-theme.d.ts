import 'styled-components'
import { Theme } from './themes'
import { Dispatch, SetStateAction } from 'react'

declare module 'styled-components' {
    export interface DefaultTheme {
        variables: Theme,
        update: Dispatch<SetStateAction<Theme>>
    }
}
