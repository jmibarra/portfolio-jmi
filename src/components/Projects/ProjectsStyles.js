import styled from 'styled-components';

export const SliderContainer = styled.div`
  padding: 0 60px; 
  position: relative;
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  max-width: 950px; 
  margin: 0 auto;
  height: 450px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    height: auto;
  }
`;

export const ProjectImageWrapper = styled.div`
  flex: 1.2;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProjectCardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

export const ProjectTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 20px 20px;
`;

export const ProjectTag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export const ProjectContentWrapper = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;