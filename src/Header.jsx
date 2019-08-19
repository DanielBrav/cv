import React from 'react';
import styles from './Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="logoAndName">
            <div className="logo">
              <svg fill="#BBC3C6" className="svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  viewBox="0 0 18.051 18.051">
                <g>
                  <g>
                    <path  d="M16.548,3.835c0.741,1.234,1.172,2.748,1.172,4.525c0,5.329-3.81,9.666-8.495,9.666
                      S0.73,13.69,0.73,8.36c0-1.605,0.352-2.992,0.962-4.157L0,0.817l5.424,2.687L5.405,3.63C5.061,5.833,2.852,6.202,2.83,6.205
                      l-0.127,0.02l-0.185-0.37C2.27,6.613,2.132,7.448,2.132,8.36c0,4.558,3.18,8.265,7.091,8.265s7.094-3.707,7.094-8.265
                      c0-1.098-0.193-2.091-0.549-2.966L16.548,3.835z M9.225,1.426c1.881,0,3.469,0.519,4.664,1.452l-1.263,0.626l0.019,0.126
                      c0.343,2.203,2.555,2.572,2.577,2.575l0.126,0.02l2.704-5.408l-2.809,1.391c-1.541-1.427-3.668-2.183-6.017-2.183
                      c-2.415,0-4.594,0.806-6.141,2.31l1.339,0.664C5.631,1.992,7.268,1.426,9.225,1.426z M5.324,10.626
                      c0,0.612,0.497,1.109,1.108,1.109c0.613,0,1.109-0.497,1.109-1.109c0-0.19-0.052-0.364-0.135-0.52l-1.553-0.42
                      C5.536,9.881,5.324,10.228,5.324,10.626z M11.898,14.368H6.552v0.523h5.346V14.368z M8.189,10.319L4.51,8.326v0.996l1.342,0.365
                      l1.553,0.419L8.189,10.319z M13.967,8.326l-3.678,1.993l0.881-0.24c-0.093,0.164-0.149,0.347-0.149,0.547
                      c0,0.612,0.495,1.109,1.109,1.109c0.61,0,1.107-0.497,1.107-1.109c-0.001-0.41-0.225-0.764-0.557-0.956l1.288-0.349V8.326z"/>
                  </g>
                </g>
              </svg>
           </div>
           <div className="name">
              Daniel Braverman
           </div>
           <div className="buttons">
              <div className="button">
                <div className="buttonText">
                  About
                </div>
              </div>
              <div className="button">
                <div className="buttonText">
                  CV
                </div>
              </div>
              <div className="button">
                <div className="buttonText">
                  Experience
                </div>
              </div>
              <div className="button">
                <div className="buttonText">
                  Contact
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    )
  }
}
