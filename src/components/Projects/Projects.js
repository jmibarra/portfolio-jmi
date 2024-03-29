import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main> Proyectos </SectionTitle>
        <GridContainer>
            {projects.map(({ id, image, title, description, tags, visit }) => (
                <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent>
                        <HeaderThree title>{title}</HeaderThree>
                        <Hr />
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>
                    {tags.length != 0 && <div>
                        <TitleContent> Stack </TitleContent>
                        <TagList>
                            {tags.filter((tag, index) => index < 3).map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>}
                    <UtilityList>
                        <ExternalLinks href={visit} target="_blank"> Visitar </ExternalLinks>
                    </UtilityList>
                </BlogCard>
            ))}
        </GridContainer>
    </Section>
);

export default Projects;