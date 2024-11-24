import { useEffect, useState } from 'react';
import { BlogCard, ExternalLinks, GridContainer, HeaderThree, Hr, TagList, TitleContent, UtilityList } from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { getRssFeed } from '../../services/medium-feed';
import { Card, Collapse, Divider, Flex, Tag } from 'antd';

const Articles = () => {
    const [rssFeed, setRssFeed] = useState();

    useEffect(() => {
        const fetchRssFeed = async () => getRssFeed('jmibarra86', 15);
        fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
    }, []);

    if (!rssFeed) return <span>Loading...</span>;

    return (
        <Section nopadding id="articles">
            <style>
                {`
                    .carousel-item img {
                        height: 600px;
                        width: 100%;
                        object-fit: cover;
                    }
                    .carousel-control-prev-icon,
                    .carousel-control-next-icon {
                        height: 50px;
                        width: 50px;
                        background-color: rgba(15, 22, 36, 0.8);
                        border-radius: 50%;
                        border: none;
                        background-image: none;
                    }
                    
                    .carousel-control-prev-icon:after {
                        content: '<';
                        font-size: 30px;
                        color: white;
                    }
                    
                    .carousel-control-next-icon:after {
                        content: '>';
                        font-size: 30px;
                        color: white;
                    }
                    .article-title {
                        background-color: rgba(15, 22, 36, 0.4);
                        padding: 0.5rem;
                        margin: 0;
                        color: white;
                    }
          
        `}
            </style>
            <SectionDivider />
            <SectionTitle main>Artículos recientes</SectionTitle>
            <Flex gap="middle" vertical>
                {rssFeed.articles.map(({ title, description, link, guid, categories }) => (

                    <>
                        {console.log(rssFeed.articles)}
                        <Card key={guid} title={title} bordered={false}>
                            <Flex wrap gap="small">
                                <Collapse
                                    items={[{ key: '1', label: 'Contenido', children: <div dangerouslySetInnerHTML={{ __html: description }} /> }]}

                                />

                                <Divider>Temas</Divider>
                                <TagList >
                                    {categories.map((tag, i) => (
                                        <Tag key={i}>{tag}</Tag>
                                    ))}
                                </TagList>
                            </Flex>
                        </Card >
                    </>
                ))}
            </Flex>
        </Section >
    );
};

export default Articles;
