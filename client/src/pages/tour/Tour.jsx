import React from 'react'
import styles from "./tour.module.css";
import Tourbuilding from './Tourbuilding';
import TourHeader from './TourHeader';
import Visuals from './Visuals';

const Tour = () => {
  return (
    <div>
      <TourHeader/>
      <Tourbuilding/>
      <Visuals/>
    </div>
  )
}

export default Tour