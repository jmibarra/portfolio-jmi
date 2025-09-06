import React from 'react';
import Slider from 'react-slick';

import {
    ProjectCard,
    ProjectImage,
    ProjectCardContent,
    ProjectTitle,
    ProjectDescription,
    ProjectTagList,
    ProjectTag
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
        slidesToShow: 1, // <-- Cambio principal aquí
        slidesToScroll: 1,
        autoplay: true, // Opcional: para que el carrusel se mueva solo
        autoplaySpeed: 3000, // Opcional: cambia de slide cada 3 segundos
    };

    return (
        <Section nopadding id="projects">
            <SectionDivider />
            <SectionTitle main> Proyectos </SectionTitle>
            <div style={{ padding: '0 20px' }}>
                <Slider {...settings}>
                    {projects.map(({ id, image, title, description, tags, visit }) => (
                        <div key={id} style={{ padding: '0 15px' }}>
                            <ProjectCard>
                                <ProjectImage src={image} />
                                <ProjectCardContent>
                                    <ProjectTitle>{title}</ProjectTitle>
                                    <ProjectDescription>{description}</ProjectDescription>
                                </ProjectCardContent>
                                <ProjectTagList>
                                    {tags.map((tag, i) => (
                                        <ProjectTag key={i}>{tag}</ProjectTag>
                                    ))}
                                </ProjectTagList>
                                <div style={{ padding: '20px', textAlign: 'right' }}>
                                    <Button icon={<AiFillGithub />} shape="circle" href={visit} target='_blank' />
                                </div>
                            </ProjectCard>
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
}

export default Projects;