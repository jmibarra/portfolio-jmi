import React from 'react';

import { GridContainer, TagList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Button, Card, Divider, Tag } from 'antd';
import { AiFillGithub } from 'react-icons/ai';

const { Meta } = Card;
const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main> Proyectos </SectionTitle>
        <GridContainer>
            {projects.map(({ id, image, title, description, tags, visit }) => (
                <Card
                    key={id}
                    hoverable
                    title={title}
                    cover={<img alt="example" src={image} />}
                    style={{ width: '100%', height: '100%' }}
                    extra={<Button icon={<AiFillGithub />} shape="circle" href={visit} target='_blank' />}
                >
                    <Meta description={description} />
                    {
                        tags.length != 0 && <div>
                            <Divider> Stack </Divider>
                            <TagList>
                                {tags.filter((tag, index) => index < 3).map((tag, i) => (
                                    <Tag color='blue' key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                    }
                </Card>

            ))}
        </GridContainer>
    </Section>
);

export default Projects;