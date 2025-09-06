import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
allign-items: center;
`

export const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const ArticleItem = styled.a`
  display: block;
  padding: 2rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background 0.3s, transform 0.3s;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

export const ArticleTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`;

export const ArticleDate = styled.p`
  font-size: 1.4rem;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

export const ArticleTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ArticleTag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.3rem;
`;

export const ViewMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem; // Espacio por encima del botón
`;