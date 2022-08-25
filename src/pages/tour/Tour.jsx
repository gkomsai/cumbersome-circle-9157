import React from 'react'
import styles from "./tour.module.css";
import Tourbuilding from './Tourbuilding';
import TourHeader from './TourHeader';

const Tour = () => {
  return (
    <div>
      <TourHeader/>
      <Tourbuilding/>
    </div>
  )
}

export default Tour