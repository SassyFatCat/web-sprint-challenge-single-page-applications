import React from 'react';
import styled from 'styled-components';
import OrderCard from './OrderCard'

const OrderHistoryDiv = styled.div`
    border: 1px solid black;
`;

export default function OrderHistory(props) {
const {orderHistory} = props;
return (
    <OrderHistoryDiv>
        <h1>Order History</h1>
        {orderHistory.map(x => {
            return <OrderCard data={x} />
        })}
    </OrderHistoryDiv>
)
}