import styled from 'styled-components'

export const SkillsWrapper = styled.div`
  display: block;
  width: 500px;
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
  background-color: #e2e2e2;
  padding: 3px 15px;

  & ~ & {
    background-color: #f6f6f6;
    padding: 3px 35px;
  }

  & + ${ListSkillsWrapper} {
    padding-left: 50px;
  }
`



export const Chip = styled.li`
  display: inline-block;
`
