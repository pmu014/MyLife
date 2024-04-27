import styled from 'styled-components'


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
  return (
    <ContentSection>
        <empty/>
        <ContentBoxContainer>
            <ContentBox>Movie</ContentBox>
            <ContentBox>Drama</ContentBox>
            <ContentBox>Animation</ContentBox>
            <ContentBox>Others</ContentBox>
        </ContentBoxContainer>
        <empty/>
    </ContentSection>
  )
}

export default Content