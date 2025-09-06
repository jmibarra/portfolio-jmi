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
    SliderContainer
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Button } from 'antd';
import { AiFillGithub } from 'react-icons/ai';

// Importa los estilos de slick-carousel
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

    return (
        <Section nopadding id="projects">
            <SectionDivider />
            <SectionTitle main> Proyectos </SectionTitle>
            {/* Usamos nuestro nuevo contenedor para el slider */}
            <SliderContainer>
                <Slider {...settings}>
                    {projects.map(({ id, image, title, description, tags, visit }) => (
                        <div key={id}>
                            <ProjectCard>
                                <ProjectImageWrapper>
                                    <ProjectImage src={image} />
                                </ProjectImageWrapper>

                                <ProjectContentWrapper>
                                    {/* Contenedor para la parte superior (título y descripción) */}
                                    <div>
                                        <ProjectTitle>{title}</ProjectTitle>
                                        <ProjectDescription>{description}</ProjectDescription>
                                    </div>

                                    {/* Contenedor para la parte inferior (tags y botón) */}
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