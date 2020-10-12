import React from 'react';
import { Link } from 'react-router-dom';
import './MonthBar.css';

export default function MonthBar (props) {
  const classes = {
  }
  
  return (
    <div>
        <div className="relative w-2 h-20">    
            <p className="absolute bottom-auto h-4 uch-Earned"></p>
            <p className="absolute bottom-auto h-4 uch-Spent"></p>
            <p className="absolute bottom-0 h-4 uch-ROI"></p>
        </div>
        <span>{props.month}</span>
    </div>
  )
};

