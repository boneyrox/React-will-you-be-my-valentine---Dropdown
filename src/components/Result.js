import _ from 'lodash';
import React from 'react'
import styled from 'styled-components'
import States from './States'
const Result = (props) => {

    const stateHead=props.State;
    const stateInfo = _.filter(States, (obj) => {
        return obj.name == stateHead
    }) 
    const cityHead = props.City;
    const cityInfo = _.filter(stateInfo[0].city, (obj) => {
        return obj.name == cityHead
    })
    const townHead = props.Town;
    const townInfo = _.filter(cityInfo[0].landmarks, (obj) => {
        return obj.name == townHead
    })
    console.log('state identified',cityInfo[0]);

    return (
        <>
            <Container>
                <Wrapper>
                    <h2>{stateHead}</h2>
                    <p>{stateInfo[0].description}</p>
                </Wrapper>
                <Wrapper>
                    <h2>{cityHead}</h2>
                    <p>{cityInfo[0].description}</p>
                </Wrapper>
                <Wrapper>
                    <h2>{townHead}</h2>
                    <p>{townInfo[0].description}</p>
                </Wrapper>
            </Container>
        </>
    )
}

const Container=styled.div `
display:flex;
flex-direction:column;
justify-content:space-between;
`


const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;

justify-content:space-between;
`
export default Result
