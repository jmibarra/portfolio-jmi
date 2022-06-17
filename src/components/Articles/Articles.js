import { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ArticlesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import { getRssFeed, RssFeed } from "../../services/medium-feed";


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
            <SectionTitle main> Artículos </SectionTitle>
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
                                {categories.map((tag, i) => (
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