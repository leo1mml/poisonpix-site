import React from 'react'
import Slider from '../Components/Slider'

class LandingPage extends React.Component {


    render(){
        return (
            <div className="landing-page-container">
                <Slider slides={['../Images/slides/slide-01.png', '../Images/slides/slide-02.png', '../Images/slides/slide-03.png']}/>
            </div>
        )
    }
}

export default LandingPage;