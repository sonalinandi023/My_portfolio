import React, { useEffect } from 'react';

import './styles.css';
import './script.js';
import './media.scss';
import './styles.scss';
function App() {
  // useEffect(() => {

  //   const themeButton = document.querySelector(".theme-btn");
  //   if (themeButton) {
  //     themeButton.addEventListener("click", () => {
  //       document.body.classList.toggle("light-mode");
  //     });
  //   }


  //   document.querySelectorAll(".control").forEach(button => {
  //     button.addEventListener("click", function () {
  //       document.querySelector(".active-btn").classList.remove("active-btn");
  //       this.classList.add("active-btn");
  //       document.querySelector(".active").classList.remove("active");
  //       document.getElementById(button.dataset.id).classList.add("active");
  //     });
  //   });
  // }, []); // Empty dependency array to run the effect only once


  function myfunc() {
    document.body.classList.toggle("light-mode");
  }
  function myfunc2(event) {
    const button = event.target;
    document.querySelector(".active-btn").classList.remove("active-btn");
    button.classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(button.dataset.id).classList.add("active");
  }

  return (
    <>
      <div className="main-content">
        <header className="container header active" id="home">
          <div className="header-content">

            <div className="right-header">
              <h1 className="name">
                Hi, I'm <span>Sonali Nandi</span>
              </h1>
              <p> I'm a passionate engineering student ,web developer and a coder.I have a strong foundation in
                programming languages such as C/C++,Python,javascript and have experience building websites from
                scratch.

              </p>
              <div className="btn-con">
                <a href="https://drive.google.com/file/d/113P8DnCh4U2QaTZlD0oRdAOqGCEygwas/view?usp=sharing" className="main-btn">
                  <span className="btn-text"> Download CV</span>
                  <span className="btn-icon"><i className="fas fa-download"></i></span>
                </a>
              </div>
            </div>
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <img src="./images/img2.jpg" alt="" />
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="container about" id="about">
            <div className="main-title">
              <h2>About <span>me</span></h2>
            </div>
            {/* <div className="about-container" /> */}
            <div className="left-about">
              <h4>Information About me</h4>

              <p>
                As a computer science and engineering student at NIT Durgapur, I have discovered my passion for
                web development and coding. What sets me apart is my unwavering commitment to developing
                innovative solutions that not only meet the needs of users, but also enhance their experience.

                My coding expertise lies in languages such as HTML, CSS, and JavaScript, and I have used my
                skills to build responsive and visually appealing websites. However, what truly drives me is the
                ability to make a difference in people's lives through technology. I am always looking for ways
                to improve user experience and make websites more accessible and inclusive.

                Beyond my technical skills, I possess strong interpersonal and communication skills that allow
                me to work effectively in teams and with clients. I thrive in fast-paced environments and can
                adapt quickly to changing priorities and requirements.

              </p>
              <div className="btn-con">
                <a href="https://drive.google.com/file/d/113P8DnCh4U2QaTZlD0oRdAOqGCEygwas/view?usp=sharing" className="main-btn">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon"><i className="fas fa-download"></i></span>
                </a>
              </div>

            </div>
            <div className="about-stats">
              <h4 className="stat-title">My Skills</h4>
              <div className="progress-bars">
                <div className="progress-bar">
                  <p className="prog-title">html5</p>
                  <div className="progress-con">
                    <p className="prog-text">85%</p>
                    <div className="progress">
                      <span className="html"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">css3</p>
                  <div className="progress-con">
                    <p className="prog-text">60%</p>
                    <div className="progress">
                      <span className="css"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">javascript</p>
                  <div className="progress-con">
                    <p className="prog-text">50%</p>
                    <div className="progress">
                      <span className="js"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">ReactJS</p>
                  <div className="progress-con">
                    <p className="prog-text">40%</p>
                    <div className="progress">
                      <span className="react"></span>
                    </div>
                  </div>
                </div>

                <div className="progress-bar">
                  <p className="prog-title">Python</p>
                  <div className="progress-con">
                    <p className="prog-text">30%</p>
                    <div className="progress">
                      <span className="python"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section className="container" id="portfolio">
            <div className="main-title">
              <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
              Here is some of my work that I've done in various programming languages.
            </p>
            <div className="portfolios">
              <div className="portfolio-item">
                <div className="image">
                  <img src="./images/img3.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="https://sonalinandi023.github.io/myMovie/" target="_blank" className="icon">
                      <i className="fab fa-github"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="./images/img4.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon" target="_blank" >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="./images/img1.jpg" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="https://sonalinandi023.github.io/myBook/" target="_blank" className="icon">
                      <i className="fab fa-github"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="./images/Project.png" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="https://sonalinandi023.github.io/myMovie/" target="_blank" className="icon">
                      <i className="fab fa-github"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src="./images/project1.png" alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="https://sonalinandi023.github.io/myMovie/" target="_blank" className="icon">
                      <i className="fab fa-github"></i>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container contact" id="contact">
            <div className="contact-container">
              <div className="main-title">
                <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
              </div>
              <div className="contact-content-con">
                <div className="left-contact">
                  <h4>Contact me here</h4>
                  <br />

                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Location : Mahatma Gandhi Avenue,Durgapur-713209,West Bengal,India.</span>
                      </div>

                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                      </div>
                      <p>
                        <span>: nandi.sonali023@gmail.com</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>Education</span>
                      </div>
                      <p>
                        <span>: Btech-NIT Durgapur</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>Mobile Number</span>
                      </div>
                      <p>
                        <span>: 9800944588</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-globe-asia"></i>
                        <span>Languages</span>
                      </div>
                      <p>
                        <span>: Bengali,English,Hindi</span>
                      </p>
                    </div>
                  </div>
                  <div className="contact-icons">
                    <div className="contact-icon">
                      <a href="https://instagram.com/sonali_nandi02?igshid=ZDdkNTZiNTM=" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>

                      <a href="https://www.linkedin.com/in/sonali-nandi-bb1399230" target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/sonalinandi023" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-contact">
                  <form action="" className="contact-form" id='myform'>
                    <div className="input-control i-c-2">
                      <input type="text" required placeholder="YOUR NAME" id='name' />
                      <input type="email" required placeholder="YOUR EMAIL" id='mail' />
                    </div>
                    <div className="input-control">
                      <input type="text" required placeholder="ENTER SUBJECT" id='subject' autoComplete='given-name' />
                    </div>
                    <div className="input-control">
                      <textarea name="" id="message" cols="15" rows="8" placeholder="Message Here..."></textarea>
                    </div>
                    <div className="submit-btn">
                      <a href="https://drive.google.com/file/d/113P8DnCh4U2QaTZlD0oRdAOqGCEygwas/view?usp=sharing" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                      </a>
                    </div>
                  </form >
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="controls">
          <div onClick={myfunc2} className="control active-btn" data-id="home">
            <i className="fas fa-home"></i>
          </div>
          <div onClick={myfunc2} className="control" data-id="about">
            <i className="fas fa-user"></i>
          </div>
          <div onClick={myfunc2} className="control" data-id="portfolio">
            <i className="fas fa-briefcase"></i>
          </div>

          <div onClick={myfunc2} className="control" data-id="contact">
            <i className="fas fa-envelope-open"></i>
          </div>
        </div>
        <div onClick={myfunc} className="theme-btn">
          <i className="fas fa-adjust"></i>
        </div>
      </div>

    </>
  );
}

export default App;
