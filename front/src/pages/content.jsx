import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100%;
  /* justify-content: center; */
  
`
const ContentBox = styled.div`
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

const ContentBoxContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
function Content() {
  const navigate = useNavigate();
  return (
    <ContentSection>
        <empty/>
        <ContentBoxContainer>
            <ContentBox onClick={()=> {
            navigate("/content/movie")
            }}>Movie</ContentBox>
            <ContentBox onClick={()=> {
            navigate("/content/drama")
            }}>Drama</ContentBox>
            <ContentBox onClick={()=> {
            navigate("/content/anime")
            }}>Animation</ContentBox>
            <ContentBox onClick={()=> {
            navigate("/content/others")
            }}>Others</ContentBox>
        </ContentBoxContainer>
        <empty/>
    </ContentSection>
  )
}

export default Content