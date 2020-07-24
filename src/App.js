import React, {useState, useEffect} from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import HomeComp from './HomeComp';
import Order from './Order';
import OrderHistory from './OrderHistory';
import * as yup from 'yup'
import FormSchema from './FormSchema';
import axios from 'axios';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const AppNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`;



function App() {
//////////////////// INITIAL STATES ////////////////////
const initialForms = {//=====================================================> NEEDS WORK, DEPENDING ON FORM
  name: '',
  email: '',
  size: '',
  crust: '',
  sauce: '',
  toppings: {
    sausage: false,
    pepperoni: false,
    beef: false,
    ham: false,
    greenPepper: false,
    onion: false,
    jalepeno: false
  },
  specialInstructions: '',
};
const initialFormErrors = {//================================================> NEEDS WORK, DEPENDING ON FORM
name: '',
email: '',
size: '',
crust: '',
sauce: '',
  
};
const initialOrderHistory = [];
const initialDisabled = true;

//////////////////// STATE ////////////////////
const [forms, setForms] = useState(initialForms);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [orderHistory, setOrderHistory] = useState(initialOrderHistory);
const [disabled, setDisabled] = useState(initialDisabled);

//////////////////// NETWORK HELPERS //////////////////// ====================> NEEDS WORK, DEPENDING ON PROJECT
// Function to get order history from API, setOrderHistory to returned data
// Function to post a new order to API, appending returned data to setOrderHistory
// For now this application will render orderHistory directly without use of API

const postOrder = newOrder => {
  axios.post('https:reqres.in/api/users', newOrder)
    .then(success => {
      console.log(success)
      setOrderHistory([success.data, ...orderHistory]);
      setForms(initialForms)
    })
    .catch(error => {
      debugger
    })
}

//////////////////// FORM ACTIONS ////////////////////
const inputChange = (name, value) => {//=======================================> NEEDS WORK, YUP
yup
  .reach(FormSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    })
})
  .catch(invalid => {
    setFormErrors({
      ...formErrors,
      [name]: invalid.errors[0]
    })
})
  setForms({
    ...forms,
    [name]: value
  })
}

const checkboxChange = (name, isChecked) => {
setForms({
  ...forms,
  toppings: {
    ...forms.toppings,
    [name]: isChecked
  }
})
}

const placeOrder = () => {
const newOrder = {
  name: forms.name,
  email: forms.email,
  size: forms.size,
  crust: forms.crust,
  sauce: forms.sauce,
  toppings: Object.keys(forms.toppings).filter(x => forms.toppings[x]),
  specialInstructions: forms.specialInstructions.trim(),//============================> NEEDS WORK, DEPENDING ON FORM
}
postOrder(newOrder);
setForms(initialForms)
}

//////////////////// SIDE EFFECTS ////////////////////
useEffect(() => {
  FormSchema.isValid(forms)
    .then(valid => {
    setDisabled(!valid)
  })
}, [forms])


return (
    <AppContainer>
      <h1>Lambda Eats</h1>
        <AppNav>
            <Link to="/" style={{padding: "0 2%"}}>Home</Link>
            <Link to="/order-history" style={{padding: "0 2%"}}>Order History</Link>
        </AppNav>

      <Switch>

          <Route path='/order-history'>
              <OrderHistory orderHistory={orderHistory}/>
          </Route>

          <Route path='/pizza'>
              <Order disabled={disabled} forms={forms} formErrors={formErrors} inputChange={inputChange} checkboxChange={checkboxChange} placeOrder={placeOrder}/>
          </Route>

          <Route path='/'>
              <HomeComp />
          </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
