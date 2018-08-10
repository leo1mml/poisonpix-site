import React from 'react'

class Slider extends React.Component{

    state = {
        index: 0
    }

    slideTimer = setInterval(() => {
        this.slideToIndex((this.state.index + 1) % this.props.slides.length)
    }, 4000)

    slideToIndex = (index, shouldClearInterval = false) => {
        console.log(index);
        if(index < 0 || index > this.props.slides.length - 1){
            return
        }
        let sliderContent = document.getElementById('slider-content')
        let sliderSize = document.getElementById("slider").clientWidth;
        if(sliderContent){
            requestAnimationFrame(()=> {
                sliderContent.style.left = -(sliderSize * index) + 'px'
            })

            if(shouldClearInterval){
                clearInterval(this.slideTimer)
                this.slideTimer = setInterval(() => {
                    this.slideToIndex((this.state.index + 1) % this.props.slides.length)
                }, 4000)
            }

            this.setState(() => {
                return {index: index % this.props.slides.length};
            });
        }
    }

    render(){
        return(
            <div id="slider">
                <div className="slider__controls">
                    <div className="slider-control slider-control--prev" onClick={() => {this.slideToIndex((this.state.index - 1) % this.props.slides.length, true)}}>
                        <i className="fas fa-angle-left slider__control-icon"></i>
                    </div>
                    <div className="slider-control slider-control--next" onClick={() => {this.slideToIndex((this.state.index + 1) % this.props.slides.length, true)}}>
                        <i className="fas fa-angle-right slider__control-icon"></i>
                    </div>
                </div>
                <div id="slider-content">
                    {this.props.slides.map((item, index) => {
                        return(
                            <div className="slide" key={index}>
                                <img src={require(`../Images/slides/slide-0${index}.png`)} alt="" className="image-slide"/>
                            </div>
                        )
                    })}
                </div>
                <div id="page-control">
                    {this.props.slides.map((item, index) => {
                        return (
                            <div key={index} 
                                onClick={() => {this.slideToIndex(index, true)}}
                                className={index === this.state.index ? "page-control__indicator page-control__indicator--active" : "page-control__indicator"}>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Slider;