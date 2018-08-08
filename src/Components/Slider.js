import React from 'react'

class Slider extends React.Component{

    state = {
        index: 0
    }

    slideToIndex = (index) => {
        let sliderContent = document.getElementById('slider-content')
        if(sliderContent){
            requestAnimationFrame(()=> {
                sliderContent.style.left = -(1200 * index) + 'px'
            })
            this.setState((prevState) => {
                return {index: (prevState.index + 1) % this.props.slides.length};
            });
        }
    }

    render(){
        return(
            <div id="slider" onClick={() => {this.slideToIndex(this.state.index)}}>
                <div id="slider-content">

                    {this.props.slides.map((item, index) => {
                        return(
                            <div className="slide" key={index}>
                                <img src={require(`../Images/slides/slide-0${index}.png`)} alt="" className="image-slide"/>
                            </div>
                        )
                    })}
                {/* this.state.data.map(function(item, i){
                    console.log('test');
                    return <li key={i}>Test</li>
                    }) */}
                </div>

            </div>
        )
    }
}

export default Slider;