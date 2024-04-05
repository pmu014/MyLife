import styled from 'styled-components'
import './App.css';


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
  width: 200px;
  height: 100px;
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


function App() {
  return (
    //타이틀별 페이지 이동 필요
    <HeaderSection>
      <empty></empty>
      <HeaderContainer>
        <Title>Minuk's Life</Title>
        <HeaderBox>
          <TitleBox>Content</TitleBox>
          <TitleBox>Sports</TitleBox>
          <TitleBox>Health</TitleBox>
          <TitleBox>Diary</TitleBox>
        </HeaderBox>
      </HeaderContainer>
      <empty></empty>
    </HeaderSection>

  );
}

export default App;
