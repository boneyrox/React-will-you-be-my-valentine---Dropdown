import React, { useState,useReducer } from "react";
import "./../styles/App.css";
import styled from 'styled-components'
import Dropdowns from './Dropdowns'
import Result from './Result';



function App() 
{
	// Do not alter/remove main div
	return (
	<Container id="main">
		<Dropdowns/>
		
	</Container>
	
	);
}

const Container=styled.div `
display:flex;


`


export default App;
