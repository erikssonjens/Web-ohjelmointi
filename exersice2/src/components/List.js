import React from 'react';

export default function List(props) {
  return <div className="listaSisalto" >
          <ul className="lista">
            {props.List.map((item,index )=> {
              return <li className="sisal" key={index}>{item.qty} {item.name}</li>
            }
            )}

          </ul>

  
  </div>

  
  ;
}
