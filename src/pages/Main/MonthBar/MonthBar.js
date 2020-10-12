import React from 'react';
import './MonthBar.css';

export default function MonthBar (props) {
  
  return (
    <div className="inline-block w-2 mx-2 text-center">
      <div className="w-2 h-20 text-center">    
        <p className="h-4 uch-Earned"></p>
        <p className="h-4 uch-Spent"></p>
        <p className="h-4 uch-ROI"></p>
      </div>
      <span className="text-center">{props.month}</span>
    </div>
  )
};
