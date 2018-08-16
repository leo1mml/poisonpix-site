import React from 'react'
import { Link } from 'react-router-dom'
import {FormattedMessage} from 'react-intl';

class NavBar extends React.Component {

    componentDidMount(){
        window.onscroll = function() {
            if(window.pageYOffset > 50){
                document.getElementsByClassName("nav-container")[0].style.top = "-200px";
            }else {
                document.getElementsByClassName("nav-container")[0].style.top = "0px";
            }
        }

    }

    toggleMenu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.classList.add("responsive")
        } else {
            x.classList.remove("responsive")
        }
    }

    render () {
        return (
            <div className="nav-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <div className="topnav" id="myTopnav">
                    <Link to="/" className="active"><span className="topnav__logo-text">POISONPIX</span></Link>
                    <div className="nav-links">
                        <Link className="" onClick={this.toggleMenu} to="/about">
                            <FormattedMessage
                                id="Nav.about"
                                defaultMessage="ABOUT"
                            />
                        </Link>
                        <Link className="" onClick={this.toggleMenu} to="/portfolio">
                            <FormattedMessage
                                id="Nav.PORTFOLIO"
                                defaultMessage="PORTFOLIO"
                            />
                        </Link>
                        <a className="" onClick={this.toggleMenu} href="mailto:poisonpixstudios@gmail.com?Subject=Hello%20again" target="_top">
                            <FormattedMessage
                                id="Nav.contact"
                                defaultMessage="CONTACT"
                            />
                        </a>
                    </div>
                    <div className="navbar__social-links">
                        <a href="https://www.instagram.com/poisonpixstudios/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/poisonpixstudios/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://twitter.com/poisonpixstudio" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>
                    <a className="icon" onClick={this.toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar