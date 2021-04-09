import React, { useEffect } from 'react';
import 'element-theme-default';
import { useSelector, useDispatch } from 'react-redux';

import * as appAC from './redux/actionCreators/profiles';
import Selector from './components/Selector/Selector';

import style from './style.module.css';

export default function App() {
  const dispatch = useDispatch();
  const citizens = useSelector((state) => state.citizens);
  const cities = useSelector((state) => state.cities);
  useEffect(() => dispatch(appAC.loadCitizens()), []);
  return (
    <div className={style.body}>
      <Selector opType="city" citizens={citizens} cities={cities} />
    </div>
  );
}
