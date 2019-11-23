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

  bbSVG() {
    return (
      <svg className="bigIconSVG" viewBox="0 0 24 24"><path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
    )
  }

  linuxSVG() {
    return (
      <svg className="bigIconSVG" viewBox="0 0 130 130">
        <path d="M113.823 104.595c-1.795-1.478-3.629-2.921-5.308-4.525-1.87-1.785-3.045-3.944-2.789-6.678.147-1.573-.216-2.926-2.113-3.452.446-1.154.864-1.928 1.033-2.753.188-.92.178-1.887.204-2.834.264-9.96-3.334-18.691-8.663-26.835-2.454-3.748-5.017-7.429-7.633-11.066-4.092-5.688-5.559-12.078-5.633-18.981-.036-3.166-.41-6.38-1.081-9.475-1.313-6.04-4.549-10.763-10.418-13.296-4.497-1.942-9.152-2.327-13.901-1.084-6.901 1.805-11.074 6.934-10.996 14.088.074 6.885.417 13.779.922 20.648.288 3.893-.312 7.252-2.895 10.34-2.484 2.969-4.706 6.172-6.858 9.397-1.229 1.844-2.317 3.853-3.077 5.931-2.07 5.663-3.973 11.373-7.276 16.5-1.224 1.9-1.363 4.026-.494 6.199.225.563.363 1.429.089 1.882-2.354 3.907-5.011 7.345-10.066 8.095-3.976.591-4.172 1.314-4.051 5.413.1 3.337.061 6.705-.28 10.021-.363 3.555.008 4.521 3.442 5.373 7.924 1.968 15.913 3.647 23.492 6.854 3.227 1.365 6.465.891 9.064-1.763 2.713-2.771 6.141-3.855 9.844-3.859 6.285-.005 12.572.298 18.86.369 1.702.02 2.679.653 3.364 2.199.84 1.893 2.26 3.284 4.445 3.526 4.193.462 8.013-.16 11.19-3.359 3.918-3.948 8.436-7.066 13.615-9.227 1.482-.619 2.878-1.592 4.103-2.648 2.231-1.922 2.113-3.146-.135-5zm-51.397-80.475c.758-2.601 2.537-4.289 5.243-4.801 2.276-.43 4.203.688 5.639 3.246 1.546 2.758 2.054 5.64.734 8.658-1.083 2.474-1.591 2.707-4.123 1.868-.474-.157-.937-.343-1.777-.652.708-.594 1.154-1.035 1.664-1.382 1.134-.772 1.452-1.858 1.346-3.148-.139-1.694-1.471-3.194-2.837-3.175-1.225.017-2.262 1.167-2.4 2.915-.086 1.089.095 2.199.173 3.589-3.446-1.023-4.711-3.525-3.662-7.118zm-12.75-2.251c1.274-1.928 3.197-2.314 5.101-1.024 2.029 1.376 3.547 5.256 2.763 7.576-.285.844-1.127 1.5-1.716 2.241l-.604-.374c-.23-1.253-.276-2.585-.757-3.733-.304-.728-1.257-1.184-1.919-1.762-.622.739-1.693 1.443-1.757 2.228-.088 1.084.477 2.28.969 3.331.311.661 1.001 1.145 1.713 1.916l-1.922 1.51c-3.018-2.7-3.915-8.82-1.871-11.909zm37.664 64.206c-.203 2.604-.5 2.713-3.118 3.098-1.859.272-2.359.756-2.453 2.964-.108 2.581-.101 5.171-.012 7.753.061 1.77-.537 3.158-1.755 4.393-6.764 6.856-14.845 10.105-24.512 8.926-4.17-.509-6.896-3.047-9.097-6.639.98-.363 1.705-.607 2.412-.894 3.122-1.27 3.706-3.955 1.213-6.277-1.884-1.757-3.986-3.283-6.007-4.892-1.954-1.555-3.934-3.078-5.891-4.629-1.668-1.323-2.305-3.028-2.345-5.188-.094-5.182.972-10.03 3.138-14.747 1.932-4.209 3.429-8.617 5.239-12.885.935-2.202 1.906-4.455 3.278-6.388 1.319-1.854 2.134-3.669 1.988-5.94-.084-1.276-.016-2.562-.016-3.843l.707-.352c1.141.985 2.302 1.949 3.423 2.959 4.045 3.646 7.892 3.813 12.319.67 1.888-1.341 3.93-2.47 5.927-3.652.497-.294 1.092-.423 1.934-.738 2.151 5.066 4.262 10.033 6.375 15 1.072 2.524 1.932 5.167 3.264 7.547 2.671 4.775 4.092 9.813 4.07 15.272-.012 2.83.137 5.67-.081 8.482z"></path>
      </svg>
    )
  }

  nachSVG() {
    return (
      <svg className="bigIconSVG" viewBox="0 0 24 24"><path d="M6 3.447h-1v-1.447h19v16h-7.731l2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.732v-1h8v-1h3v1h3v-14h-17v.447zm2.242 17.343c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm16.476 1.005h-5v-1h5v1zm2-2h-7v-1h7v1zm-15.727-4.994c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 1.994h-7v-1h7v1z"/></svg>
    );
  }

  primorSVG() {
    return (
      <svg className="bigIconSVG" viewBox="0 0 24 24"><path d="M24 24h-24v-18h6v6l6-4v4.008l6-4.008v4.017l6-4.017v16zm-20-16h-2v14h20v-10l-6 4v-4l-6 4v-4l-6 4v-8zm11 12h-2v-3h2v3zm-4 0h-2v-3h2v3zm-4 0h-2v-3h2v3zm12 0h-2v-3h2v3zm-16-15h-1c.198-2.182 1.785-4 3.5-4 .246 0 .478.059.683.164.316-.687 1.011-1.164 1.817-1.164s1.501.477 1.817 1.164c.205-.105.437-.164.683-.164.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5c-.246 0-.478-.059-.683-.164-.316.687-1.011 1.164-1.817 1.164-2.345 0-3.722-2.951-5 0z"/></svg>
    )
  }

  brightSVG() {
    return (
      <svg className="bigIconSVG" viewBox="0 0 200 200">
        <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M210 1682 l0 -47 306 -305 c169 -168 304 -298 301 -290 -3 8 -27 65
        -52 125 -67 157 -151 356 -192 455 -19 47 -40 91 -45 98 -8 9 -53 12 -164 12
        l-154 0 0 -48z"/>
        <path d="M590 1720 c0 -14 270 -653 281 -664 5 -6 9 127 9 332 l0 342 -145 0
        c-90 0 -145 -4 -145 -10z"/>
        <path d="M931 1333 c0 -263 2 -294 14 -268 22 47 235 553 235 558 0 3 -56 6
        -125 6 l-125 2 1 -298z"/>
        <path d="M1231 1608 c-5 -13 -19 -45 -31 -73 -12 -27 -59 -138 -105 -245 -45
        -107 -90 -213 -99 -235 -14 -33 34 11 258 235 249 247 276 278 276 307 l0 33
        -145 0 c-142 0 -146 -1 -154 -22z"/>
        <path d="M207 1551 c-1 -3 -1 -79 1 -167 l3 -162 112 -47 c62 -26 148 -63 192
        -82 44 -19 96 -41 115 -48 19 -7 62 -25 95 -40 50 -22 57 -24 43 -8 -62 68
        -559 560 -561 554z"/>
        <path d="M1273 1236 c-134 -134 -243 -246 -243 -248 0 -3 69 23 153 59 83 35
        196 83 250 105 l97 41 0 143 c0 79 -3 144 -7 143 -5 0 -117 -109 -250 -243z"/>
        <path d="M208 1081 c-2 -47 -2 -101 0 -118 l3 -33 277 1 c212 0 271 3 252 11
        -38 17 -94 41 -230 98 -69 29 -164 69 -212 90 l-87 38 -3 -87z"/>
        <path d="M1305 1044 c-110 -47 -213 -91 -230 -99 -26 -12 -1 -13 213 -14 l242
        -1 0 100 c0 74 -3 100 -12 99 -7 0 -103 -39 -213 -85z"/>
        <path d="M297 873 c-13 -12 -8 -193 5 -193 12 0 305 121 412 170 l61 29 -236
        0 c-130 1 -239 -2 -242 -6z"/>
        <path d="M1088 853 c30 -14 102 -45 160 -70 242 -101 343 -143 347 -143 3 0 5
        54 5 120 l0 120 -282 -1 -283 -1 53 -25z"/>
        <path d="M747 809 c-9 -6 -75 -34 -146 -64 -71 -29 -144 -60 -163 -68 -18 -8
        -59 -27 -90 -40 l-58 -26 0 -135 c0 -75 3 -136 8 -136 4 0 115 108 247 240
        218 218 255 260 202 229z"/>
        <path d="M1030 818 c0 -2 127 -131 283 -286 l282 -282 3 162 c2 122 -1 163
        -10 170 -7 4 -62 28 -123 54 -60 25 -139 58 -175 74 -54 24 -198 86 -247 107
        -7 3 -13 3 -13 1z"/>
        <path d="M990 769 c0 -4 46 -114 101 -245 56 -132 121 -285 144 -342 23 -56
        44 -104 46 -106 2 -2 75 -6 162 -9 l157 -5 0 53 0 53 -305 304 c-168 167 -305
        300 -305 297z"/>
        <path d="M548 510 c-224 -227 -256 -263 -254 -287 l3 -28 140 -3 c127 -2 141
        -1 146 15 3 10 49 119 102 243 124 290 136 320 127 320 -4 0 -123 -117 -264
        -260z"/>
        <path d="M832 665 c-23 -55 -78 -183 -121 -285 l-79 -185 120 -3 c66 -1 122
        -1 125 1 2 2 2 132 1 288 l-3 283 -43 -99z"/>
        <path d="M933 416 l2 -348 133 -5 c73 -2 140 -2 147 1 11 4 5 26 -26 98 -22
        51 -86 201 -141 333 -55 132 -104 247 -109 255 -5 9 -8 -132 -6 -334z"/>
        </g>
        </svg>
    );
  }

  componentDidMount() {
    const height = window.innerHeight;
    window.onscroll = (function() {
      const offset = window.pageYOffset;
      const { location } = this.state;
      if(offset < height-300) {
        if(location !== 0) {
          this.setState({ location: 0 });
        }
      } else if(offset >= height-300 && offset < 2*height+100) {
        if(location !== 1) {
          this.setState({ location: 1 });
        }
      } else if(offset >= 2*height+100 && offset < 3*height-100) {
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

  mindSVG() {
    return (
        <svg className="iconSVG" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="m453.265625 380.566406-18.140625-28.628906c-2.957031-4.667969-9.132812-6.050781-13.800781-3.097656-4.664063 2.957031-6.046875 9.136718-3.09375 13.800781l18.144531 28.632813c3.226562 5.09375 2.453125 11.863281-1.839844 16.101562-2.707031 2.671875-6.429687 4.007812-10.222656 3.667969-3.789062-.34375-7.214844-2.320313-9.40625-5.433594l-78.199219-111.214844-31.003906-73.960937v-8.691406c0-5.519532-4.476563-10-10-10-5.519531 0-10 4.480468-10 10v133.261718h-112.617187v-122.433594c0-.03125 0-.066406 0-.101562v-10.726562c0-5.519532-4.476563-10-10-10-5.523438 0-10 4.480468-10 10v8.792968l-30.957032 73.859375-78.203125 111.214844c-2.1875 3.109375-5.617187 5.089844-9.40625 5.429687-3.785156.339844-7.515625-.992187-10.222656-3.667968-4.292969-4.234375-5.066406-11.003906-1.839844-16.101563l69.496094-109.671875c.433594-.679687.777344-1.402344 1.035156-2.164062l29.71875-88.378906c10.46875-31.136719 39.578125-52.054688 72.425781-52.054688h68.566407c32.851562 0 61.957031 20.917969 72.425781 52.054688l29.722656 88.378906c.253906.761718.601563 1.484375 1.03125 2.164062l13.578125 21.433594c1.90625 3.003906 5.144531 4.648438 8.457031 4.648438 1.832032 0 3.683594-.503907 5.34375-1.554688 4.664063-2.957031 6.050782-9.136719 3.09375-13.800781l-12.933593-20.410157-29.335938-87.234374c-12.019531-35.75-43.511719-60.816407-80.316406-65.042969 10.882813-11.320313 17.597656-26.679688 17.597656-43.585938v-13.105469c0-34.707031-28.238281-62.945312-62.949219-62.945312-34.707031 0-62.945312 28.238281-62.945312 62.945312v13.105469c0 16.90625 6.710938 32.265625 17.597656 43.585938-36.804687 4.226562-68.296875 29.292969-80.320312 65.042969l-29.332032 87.234374-68.851562 108.652344c-8.230469 12.984375-6.257812 30.246094 4.6875 41.042969 4.96875 4.902344 11.285156 8.039063 18.035156 9.085937-.003906.011719-.007812.019532-.007812.027344-5.285156 14.136719-5.082032 29.628906.570312 43.621094 9.367188 23.191406 31.820313 37.65625 55.839844 37.65625 5.171875 0 10.421875-.671875 15.625-2.074219l129.101562-34.75 129.101563 34.75c5.203125 1.402344 10.449219 2.074219 15.625 2.074219 24.011719-.003906 46.46875-14.46875 55.835937-37.65625 5.652344-13.992188 5.855469-29.484375.574219-43.621094-.003906-.007812-.007812-.015625-.011719-.027344 6.75-1.046874 13.066407-4.183593 18.039063-9.085937 10.945313-10.792969 12.917969-28.054687 4.6875-41.042969zm-266.796875-317.621094c0-23.679687 19.265625-42.945312 42.949219-42.945312 23.679687 0 42.945312 19.265625 42.945312 42.945312v13.105469c0 23.683594-19.265625 42.949219-42.945312 42.949219-23.683594 0-42.949219-19.269531-42.949219-42.949219zm132.207031 240.179688c.277344.664062.628907 1.300781 1.042969 1.886719l56.402344 80.210937-70.417969-35.90625v-77.144531zm-179.5625 1.886719c.414063-.585938.761719-1.222657 1.039063-1.886719l12.933594-30.851562v77.066406l-70.378907 35.882812zm272.324219 161.84375c-7.605469 18.820312-28.121094 29.035156-47.722656 23.761719l-101.167969-27.234376c8.105469-6.390624 13.15625-16.273437 13.15625-27.0625 0-.375-.019531-.746093-.03125-1.117187l62.515625 14.765625c.773438.183594 1.546875.269531 2.308594.269531 4.53125 0 8.636718-3.101562 9.722656-7.703125 1.269531-5.375-2.058594-10.761718-7.433594-12.03125l-74.785156-17.664062c-.59375-.140625-1.191406-.214844-1.785156-.246094-1.109375-1.160156-2.296875-2.265625-3.582032-3.28125-8.304687-6.570312-18.980468-8.941406-29.289062-6.511719l-117.296875 27.703125c-5.375 1.269532-8.703125 6.65625-7.433594 12.03125s6.652344 8.703125 12.03125 7.433594l117.292969-27.703125c4.328125-1.023437 8.804688-.027344 12.285156 2.730469 3.484375 2.757812 5.480469 6.886718 5.480469 11.324218 0 6.519532-4.398437 12.253907-10.691406 13.949219l-17.804688 4.792969c-.210937.046875-.414062.105469-.617187.164062l-131.472656 35.386719c-19.601563 5.277344-40.117188-4.9375-47.722657-23.757812-7.859375-19.464844.3125-41.335938 19.011719-50.871094l99.988281-50.980469h126.042969l99.988281 50.980469c18.699219 9.539063 26.875 31.40625 19.011719 50.871094zm0 0"/><path d="m399.621094 333.78125c1.953125 1.957031 4.515625 2.9375 7.082031 2.9375 2.554687 0 5.109375-.972656 7.0625-2.921875l.371094-.367187c3.910156-3.902344 3.917969-10.234376.015625-14.144532-3.898438-3.910156-10.230469-3.917968-14.140625-.019531l-.371094.371094c-3.910156 3.902343-3.917969 10.234375-.019531 14.144531zm0 0"/></svg>
    );
  };

  bookSVG() {
    return (
      <svg className="iconSVG" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
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
        <div ref={this.aboutRef}>
          <div className="blackScreen">
            <div className="aboutContent">
              <div className="leftSide">
                <div className="hi">About me</div>
                <div className="aboutWords">
                    Hi! My name is Daniel Braverman; I am currently
                    pursuing a degree of Computer Science in Ben Gurion University of the Negev.
                    I am very motivated and hard working person that loves to face challanges, and software development
                    is my real passion. <br />Hebrew is my mother tongue, and I am fluent in English and Russian.

                </div>
                <div className="hi" style={{ paddingTop: '8vh' }}>Education</div>
                <div className="aboutWords">
                    I am currently in my 4<sup>th</sup> year towards Computer Science BSc.
                    in Ben Gurion University of the Negev.
                </div>
                <div className="hi" style={{ paddingTop: '8vh' }}>Interests</div>
                <div className="aboutWords">
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
                    &nbsp;&nbsp;
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
                    &nbsp;&nbsp;
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="rightSide">
                <div className="hi">Contact</div>
                <div className="aboutWords">
                  <div className="detailTitle">
                    General
                  </div>
                  <div className="contactDetailWrapper">
                    <div classNames="contactSVG">
                      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                    </div>
                    <div className="contactDetails" style={{ paddingTop: '0.3vw' }}>
                      &nbsp;Tel Aviv, Israel
                    </div>
                  </div>
                  <div className="contactDetailWrapper">
                    <div classNames="contactSVG">
                    <svg width="24" height="24" viewBox="0 0 24 24" style={{ paddingTop: '0.5vh'}}><path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/></svg>
                    </div>
                    <div className="contactDetails" style={{ paddingTop: '0.5vw' }}>
                      &nbsp;(+972) 54 30 38 394
                    </div>
                  </div>
                  <div className="contactDetailWrapper">
                    <div classNames="contactSVG">
                    <svg width="24" height="24" viewBox="0 0 24 24" style={{ paddingTop: '0.5vh'}}><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                    </div>
                    <div className="contactDetails" style={{ paddingTop: '0.3vw' }}>
                      &nbsp;daniel.braverm@gmail.com
                    </div>
                  </div>
                  <br />
                  <div className="detailTitle">
                    Social media
                  </div>
                  <div className="circles" style={{ paddingTop: '0.5vw'}}>
                    <div className="circleSmaller">
                      <div className="circleContent">
                        <div className="svg">
                          <svg className="smallerIconSVG" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                        </div>
                        <div className="title" style={{ fontSize: '0.9vw'}}>
                          Facebook
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="circleSmaller">
                      <div className="circleContent">
                        <div className="svg">
                          <svg className="smallerIconSVG" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <div className="title" style={{ fontSize: '0.9vw'}}>
                          LinkedIn
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="circleSmaller">
                      <div className="circleContent">
                        <div className="svg">
                          <svg className="smallerIconSVG" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                        </div>
                        <div className="title" style={{ fontSize: '0.9vw'}}>
                          GitHub
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
    const educationParagraph = classNames("educationParagraph");
    const educationContent = classNames("educationContent", "blackScreenPar");
    return (
      <div className={educationParagraph} ref={this.experienceRef}>
        <div className={educationContent}>
          <div className="eduWords">
            <div className="hi">
              Working experience
            </div>
            {/*<div className="subTitle">
              <i><u>Working experience</u></i>
            </div>*/}
            <div className="lineItem">
              <div className="theLogo">
                {/*<img src={bright} className="someLogo" />*/}
                <div className="circleBigger">
                  <div>
                    <div className="svg">
                        {this.brightSVG()}
                    </div>
                    <div className="title">
                      BrightSource
                    </div>
                  </div>
                </div>
              </div>
              <div className="theWords">
                2018 -  Ashalim solar power plant control room operator (BrightSource)<br /><br />
                • Operation of solar field and power plant.<br />
                • Taking part in the plant establishment process – tests, verifications, user interface improvement.<br />
                • Real time problem solving and investigation of malfunctions.<br />
                • Using a variety of computer systems and data bases.<br />
                • Working in an international multicultural environment.
              </div>
            </div>

            <div className="lineItem">
              <div className="theLogo">
                {/*<img src={nach} className="someLogo" />*/}
                <div className="circleBigger">
                  <div>
                    <div className="svg">
                        {this.nachSVG()}
                    </div>
                    <div className="title">
                      Nachshon
                    </div>
                  </div>
                </div>
              </div>
              <div className="theWords">
                2016-2019: Private tutor of Mathematics – 5 unit high school students
              </div>
            </div>
            <div className="lineItem">
              <div className="theLogo">
                {/*<img src={gs} className="someLogo" />*/}
                <div className="circleBigger">
                  <div>
                    <div className="svg">
                        {this.primorSVG()}
                    </div>
                    <div className="title">
                      Gan Shmuel Group
                    </div>
                  </div>
                </div>
              </div>
              <div className="theWords">
                2014-2016: Shift manager and control room operator, Primor (as part of Gan Shmuel Foods INC.)<br /><br />
                • Shift managing: Task distribution to 3 team members and full responsibility over production.<br />
                • Production floor management and maintenance using computer systems (Citect SCADA software).<br />
                • Consistent interface with various departments – Packaging, Head food engineer, Laboratory, etc.<br />
                • Conduction with senior executives – ongoing reports and presentation of results.<br />
                
              </div>
            </div>
            <br />
            <div className="hi">
              University projects
            </div>
            <div className="lineItem">
              <div className="theLogo">
                {/*<img src={linux} className="someLogo" />*/}
                <div className="circleBigger">
                  <div>
                    <div className="svg">
                        {this.linuxSVG()}
                    </div>
                    <div className="title">
                      Linux based terminal
                    </div>
                  </div>
                </div>
              </div>
              <div className="theWords">
                Linux based Terminal
                <br /><br />
                An object-oriented system written in C++. The main goal of this project was to gain implementation experience in C++ while using classes, standard data structures and unique C++ properties such as the “Rule of 5”, Handling memory in C++ and avoiding memory leaks.
              </div>
            </div>
            <div className="lineItem">
              <div className="theLogo">
                {/*<img src={bb} className="someLogo" />*/}
                <div className="circleBigger">
                  <div>
                    <div className="svg">
                        {this.bbSVG()}
                    </div>
                    <div className="title">
                      BlockBuster
                    </div>
                  </div>
                </div>
              </div>
              <div className="theWords">
                Online Movie Rental Service
                <br /><br />
                Server and Client performed using a text-based communication, as the Server was implemented in Java and the Client was implemented in C++. The main topics of this project were server-client communication, concurrency and object-oriented programming in Java and C++.    
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
    const educationParagraph = classNames("educationParagraph");
    const educationContent = classNames("educationContent", "blackScreen");
    return (
      <div className={educationParagraph} ref={this.skillsRef}>
        <div className={educationContent}>

          <div className="leftSide">
            <div className="eduWords">
              <div className="hi">
                Coding skills
              </div>

              <div className="detailTitle" style={{ paddingTop: '1vw', fontSize: '1vw', width: '10vw' }}>
                  Web development
              </div>

              <div className="lineItem">
                <div className="circles">
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage5" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        HTML
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage5" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        JavaScript
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage5" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        CSS
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage4" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        Angular
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage5" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        React
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        PHP
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="detailTitle" style={{ paddingTop: '1vw', fontSize: '1vw', width: '15vw' }}>
                  Programming languages
              </div>

              <div className="lineItem">
                <div className="circles">
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M116.5 32.3c-.6-1.1-1.4-2.1-2.3-2.6l-48.1-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48.5 27.8c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4v-55.7c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2l-47.6 27.8c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2l-48.2-27.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2v-55.7c1-.5.9-1.7 1.4-1.9l48.3-27.9c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 38.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        C
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M87 70v-5h5v-4h-5v-5h-5v5h-5v4h5v5zM105 56h-4v5h-6v4h6v5h4v-5h5v-4h-5zM116.5 32.3c-.6-1.1-1.4-2.1-2.3-2.6l-48.1-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48.5 27.8c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4v-55.7c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2l-47.6 27.8c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2l-48.2-27.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2v-55.7c1-.5.9-1.7 1.4-1.9l48.3-27.9c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6c-4.2 7.4-12.2 12.4-21.3 12.4z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        C++
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M109 50h-4.8l-1.2 6h-3.8l1.2-6h-4.9l-1.2 6h-5.3v5h4.4l-.9 4h-3.5v5h2.5l-1.2 6h4.8l1.2-6h3.8l-1.2 6h4.9l1.2-6h5v-5h-4.1l.9-4h3.2v-5h-2.2l1.2-6zm-7.9 15h-3.8l.9-4h3.8l-.9 4zM116.5 32.3c-.6-1.1-1.4-2.1-2.3-2.6l-48.1-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48.5 27.8c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4v-55.7c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2l-47.6 27.8c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2l-48.2-27.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2v-55.7c1-.5.9-1.7 1.4-1.9l48.3-27.9c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6c-4.2 7.4-12.2 12.4-21.3 12.4z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        C#
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zM80.806 87.66c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zM92.125 27.085c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zM102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644c-12.812 6.195 31.691 9.019 54.733 2.957zM90.609 93.041c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559 25.271-19.947 12.304-32.923 12.304-32.923 5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zM91.455 121.817c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        Java
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                        <path d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"></path><path d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"></path><path opacity=".444" fill="url(#c)" enable-background="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        Python
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 130 130">
                          <path id="plain" class="cls-1" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"></path>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        TypeScript
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 230 230">
                          <metadata>
                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                          </metadata>
                          <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" stroke="none">
                          <path d="M156 2238 c-57 -15 -129 -90 -144 -150 -17 -67 -17 -1859 0 -1926 16 -64 86 -134 150 -150 67 -17 1859 -17 1926 0 64 16 134 86 150 150 17 67 17 1859 0 1926 -16 64 -86 134 -150 150 -62 16 -1873 15 -1932 0z m999 -771 c81 -32 124 -79 140 -154 l7 -33 -64 0 c-61 0 -63 1 -78 33 -19 41 -52 57 -116 57 -63 0 -104 -27 -104 -70 0 -15 7 -33 15 -40 8 -6 72 -27 142 -46 182 -49 218 -80 218 -188 0 -114 -71 -180 -206 -192 -158 -15 -283 56 -291 168 l-3 33 61 3 c61 3 62 2 72 -28 13 -36 61 -60 122 -60 90 0 149 54 115 106 -16 24 -40 33 -166 59 -146 30 -199 78 -199 178 0 84 53 152 138 177 40 12 163 10 197 -3z m-499 -292 c57 -159 103 -296 103 -302 1 -9 -19 -13 -67 -13 l-69 0 -18 60 -18 61 -115 -3 -115 -3 -16 -55 -17 -55 -71 -3 -71 -3 38 103 c20 57 70 194 110 306 l73 203 75 -3 75 -3 103 -290z m990 66 c32 -126 61 -228 64 -226 3 2 28 105 55 229 l50 226 92 0 93 0 0 -305 0 -305 -60 0 -60 0 -2 242 -3 242 -54 -242 -54 -242 -66 0 -66 0 -55 245 -55 246 -3 -246 -2 -245 -60 0 -60 0 0 305 0 305 94 0 93 0 59 -229z"/><path d="M441 1218 c-19 -57 -36 -109 -38 -115 -4 -10 14 -13 72 -13 58 0 763 72 13 -2 6 -18 58 -36 115 -17 56 -33 102 -34 102 -2 0 -18 -46 -36 -102z"/>
                          </g>
                        </svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        Assembly
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detailTitle" style={{ paddingTop: '1vw', fontSize: '1vw', width: '15vw' }}>
                Data bases
              </div>

              <div className="lineItem">
                <div className="circles">
                  <div className="circleSmaller">
                    <div className="circleSmallerContent">
                      <div className="precentage3" /> 
                      <div className="svg" style={{ paddingTop: '1.2vw' }}>
                        <svg className="smallerIconSVG" viewBox="0 0 24 24"><path d="M12 3c-4.225 0-10 .969-10 4.221v9.559c0 3.252 6.209 4.22 10.008 4.22 3.783 0 9.992-.969 9.992-4.221v-9.558c0-3.253-5.973-4.221-10-4.221zm0 1.936c3.639 0 7.992.879 7.992 2.285 0 1.53-5.104 2.285-7.992 2.285-3.412 0-8.008-.876-8.008-2.285 0-1.533 4.813-2.285 8.008-2.285zm8 11.599c0 1.694-5.104 2.53-7.992 2.53-3.412 0-8.008-.97-8.008-2.53v-1.974c2.117 1.298 5.17 1.723 8.008 1.723 2.829 0 5.876-.425 7.992-1.723v1.974zm-8-2.19c-3.426 0-8.008-.974-8.008-2.53v-2.096c2.117 1.298 5.17 1.723 8.008 1.723 2.829 0 5.876-.425 7.992-1.723v2.096c0 1.697-5.131 2.53-7.992 2.53z"/></svg>
                      </div>
                      <div className="title" style={{ textAlign: 'center', fontSize: '0.9vw'}}>
                        SQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="detailTitle" style={{ paddingTop: '1vw', fontSize: '1vw', width: '10vw' }}>
              <b>Code Wars</b>
            </div>
            <div style={{ paddingTop: '0.6vw', fontSize: '1vw', width: '30vw'}}>
              <div>
              Code wars is a place to train and gain experience in coding in a veraity of languages.
              You are presented with challenges called Katas, and you need to implement it in the most
              clean and efficient way in order to win. I really enjoy coding in this site, and you are
              more than welcome to visit my personal page:
              </div>
              <a target="_blank" href="https://www.codewars.com/users/iDontLikeC">https://www.codewars.com/users/iDontLikeC</a>
              
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
     // case 1: window.scrollTo(0, this.educationRef.current.offsetTop); break;
      case 1: window.scrollTo(0, this.experienceRef.current.offsetTop); break;
      case 2: window.scrollTo(0, this.skillsRef.current.offsetTop); break;
    }
  }

  generateHeader(black) {
    const { location } = this.state; 
    const hide = location === -1 ? "hidden" : "visible";
    const logoAndName = classNames("logoAndName");
    const slogan = classNames("slogan");
    const buttons = classNames("buttons");
    const aboutButton = classNames(location === 0 ? "selected" : "buttonText");
   // const eduButton = classNames(location === 1 ? "selected" : "buttonText");
    const expButton = classNames(location === 1 ? "selected" : "buttonText");
    const skillsButton = classNames(location === 2 ? "selected" : "buttonText");

    return (
        <div className={logoAndName}>

          {/*<div className="logoAndNameContact">
              {this.generateContact()}
          </div>
          */}

          <div className="headlineAndButtons">
            <div className="headline">
                <div className="name">DANIEL BRAVERMAN</div>
                <div className={slogan}>Software developer.</div>
            </div>
            <div className={buttons}>
                <div className="button">
                  <div className={aboutButton} onClick={() => this.changePage(0)}>
                    ABOUT
                  </div>
                </div>
                {/*<div className="button">
                  <div className={eduButton} onClick={() => this.changePage(1)}>
                    EDUCATION
                  </div>
                </div>*/}
                <div className="button">
                  <div className={expButton} onClick={() => this.changePage(1)}>
                    EXPERIENCE
                  </div>
                </div>
                <div className="button">
                  <div className={skillsButton} onClick={() => this.changePage(2)}>
                    CODING SKILLS
                  </div>
                </div>

                <div className="button">
                  <div className="buttonText" onClick={() => this.changePage(3)}>
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


        {this.whichHeader(1)}

        {this.generateAbout()}

        {/*{this.generateEducation()}*/}

        {this.generateExperience()}

        {this.generateSkills()}
      </div>
    )
  }
}
