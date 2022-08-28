import React from 'react'
import Article from './components/Article'
import CompanionList from './components/CompanionList'
import Header from './components/Header'
import Hero from './components/Hero'
import Spotlight from './components/Spotlight'
import NewsFeed from './components/NewsFeed'
import SocialBar from './components/SocialBar'




const App = () => {

    return (
        <>
            <Header />

            <main className="container">
                <Hero />
                <Spotlight />
                <NewsFeed />


            </main>
        </>
    )
    
}

export default App;

{/* <CompanionList /> */}
            
            
