import React from 'react'
import { Link } from 'react-router-dom'

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
                        <Link className="" onClick={this.toggleMenu} to="/">About</Link>
                        <Link className="" onClick={this.toggleMenu} to="/">Portfolio</Link>
                        <Link className="" onClick={this.toggleMenu} to="/">Contact</Link>
                    </div>
                    <div className="navbar__social-links">
                        <i class="fab fa-instagram"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter"></i>
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