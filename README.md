
# 🎈 주제

<strong> 효율적인 UI/UX 설계를 위한 AI 기반 감정분석 테스트 프레임워크 </strong>  
<strong> (Study of AI-Based Emotion Analysis Test Framework to Efficient UI/UX Design) </strong>

---

# 👨‍👨‍👧‍👦 맴버

|구분|성명|학번|소속학과|학년|이메일|
|---|---|:-:|:-:|:-:|:-:|
|학생|김지수|2018102182|컴퓨터공학과|4|entjq9502@khu.ac.kr |
|학생|김태영|2017103978|컴퓨터공학과|4|rlaxodud9809@khu.ac.kr |
|학생|박민재|2017103985|컴퓨터공학과|4|sobu0715@gmail.com |
|학생|최현준|2017104037|컴퓨터공학과|4|kikitank1@khu.ac.kr|

# 🎨 연구배경

최근 PC, 스마트폰, 태블릿, 키오스크, 스마트 워치 등 다양한 디지털 기기들의 대중화가 이루어졌다. 이에 따라 자연스럽게 해당 플랫폼 위에서 사용자들에게 최적의 서비스를 제공하기 위해 UI/UX(User Interface / User Experience) 설계가 이루어진 다양한 디자인의 프로그램들이 만들어지고 사용되고 있다.
<strong>🚨 그러나 UI/UX 설계에 따라 프로그램을 구현했다 하더라도 사용자에게 설계 의도와 일치하는 UX(User Experience)를 제공하는 것은 쉬운 일이 아니다. 사람마다 경험 또는 생각이 다양하기 때문에 동일한 UI을 가지는 프로그램을 사용하더라도 다양한 사용자가 느끼는 UX가 상이할 수 있기 때문이다.</strong> 또한 UI/UX 설계를 하는 과정에서 설계자의 주관적인 요소가 반영되어 보편적으로 느낄 수 있는 UX을 제공하지 못할 수도 있기 때문에 설계 의도와 일치하는 UX을 제공하는 것은 어렵다. 
<strong>✨이러한 배경에 따라 본 논문에서는 UI/UX 설계를 돕기 위해 테스트를 통해 의도하는 UX을 제공하는데 적합한 UI 요소를 도출하는 테스트 프레임워크를 개발하고자 한다.</strong><br><br>

# ⚽ 적용 방법
-  `/backend/group_adjective.json` 에 아래와 같이 테스트할 그룹과 해당 그룹에서 주로 확인하고 싶은 감정이 포함된 범위를 입력해준다.  
-  <p align="center"><img width="707" alt="1" src="https://user-images.githubusercontent.com/32060716/168130329-ffbbd144-5f34-4e91-a3bc-4291fcb10374.png"></p>



- `/frontend/test` 에 자신의 페이지를 routing 하는 router를 testRouter.js로 이름을 변경하여 넣고 나머지도 넣어준다.
  - 이때 router만 아래와 같이 작업하여 주면되고, 나머지 구조는 상관없다.<br/>
<p align="center">
<img width="254" alt="2" src="https://user-images.githubusercontent.com/32060716/168130339-88d7e7df-f6b8-46a4-8e75-2b2b013d20a7.png">
</p>

- 코드 변경사항
  - 공통(설문조사 페이지 추가 및 랜덤 스타일을 위한 코드 추가)
    - `/testRouter.js` 에 아래 사진의 주석과 같이 `<Route>` 컴포넌트를 추가해준다. 
    - <p align="center"><img width="830" alt="3" src="https://user-images.githubusercontent.com/32060716/168130344-5ea9b8bb-d5dc-45de-8cf1-0caaa0d57947.png"></p>

    - 컴포넌트들에 아래와 같이 주석에 명시된 모듈및 코드를 추가하고, 컴포넌트에 그룹을 지정해준다.
      - 그룹은 총 4가지로 mainBackGroup, mainGroup, subGroup, pointGroup이 존재한다.
      - <p align="center"><img width="1094" alt="4" src="https://user-images.githubusercontent.com/32060716/168130356-d3b90deb-2969-4b29-84b5-758d7c6c1091.png"></p>

   - 랜덤으로 색상을 받아오는 코드 추가
     - Group을 1개만 지정하는 경우 
       - 아래와 주석으로 표시한 것과 같이 testRouter를 작성하여 주면 된다.
       - 색상은 recoil로 관리되기 때문에 한번 불러오면 전체에 적용하는 것이 가능하다.
       - <p align="center"><img width="1337" alt="5" src="https://user-images.githubusercontent.com/32060716/168130364-33dc1cca-94eb-4d1d-b2db-792dc811e4d9.png"></p>

     - Group을 여러개 지정하는 경우
       - 아래와 같이 컴포넌트마다 랜덤으로 색상을 받아오는 함수를 호출한다.
         - 이때 로직이 반드시 한방향으로만 진행한다면(뒤로가기 같은 것 없는 경우) 그룹이 변경되는 페이지 부분에만 색상을 받아오는 함수를 호출해주면 된다.

-  아래 명령어로 서버를 띄운다.
  ```terminal
  docker-compose up -d
  ```
 
- http://localhost:3000 에 접속하여 테스트를 진행한다.

<br><br>

# 💎 적용예시


  <p align="center"><img src="https://user-images.githubusercontent.com/32060716/168219649-a20c1b56-5a31-41ca-8cc4-d370839ec808.gif" alt="animated" /></p>


# ✨ 기대효과
프레임워크를  통해 프론트엔드 개발자는 <strong>🎉자신이 원하는 감성을 주는 웹 UI을 보다 적은 비용으로  효율적으로 개발</strong>할 수 있을 것으로 예상된다. 웹 사용자는 더 나은 UI를 제공받음으로써 UX가 향상될 것으로 기대된다.
