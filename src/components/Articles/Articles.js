import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { HeaderThree } from './ArticlesStyles';
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
            <Carousel interval={5000} pause={false} fade={true}>
                {rssFeed.articles.map(({ title, thumbnail, link, guid, categories }) => (
                    <Carousel.Item key={guid}>
                        <a href={link} target="_blank" rel="noreferrer">
                            <Image src={thumbnail} alt={title} fluid />
                        </a>
                        <Carousel.Caption>
                            <h2>
                                <HeaderThree title className="article-title">
                                    {title}
                                </HeaderThree>
                            </h2>
                            <p>
                                {categories
                                    .filter((tag, index) => index < 3)
                                    .map((tag, i) => (
                                        <span key={i} className="badge bg-secondary mx-1">
                                            {tag}
                                        </span>
                                    ))}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Section>
    );
};

export default Articles;
