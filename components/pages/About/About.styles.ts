import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;
export const WelcomeText = styled.div`
  font-size: 20px;
  line-height: 1.6;
  width: calc(50% - 50px / 2);
  flex-shrink: 0;

  p {
    margin-bottom: 35px;
  }

  .telegram {
    display: flex;
    align-items: center;
    float: left;
    padding-right: 10px;
  }

  .telegram-icon {
    width: 40px;
  }
`;
