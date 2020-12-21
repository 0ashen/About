import React from 'react'
import { Book, Wrapper } from './Books.styles'
import Image from 'next/image'

export function Books() {
    return (
        <Wrapper>
            <Book>
                <div className='cover'>
                    <a href='#'>
                        <Image
                            src='/static/images/page-books/web-cover-en.png'
                            alt="Picture of the author"
                            width={250}
                            height={375}
                        />
                    </a>
                </div>
            </Book>
        </Wrapper>
    )
}

