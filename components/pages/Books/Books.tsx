import { Wrapper } from './Books.styles'
import { Book } from './childrens/Book/Book'
import { IBook } from './childrens/Book/Book.interface'
import { withTranslation } from '../../../i18-next'
import { TFunction } from 'next-i18next'
import { PageBooksNamespaceEnum } from './books-translate-name-space.enum'

export function BooksComponent({ t, i18n }: { readonly t: TFunction, i18n }) {
    return (
        <Wrapper>
            {(t('books', { returnObjects: true }) as IBook[]).map(
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
