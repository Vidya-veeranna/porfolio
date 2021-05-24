import image from './image.JPG'

function About(){
    return(
        <section>
            <h2>About <span>Me</span></h2>
            <div  id="about">
                <div className="about-img"> <div className="img-container"><img src={image} alt="person" className="img"/></div></div>
                <div className="about-me">
                    <p>Hi,Iam vidya from Mysore. I'm currently pre-final year student at Mysuru Royal Institution of Technology. I have completed by PUC in K puttaswamy Pu Collect at VVCE campus Mysore and high school at Nirmala Convent Mysore.</p>
                    <div className="btn-container">
                        <button>Download Resume</button>
                        <button>Hire Me</button>
                        <button>My works</button>
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
                        <p>HTML <span>75%</span></p>
                        <div className="bar">
                            <div className="percentage"></div>
                        </div>
                        <p>HTML <span>75%</span></p>
                        <div className="bar">
                            <div className="percentage"></div>
                        </div>
                        <p>HTML <span>75%</span></p>
                        <div className="bar">
                            <div className="percentage"></div>
                        </div>
                   </div>
                   <div>
                         <p>HTML <span>75%</span></p>
                        <div className="bar">
                            <div className="percentage"></div>
                        </div>
                        <p>HTML <span>75%</span></p>
                        <div className="bar">
                            <div className="percentage"></div>
                        </div>
                        <p>HTML <span>75%</span></p>
                        <div className="bar">
                            <div className="percentage"></div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default About;