/* eslint-disable react/prop-types */
import React from 'react';
import 'element-theme-default';
import style from '../../../style.module.css';

export default function OptionResidents(props) {
  const { citizens, district } = props;

  const sortedResidents = [
    ...new Set(
      citizens.filter(
        (citizen) => citizen.groups[2].name === district,
      ),
    ),
  ].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return (
    <ul>
      {sortedResidents.map((resident) => (
        <ul>
          <div className={style.resident} key={Math.random()}>
            {resident.name}
            <span className={style.tooltiptext}>
              {`${resident.city.name}, ${resident.city.data}`}
            </span>
          </div>
        </ul>
      ))}
    </ul>
  );
}
