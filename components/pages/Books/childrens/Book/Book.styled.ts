import styled from 'styled-components';
import { COLORS } from '../../../../../styles/themes';

export const WrapperBook = styled.p`
    font-size: 20px;
    line-height: 1.3;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    padding: 7px 10px;

    &:nth-child(even):before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--${COLORS.general});
        opacity: 0.08;
    }

    .name {
    }

    .author {
        font-size: 14px;
    }

    .year {
        font-size: 14px;
    }
`;
