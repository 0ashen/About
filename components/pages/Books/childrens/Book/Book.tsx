import React from 'react';
import { BookProps } from './Book.interface';
import { WrapperBook } from './Book.styled';

export const Book: React.FC<BookProps> = ({ name, author, year }) => (
    <WrapperBook>
        <span className="name">{name} </span>
        <span className="author">{author} </span>
        <span className="year">{year}</span>
    </WrapperBook>
);
