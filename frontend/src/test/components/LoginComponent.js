import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import BasicStyled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mainBackGroupState, subBackGroupState, mainGroupState, subGroupState, pointGroupState } from '../../recoil';

const LoginBlock = BasicStyled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(140, 166, 178);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = BasicStyled.div`
  padding: 2.5rem;
  width: 25rem;
  background-color: white;
  border-radius: 2px;

  .login-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

const StyledInput = BasicStyled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #8b8b8b;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  & + & {
    margin-top: 1.5rem;
  }
`;

const StyledTextfield = styled(TextField)`
  background-color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  line-height: 2.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const LoginButton = styled(StyledButton)`
  background-color: rgb(245, 227, 212);
`;

const RegisterButton = styled(StyledButton)`
  background-color: rgb(210, 221, 222);
`;

function LoginComponent() {
  const [mainBackGroup] = useRecoilState(mainBackGroupState);
  const [subBackGroup] = useRecoilState(subBackGroupState);
  const [mainGroup] = useRecoilState(mainGroupState);
  const [subGroup] = useRecoilState(subGroupState);
  const [pointGroup] = useRecoilState(pointGroupState);

  return (
    <LoginBlock style={{ ...mainBackGroup }}>
      <FormBox style={{ ...subBackGroup }}>
        <div className="login-title">테스트 화면</div>
        <form>
          <StyledTextfield fullWidth margin="dense" id="username" label="username" variant="filled" />
          <StyledTextfield fullWidth margin="dense" id="email" label="email" variant="filled" />
        </form>
        <CustomLink to="/test/main">
          <LoginButton style={{ ...mainGroup }}>로그인</LoginButton>
        </CustomLink>
        <RegisterButton style={{ ...mainGroup }}>회원가입</RegisterButton>
      </FormBox>
    </LoginBlock>
  );
}

export default LoginComponent;
