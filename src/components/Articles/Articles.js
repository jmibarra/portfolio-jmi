import { useEffect, useState } from 'react';
import { BlogCard, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Tag, TagList, TitleContent, UtilityList } from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { getRssFeed } from '../../services/medium-feed';

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
            <GridContainer>
                {rssFeed.articles.map(({ title, thumbnail, link, guid, categories }) => (
                    <BlogCard key={guid}>
                        <TitleContent>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        {categories.length != 0 && <div>
                            <TitleContent> Temas </TitleContent>
                            <TagList>
                                {categories.filter((tag, index) => index < 3).map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>}
                        <UtilityList>
                            <ExternalLinks href={link} target="_blank"> Visitar </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    );
};

export default Articles;
