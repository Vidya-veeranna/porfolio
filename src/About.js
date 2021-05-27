import image from './image.JPG'
import resume from './vidya_resume.pdf'
import {FaSchool} from 'react-icons/fa'

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
                <div className="education">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="icon"><FaSchool/></div>
                            <p>2016-2018 Sep</p>
                            <p>Nirmala Convent</p>
                            <p>studied in nirmala convent school mysuru...............................................................................</p>
                        </div>
                         <div className="timeline-item even">
                             <div className="icon"><FaSchool/></div>
                            <p>2016-2018 Sep</p>
                            <p>Nirmala Convent</p>
                            <p>studied in nirmala convent school mysuru...............................................................................</p>
                        </div>
                         <div className="timeline-item">
                             <div className="icon"><FaSchool/></div>
                            <p>2016-2018 Sep</p>
                            <p>Nirmala Convent</p>
                            <p>studied in nirmala convent school mysuru...............................................................................</p>
                        </div>
                    </div>
                </div>
                <div className="training">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="icon"><FaSchool/></div>
                            <p>2016-2018 Sep</p>
                            <p>Nirmala Convent</p>
                            <p>studied in nirmala convent school mysuru...............................................................................</p>
                        </div>
                         <div className="timeline-item even">
                             <div className="icon"><FaSchool/></div>
                            <p>2016-2018 Sep</p>
                            <p>Nirmala Convent</p>
                            <p>studied in nirmala convent school mysuru...............................................................................</p>
                        </div>
                         <div className="timeline-item">
                             <div className="icon"><FaSchool/></div>
                            <p>2016-2018 Sep</p>
                            <p>Nirmala Convent</p>
                            <p>studied in nirmala convent school mysuru...............................................................................</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;