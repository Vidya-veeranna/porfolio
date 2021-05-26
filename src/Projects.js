import {ProjectData} from "./ProjectData"

function Projects(){
    return(
    <section id="projects">
        <div className="btn-container">
            <button>All</button>
            <button>React</button>
            <button>Android</button>
            <button>Python</button>
        </div>
        <article className="cards">
            {ProjectData.map((project) => {
                let {id,name,img,href} = project
                return(
                    <a  key={id} target="_blank" href={href}>
                        <div className="card">
                        <div className="project-img">
                            <img src={img} alt="project-img" className="project-img"/>
                        </div>
                        <h4>{name}</h4>
                    </div>
                    </a>
                )
            })}
        </article>
    </section>
    );
}

export default Projects;