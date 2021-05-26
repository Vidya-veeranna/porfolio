import image from './image.JPG'
import resume from './vidya_resume.pdf'

function About(){
    return(
        <section>
            <h2>About <span>Me</span></h2>
            <div  id="about">
                <div className="about-img"> <div className="img-container"><img src={image} alt="person" className="img"/></div></div>
                <div className="about-me">
                    <p>Hi,Iam vidya from Mysore. I'm currently pre-final year student at Mysuru Royal Institution of Technology. I have completed by PUC in K puttaswamy Pu Collect at VVCE campus Mysore and high school at Nirmala Convent Mysore.</p>
                    <div className="btn-container">
                        <button><a href={resume} download="vidya_resume">Download Resume</a></button>
                        <button><a href="#Contact" >Hire Me</a></button>
                        <button><a href="#projects" >My Works</a></button>
                    </div>
                </div>
            </div>
            <div>
                <div className="btn-container about-detail">
                    <button>Skills</button>
                    <button>Education</button>
                    <button>Training</button>
                </div>
                <div className="skills">
                   <div>
                        <p>HTML (<span>Intermediate</span>)</p>
                        <p>CSS (<span>Intermediate</span>)</p>
                        <p>Javascript (<span>Intermediate</span>)</p>
                        <p>Python (<span>Intermediate</span>)</p>
                        <p>Java (<span>Intermediate</span>)</p>
                   </div>
                    <div>
                        <p>C (<span>Intermediate</span>)</p>
                        <p>C++ (<span>Intermediate</span>)</p>
                        <p>Kotlin (<span>Intermediate</span>)</p>
                        <p>React (<span>Intermediate</span>)</p>
                        <p>React Native (<span>Intermediate</span>)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;