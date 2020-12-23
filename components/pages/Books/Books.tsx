import React from 'react'
import { Wrapper } from './Books.styles'
import { Book } from './childrens/Book/Book'
import { IBook } from './childrens/Book/Book.interface'
import { withTranslation } from '../../../i18-next'
import { PageAboutMeNamespaceEnum } from '../About/about-translate-name-space.enum'
import { TFunction } from 'next-i18next'
import data from '../../../public/static/locales/en/page-books.json'

const DataBooks: IBook[] = [
    {
        name: '',
        year: 123,
        img_src: '',
        author: '',
    },
]

export function BooksComponent({ t }: { readonly t: TFunction }) {
    const keys = Object.keys(data) as Array<keyof typeof data>;
    // console.log(keys[])
    return (
        <Wrapper>
            {DataBooks.map((book: IBook) => (
                <Book {...book} />
            ))}
        </Wrapper>
    )
}

export const Books = withTranslation(PageAboutMeNamespaceEnum['page-books'])(
    BooksComponent
)
