import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
             <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/> 
            {/* <img className="home__image"src="" alt=""/> */}
           <div className="home__row">
           <Product id="1" title="Jabulani Football" price={20} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51utCE%2BBxjL.jpg"
            />
            <Product id="1" title="Jabulani Football" price={20} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51utCE%2BBxjL.jpg"
            />

           </div>
           <div className="home__row">
           <Product id="1" title="Jabulani Football" price={20} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51utCE%2BBxjL.jpg"
            />
            <Product id="1" title="Jabulani Football" price={20} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51utCE%2BBxjL.jpg"
            />
            <Product id="1" title="Jabulani Football" price={20} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51utCE%2BBxjL.jpg"
            />

           </div>

            
        </div>
       
    )
}

export default Home
