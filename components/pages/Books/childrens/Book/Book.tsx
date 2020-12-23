import React from 'react'
import { Wrapper } from '../../Books.styles'
import { IBook } from './Book.interface'
import { Cover, Description } from './Book.styled'

export function Book({ name, author, year, img_src }: IBook) {
    return (
        <Wrapper>
            <Cover>
                <div className="inner">
                    <img
                        src={img_src}
                        alt={author + ': ' + name}
                        width={250}
                        height={375}
                    />
                </div>
            </Cover>
            <Description>
                <p className="name">{name}</p>
                <p className="author">{author}</p>
                <p className="year">{year}</p>
            </Description>
        </Wrapper>
    )
}
