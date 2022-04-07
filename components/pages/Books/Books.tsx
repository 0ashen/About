import { Wrapper } from './Books.styles';
import { Book } from './childrens/Book/Book';
import { BookProps } from './childrens/Book/Book.interface';
// noinspection ES6PreferShortImport
import { withTranslation } from '../../../i18-next';
import { TFunction } from 'next-i18next';
import { PageBooksNamespaceEnum } from './books-translate-name-space.enum';

type BooksComponentProps = { readonly t: TFunction; i18n };

export function BooksComponent({ t, i18n: _i18n }: BooksComponentProps) {
  return (
    <Wrapper>
      {(t('books', { returnObjects: true }) as BookProps[]).map(
        (book: BookProps) => (
          <Book {...book} key={book.author + book.name + book.year} />
        ),
      )}
    </Wrapper>
  );
}

export const Books = withTranslation(PageBooksNamespaceEnum['page-books'])(
  BooksComponent,
);
