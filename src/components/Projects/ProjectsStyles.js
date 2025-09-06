import styled from 'styled-components';

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectCardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
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