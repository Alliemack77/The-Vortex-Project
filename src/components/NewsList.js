import React, {useEffect, useState} from 'react';
import axios from 'axios'
import SectionSubheading from './SectionSubheading';
import decoHorizontal from '../assets/deco-horizontal.jpg'
import decoVerticle from '../assets/deco-verticle.jpg'
const url = "https://dr-who-web-scraper.herokuapp.com/news"


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get(url).then((response) => {
            setArticles(response.data)
        })
    },[])
    

    return (
        <>
        <SectionSubheading title="Latest News"/>
        <div className="news-feed">
            {
                articles.map(article => {
                    return (
                        <div className="news-feed__item">
                            <a href={`https://www.bbc.co.uk${article.url}`} >
                                <img src={article.img ?  article.img : "https://source.unsplash.com/random/320x213"} alt=""/>
                                <h3>{article.title}</h3>
                                <p>July 25, 2022</p>
                            </a>
                            <img src={decoHorizontal} alt=""/>
                            <img src={decoVerticle} alt=""/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default NewsList