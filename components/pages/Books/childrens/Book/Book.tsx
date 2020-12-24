import React from 'react'
import { IBook } from './Book.interface'
import { Cover, Description, Wrapper } from './Book.styled'

export function Book({ name, author, year, img_src, language }: IBook) {
    return (
        <Wrapper>
            <Cover>
                <div className="inner">
                    <img
                        src={`static/images/page-books/${
                            img_src + language
                        }.jpg`}
                        alt={author + ': ' + name}
                        width={250}
                        height={375}
                    />
                    <Description>
                        <p className="name">{name}</p>
                        <p className="author">{author}</p>
                        <p className="year">{year}</p>
                    </Description>
                </div>
            </Cover>
        </Wrapper>
    )
}
