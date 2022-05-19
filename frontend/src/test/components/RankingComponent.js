import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import CRgroupState from '../../recoil';

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

const ResponsiveCustom = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
  margin-top: -320px;
`;

const SectionBlock = styled.div`
  padding: 2rem;
  margin-top: 4rem;
  width: 45%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const TitleBlock = styled.div`
  width: 100%;
  word-spacing: -5px;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 600;
  color: #000000;
`;

const FirstSchoolBlock = styled.div`
  width: 90%;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(0, 108, 84, 0.7);
  font-size: 1.5rem;
  font-weight: 600;
  .school-name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const SecondSchoolBlock = styled.div`
  width: 90%;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(0, 186, 145, 0.7);
  font-size: 1.2rem;
  font-weight: 600;
  .school-name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const ThirdSchoolBlock = styled.div`
  width: 90%;
  padding: 1.5rem;
  border-radius: 80px 80px;
  background: rgba(0, 186, 145, 0.4);
  font-size: 1rem;
  font-weight: 600;
  .school-name {
    display: inline-block;
  }
  .score {
    float: right;
  }
`;

const RecommendBlock = styled.div`
  width: 100%;
  padding: 3rem 2.5rem;
  border-radius: 50px 50px;
  background: #fffeec;
  font-size: 1.1rem;
  font-weight: 500;
`;

function RankingComponent() {
  const [group] = useRecoilState(CRgroupState);

  return (
    <ResponsiveCustom>
      <SectionBlock>
        <TitleBlock>학교 랭킹 TOP 3</TitleBlock>
        <FirstSchoolBlock style={{ ...group.mainBackGroup }}>
          <div className="school-name">경희대학교</div>
          <div className="score">89점</div>
        </FirstSchoolBlock>
        <SecondSchoolBlock style={{ ...group.mainGroup }}>
          <div className="school-name">경희고등학교</div>
          <div className="score">80점</div>
        </SecondSchoolBlock>
        <ThirdSchoolBlock style={{ ...group.subGroup }}>
          <div className="school-name">경희중학교</div>
          <div className="score">60점</div>
        </ThirdSchoolBlock>
      </SectionBlock>
      <SectionBlock>
        <TitleBlock>탄소 중점 학교 소개</TitleBlock>
        <RecommendBlock style={{ ...group.pointGroup }}>
          The town of Bakhmut in the Donetsk region, an important hub for the Ukrainian military, is coming under
          increasing attack from Russian missiles and artillery, according to Ukrainian officials. Pavlo Kyrylenko, head
          of Donetsk regional military administration, said Thursday there had been another airstrike on the town, where
          some 20,000 people still live. Kyrylenko said a five-story residential building and an office building had
          been hit and that so far six people have been rescued from the rubble.
        </RecommendBlock>
      </SectionBlock>
    </ResponsiveCustom>
  );
}

export default RankingComponent;
