import React, { useEffect } from 'react'
import {useSpring, a, useSpringRef} from '@react-spring/web'

import './ProfileComponent.css'

function ProfileComponet(props) {

  const api = useSpringRef();
  const {transform} = useSpring({
    to: {
      transform: 'perspective(600px) rotateY(180deg)',
    },
    from: {
      transform: 'perspective(600px) rotateY(0deg)',
    },
    config: { mass: 5, tension: 500, friction: 80 },
    ref: api
  })

  useEffect(()=>{
    // api.start();
  }, [props])
  
  return (
   <a.div className={'profile-back'} style={{
        backgroundImage: props.backgroundImage,
        transform
      }}>
  </a.div>
  )
}

export default ProfileComponet;


