import styled from 'styled-components'

export const ProjectWrapper = styled.div`
    width: 70%;
    position: relative;
    background-color: #e3e3e3;
    margin-bottom: 150px;
    margin-left: auto;
    margin-right: auto;

    &:before {
        content: '';
        display: block;
        padding-top: calc(100% / 16 * 9);
        width: 100%;
    }

    .player {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }

    .ytp-title,
    .ytp-chrome-top-buttons {
        display: none !important;
    }
`
