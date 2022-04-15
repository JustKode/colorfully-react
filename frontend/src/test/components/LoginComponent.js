import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(199, 222, 230);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
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

const StyledInput = styled.input`
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

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.div`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1rem;
  margin-top: 1.5rem;
  line-height: 2.5rem;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  background-color: rgb(56, 124, 146);
`;

const RegisterButton = styled(Button)`
  margin-top: 0.5rem;
  background-color: rgb(120, 179, 199);
`;

function LoginComponent() {
  return (
    <LoginBlock>
      <FormBox>
        <div className="login-title">테스트 화면</div>
        <form>
          <StyledInput name="email" placeholder="이메일을 입력하세요" />
          <StyledInput name="password" placeholder="비밀번호를 입력하세요" />
        </form>
        <CustomLink to="/test/main">
          <LoginButton>로그인</LoginButton>
        </CustomLink>
        <RegisterButton>회원가입</RegisterButton>
      </FormBox>
    </LoginBlock>
  );
}

export default LoginComponent;
