import React from 'react'

class Slider extends React.Component{

    state = {
        index: 0
    }

    slideTimer = setInterval(() => {
        this.slideToIndex((this.state.index + 1) % this.props.slides.length)
    }, 4000)

    slideToIndex = (index, shouldClearInterval = false) => {
        let sliderContent = document.getElementById('slider-content')
        if(sliderContent){
            requestAnimationFrame(()=> {
                sliderContent.style.left = -(1200 * index) + 'px'
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
                        console.log("Index: - ", index);
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