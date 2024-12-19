import './Projects.css'

export const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className='projects-content'>
                <div>
                    <div className='projects-content-conteiner-title'>
                        <h5>Clone Login · Spotify</h5>
                        <a target='_blank' href='https://github.com/milkos12/clone-login-spotify/tree/main/frontend'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" className="projects-content-conteiner-title-links" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href='https://spotify-cone.vercel.app/' target='_blank' >
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" className="projects-content-conteiner-title-links" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                    <p>I independently developed a <b>Spotify login clone using React.</b> This project allowed me to replicate the interface and functionality of the original login, enhancing my web development skills with this framework.</p>
                    <div className='projects-content-projects-tecnologies'>
                        <div>
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <p>React</p>
                        </div>
                        <div>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='image.png' alt="img log in spotify" className='projects-content-img' />
                </div>
            </div>
        </div>
    );
}

export default Projects;