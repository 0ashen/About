import styled from 'styled-components'
import {COLORS} from '../../../../../styles/themes'

export const SkillsWrapper = styled.div`
  display: block;
  flex-shrink: 0;
  width: calc(50% - 250px / 2);
`

export const SkillsGroup = styled.div`
  display: block;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`
export const ListSkillsWrapper = styled.ul`
  display: block;
  padding: 3px 25px;
  line-height: 1.7;
`

export const GroupTitle = styled.div`
  padding: 3px 15px;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--${COLORS.general});
    opacity: 0.1;
  }

  & ~ & {
    padding: 3px 35px;
    text-decoration: underline;

    &:before {
      opacity: 0.05;
    }
  }

  & + ${ListSkillsWrapper} {
    padding-left: 50px;
  }
`


export const Chip = styled.li`
  display: inline-block;
`
