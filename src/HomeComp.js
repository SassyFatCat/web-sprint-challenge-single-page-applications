import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import img from './Assets/Pizza.jpg';

const HomeDiv = styled.div`
    background-image: url(${img});
    border: 1px solid black;
    height: 400px;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OrderButton = styled.button`
background-color: red;
color: white;
padding: 3%;
text-align: center;
`;


export default function HomeComp() {

const history = useHistory();

const orderNow = (event) => {
event.preventDefault();
history.push('/pizza')
}

return (
    <HomeDiv className="home">
        <h2>Lambda Pizzaria</h2>
        <OrderButton onClick={orderNow}>Order Now</OrderButton>
    
    
    </HomeDiv>
)
}