import React from 'react'


function Sidebar() {
    return (
        <div>
            <div>
             <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"  aria-controls="navbar"><i /></nav>
             <aside id = "colorlib-aside" className = "border js-fullheight">
             <div className = "text-center">
                <div className = "author-img" style = {{backgroundImage: 'url(images/rsz_1img_dp.jpg)'}}/>
                <h1 id = "cololib-logo"><a href = "index.html" >Vinayak Dhiman</a></h1>
                <span className = "email"><i className = "icon-mail"></i>vinayakdhimang@gmail.com</span>
             </div>
                <nav id = "colorlib-main-menu" role = "navigation" className = "navbar">
                    <div id = "navbar" className = "collapse">
                        <ul>
                            <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                            <li><a href="#about" data-nav-section="about">About</a></li>
                            <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                            <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <nav id="colorlib-main-menu">
                    <ul>
                        <li><a href="https://www.facebook.com/vinayak.dhiman.984/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                        <li><a href="https://twitter.com/VinayakDhiman8" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                        <li><a href="https://www.instagram.com/dhiman_vinayak_26/?hl=en" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/in/vinayak-dhiman-46610b171/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                        <li><a href="https://github.com/26Vinayak" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    </ul>
                    </nav>
                    <div className="colorlib-footer">
                    <p><small>
                        Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                        Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
                    </small></p>
                    <p><small>
                        Something coming soon !!
                    </small></p>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Sidebar;
