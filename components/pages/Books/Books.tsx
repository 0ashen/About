import {Wrapper} from './Books.styles'
import {Book} from './childrens/Book/Book'
import {IBook} from './childrens/Book/Book.interface'
// noinspection ES6PreferShortImport
import {withTranslation} from '../../../i18-next'
import {TFunction} from 'next-i18next'
import {PageBooksNamespaceEnum} from './books-translate-name-space.enum'

type BooksComponentProps = { readonly t: TFunction; i18n }

export function BooksComponent({t, i18n}: BooksComponentProps) {
    return (
        <Wrapper>
            {(t('books', {returnObjects: true}) as IBook[]).map(
                (book: IBook) => (
                    <Book
                        {...book}
                        key={book.author + book.name + book.year}
                        language={i18n.language}
                    />
                )
            )}
        </Wrapper>
    )
}

export const Books = withTranslation(PageBooksNamespaceEnum['page-books'])(
    BooksComponent
)
