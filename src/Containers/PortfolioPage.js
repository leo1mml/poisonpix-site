import React from 'react'


class PortfolioPage extends React.Component{

    state = {
        // projects: [{
        //     title: "Iter Inferis",
        //     imageSrc: ""
        // }]
    }


    render(){
        return(
            <div className="portfolio">
                <div className="portfolio__pink-line"></div>
                <div className="portfolio__content-container">
                    <span className="portfolio__title">PORTFOLIO</span>
                    <div className="portfolio__slider">
                        <div className="portfolio__slider__content">
                            <div className="portfolio__slider__content__slide">
                                <div className="portfolio__slider__content__slide__game-content portfolio__slider__content__slide__game-content--right">
                                    <div className="portfolio__game-presentation">
                                        <span className="portfolio__slide__game-title">Iter Inferis</span>
                                        <p className="portfolio__slide__game-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati quisquam quae maiores. Quo numquam perspiciatis quam error, beatae incidunt consequuntur cum asperiores natus hic possimus voluptas molestiae officia odit.</p>
                                        <button className="portfolio__slide__learn-more-btn">Learn More...</button>
                                    </div>
                                    <img src={require('../Images/slides/slide-01.png')} className="portfolio__game__image" alt=""></img>
                                </div>
                                <div className="portfolio__slider__content__slide__game-content portfolio__slider__content__slide__game-content--left">
                                    <div className="portfolio__game-presentation">
                                        <span className="portfolio__slide__game-title">Iter Inferis</span>
                                        <p className="portfolio__slide__game-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati quisquam quae maiores. Quo numquam perspiciatis quam error, beatae incidunt consequuntur cum asperiores natus hic possimus voluptas molestiae officia odit.</p>
                                        <button className="portfolio__slide__learn-more-btn">Learn More...</button>
                                    </div>
                                    <img src={require('../Images/slides/slide-02.png')} className="portfolio__game__image" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;