/* eslint-disable react/prop-types */
import React from 'react';
import 'element-theme-default';
import OptionDist from './OptionDist';

export default function OptionCity(props) {
  const { citizens, cities } = props;

  return (
    <ul>
      {cities
        .sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }

          if (a.name < b.name) {
            return -1;
          }

          return 0;
        })
        .map((city) => (
          <ul key={Math.random()}>
            {city.name}
            <OptionDist
              key={Math.random()}
              citizens={citizens.filter(
                (citizen) => citizen.city.name === city.name,
              )}
              opType="district"
            />
          </ul>
        ))}
    </ul>
  );
}
