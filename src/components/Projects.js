import './Projects.css'

export const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className='projects-content'>
                <div>
                    <h5>Clone Login · Spotify</h5>
                    <p>I independently developed a <b>Spotify login clone using React.</b> This project allowed me to replicate the interface and functionality of the original login, enhancing my web development skills with this framework.</p>
                    <div className='projects-content-projects-tecnologies'>
                        <div>
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <p>React</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='image.png' alt="img log in spotify"  className='projects-content-img'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;