import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Header = styled.div`
  padding: 2rem;
  width: 100%;
  height: 5rem;
  background-color: rgb(252, 68, 69);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .header-menu {
    color: white;
    margin-right: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const ColorBlock = styled.div`
  width: 25%;
`;

const ColorBox = styled.div`
  width: 100%;
  height: 10rem;
`;

const FirstColor = styled(ColorBox)`
  background-color: rgb(63, 238, 230);
`;

const SecondColor = styled(ColorBox)`
  background-color: rgb(85, 188, 201);
`;

const ThirdColor = styled(ColorBox)`
  background-color: rgb(151, 202, 239);
`;

const FourthColor = styled(ColorBox)`
  background-color: rgb(202, 250, 254);
`;

const FormBox = styled.div`
  width: 65%;
  padding: 3rem;

  .title {
    font-size: 3rem;
    font-weight: bold;
  }

  .content {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

function MainComponent() {
  return (
    <MainBlock>
      <Header>
        <span className="header-menu">ABOUT</span>
        <span className="header-menu">TEST</span>
        <span className="header-menu">INFO</span>
      </Header>
      <ColorBlock>
        <FirstColor />
        <SecondColor />
        <ThirdColor />
        <FourthColor />
      </ColorBlock>
      <FormBox>
        <div className="title">안녕하세요?</div>
        <div className="content">점점 만들기 귀찮아지는... 너무 대충 만들었니 미안하다</div>
        <div className="content">색상 많이 적용해보라고 여러 개 넣어봤어</div>
      </FormBox>
    </MainBlock>
  );
}

export default MainComponent;