import React, {useState} from 'react'
import _, { random } from 'lodash'

import ProfileComponent from '../../components/ProfileComponent/ProfileComponet'
import './RandomPick.css'
import pokemonList from '../../json/pokemon.json'

const RandomPick = () => {
    const [url, setUrl] = useState('');

    return (
        <div className='random-pick-container' onClick={()=> setUrl(_.shuffle(pokemonList)[0]['image'])}>
            <div className='random-pick-header'></div>
            <div className='random-pick-content'>
                <div className='random-team-area'>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                </div>
                <div className='random-team-area'>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                    <ProfileComponent></ProfileComponent>
                </div>
            </div>
        </div>
    )
}

export default RandomPick

