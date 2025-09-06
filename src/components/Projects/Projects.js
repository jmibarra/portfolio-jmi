// src/components/Projects/Projects.js

import React from 'react';
import Slider from 'react-slick';

import {
    ProjectCard,
    ProjectImageWrapper,
    ProjectImage,
    ProjectContentWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectTagList,
    ProjectTag,
    SliderContainer,
    IntroSection,
    IntroImage,
    IntroText
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Button } from 'antd';
import { AiFillGithub } from 'react-icons/ai';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const introData = projects[0];
    const carouselProjects = projects.slice(1);

    return (
        <Section nopadding id="projects">
            <SectionDivider />
            <SectionTitle main> Proyectos </SectionTitle>
            <IntroSection>
                <IntroImage src={introData.image} />
                <IntroText>{introData.description}</IntroText>
                <Button 
                    type="primary" 
                    shape="round" 
                    icon={<AiFillGithub />} 
                    size="large" 
                    href={introData.visit} 
                    target="_blank">
                    Mi GitHub
                </Button>
            </IntroSection>
            {/* Usamos nuestro nuevo contenedor para el slider */}
            <SliderContainer>
                <Slider {...settings}>
                    {carouselProjects.map(({ id, image, title, description, tags, visit }) => (
                        <div key={id}>
                            <ProjectCard>
                                <ProjectImageWrapper>
                                    <ProjectImage src={image} />
                                </ProjectImageWrapper>
                                <ProjectContentWrapper>
                                    <div>
                                        <ProjectTitle>{title}</ProjectTitle>
                                        <ProjectDescription>{description}</ProjectDescription>
                                    </div>
                                    <div>
                                        <ProjectTagList>
                                            {tags.map((tag, i) => (
                                                <ProjectTag key={i}>{tag}</ProjectTag>
                                            ))}
                                        </ProjectTagList>
                                        <div style={{ marginTop: '25px', textAlign: 'right' }}>
                                            <Button icon={<AiFillGithub />} shape="circle" href={visit} target='_blank' />
                                        </div>
                                    </div>
                                </ProjectContentWrapper>
                            </ProjectCard>
                        </div>
                    ))}
                </Slider>
            </SliderContainer>
        </Section>
    );
}

export default Projects;