import React, {} from 'react'
import {useNavigate} from 'react-router-dom'
import {DataGrid} from '@mui/x-data-grid'

import './Home.css'

export default function Home() {
  const navigation = useNavigate();
  
  return (
    <div className='home-container'>
      <div className='pokemon-center' onClick={()=> navigation('randomPick')}></div>
    </div>
  )
}
 