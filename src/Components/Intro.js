import React from 'react';
import './css/Intro.css';

function Intro() {
    return (
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
                <ul className="slides">
                <li style={{backgroundImage: 'url(images/img_vin.png)',backgroundSize: "contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:"15px"}}>
                
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                            <div className="desc">
                                <h1>Hi! <br />I'm Vinayak</h1>
                                <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1zDhk1dLg64tOuPBJt0bbj_kU33h7DJ_s/view" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>                                
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li style={{backgroundImage: 'url(images/img_vin.png)',backgroundSize: "contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:"15px"}}>
                    
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                            <div className="desc">
                                <h1>I love building<br /> THINGS !!</h1>
                                <p><a className="btn btn-primary btn-learn" href="https://github.com/26Vinayak" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
          </div>
        </section>
      </div>
    )
}

export default Intro;
