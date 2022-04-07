import styled from 'styled-components';
import { FONT_FAMILY } from '../../styles/common';

export const Wrapper = styled.div`
  width: 100%;
  max-width: calc(100vw - 40px);
  margin-left: 20px;
  min-width: 1200px;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

export const SC_mainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  padding-right: 150px;
  flex-grow: 1;
`;

export const SC_copyRights = styled.footer`
  display: block;
  text-align: center;
  padding-top: 50px;
  margin-top: auto;
  padding-bottom: 25px;
  font-family: ${FONT_FAMILY.PTSansNarrow};
`;
