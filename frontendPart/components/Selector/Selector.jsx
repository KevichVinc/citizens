/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import React from 'react';
import 'element-theme-default';
import OptionDist from './Options/OptionDist';
import OptionCity from './Options/OptionCity';

export default function Option(props) {
  const { citizens, opType, cities } = props;

  switch (opType) {
    case 'district':
      return <OptionDist citizens={citizens} />;
    case 'city':
      return <OptionCity citizens={citizens} cities={cities} />;
    default:
      return null;
  }
}
