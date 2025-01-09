import './Experience.css'
import InstagramPost from './InstagramPost';

export const Experience = () => {
    return (
        <div className="experience">
            <h1>Experience</h1>
            <h3><a href='https://velezreyesmas.com/' target='_blank' style={{ color: '#ffffff', textDecoration: 'none' }} className='experience-content-details-title-svg'>
                vélezreyez+&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='projects-content-links' style={{ maxWidth: '18px' }}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline className='projects-content-links-arrow' points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a></h3>
            <p style={{ fontWeight: '200' }}>VélezReyes+ is the philanthropic platform, focused on education and democracy to expand opportunities in Latin America.</p>
            <div className='experience-content'>

                <div className='experience-content-description'>
                    <div >
                        <div className='experience-content-sticky-title' style={{backgroundColor:'#000000', height: '50px', paddingLeft: '5px', margin: '0', borderRadius: '0 0 10px 10px', paddingTop: '.5px', zIndex:'12', marginLeft: '-10px', marginRight: '-8px'}}>
                            <h5>2024<wbr /> — <wbr />Present</h5>
                        </div>
                        
                    </div>
                    <div>
                        <div className='experience-content-sticky-title' style={{backgroundColor:'#000000', height: '50px', paddingLeft: '5px', margin: '0', borderRadius: '0 0 10px 10px', paddingTop: '.5px', zIndex:'12', marginLeft: '-10px', marginRight: '-8px', boxShadow: '-1px 15px 20px 1px rgba(0,0,0,0.75)'}}><h5>Software Developer &nbsp;&nbsp;·&nbsp;&nbsp; VelezReyez+</h5></div>
                        
                        <div className='experience-content-details'>
                            <h4 style={{ color: '#FFFFFF' }} >Project&nbsp;&nbsp;·&nbsp;&nbsp;GEOM</h4>
                            <p>Data visualization tool to understand inequality of opportunities worldwide.</p>
                            <div>
                                <div className='projects-content-conteiner-title experience-content-details-title'>
                                    <h5 style={{ color: '#FFFFFF' }} >Alluvial graph</h5>
                                    <a href='https://geom.ecineq.org/country-profile/' target='_blank' style={{ color: '#ffffff' }} className='experience-content-details-title-svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='projects-content-links'><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline className='projects-content-links-arrow' points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                                <p>Collaborated with a team to transform inequality data into a compelling alluvial visualization using D3.js. Designed metrics and implemented adaptive resizing, making the interactive alluvial graph both insightful and responsive.</p>
                                <img className='projects-content-img experience-content-details-img' src='/gifs/alluvial-graph.gif'></img>
                                <div className='experience-content-experience-tecnologies'>
                                    <div>
                                        <p>JavaScript</p>
                                    </div>
                                    <div>
                                        <p>React</p>
                                    </div>
                                    <div>
                                        <p>D3.js</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='projects-content-conteiner-title experience-content-details-title'>
                                    <h5 style={{ color: '#FFFFFF' }} >Tree graph (Refactor)</h5>
                                    <a href='https://geom.ecineq.org/country-profile/' target='_blank' style={{ color: '#ffffff' }} className='experience-content-details-title-svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='projects-content-links'><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline className='projects-content-links-arrow' points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                                <p>Optimized the graph's positioning to fit correctly within the available space, enhancing its visualization.</p>
                                <img className='projects-content-img experience-content-details-img' src='/gifs/refactors-graph-tree.gif'></img>
                                <div className='experience-content-experience-tecnologies '>
                                    <div>
                                        <p>JavaScript</p>
                                    </div>
                                    <div>
                                        <p>React</p>
                                    </div>
                                    <div>
                                        <p>D3.js</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='projects-content-conteiner-title experience-content-details-title'>
                                    <h5 style={{ color: '#FFFFFF' }} >Tree graph node sizing</h5>
                                    <a href='https://geom.ecineq.org/country-profile/' target='_blank' style={{ color: '#ffffff' }} className='experience-content-details-title-svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='projects-content-links'><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline className='projects-content-links-arrow' points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                                <p>Implemented dynamic node size adjustment in the tree visualization based on corresponding node sizes from the bubble chart.</p>
                                <img className='projects-content-img experience-content-details-img' src='/gifs/size-nodes.gif'></img>
                                <div className='experience-content-experience-tecnologies '>
                                    <div>
                                        <p>JavaScript</p>
                                    </div>
                                    <div>
                                        <p>React</p>
                                    </div>
                                    <div>
                                        <p>D3.js</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ color: '#FFFFFF', marginTop: '50px' }} >Project&nbsp;&nbsp;·&nbsp;&nbsp;Ver+ Tech Scholarship</h4>
                                <p>supports low-income high school graduates by providing access to a systems engineering undergraduate program at high-quality universities.</p>
                                <div className='projects-content-conteiner-title experience-content-details-title'>
                                    <h5 style={{ color: '#FFFFFF' }} >Second Cohort of the Ver+ Tech Scholarship</h5>
                                    <a href='https://velezreyesmas.com/primera-cohorte-beca-tech/' target='_blank' style={{ color: '#ffffff' }} className='experience-content-details-title-svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='projects-content-links'><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline className='projects-content-links-arrow' points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                                <p>Provided tech support for the entire registration process, handling over <b>5,000 participants from 31 of Colombia’s 32 departments.</b> Automated filtering and selection in the initial phases using CRM and other tools, enabling real-time tracking of participants and key metrics throughout the process.</p>
                                <div>
                                    <InstagramPost></InstagramPost>
                                </div>
                                <div className='experience-content-experience-tecnologies '>
                                    <div>
                                        <p>CRM (zoho)</p>
                                    </div>
                                    <div>
                                        <p>API</p>
                                    </div>
                                    <div>
                                        <p>JavaScript</p>
                                    </div>
                                    <div>
                                        <p>No-Code</p>
                                    </div>
                                    <div>
                                        <p>Looker Studio</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='experience-content-description'>
                    <div>
                        <h5>2024<wbr /> — <wbr />Present</h5>
                    </div>
                    <div>
                        <h5>Tech Fellow &nbsp;&nbsp;·&nbsp;&nbsp; VelezReyez+</h5>
                        <p><a href='https://velezreyesmas.com/tech-fellowship/' target='_blank' style={{ color: '#ffffff' }} >Fellow Tech Fellowship</a> is an acceleration program for tech talent. <b>Out of 1,500 applicants, 39 finalists</b> were selected after passing rigorous technical tests and interviews, receiving training from industry experts and were hired by leading companies</p>
                        <p>
                            I develop software in a team using technologies such as AWS, JavaScript, and Python to implement cloud solutions. I manage cloud deployments with GitHub Actions CI/CD. Under the guidance of experts, I am developing in the world of technology in Latin America.</p>
                        <div className='experience-content-experience-tecnologies'>
                            <div>
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <p>TypeScript</p>
                            </div>
                            <div>
                                <p>React</p>
                            </div>
                            <div>
                                <p>AWS</p>
                            </div>
                            <div>
                                <p>Python</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3><a href='https://www.ubits.com/' target='_blank' style={{ color: '#ffffff', textDecoration: 'none' }} className='experience-content-details-title-svg'>
                        UBITS&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='projects-content-links' style={{ maxWidth: '18px' }}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline className='projects-content-links-arrow' points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a></h3>
                    <p>Ubits is an online learning platform that offers business training and professional development courses in key areas such as leadership, technology, and digital skills.</p>
                    <div className='experience-content-description'>
                        <div>
                            <h5>oct 2022<wbr /> — <wbr />nov 2022</h5>
                        </div>
                        <div>
                            <h5>Junior Platform Analyst&nbsp;&nbsp; ·&nbsp;&nbsp; UBITS</h5>
                            <p>I developed an automation in JavaScript that converts content from Google documents to HTML and CSS. This tool reduced the conversion time by approximately <b>60%</b> and minimized errors.</p>
                            <div className='experience-content-experience-tecnologies'>
                                <div>
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <p>Apps Script</p>
                                </div>
                                <div>
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <p>Python</p>
                                </div>
                                <div>
                                    <p>Looker Studio</p>
                                </div>
                                <div>
                                    <p>Google Sheets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='experience-content-description'>
                        <div>
                            <h5>apr 2022 — sept 2022</h5>
                        </div>
                        <div>
                            <h5>Launch Analyst · UBITS</h5>
                            <p>I automated a part of the process for sending credentials to new students using JavaScript and Python, decreasing the time required for dispatch and reducing failures. Additionally, I integrated APIs from CRMs, Google GCP, and email marketing platforms to automate processes, improving operational efficiency by almost 100%.</p>
                            <div className='experience-content-experience-tecnologies'>
                                <div>
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <p>Apps Script</p>
                                </div>
                                <div>
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <p>CRMs</p>
                                </div>
                                <div>
                                    <p>Looker Studio</p>
                                </div>
                                <div>
                                    <p>Google Sheets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;