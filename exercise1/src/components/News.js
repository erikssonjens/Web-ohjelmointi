import React from 'react';
import logo from './koira.JPG';

export default function News() {
  return (
            <div className="News-Container">
              <div className="News-item"> 
                  <h2>Ihmeellistä!</h2>          
                    <img src={logo} />
                    <li>Koira nukkuu kaiket päivät!</li>                         
              </div>
            </div>
);}
