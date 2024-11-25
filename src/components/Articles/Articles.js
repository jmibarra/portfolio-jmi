import { useEffect, useState } from 'react';
import { GridContainer, TagList } from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { getRssFeed } from '../../services/medium-feed';
import { Button, Card, Descriptions, Divider, Tag } from 'antd';
import { AiFillMediumSquare } from 'react-icons/ai';

const Articles = () => {
    const [rssFeed, setRssFeed] = useState();

    useEffect(() => {
        const fetchRssFeed = async () => getRssFeed('jmibarra86', 15);
        fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
    }, []);

    if (!rssFeed) return <span>Loading...</span>;

    return (
        <Section nopadding id="articles">
            <SectionDivider />
            <SectionTitle main>Artículos recientes</SectionTitle>
            <GridContainer>
                {rssFeed.articles.map(({ title, link, guid, categories, pubDate, description }) => (

                    <Card key={guid} title={title} extra={<Button icon={<AiFillMediumSquare />} shape="circle" href={link} target='_blank' />} style={{ width: '100%' }}>
                        <Descriptions >
                            <Descriptions.Item label="Fecha de publicación">{pubDate}</Descriptions.Item>
                        </Descriptions>
                        {categories.length != 0 && <div>
                            <Divider> Topics </Divider>
                            <TagList >
                                {categories.map((tag, i) => (
                                    <Tag key={i} color="blue">{tag}</Tag>
                                ))}
                            </TagList>
                        </div>}
                    </Card>
                ))}
            </GridContainer>
        </Section >
    );
};

export default Articles;
