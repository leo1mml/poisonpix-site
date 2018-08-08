import React from 'react'

class Slider extends React.Component{

    state = {
        index: 0
    }

    componentDidMount(){
        this.slideContinuous();
    }

    slideContinuous = () => {
        setInterval(() => {
            this.slideToIndex((this.state.index + 1) % this.props.slides.length)
        }, 5000)
    }

    slideToIndex = (index) => {
        let sliderContent = document.getElementById('slider-content')
        if(sliderContent){
            requestAnimationFrame(()=> {
                sliderContent.style.left = -(1200 * index) + 'px'
            })
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
                                onClick={() => {this.slideToIndex(index)}}
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