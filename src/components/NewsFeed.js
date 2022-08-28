import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useViewport}  from '../helpers/hooks';
import Article from './Article';
import SectionSubheading from './SectionSubheading';
import NewsFeedItem from './NewsFeedItem';

const url = "https://dr-who-web-scraper.herokuapp.com/news"


const NewsFeed = () => {
    const [articles, setArticles] = useState([])
    const {windowWidth} = useViewport()

    useEffect(() => {
        axios.get(url).then((response) => {
            setArticles(response.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return (
        <section className="news">
            <Article />
            <SectionSubheading title="Latest News"/>
            <div className="news-feed">
                {
                    articles.map(article => {
                        return (
                            <NewsFeedItem article={article} windowWidth={windowWidth} key={article.title}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NewsFeed