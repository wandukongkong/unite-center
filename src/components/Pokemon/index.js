import React from 'react'
import {animated, useSpring, to, config} from '@react-spring/web'
import {useGesture} from 'react-use-gesture'
import _ from 'lodash'

import './Pokemon.css'

const Pokemon = (props) => {

  return (
    <animated.div className={'pokemon'}>Pikachu</animated.div>
  )
}


export default Pokemon
