import emailjs from 'emailjs-com'
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail,GrGithub} from "react-icons/gr"

function Contact(){
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zejt3jg', 'template_9sy5nb6', e.target, 'user_3nteh4833hEFmf2i2MNBF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return(
        <section id="Contact">
            <h2>Contact</h2>
            <article className="contact-detail">
                <div>
                    <FaPhoneAlt />
                    <h4>Phone</h4>
                    <p>+91 6362621650</p>
                </div>
                 <div>
                     <GrMail />
                    <h4>Email</h4>
                    <p>vidyagowda191@gail.com</p>
                </div>
                 <div>
                     <GrGithub />
                    <h4>Github</h4>
                    <p>www.github.com/vidya-coder</p>
                </div>
            </article>
            <form onSubmit={sendEmail} className="contact-me">
                    <input type="text" placeholder="Name" name="Name" className="name"/>
                    <input type="text" placeholder="Email" name="Email" className="email" />
                    <input type="text" placeholder="Subject" name="Subject" className="subject"/>
                    <input type="text" className="message" name="Message" placeholder="Message..." />
                     <button className="btn" type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;