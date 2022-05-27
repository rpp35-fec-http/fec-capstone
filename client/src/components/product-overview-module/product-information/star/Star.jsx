import * as React from 'react';
import './Star.scss';

const SvgComponent = (props) => {
   return (
      <svg
         id='star'
         width='100%'
         height='100%'
         viewBox='0 0 800 600'
         xmlns='http://www.w3.org/2000/svg'
         xmlnsXlink='http://www.w3.org/1999/xlink'
         xmlSpace='preserve'
         style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 1.5,
         }}
         {...props}
      >
         {props.rating > 0 && (
            <path
               id='star-1'
               d='M271,411.75L271,544.781L214.419,585.89L271,411.75ZM271,229.091L271,354.429L98.487,229.091L271,229.091Z'
               style={{
                  fill: 'rgb(255,187,0)',
               }}
            />
         )}
         {props.rating >= 0.5 && (
            <g
               id='star-2'
               transform='matrix(1.40897,0,0,1.40897,-67.8922,-240.585)'
            >
               <path
                  d='M333.5,174L333.5,487.015L240.525,554.565L240.525,460.148L251.219,427.235L240.525,419.465L240.525,330.508L282.648,330.508L333.5,174Z'
                  style={{
                     fill: 'rgb(255,187,0)',
                  }}
               />
            </g>
         )}
         {props.rating >= 0.75 && (
            <g
               id='star-3'
               transform='matrix(-1.40897,0,0,1.40897,871.89,-235.271)'
            >
               <path
                  d='M333.5,174L333.5,487.015L240.525,554.565L240.525,460.148L251.219,427.235L240.525,419.465L240.525,330.508L282.648,330.508L333.5,174Z'
                  style={{
                     fill: 'rgb(255,187,0)',
                  }}
               />
            </g>
         )}
         {props.rating >= 1 && (
            <g id='star-4' transform='matrix(-1,0,0,1,803.998,0)'>
               <path
                  d='M271,411.75L271,544.781L214.419,585.89L271,411.75ZM271,229.091L271,354.429L98.487,229.091L271,229.091Z'
                  style={{
                     fill: 'rgb(255,187,0)',
                  }}
               />
            </g>
         )}
         <g transform='matrix(1.40897,0,0,1.40897,-67.8922,-236.585)'>
            <path
               d='M333.5,174L384.352,330.508L548.914,330.508L415.781,427.235L466.633,583.742L333.5,487.015L200.367,583.742L251.219,427.235L118.086,330.508L282.648,330.508L333.5,174Z'
               style={{
                  fill: 'none',
                  stroke: 'black',
                  strokeWidth: '5.68px',
               }}
            />
         </g>
      </svg>
   );
};

export default SvgComponent;
