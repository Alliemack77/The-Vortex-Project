import React from 'react'
import decoHorizontal from '../assets/deco-horizontal.jpg'
import decoVerticle from '../assets/deco-verticle.jpg'


const NewsFeedItem = ({windowWidth, article}) => {
    const url = article.img ? article.img : "https://source.unsplash.com/random/320x213"

    return (
        <div className="news-feed-item">
            { windowWidth < 768 &&
                <img src={decoVerticle} alt=""/>
            }
            <a className="news-link text-secondary" href={`https://www.bbc.co.uk${article.url}`} >
                <div className="news-image" style={{backgroundImage: `url(${url})`}}></div>
                <div className="news-details">
                    <h3 className="fw-400">{article.title}</h3>
                    <p>July 25, 2022</p>
                </div>
            </a>
            { windowWidth > 768 && 
                <img src={decoHorizontal} alt=""/>   
            }
        </div>
    )
}

export default NewsFeedItem