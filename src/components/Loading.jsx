import React from 'react'

import '../styles/Loading.scss';

import {ReactComponent as Icon} from '../images/spinner-solid.svg';

const Loading = ({marginTop = 0}) => (
   <div className="loading" style={{marginTop: marginTop}}>
      <span className="loading__text">Trwa ładowanie...</span>
      <Icon className="loading__icon" />
   </div>
)

export default Loading