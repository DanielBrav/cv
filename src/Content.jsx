import React from 'react';
import classNames from 'classnames';
import styles from './Content.scss';
import hadera from './haderalogo.jpg';
import bgu from './bgulogo.png';
import bright from './bright.png';
import nach from './nach.jpg';
import gs from './gs.jpg';
import html from './html5.png';
import css from './css3.png';
import js from './js.png';
import angular from './angular.png';
import react from './react.png';
import php from './php.png';
import linux from './linux.jpg';
import bb from './bb.png';

import asm from './asm.png';
import c from './c.png';
import cpp from './cpp.png';
import csharp from './csharp.png';
import java from './java.png';
import python from './python.jpg';
import ts from './typescript.png';
import sql from './sql.jpg';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.educationRef = React.createRef();
    this.experienceRef = React.createRef();
    this.skillsRef = React.createRef();
    this.contactRef = React.createRef();
    this.props.setRefs(this.aboutRef, this.educationRef, this.experienceRef, this.contactRef);
    this.state = {
      page: 0,
      location: 0
    }
    this.loation = 0;
  }

  componentDidMount() {
    const height = window.innerHeight;
    window.onscroll = (function() {
      const offset = window.pageYOffset;
      const { location } = this.state;
      if(offset === 0) {
        if(location !== 0) {
          this.setState({ location: 0 });
        }
      } else if(offset < height-50) {
        if(location !== -1) {
          this.setState({ location: -1 });
        }

      } else if(offset >= height-100 && offset < 2*height-100) {
        if(location !== 1) {
          this.setState({ location: 1 });
        }
      } else if(offset >= 2*height-100 && offset < 3*height-100) {
        if(location !== 2) {
          this.setState({ location: 2 });
        }
      } else if(offset >= 3*height+120 && offset < 4*height+120) {
        if(location !== 3) {
          this.setState({ location: 3 });
        }
      }

    }).bind(this);
  }

  generateContact() {
    return (
      <div>
          <div className="contactInfo">
            <div className="phoneNumber">
              <div className="phoneSVG">
                <svg className="phone" fill="#003B46" viewBox="0 0 24 24"><path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/></svg>
              </div>
              {/*<div className="theNumber">
                0543038394
              </div>*/}
            </div>
            <div className="phoneNumber">
              <div className="phoneSVG">
                <svg className="email" fill="#003B46" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
              </div>
            </div>
            <div className="phoneNumber">
              <div className="phoneSVG">
                <svg className="linkedin" fill="#003B46" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
            <div className="phoneNumber">
              <div className="phoneSVG">
                <svg className="facebook" fill="#003B46" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
              </div>
            </div>
        </div>
      </div>
    )
  }

  generateAbout() {
    return (
        <div className="aboutParagraph" ref={this.aboutRef}>
          <div className="blackScreen">
            <div className="aboutContent">
              <div className="hi">Hello!</div><br />
              <div className="aboutWords">
                  My name is Daniel Braverman; I am currently
                  pursuing a degree of Computer Science in Ben Gurion University of the Negev.
                  I am very motivated and hard working person, and software development
                  is my real passion.
                  <br /><br /><br />
                  Some of my interests
                  <br /><br />
                  <div className="circles">
                    <div className="circle">
                      SNOOKER
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="circle">
                      READING
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="circle">
                      MINDFULNESS
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
  }

  generateEducation() {
    const { location } = this.state;
    const hide = location === -1 ? "hidden" : "visible";
    const educationParagraph = classNames("educationParagraph", "eduBg");
    const educationContent = classNames("educationContent", "blackScreenPar");
    return (
      <div className={educationParagraph} ref={this.educationRef}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              Education
            </div>
            <br />
            <div className="lineItem">
              <div className="theLogo">
                <img src={hadera} className="someLogo" />
              </div>
              <div className="theWords">
                2008-2011: Tichon Hadera high school, majoring Computer Science and Chemistry.
              </div>
            </div>

            <div className="lineItem">
              <div className="theLogo">
                <img src={bgu} className="someLogo" />
              </div>
              <div className="theWords">
                2016-present: Third year Computer Science B.Sc. student, Ben Gurion University.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  generateExperience() {
    const { location } = this.state;
    const hide = location === -1 ? "hidden" : "visible";
    const educationParagraph = classNames("educationParagraph", "expBg");
    const educationContent = classNames("educationContent", "blackScreenPar");
    return (
      <div className={educationParagraph} ref={this.experienceRef}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              Experience
            </div>
            <div className="subTitle">
              <i><u>Working experience</u></i>
            </div>
            <div className="lineItem">
              <div className="theLogo">
                <img src={bright} className="someLogo" />
              </div>
              <div className="theWords">
                2018 -  Ashalim solar power plant control room operator (BrightSource): <br />
                Operation of solar field and power plant.<br />
                Taking part in the plant establishment process – tests, verifications, user interface improvement.<br />
                Real time problem solving and investigation of malfunctions.<br />
                Using a variety of computer systems and data bases.<br />
                Working in an international multicultural environment.
              </div>
            </div>

            <div className="lineItem">
              <div className="theLogo">
                <img src={nach} className="someLogo" />
              </div>
              <div className="theWords">
                2016-2019: Private tutor of Mathematics – 5 unit high school students
              </div>
            </div>
            <div className="lineItem">
              <div className="theLogo">
                <img src={gs} className="someLogo" />
              </div>
              <div className="theWords">
                2014-2016: Shift manager and control room operator, Primor (as part of Gan Shmuel Foods INC.):<br />
                Shift managing: Task distribution to 3 team members and full responsibility over production.<br />
                Production floor management and maintenance using computer systems (Citect SCADA software).<br />
                Consistent interface with various departments – Packaging, Head food engineer, Laboratory, etc.<br />
                Conduction with senior executives – ongoing reports and presentation of results.<br />
                
              </div>
            </div>
            <br />
            <div className="subTitle">
              <i><u>University projects</u></i>
            </div>
            <div className="lineItem">
              <div className="theLogo">
                <img src={linux} className="someLogo" />
              </div>
              <div className="theWords">
                Linux based Terminal – An object-oriented system written in C++. The main goal of this project was to gain implementation experience in C++ while using classes, standard data structures and unique C++ properties such as the “Rule of 5”, Handling memory in C++ and avoiding memory leaks.
              </div>
            </div>
            <div className="lineItem">
              <div className="theLogo">
                <img src={bb} className="someLogo" />
              </div>
              <div className="theWords">
                Online Movie Rental Service – Server and Client performed using a text-based communication, as the Server was implemented in Java and the Client was implemented in C++. The main topics of this project were server-client communication, concurrency and object-oriented programming in Java and C++.    
              </div>
            </div>

            <div className="emptySpace" />
          </div>
        </div>
      </div>
    )
  }

  generateSkills() {
    const { location } = this.state;
    const hide = location === -1 ? "hidden" : "visible";
    const educationParagraph = classNames("educationParagraph", "skillsBg");
    const educationContent = classNames("educationContent", "blackScreenPar");
    return (
      <div className={educationParagraph} ref={this.skillsRef}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              Coding skills
            </div>
            <br />
            <div className="lineItem">
              <div className="theLogo">
                Web development
              </div>
              <div className="theWords">
                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      HTML 5
                    </div>
                    <div className="imageDiv">
                      <img src={html} className="imageSmall" alt="HTML5" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      JavaScript
                    </div>
                    <div className="imageDiv">
                      <img src={js} className="imageSmall" alt="JavaScript" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      CSS
                    </div>
                    <div className="imageDiv">
                      <img src={css} className="imageSmall" alt="CSS" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage7" /> 
                    <div className="smallLogoTitle">
                      Angular
                    </div>
                    <div className="imageDiv">
                      <img src={angular} className="imageSmall" alt="Angular" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      React
                    </div>
                    <div className="imageDiv">
                      <img src={react} className="imageSmall" alt="React" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage4" /> 
                    <div className="smallLogoTitle">
                      PHP
                    </div>
                    <div className="imageDiv">
                      <img src={php} className="imageSmall" alt="PHP" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* another line of programming languages */}
            <div className="lineItem">
              <div className="theLogo">
                Programming languages
              </div>
              <div className="theWords">
                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      C
                    </div>
                    <div className="imageDiv">
                      <img src={c} className="imageSmall" alt="C" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage7" /> 
                    <div className="smallLogoTitle">
                      C++
                    </div>
                    <div className="imageDiv">
                      <img src={cpp} className="imageSmall" alt="C++" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage2" /> 
                    <div className="smallLogoTitle">
                      C#
                    </div>
                    <div className="imageDiv">
                      <img src={csharp} className="imageSmall" alt="C#" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      Java
                    </div>
                    <div className="imageDiv">
                      <img src={java} className="imageSmall" alt="Java" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage4" /> 
                    <div className="smallLogoTitle">
                      Python
                    </div>
                    <div className="imageDiv">
                      <img src={python} className="imageSmall" alt="Python" />
                    </div>
                  </div>
                </div>

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage6" /> 
                    <div className="smallLogoTitle">
                      TypeScript
                    </div>
                    <div className="imageDiv">
                      <img src={ts} className="imageSmall" alt="TypeScript" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="someLogoSmall">
            
                <div className="someLogoSmallWrap">
                  <div className="precentage6" /> 
                  <div className="smallLogoTitle">
                    Assembly (x86)
                  </div>
                  <div className="imageDiv">
                    <img src={asm} className="imageSmall" alt="Assembley" />
                  </div>
                </div>
              </div>

            </div>   

            <div className="lineItem">
              <div className="theLogo">
                Databases
              </div>
              <div className="theWords">
                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      SQL
                    </div>
                    <div className="imageDiv">
                      <img src={sql} className="imageSmall" alt="SQL" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  generateContent() {
    const { page } = this.state;
    switch(page) {
      case 0: return this.generateAbout();
      case 3: return this.generateContact();
    }
  }

  changePage(n) {
    switch(n) {
      case 0: window.scrollTo(0, this.aboutRef.current.offsetTop); break;
      case 1: window.scrollTo(0, this.educationRef.current.offsetTop); break;
      case 2: window.scrollTo(0, this.experienceRef.current.offsetTop); break;
      case 3: window.scrollTo(0, this.skillsRef.current.offsetTop); break;
    }
  }

  generateHeader(black) {
    const { location } = this.state; 
    const hide = location === -1 ? "hidden" : "visible";
    const logoAndName = classNames("logoAndName", black ? "black" : "white");
    const slogan = classNames("slogan", black ? "sloganBlackBorder" : "sloganWhiteBorder");
    const buttons = classNames("buttons");
    const aboutButton = classNames(location === 0 ? "selected" : "buttonText");
    const eduButton = classNames(location === 1 ? "selected" : "buttonText");
    const expButton = classNames(location === 2 ? "selected" : "buttonText");
    const skillsButton = classNames(location === 3 ? "selected" : "buttonText");

    return (
        <div className={logoAndName}>

          <div className="logoAndNameContact">
              {this.generateContact()}
          </div>

          <div className="headlineAndButtons">
            <div className="headline">
                <div className="name">DANIEL BRAVERMAN,&nbsp;</div>
                <div className={slogan}>Software developer.</div>
            </div>
            <div className={buttons}>
                <div className="button">
                  <div className={aboutButton} onClick={() => this.changePage(0)}>
                    ABOUT
                  </div>
                </div>
                <div className="button">
                  <div className={eduButton} onClick={() => this.changePage(1)}>
                    EDUCATION
                  </div>
                </div>
                <div className="button">
                  <div className={expButton} onClick={() => this.changePage(2)}>
                    EXPERIENCE
                  </div>
                </div>
                <div className="button">
                  <div className={skillsButton} onClick={() => this.changePage(3)}>
                    CODING SKILLS
                  </div>
                </div>

                <div className="button">
                  <div className="buttonText" onClick={() => this.changePage(4)}>
                    CONTACT
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
  }

  whichHeader(location) {
    switch(location) {
      case 0: return this.generateHeader(false);
      case -1: return "";
      default: return this.generateHeader(true);
    }
  }

  render() {
    const { location } = this.state; 

    return (
      <div className="contentWrapper">


        {this.whichHeader(location)}

        {this.generateAbout()}

        {this.generateEducation()}

        {this.generateExperience()}

        {this.generateSkills()}
      </div>
    )
  }
}
