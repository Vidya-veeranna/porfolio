function Contact(){
    return(
        <section className="Contact">
            <h2>Contact</h2>
            <article className="contact-detail">
                <div>
                    <h4>Phone</h4>
                    <p>+91 6362621650</p>
                </div>
                 <div>
                    <h4>Email</h4>
                    <p>vidyagowda191@gail.com</p>
                </div>
                 <div>
                    <h4>Github</h4>
                    <p>www.github.com/vidya-coder</p>
                </div>
            </article>
            <article className="contact-me">
                <div className="about-you">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                </div>
                <input type="text" className="message" placeholder="Message..." />
            </article>
        </section>
    );
}

export default Contact;