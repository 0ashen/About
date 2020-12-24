import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 50px;
`

export const Cover = styled.div`
    perspective: 1000px;
    position: relative;
    width: 250px;
    box-sizing: border-box;

    .inner {
        position: relative;
        z-index: 3;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;

        img {
            max-width: none !important;
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    &:after,
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        z-index: 2;
    }

    &:after,
    &:before,
    .inner {
        box-sizing: border-box;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-left: 5px solid #ffffff;
        transform: rotatey(-15deg);
        transition: all 0.5s;
    }

    &:before {
        width: 100%;
        padding-top: 146.4%;
        background: #09132c;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        box-shadow: 15px 2px 20px -3px rgba(20, 0, 70, 0.3),
            -20px 3px 4px 5px rgba(20, 0, 70, 0.1);
        border: 1px solid transparent;
        z-index: 1;
        transform: rotatey(-15deg) translateZ(-30px) translatex(12px);
    }

    &:after {
        width: 100%;
        padding-top: 146.4%;
        background: linear-gradient(
            to right,
            #fff 0,
            #fff 95%,
            #ccc 95.5%,
            #fff 96%,
            #ccc 96.5%,
            #fff 97%,
            #ccc 97.5%,
            #fff 98%,
            #ccc 98.5%,
            #fff 99%,
            #ccc 99.5%,
            #fff 100%
        );
        border-top: solid 1px #aaa;
        border-right: solid 1px #aaa;
        border-bottom: solid 1px #aaa;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transform: rotatey(-15deg) translateZ(-20px) translatex(9px);
    }

    &:hover:after,
    &:hover:before,
    &:hover .inner {
        transform: rotatey(-10deg);
    }

    &:hover:before {
        box-shadow: 10px 2px 20px -3px rgba(20, 0, 70, 0.3),
            -20px 3px 4px 5px rgba(20, 0, 70, 0.1);
        transform: rotatey(-10deg) translateZ(-30px) translatex(12px);
    }

    &:hover:after {
        transform: rotatey(-10deg) translateZ(-20px) translatex(9px);
    }
`

export const Description = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    width: calc(100% + 4px);
    height: 100%;
    margin-left: -2px;
    padding: 10px 15px;
    font-size: 18px;
    line-height: 1.3;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${Cover}:hover & {
        opacity: 1;
    }

    & > * {
        margin-bottom: 20px;
    }

    .name {
    }

    .author {
    }

    .year {
    }
`
