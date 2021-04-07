import React from 'react'
import styled from 'styled-components'
import States from './States'
import { useState } from 'react';
import _ from 'lodash'
import Result from './Result';
const Dropdowns = () => {


    const [currentState, setCurrentstate] = useState(States[0].name)

    const [currentCity, setCurrentCity] = useState(States[0].city[0].name)
    const [cities, setCities] = useState(States[0].city)
    const [towns, setTowns] = useState(States[0].city[0].landmarks)
    const [currentTown, setCurrentTown] = useState(States[0].city[0].landmarks[0].name)


    function handleCity(val) {
        const value = _.filter(States, (obj) => {
            return obj.name == val
        })
        setCurrentCity(value[0].city[0].name)
        setCities(value[0].city)
        setCurrentTown(value[0].city[0].landmarks[0].name)
        setTowns(value[0].city[0].landmarks)
        console.log('city obj is: ', value[0].city[0].name);

    }

    function handleTown(val) {
        const value = _.filter(cities, (obj) => {
            return obj.name == val
        })
        setCurrentTown(value[0].landmarks[0].name)
        setTowns(value[0].landmarks)
        console.log('values of town:', value[0].landmarks);

    }

    function handleTownChange(e) {
        const val = e.target.value;
        setCurrentTown(val)
    }

    function handleCityChange(e) {
        const val = e.target.value;
        setCurrentCity(val)
        handleTown(val)
    }

    function handleClick(e) {
        const val = e.target.value;
        setCurrentstate(val)
        handleCity(val)
    }
    setTimeout(() => {
        console.log('current state', currentState);
        console.log('current city', currentCity);
        console.log('current town', currentTown);
    }, 2000)
    return (
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
            <ContainerMain>
                <Container>
                    <Wrapper>
                        <h3>States : </h3>
                        <select value={currentState} onChange={handleClick} id="state">
                            {
                                States.map((obj, id) => {
                                    const name = obj.name;
                                    return (
                                        <option key={id} value={id}>{name}</option>
                                    )
                                })
                            }

                        </select>
                    </Wrapper>
                    <Wrapper>
                        <h3>Cities : </h3>
                        <select onChange={handleCityChange} value={currentCity} id="city">
                            {
                                cities.map((obj, id) => {
                                    const name = obj.name;
                                    return (
                                        <option key={id} value={id}>{name}</option>
                                    )
                                })
                            }

                        </select>
                    </Wrapper>
                    <Wrapper>
                        <h3>Towns : </h3>
                        <select onChange={handleTownChange} value={currentTown} id="landmark">
                            {
                                towns.map((obj, id) => {
                                    const name = obj.name;
                                    return (
                                        <option key={id} value={id}>{name}</option>
                                    )

                                })
                            }

                        </select>
                    </Wrapper>

                </Container>
                <Container>
                    <Result State={currentState} City={currentCity} Town={currentTown} />
                </Container>
            </ContainerMain>
        </>
    )
}
const Container = styled.div`
display:flex;
justify-content:start;
flex-direction:column;
margin:10vh;
border-style:solid;
padding:2rem;


`
const Wrapper = styled.div`
display:flex;
width:30vw;
margin:1rem;
height:5vh;
align-items:center;


`

const ContainerMain = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
font-family: 'Rubik', sans-serif;
`
export default Dropdowns
