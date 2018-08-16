import React from 'react'
import {FormattedMessage} from 'react-intl';


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
                                        <span className="portfolio__slide__game-title">ITER INFERIS</span>
                                        <p className="portfolio__slide__game-description">
                                            <FormattedMessage
                                                id="Portfolio.IterInferis.text"
                                                defaultMessage="In a desolated place, whithout a clue about where you are or even who yourself really are. This is a dark place and your're confused. Try to unveil your own mysteries and the ones of this world."
                                            />
                                        </p>
                                        <a className="portfolio__slide__learn-more-btn">
                                            <FormattedMessage
                                                id="Portfolio.Button.coming-soon"
                                                defaultMessage="Coming Soon..."
                                            />
                                        </a>
                                    </div>
                                    <img src={require('../Images/portfolio-images/slide-01.png')} className="portfolio__game__image" alt=""></img>
                                </div>
                                <div className="portfolio__slider__content__slide__game-content portfolio__slider__content__slide__game-content--left">
                                    <div className="portfolio__game-presentation">
                                        <span className="portfolio__slide__game-title">AMARUQ</span>
                                        <p className="portfolio__slide__game-description">
                                            <FormattedMessage
                                                id="Portfolio.Amaruq.text"
                                                defaultMessage="It's only you and your father, living in the cold of the mountains, everyday he leaves you alone to hunt and comes back with food,but one day he doesn't, what happenned to him? You have to find it out, but how will you survive alone?"
                                            />
                                        </p>
                                        <a  href='https://poisonpix.itch.io/amaruq' target="_blank" rel="noopener noreferrer" className="portfolio__slide__learn-more-btn">
                                            <FormattedMessage
                                                id="Portfolio.Button.learn-more"
                                                defaultMessage="Learn More..."
                                            />
                                        </a>
                                    </div>
                                    <img src={require('../Images/portfolio-images/slide-02.png')} className="portfolio__game__image" alt=""></img>
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