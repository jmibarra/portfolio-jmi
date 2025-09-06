// src/components/Articles/Articles.js

import { useEffect, useState } from 'react';
import { Button } from 'antd'; // Importamos el botón de Ant Design
import {
    ArticleList,
    ArticleItem,
    ArticleTitle,
    ArticleDate,
    ArticleTagList,
    ArticleTag,
    ViewMoreButtonContainer // Importamos el nuevo contenedor
} from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { getRssFeed } from '../../services/medium-feed';

const Articles = () => {
    const [rssFeed, setRssFeed] = useState(null);

    useEffect(() => {
        const fetchRssFeed = async () => {
            const feed = await getRssFeed('jmibarra86', 10); 
            if (feed) {
                setRssFeed(feed);
            }
        };
        fetchRssFeed();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (!rssFeed) return <span>Loading articles...</span>;

    return (
        <Section nopadding id="articles">
            <SectionDivider />
            <SectionTitle main>Artículos Recientes</SectionTitle>
            
            <ArticleList>
                {rssFeed.articles.map(({ title, link, guid, categories, pubDate }) => (
                    <ArticleItem key={guid} href={link} target="_blank" rel="noopener noreferrer">
                        <ArticleTitle>{title}</ArticleTitle>
                        <ArticleDate>{formatDate(pubDate)}</ArticleDate>
                        
                        {categories.length > 0 && (
                            <ArticleTagList>
                                {categories.map((tag, i) => (
                                    <ArticleTag key={i}>{tag}</ArticleTag>
                                ))}
                            </ArticleTagList>
                        )}
                    </ArticleItem>
                ))}
            </ArticleList>
            <ViewMoreButtonContainer>
                <Button 
                    type="primary" 
                    shape="round" 
                    size="large" 
                    href={rssFeed.feed.link}
                    target="_blank">
                    Ver todos mis artículos
                </Button>
            </ViewMoreButtonContainer>
        </Section>
    );
};

export default Articles;