import React from 'react'

function Contact() {
    return (
        <div>
        <section class="colorlib-contact" data-section="contact">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Get in Touch</span>
                        <h2 class="colorlib-heading">Contact</h2>
                    </div>
                </div>
                <div class="row">
                        <div class="col-md-5">
                            <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div class="colorlib-icon">
                                    <i class="icon-globe-outline"></i>
                                </div>
                                <div class="colorlib-text">
                                    {/* <p><a href="#">info@domain.com</a></p> */}
                                    <div class="form-group">
                                        <button type = "submit"  className = "btn btn-primary btn-send-message"><a href = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=vinayakdhimang@gmail.com" style = {{textDecoration:"none", color:"white"}}>Say Hello</a></button>
                                    </div>
                                </div>
                            </div>

                            <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div class="colorlib-icon">
                                    <i class="icon-map"></i>
                                </div>
                                <div class="colorlib-text">
                                    <p>Pincode: 247451, Saharanpur(U.P), India.</p>
                                </div>
                            </div>

                            <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div class="colorlib-icon">
                                    <i class="icon-phone"></i>
                                </div>
                                <div class="colorlib-text">
                                    <p><a href="tel://">+918171690677</a></p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Contact;
