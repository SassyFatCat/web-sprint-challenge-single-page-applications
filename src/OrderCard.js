import React from 'react';
import styled from 'styled-components';

const OrderCardDiv = styled.div`
    border: 1px solid black;
    background: ivory;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 2% 5%;
    margin: 2% 0;
`;

const ToppingsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`;

const InfoDiv = styled.div`
display: flex;
justify-content: space-around;
`;

export default function OrderCard(props) {

return (
    <OrderCardDiv>
        <h2>Congrats! Pizza is on it's way!</h2>
        <InfoDiv>
        <h3>Name: {props.data.name}</h3>
        <h3>Size: {props.data.size}</h3>
        <h3>Crust: {props.data.crust}</h3>
        <h3>Sauce: {props.data.sauce}</h3>
        <ToppingsDiv>
        <h3>Toppings:{props.data.toppings.map(x => {
            return <li>{x}</li>
        })}</h3></ToppingsDiv>
        <h3>Special Instructions: {props.data.specialInstructions}</h3>
        </InfoDiv>
    </OrderCardDiv>    

)    
}