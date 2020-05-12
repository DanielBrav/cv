import React, { Fragment } from 'react';
import classNames from 'classnames';
import styles from './Content.scss';
import hadera from './haderalogo.jpg';
import bgu from './bgulogo.png';
import atrinet from './atrinet.png';
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
import xquery from './xquery.jpg';

import aboutBG from './bg.jpg';
import expBG from './experience.jpeg';
import eduBG from './study.jpeg';
import skillsBG from './code.jpeg';
import contactBG from './contact.jpg';

import logotry from './log_try.png';

import facebook from './facebook.png';
import linkedin from './linkedin.png';
import github from './github.png';

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
      location: 0,
      aboutLoaded: undefined,
      expLoaded: undefined,
      eduLoaded: undefined,
      skillsLoaded: undefined,
      contactLoaded: undefined
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
      } else if(offset >= 4*height+120 && offset < 5*height+120) {
        if(location !== 4) {
          this.setState({ location: 4 });
        }
      }

    }).bind(this);

    const aboutBGLoader = new Image();
    aboutBGLoader.src = aboutBG;
    aboutBGLoader.onload = () => {
      this.setState({ aboutLoaded: aboutBG });
      console.log("about bg loaded")
    };

    const expBGLoader = new Image();
    expBGLoader.src = aboutBG;
    expBGLoader.onload = () => {
      this.setState({ expLoaded: expBG });
      console.log("exp bg loaded")
    };

    const eduBGLoader = new Image();
    eduBGLoader.src = eduBG;
    eduBGLoader.onload = () => {
      this.setState({ eduLoaded: eduBG });
      console.log("edu bg loaded")
    };

    const skillsBGLoader = new Image();
    skillsBGLoader.src = skillsBG;
    skillsBGLoader.onload = () => {
      this.setState({ skillsLoaded: skillsBG });
      console.log("skills bg loaded")
    };

    const contactBGLoader = new Image();
    contactBGLoader.src = contactBG;
    contactBGLoader.onload = () => {
      this.setState({ contactLoaded: contactBG });
      console.log("contact bg loaded")
    };

  }

  generateContact() {
    return (
      <div>
          <div className="contactInfo">
            {/*}
            <div className="phoneNumber">
              <div className="phoneSVG">
                <svg className="phone" fill="#003B46" viewBox="0 0 24 24"><path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/></svg>
              </div>
              <div className="theNumber">
                0543038394
              </div>
            </div>
          */}

           {/*}
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
            */}
        </div>
      </div>
    )
  }

  mindSVG() {
    return (
        <svg className="iconSVG" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="m453.265625 380.566406-18.140625-28.628906c-2.957031-4.667969-9.132812-6.050781-13.800781-3.097656-4.664063 2.957031-6.046875 9.136718-3.09375 13.800781l18.144531 28.632813c3.226562 5.09375 2.453125 11.863281-1.839844 16.101562-2.707031 2.671875-6.429687 4.007812-10.222656 3.667969-3.789062-.34375-7.214844-2.320313-9.40625-5.433594l-78.199219-111.214844-31.003906-73.960937v-8.691406c0-5.519532-4.476563-10-10-10-5.519531 0-10 4.480468-10 10v133.261718h-112.617187v-122.433594c0-.03125 0-.066406 0-.101562v-10.726562c0-5.519532-4.476563-10-10-10-5.523438 0-10 4.480468-10 10v8.792968l-30.957032 73.859375-78.203125 111.214844c-2.1875 3.109375-5.617187 5.089844-9.40625 5.429687-3.785156.339844-7.515625-.992187-10.222656-3.667968-4.292969-4.234375-5.066406-11.003906-1.839844-16.101563l69.496094-109.671875c.433594-.679687.777344-1.402344 1.035156-2.164062l29.71875-88.378906c10.46875-31.136719 39.578125-52.054688 72.425781-52.054688h68.566407c32.851562 0 61.957031 20.917969 72.425781 52.054688l29.722656 88.378906c.253906.761718.601563 1.484375 1.03125 2.164062l13.578125 21.433594c1.90625 3.003906 5.144531 4.648438 8.457031 4.648438 1.832032 0 3.683594-.503907 5.34375-1.554688 4.664063-2.957031 6.050782-9.136719 3.09375-13.800781l-12.933593-20.410157-29.335938-87.234374c-12.019531-35.75-43.511719-60.816407-80.316406-65.042969 10.882813-11.320313 17.597656-26.679688 17.597656-43.585938v-13.105469c0-34.707031-28.238281-62.945312-62.949219-62.945312-34.707031 0-62.945312 28.238281-62.945312 62.945312v13.105469c0 16.90625 6.710938 32.265625 17.597656 43.585938-36.804687 4.226562-68.296875 29.292969-80.320312 65.042969l-29.332032 87.234374-68.851562 108.652344c-8.230469 12.984375-6.257812 30.246094 4.6875 41.042969 4.96875 4.902344 11.285156 8.039063 18.035156 9.085937-.003906.011719-.007812.019532-.007812.027344-5.285156 14.136719-5.082032 29.628906.570312 43.621094 9.367188 23.191406 31.820313 37.65625 55.839844 37.65625 5.171875 0 10.421875-.671875 15.625-2.074219l129.101562-34.75 129.101563 34.75c5.203125 1.402344 10.449219 2.074219 15.625 2.074219 24.011719-.003906 46.46875-14.46875 55.835937-37.65625 5.652344-13.992188 5.855469-29.484375.574219-43.621094-.003906-.007812-.007812-.015625-.011719-.027344 6.75-1.046874 13.066407-4.183593 18.039063-9.085937 10.945313-10.792969 12.917969-28.054687 4.6875-41.042969zm-266.796875-317.621094c0-23.679687 19.265625-42.945312 42.949219-42.945312 23.679687 0 42.945312 19.265625 42.945312 42.945312v13.105469c0 23.683594-19.265625 42.949219-42.945312 42.949219-23.683594 0-42.949219-19.269531-42.949219-42.949219zm132.207031 240.179688c.277344.664062.628907 1.300781 1.042969 1.886719l56.402344 80.210937-70.417969-35.90625v-77.144531zm-179.5625 1.886719c.414063-.585938.761719-1.222657 1.039063-1.886719l12.933594-30.851562v77.066406l-70.378907 35.882812zm272.324219 161.84375c-7.605469 18.820312-28.121094 29.035156-47.722656 23.761719l-101.167969-27.234376c8.105469-6.390624 13.15625-16.273437 13.15625-27.0625 0-.375-.019531-.746093-.03125-1.117187l62.515625 14.765625c.773438.183594 1.546875.269531 2.308594.269531 4.53125 0 8.636718-3.101562 9.722656-7.703125 1.269531-5.375-2.058594-10.761718-7.433594-12.03125l-74.785156-17.664062c-.59375-.140625-1.191406-.214844-1.785156-.246094-1.109375-1.160156-2.296875-2.265625-3.582032-3.28125-8.304687-6.570312-18.980468-8.941406-29.289062-6.511719l-117.296875 27.703125c-5.375 1.269532-8.703125 6.65625-7.433594 12.03125s6.652344 8.703125 12.03125 7.433594l117.292969-27.703125c4.328125-1.023437 8.804688-.027344 12.285156 2.730469 3.484375 2.757812 5.480469 6.886718 5.480469 11.324218 0 6.519532-4.398437 12.253907-10.691406 13.949219l-17.804688 4.792969c-.210937.046875-.414062.105469-.617187.164062l-131.472656 35.386719c-19.601563 5.277344-40.117188-4.9375-47.722657-23.757812-7.859375-19.464844.3125-41.335938 19.011719-50.871094l99.988281-50.980469h126.042969l99.988281 50.980469c18.699219 9.539063 26.875 31.40625 19.011719 50.871094zm0 0"/><path d="m399.621094 333.78125c1.953125 1.957031 4.515625 2.9375 7.082031 2.9375 2.554687 0 5.109375-.972656 7.0625-2.921875l.371094-.367187c3.910156-3.902344 3.917969-10.234376.015625-14.144532-3.898438-3.910156-10.230469-3.917968-14.140625-.019531l-.371094.371094c-3.910156 3.902343-3.917969 10.234375-.019531 14.144531zm0 0"/></svg>
    );
  };

  bookSVG() {
    return (
      <svg svg className="iconSVG" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M240,356.071V132.12c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v223.951c0,4.143,3.357,7.5,7.5,7.5
            S240,360.214,240,356.071z"/>
          <path d="M457.5,75.782c-15.856,0-35.614-6.842-56.533-14.085c-26.492-9.174-56.521-19.571-87.663-19.571
            c-36.035,0-58.019,15.791-70.115,29.038c-4.524,4.956-8.03,9.922-10.688,14.327c-2.658-4.405-6.164-9.371-10.688-14.327
            c-12.097-13.247-34.08-29.038-70.115-29.038c-31.143,0-61.171,10.397-87.663,19.571C43.114,68.94,23.356,75.782,7.5,75.782
            c-4.143,0-7.5,3.357-7.5,7.5v302.092c0,4.143,3.357,7.5,7.5,7.5c18.38,0,39.297-7.243,61.441-14.911
            c25.375-8.786,54.136-18.745,82.755-18.745c24.54,0,44.403,8.126,59.038,24.152c2.792,3.058,7.537,3.273,10.596,0.48
            s3.273-7.537,0.48-10.596c-12.097-13.246-34.08-29.037-70.114-29.037c-31.143,0-61.171,10.397-87.663,19.571
            C46.298,369.931,29.396,375.782,15,377.422V90.41c16.491-1.571,34.755-7.896,53.941-14.539
            c25.375-8.786,54.136-18.745,82.755-18.745c57.881,0,73.025,45.962,73.634,47.894c0.968,3.148,3.876,5.298,7.17,5.298
            s6.202-2.149,7.17-5.298c0.146-0.479,15.383-47.894,73.634-47.894c28.619,0,57.38,9.959,82.755,18.745
            c19.187,6.644,37.45,12.968,53.941,14.539v287.012c-14.396-1.64-31.298-7.491-49.033-13.633
            c-26.492-9.174-56.521-19.571-87.663-19.571c-36.036,0-58.02,15.791-70.115,29.038c-2.793,3.06-2.578,7.803,0.48,10.596
            c3.06,2.793,7.804,2.578,10.596-0.48c14.635-16.027,34.498-24.153,59.039-24.153c28.619,0,57.38,9.959,82.755,18.745
            c22.145,7.668,43.062,14.911,61.441,14.911c4.143,0,7.5-3.357,7.5-7.5V83.282C465,79.14,461.643,75.782,457.5,75.782z"/>
          <path d="M457.5,407.874c-15.856,0-35.614-6.842-56.533-14.085c-26.492-9.174-56.521-19.571-87.663-19.571
            c-33.843,0-55.291,13.928-67.796,26.596l-26.017-0.001c-12.505-12.668-33.954-26.595-67.795-26.595
            c-31.143,0-61.171,10.397-87.663,19.571c-20.919,7.243-40.677,14.085-56.533,14.085c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5
            c18.38,0,39.297-7.243,61.441-14.911c25.375-8.786,54.136-18.745,82.755-18.745c24.54,0,44.403,8.126,59.038,24.152
            c1.421,1.556,3.431,2.442,5.538,2.442l32.454,0.001c2.107,0,4.117-0.887,5.538-2.442c14.635-16.027,34.498-24.153,59.039-24.153
            c28.619,0,57.38,9.959,82.755,18.745c22.145,7.668,43.062,14.911,61.441,14.911c4.143,0,7.5-3.357,7.5-7.5
            S461.643,407.874,457.5,407.874z"/>
        </g>
      </svg>
    )
  }

  snookerSVG() {
    return (
        <svg className="iconSVG" viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-482c-60.367 0-117.12 23.508-159.806 66.194s-66.194 99.439-66.194 159.806 23.508 117.12 66.194 159.806 99.439 66.194 159.806 66.194 117.12-23.508 159.806-66.194 66.194-99.439 66.194-159.806-23.508-117.12-66.194-159.806-99.439-66.194-159.806-66.194z"/><path d="m256 389.751c-73.75 0-133.751-60-133.751-133.751s60-133.751 133.751-133.751 133.751 60 133.751 133.751-60.001 133.751-133.751 133.751zm0-237.502c-57.208 0-103.751 46.542-103.751 103.751s46.543 103.751 103.751 103.751 103.751-46.543 103.751-103.751-46.543-103.751-103.751-103.751z"/><path d="m314.881 284.417c0 25.822-23.083 42.058-57.903 42.058-34.625 0-57.512-16.236-57.512-42.058 0-14.671 7.629-25.626 20.735-32.277-10.172-6.26-15.845-15.845-15.845-28.169 0-24.061 21.518-39.124 52.621-39.124 31.494 0 53.012 15.063 53.012 39.124 0 12.324-5.869 21.909-16.041 28.169 13.304 6.651 20.933 17.606 20.933 32.277zm-32.081-.978c0-12.128-9.977-19.562-25.821-19.562-15.649 0-25.431 7.433-25.431 19.562s9.781 19.757 25.431 19.757c15.844 0 25.821-7.629 25.821-19.757zm-46.948-58.099c0 10.368 8.216 16.823 21.127 16.823 13.106 0 21.518-6.455 21.518-16.823 0-10.759-8.607-17.214-21.518-17.214-12.716 0-21.127 6.456-21.127 17.214z"/></svg>
    );
  };


  generateAbout() {
    return (
        <div className="aboutParagraph" ref={this.aboutRef}>
          <div>
            <div className="aboutContent">
              <div className="pre">
                <div className="speech-bubble brightB">
                  <div className="hi">Hi :)</div><br />
                  <div className="aboutWords">
                        My name is Daniel Braverman, I am 26 years old from Ramat Gan, Israel; I am a Full Stack Engineer with a B.Sc in Computer Science 
                        from Ben Gurion University of the Negev.
                        I am very motivated and hard working person that loves to face challanges, and software development
                        is my real passion. {/*<br />Hebrew is my mother tongue, and I am fluent in English and Russian.*/}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center', fontSize: '2vw', paddingTop: '3vw'}}>
              ◦◦◦
              </div>
              <div className="interests">
                <div className="interests-bubble brightG">
                  <b>Some of my interests</b>
                  <br /><br />
                  <div className="circles">
                    <div className="circle">
                      <div className="circleContent">
                        <div className="svg">
                          {this.snookerSVG()}
                        </div>
                        <div className="title">
                          SNOOKER
                        </div>
                      </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="circle">
                      <div className="circleContent">
                        <div className="svg">
                          {this.bookSVG()}
                        </div>
                        <div className="title">
                          READING
                        </div>
                      </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="circle">
                      <div className="circleContent">
                        <div className="svg">
                          {this.mindSVG()}
                        </div>
                        <div className="title">
                          MINDFULNESS
                        </div>
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

  generateEducation() {
    const { location } = this.state;
    const hide = location === -1 ? "hidden" : "visible";
    const educationParagraph = classNames("educationParagraph", "eduBg");
    const educationContent = classNames("educationContent", "blackScreenPar");
    return (
      <div className={educationParagraph} ref={this.educationRef}
          style={{ backgroundImage: `url(${eduBG})` }}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              EDUCATION
            </div>
            <br />

            <div className="lineItem">
              <div className="speech-bubble brightB" style={{ display: 'flex' }}>
                <div className="theLogo">
                  <img src={bgu} className="someLogo" />
                </div>
                <div className="theWords">
                  <b>2016 - 2020: B.Sc, Computer Science, Ben Gurion University of the Negev.</b>
                </div>
              </div>
            </div>
            <div className="lineItem" style={{ paddingLeft: '35vw' }}>
              <div className="interests-bubble brightH" style={{ display: 'flex' }}>
                <div className="theLogo">
                  <img src={hadera} className="someLogo" />
                </div>
                <div className="theWords">
                  <b>2008 - 2011: Tichon Hadera high school, majoring Computer Science and Chemistry.</b>
                </div>
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
    const educationContent = classNames("educationContent");
    return (
      <Fragment>
      <div style={{ textAlign: 'center', fontSize: '3vw', paddingTop: '', color: 'black' }}>
      ◦◦◦
      </div>
      <div className={educationParagraph} ref={this.experienceRef}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              Experience
            </div>
            {/*<div className="subTitle">
              <i><u>Working experience</u></i>
    </div>*/}
            
            <div style={{ display: 'flex' }}>
              <div className="lineItem">
                <div className="expItem" style={{ display: 'flex' }}>
                  <div className="theLogo">
                    <img src={atrinet} className="someLogo" />
                  </div>
                  <div className="theWords">
                    <b>2019 - Current: Full Stack Engineer (Atrinet):</b>
                    <br />
                    › Took part of developing a Web UI from scratch with Angular and React.<br />
                    › Designed and developed efficient and maintainable software in Java, both client and server side.<br />
                    › Implemented REST API using Spring boot.<br />
                    › Wrote NMS Data Collectors in Python.<br />
                    › Wrote Data Migration software using XQuery.
                  </div>
                </div>
              </div>

              
              <div className="lineItem">
                <div className="expItem" style={{ display: 'flex' }}>
                  <div className="theLogo">
                    <img src={bright} className="someLogo" />
                  </div>
                  <div className="theWords">
                    <b>2018: Ashalim solar power plant Control Room Operator (BrightSource):</b>
                    <br />
                    › Operation of solar field and power plant.<br />
                    › Taking part in the plant establishment process – tests, verifications, user interface improvement.<br />
                    › Real time problem solving and investigation of malfunctions.<br />
                    › Using a variety of computer systems and data bases.<br />
                    › Working in an international multicultural environment.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '3vw', paddingTop: '2vw' }}>
              ◦◦◦
            </div>

            <div style={{ display: 'flex' }}>
              <div className="lineItem">
                <div className="expItem">
                  <div className="theLogo">
                    <img src={nach} className="someLogo" />
                  </div>
                  <div className="theWords">
                    <b>2016 - 2019: Private Tutor of Mathematics – 5 unit high school students</b>
                  </div>
                </div>
              </div>

              <div className="lineItem">
                <div className="expItem">
                  <div className="theLogo">
                    <img src={gs} className="someLogo" />
                  </div>
                  <div className="theWords">
                    <b>2014 - 2016: Shift manager and control room operator, Primor (as part of Gan Shmuel Foods INC.):</b><br />
                    › Shift managing: Task distribution to 3 team members and full responsibility over production.<br />
                    › Production floor management and maintenance using computer systems (Citect SCADA software).<br />
                    › Consistent interface with various departments – Packaging, Head food engineer, Laboratory, etc.<br />
                    › Conduction with senior executives – ongoing reports and presentation of results.<br />
                    
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="subTitle">
              <i><u>University projects (More projects can be seen in GitHub)</u></i>
              
            </div>
            <div className="lineItem" style={{ paddingTop: '5vh', paddingRight: '20vw' }}>
              <div className="speech-bubble brightB" style={{ display: 'flex' }}>
                <div className="theLogo">
                  <img src={linux} className="someLogo" />
                </div>
                <div className="theWords">
                  <b>Linux based Terminal</b> – An object-oriented system written in C++. The main goal of this project was to gain implementation experience in C++ while using classes, standard data structures and unique C++ properties such as the “Rule of 5”, Handling memory in C++ and avoiding memory leaks.
                </div>
              </div>
            </div>
            <div className="lineItem" style={{ paddingLeft: '30vw', paddingTop: '6vh' }}>
              <div className="interests-bubble brightG" style={{ display: 'flex' }}>
                <div className="theLogo">
                  <img src={bb} className="someLogo" />
                </div>
                <div className="theWords">
                  <b>Online Movie Rental Service</b> – Server and Client performed using a text-based communication, as the Server was implemented in Java and the Client was implemented in C++. The main topics of this project were server-client communication, concurrency and object-oriented programming in Java and C++.    
                </div>
              </div>
            </div>

            <div className="emptySpace" />
          </div>
        </div>
      </div>
      </Fragment>
    )
  }

  generateSkills() {
    const { location } = this.state;
    const hide = location === -1 ? "hidden" : "visible";
    const educationParagraph = classNames("educationParagraph", "skillsBg");
    const educationContent = classNames("educationContent", "blackScreenPar");
    return (
      <div className={educationParagraph} ref={this.skillsRef}
          style={{ backgroundImage: `url(${skillsBG})` }}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              CODING SKILLS
            </div>
            <br />
            <div className="lineItem">
              <div className="theLogo">
                Web development
              </div>
              <div className="theSkills">
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
              <div className="theSkills">
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
                    <div className="precentage7" /> 
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
              <div className="theSkills">
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

                <div className="someLogoSmall">
                  <div className="someLogoSmallWrap">
                    <div className="precentage8" /> 
                    <div className="smallLogoTitle">
                      XQuery
                    </div>
                    <div className="imageDiv">
                      <img src={xquery} className="imageSmall" alt="XQuery" />
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

  generateContactPage() {
    return (
        <div className="aboutParagraph" ref={this.contactRef}
            style={{ backgroundImage: `url(${contactBG})` }}>
          <div className="blackScreen">
            <div className="aboutContent">
              <div className="hi">You can contact me the following ways</div><br />
              <div className="contactWays">
                <div className="lineItemContact" onClick={() => {
                                                            window.open("https://www.facebook.com/daniel.braverman.3", "_blank");}}>
                  &nbsp;&nbsp;&nbsp;
                  <div className="theLogo">
                    <img src={facebook} className="someLogo" />
                  </div>
                  <div className="theWords">
                    <b>Facebook</b><br />
                    <br />&nbsp;&nbsp;<br />
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <div className="lineItemContact" onClick={() => {
                                                            window.open("https://www.linkedin.com/in/daniel-braverman-29601815a/", "_blank");}}>
                  &nbsp;&nbsp;&nbsp;
                  <div className="theLogo">
                    <img src={linkedin} className="someLogo" />
                  </div>
                  <div className="theWords">
                    <b>LinkedIn</b><br />
                    <br />&nbsp;<br />&nbsp;
                    <br />&nbsp;&nbsp;<br />
                  </div>
                </div>
              </div>
              <br />
              <div className="contactWays">
                
                  <div className="lineItemContact" onClick={() => {
                                                            window.open("https://github.com/danielbrav", "_blank");}}>
                    &nbsp;&nbsp;&nbsp;
                    <div className="theLogo">
                      <img src={github} className="someLogo" />
                    </div>
                    <div className="theWords">
                      <b>GitHub</b><br />
                      You can see personal projects and university projects
                      <br />&nbsp;&nbsp;&nbsp;<br />
                      <br />&nbsp;&nbsp;<br />
                    </div>
                  </div>
                
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                
              </div>
              <br />
              <b>Email address</b>: daniel.braverm@gmail.com <br />
              <b>Phone number</b>: (+972) 54 3038394
              
            </div>
        </div>
      </div>
    )
  }

  changePage(n) {
    switch(n) {
      case 0: window.scrollTo(0, this.aboutRef.current.offsetTop-5); break;
      case 1: window.scrollTo(0, this.experienceRef.current.offsetTop-5); break;
      case 2: window.scrollTo(0, this.educationRef.current.offsetTop-5); break;
      case 3: window.scrollTo(0, this.skillsRef.current.offsetTop-5); break;
      case 4: window.scrollTo(0, this.contactRef.current.offsetTop-5); break;
    }
  }

  generateHeader(black) {
    const { location } = this.state; 
    const hide = location === -1 ? "hidden" : "visible";
    const logoAndName = classNames("logoAndName", black ? "black" : "white");
    const slogan = classNames("slogan", black ? "sloganBlackBorder" : "sloganWhiteBorder");
    const buttons = classNames("buttons");
    const aboutButton = classNames(location === 0 ? "selected" : "buttonText");
    const eduButton = classNames(location === 2 ? "selected" : "buttonText");
    const expButton = classNames(location === 1 ? "selected" : "buttonText");
    const skillsButton = classNames(location === 3 ? "selected" : "buttonText");
    const contactButton = classNames(location === 4 ? "selected" : "buttonText");

    return (
        <div className={logoAndName}>

          {/*<div className="logoAndNameContact">
              {this.generateContact()}
    </div>*/}

          <div className="headlineAndButtons">
            <div className="headline">
                <div className="name">
                  DANIEL BRAVERMAN
                </div>
                <div className={slogan}></div>
            </div>
            <div className={buttons}>
                <div className="button">
                  <div className={aboutButton} onClick={() => this.changePage(0)}>
                    ABOUT
                  </div>
                </div>
                <div className="button">
                  <div className={expButton} onClick={() => this.changePage(1)}>
                    EXPERIENCE
                  </div>
                </div>
                <div className="button">
                  <div className={eduButton} onClick={() => this.changePage(2)}>
                    EDUCATION
                  </div>
                </div>
                <div className="button">
                  <div className={skillsButton} onClick={() => this.changePage(3)}>
                    CODING SKILLS
                  </div>
                </div>
                <div className="button">
                  <div className={contactButton} onClick={() => this.changePage(4)}>
                    CONTACT
                  </div>
                </div>
                {/*<div className="phoneNumber">
                  <div className="phoneSVG">
                    <svg className="phone" fill="#003B46" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z"/></svg>
                  </div>
                  <div className="theNumber">
                    &nbsp;Download CV
                  </div>
                </div>
  */}
            </div>
          </div>
        </div>
    )
  }

  whichHeader(location) {
    switch(location) {
      case 0: return this.generateHeader(true);
      case -1: return "";
      default: return this.generateHeader(true);
    }
  }

  generateLoading() {
    return(
      <div class="lds-circle">
          <div class="spinnerInner">
              <div class="spinnerText">
                <div>
                  LOADING
                </div>
                <div style={{ fontSize: '1vw'}}>
                  Please wait
                </div>
              </div>
          </div>
      </div>
    )
  }

  render() {
    const { location } = this.state; 

    const { aboutLoaded, expLoaded, eduLoaded, skillsLoaded } = this.state;
    let allLoaded = true;
    if(aboutLoaded === undefined || expLoaded === undefined 
      || eduLoaded === undefined || skillsLoaded === undefined)
    {
      allLoaded = false;
    }
    return (
      <div>
        <div className="loading" style={{ position: 'fixed', zIndex: allLoaded ? '0': '100000',
                                          visibility: allLoaded ? 'hidden' : 'visible' }}>
          <div className="loadingInner">
            {this.generateLoading()}
          </div>
        </div>
        <div className="contentWrapper"
               style={{ opacity: allLoaded ? '1' : '0.3' }}>

          {this.whichHeader(location)}

          {this.generateAbout()}
        
          {this.generateExperience()}

          {this.generateEducation()}

          {this.generateSkills()}

          {this.generateContactPage()}
        </div>
      </div>
    )
  }
}
