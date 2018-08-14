import React from 'react'

class AboutPage extends React.Component{


    slideToIndex = (index) => {
        if(index < 0){
            return
        }
        let sliderContent = document.getElementsByClassName('about-page__slider__slider-content')[0]
        let sliderSize = document.getElementsByClassName('about-page__slider')[0].clientWidth
        console.log(sliderContent);
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
                                        An indie game company focused on 2D games,
                                        founded in 2018, creating games with classic elements
                                        to create new experiences.
                                    </span>
                                    <div className="about__arrow-right" onClick={() => {this.slideToIndex(1)}}>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="about-page__slider__slider-content__slide">
                            <div className="about-page__slider__slider-content__slide__content-container">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage