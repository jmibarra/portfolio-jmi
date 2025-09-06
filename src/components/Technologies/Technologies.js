import React from 'react';
import { DiAtlassian, DiDatabase, DiJava, DiReact, DiScrum, DiJavascript } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section nopadding id="tech">
        <br/>
        <SectionDivider />
        <SectionTitle main> Tecnologías</SectionTitle>
        <SectionText>
            He trabajado como desarrollador por mas de 10 años tanto en frontend como backend. 
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-end</ListTitle>
                    <ListParagraph>
                        React.js <br/>
                        Redux <br/>
                        Next.Js <br/>
                        Javascript <br/>
                        HTML <br/>  
                        CSS <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiJava size="3rem" />
                <ListContainer>
                    <ListTitle>Backend</ListTitle>
                    <ListParagraph>
                        Groovy <br/>
                        Grails <br/>
                        Java <br/>
                        Node.js <br/>
                        Python <br/>
                        Php <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiAtlassian size="3rem" />
                <ListContainer>
                    <ListTitle>Atlassian tools</ListTitle>
                    <ListParagraph>
                        Administración de herramientas de la suite Atlassian<br/>
                        Atlassian connect <br/>
                        Atlassian Forge <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiJavascript size="3rem" />
                <ListContainer>
                    <ListTitle>Service Now</ListTitle>
                    <ListParagraph>
                        Service Now Administrator<br/>
                        Service now Developer <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiScrum size="3rem" />
                <ListContainer>
                    <ListTitle>Proyectos</ListTitle>
                    <ListParagraph>
                        Liderazgo de equipos <br/>
                        Management de proyectos <br/>
                        Metodologías ágiles (Scrum y Kanban) <br/>
                    </ListParagraph> 
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiDatabase size="3rem" />
                <ListContainer>
                    <ListTitle>Base de datos</ListTitle>
                    <ListParagraph>
                        Firebase <br/>
                        MySQL <br/>
                        SQL Server <br/>
                        MongoDB <br/>
                    </ListParagraph> 
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
