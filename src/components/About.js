import React, { Component } from 'react';
import styled from 'styled-components';

import { black, white2, white } from '../utils/colors';
import media from '../utils/media';
import Bar from './Bar';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  background-color: ${black};
  color: white;
  flex-direction: column;
`;

const TitleWrapper = styled.div``;

const BoxWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  font-size: 40px;
  justify-content: center;

  ${media.mobile`
    font-size: 25px;
  `};
`;

const Title = styled.p`
  font-weight: bold;
  font-size: ${p => p.size};
  ${media.mobile`
  font-size: 35px;
`};
`;

const SubTitle = styled.p`
  font-size: 50px;
  ${media.mobile`
    font-size: 30px;
  `};
`;

const Content = styled.div`
  font-size: 32px;
  text-align: left;
  margin-left: 15%;
  ${media.tablet`
  font-size: 20px;
`};
  ${media.mobile`
  font-size: 15px;
`};
`;

const Article = styled.div`
  width: 25vw;
  margin: 0 auto;
  ${media.mobile`
    width: 45vw;
  `};
`;

// const Career = styled.div`
//   width: 25vw;
// `;

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title size="60px">This Is Who I Am</Title>
        </TitleWrapper>
        <BoxWrapper>
          <Article>
            <SubTitle>
              <b>June's Log</b>
            </SubTitle>
            <Content>
              2012.03 -ing <br /> 국민대학교 경영정보학부 정보시스템전공 <br />
            </Content>
            <Content>
              <br />2017.12 ~ 2018.06<br /> 페오펫 개발자 인턴
            </Content>
          </Article>
          <Bar vertical borderColor="white" />
          <Article>
            <SubTitle>
              <b>Skills</b>
            </SubTitle>
            <Content>
              Java<br />
              <br />
              Javascript<br /> - React<br /> - Express<br /> - Next<br /> - Node<br /> -
              styled-components<br />
              <br />
              DB<br /> - MongoDB<br /> - Oracle
            </Content>
          </Article>
        </BoxWrapper>
      </Wrapper>
    );
  }
}

// import { JavaImg, ExpressImg, MongoDBImg, ReactImg, OracleDBImg, NodeJSImg } from '../images/Icons';
// import JavaImg from '../images/java.png';
// import ExpressImg from '../images/express.png';
// import MongoDBImg from '../images/mongodb.png';
// import ReactImg from '../images/react.png';
// import OracleDBImg from '../images/oracledb.png';
// import NodeJSImg from '../images/nodejs.png';

// const Wrapper = styled.div`
//   height: 800px;
//   display: flex;
// `;

// const SideBarWrapper = styled.div`
//   border: 0.5px solid;
// `;

// const LogoBoxWrapper = styled.div`
//   text-align: center;
//   display: flex;
// `;

// const LogoBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: solid 1px;
//   width: 20rem;
//   height: 20rem;
//   text-align: center;
// `;

// const LogoTitle = styled.p`
//   font-weight: bold;
// `;

// const Logo = styled.img`
//   width: 60%;
//   margin: auto;
// `;

// const SideBarList = ['학력', '경력', 'Stack'];

// const StackList = [
//   { name: 'NodeJS', img: `${NodeJSImg}`, level: '7' },
//   { name: 'Java', img: `${JavaImg}`, level: '7' },
//   { name: 'ExpressJS', img: `${ExpressImg}`, level: '7' },
//   { name: 'MongoDB', img: `${MongoDBImg}`, level: '7' },
//   { name: 'ReactJS', img: `${ReactImg}`, level: '7' },
//   { name: 'OracleDB', img: `${OracleDBImg}`, level: '7' },
// ];

// export default class About extends Component {
//   state = {
//     selected: 0,
//   };

//   handleClick = id => {
//     this.setState({
//       selected: id,
//     });
//   };
//   render() {
//     const { selected } = this.state;
//     const SideWrapper = styled.div`
//       background-color: ${p => p.index === selected && '#333333'};
//       color: ${p => p.index === selected && 'white'};
//       cursor: pointer;
//       width: 100px;
//     `;

//     const Content = styled.div`
//       text-align: center;
//       display: ${p => (p.index === selected ? 'flex' : 'none')};
//       background-color: gray;
//       width: 100%;
//     `;
//     const Stack = StackList.map((stack, i) => (
//       <LogoBox key={i}>
//         <LogoTitle>{stack.name}</LogoTitle>
//         <Logo src={stack.img} alt={`${stack.name}img`} />
//         <p>{stack.level}</p>
//       </LogoBox>
//     ));
//     const SideBar = SideBarList.map((side, i) => (
//       <SideWrapper index={i} key={i} onClick={() => this.handleClick(i)}>
//         {side}
//       </SideWrapper>
//     ));
//     return (
//       <Wrapper>
//         <SideBarWrapper>{SideBar}</SideBarWrapper>
//         <Content index={0}>학력</Content>
//         <Content index={1}>경력</Content>
//         <Content index={2}>{Stack}</Content>
//       </Wrapper>
//     );
//   }
// }
