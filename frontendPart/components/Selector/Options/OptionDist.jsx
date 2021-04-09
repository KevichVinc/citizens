/* eslint-disable react/prop-types */
import React from 'react';
import 'element-theme-default';
import OptionStreet from './OptionStreet';

export default function OptionDist(props) {
  const { citizens } = props;

  const sortedDistricts = [
    ...new Set(citizens.map((citizen) => citizen.groups[1].name)),
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
          <OptionStreet
            key={Math.random()}
            opType="street"
            citizens={citizens}
          />
        </ul>
      ))}
    </ul>
  );
}
