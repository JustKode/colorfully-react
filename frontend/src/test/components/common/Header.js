import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CRgroupState from '../../../recoil';

const Responsive = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  margin-top: -320px;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: black;
    display: flex;
    align-items: left;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #878787;
  }
  &.active {
    font-weight: 600;
    color: #2f9780;
    &:hover {
      color: #3cbea1;
    }
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const StyledButton = styled.div`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #2f9780;
`;

function Header() {
  const [group] = useRecoilState(CRgroupState);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/test/main" className="logo">
            TEST PAGE
          </Link>
          <Category to="/ranking">RANKING</Category>
          <Category to="/pollution">POLLUTION</Category>
          <Category to="/community">COMMUNITY</Category>
          <Category to="/write">WRITE</Category>
          <div className="right">
            <StyledButton to="/login" style={{ ...group.pointGroup }}>
              LOGOUT
            </StyledButton>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
