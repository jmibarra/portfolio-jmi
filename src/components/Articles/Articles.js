import { useEffect, useState } from 'react';

import { BlogCard, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

import { getRssFeed } from "../../services/medium-feed";


const Articles = () => {

    const [rssFeed, setRssFeed] = useState();

    useEffect(() => {
        const fetchRssFeed = async () =>
          getRssFeed("jmibarra86", 10);
    
        fetchRssFeed().then((rssFeed) => rssFeed && setRssFeed(rssFeed));
      }, []);

    if (!rssFeed) return <span>Loading...</span>;

    return(
        <Section nopadding id="articles">
            <SectionDivider />
            <SectionTitle main> Artículos recientes </SectionTitle>
            <GridContainer>
                {rssFeed.articles.map(({title,thumbnail, link,guid,categories}) => (
                    <BlogCard key={guid}>
                        <Img src={thumbnail}/>
                        <TitleContent>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        { <div>
                            <TitleContent> Temas </TitleContent>
                            <TagList>
                                {categories.filter((tag, index) => index < 3).map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div> }
                        <UtilityList>
                            <ExternalLinks href={link} target="_blank"> Visitar </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    )
}

export default Articles;