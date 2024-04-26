import styled from 'styled-components'

const HeaderSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 100%;
  /* justify-content: center; */
  
`
const HeaderContainer = styled.div`
  /* background-color: red; */
`
const Title = styled.p`
  font-size: 60px;
  margin: 30px;
  text-align: center;
  align-content: center;
  justify-content: center;
`

const HeaderBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: 150px;
  height: 80px;
  border: 1px solid;
  border-radius: 25% 10%;;
  margin: 20px;
  /* align-items: center; */
  justify-content: center;
  align-content: center;
  text-align: center;

  &:hover {
    color: crimson;
  }
`;

//리액트 라우트 돔으로 아래 페이지들 라우팅하기.

function Header() {
  return (
    //타이틀별 페이지 이동 필요
    <HeaderSection>
      <empty/>
      <HeaderContainer>
        <Title>Minuk's Life</Title>
        <HeaderBox>
          <TitleBox>Content</TitleBox>
          <TitleBox>Sports</TitleBox>
          <TitleBox>Health</TitleBox>
          <TitleBox>Diary</TitleBox>
        </HeaderBox>
      </HeaderContainer>
      <empty/>
    </HeaderSection>

  );
}

export default Header;
