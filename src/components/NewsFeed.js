import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Article from './Article';
import SectionSubheading from './SectionSubheading';
import NewsFeedItem from './NewsFeedItem';

const url = "https://dr-who-web-scraper.herokuapp.com/news"


const NewsFeed = () => {
    const [articles, setArticles] = useState([])
    const [isDesktop, setIsDesktop] = useState(window.innerWidth)

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 768)
    }

    useEffect(() => {
        axios.get(url).then((response) => {
            setArticles(response.data)
        })
    },[])

    useEffect(() => {
        window.addEventListener("resize", updateMedia)

        return () => window.removeEventListener("resize", updateMedia)
    })
    

    return (
        <section className="news">
            <Article />
            <SectionSubheading title="Latest News"/>
            <div className="news-feed">
                {
                    articles.map(article => {
                        return (
                            <NewsFeedItem article={article} isDesktop={isDesktop} key={article.title}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NewsFeed