import React from 'react'
import Jodi from './assets/jodi.jpg'
import Article from './components/Article'
import CompanionList from './components/CompanionList'
import Header from './components/Header'
import Hero from './components/Hero'
import NewsList from './components/NewsList'
import Spotlight from './components/Spotlight'



const App = () => {

    return (
        <>
            <Header />
            <main className="container">
                <Hero />
                <Spotlight />
                <Article />
                <NewsList />
                
            </main>
        </>
    )
    
}

export default App;

{/* <CompanionList /> */}
{/* <img src={Jodi} alt=""></img> */}
            
            
