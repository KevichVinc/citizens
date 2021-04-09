/* eslint-disable react/prop-types */
import React from 'react';
import 'element-theme-default';
import OptionResidents from './OptionResidents';

export default function OptionStreet(props) {
  const { citizens } = props;

  const sortedDistricts = [
    ...new Set(citizens.map((citizen) => citizen.groups[2].name)),
  ].sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  return (
    <ul>
      {sortedDistricts.map((district) => (
        <ul key={Math.random()}>
          {district}
          <OptionResidents district={district} citizens={citizens} />
        </ul>
      ))}
    </ul>
  );
}
