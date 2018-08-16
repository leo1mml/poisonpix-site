import React from 'react'
import {FormattedMessage} from 'react-intl';

class AboutPage extends React.Component{

    state = {
        teamMembers: ['Augusto Henrique','Eduardo Torres','Eric Winston','Gabriel Messias','Leonel Lima','Pedro Henrique']
    }


    slideToIndex = (index) => {
        if(index < 0){
            return
        }
        let sliderContent = document.getElementsByClassName('about-page__slider__slider-content')[0]
        let sliderSize = document.getElementsByClassName('about-page__slider')[0].clientWidth
        if(sliderContent){
            requestAnimationFrame(()=> {
                sliderContent.style.left = -(sliderSize * index) + 'px'
            })
        }
    }
    

    render(){
        return(
            <div className="about-page">
                <div className="about-page__slider">
                    <div className="about-page__slider__slider-content">
                        <div id="about-page__pink-line"></div>
                        <div className="about-page__slider__slider-content__slide">
                            <div className="about-page__slider__slider-content__slide__content-container">
                                <span id="about-page__about-title">ABOUT US</span>
                                <div className="about-page__about-description__middle-layout">
                                    <span id="about-page__about-description">
                                        <FormattedMessage
                                            id="About.text"
                                            defaultMessage="An indie gaming company created in Brazil in 2018 by six students from the Catholic university of Brasilia with a focus on bringing the feeling of nostalgia in their games, because, who said tradition can not be a trend?
Always bringing immersive games with the intention of entertaining your audience, with a visual style on pixel art and gameplay focused on the difficulty, after all, what is a game without challenge?"
                                        />
                                    </span>
                                    <div className="about__arrow-right" onClick={() => {this.slideToIndex(1)}}>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-page__slider__slider-content__slide">
                            <div className="about-page__slider__slider-content__slide__content-container">
                            <span id="about-page__about-title">TEAM</span>
                                <div className="about-page__about-description__middle-layout">
                                    <div className="about__arrow-left" onClick={() => {this.slideToIndex(0)}}>
                                        <i className="fas fa-arrow-left"></i>
                                    </div>
                                    <div className="about__team-members">
                                        {
                                            this.state.teamMembers.map((item, index) => {
                                                return(
                                                        <div key={index} className="team-member">
                                                            <div className="team-member__outer-border-photo"><div style={{backgroundImage: `url('${require(`../Images/members-images/member_0${index+1}.png`)}`}} className="team-member__photo"></div></div>
                                                            <span className="team-member__name">{item}</span>
                                                        </div>
                                                    )
                                            })
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage