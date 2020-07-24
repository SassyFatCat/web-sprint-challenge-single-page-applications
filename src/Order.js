import React from 'react';
import './Order.css';
import {useHistory} from 'react-router-dom';

export default function Order(props) {
const history = useHistory();
//////////////////// PROPS ////////////////////
const {
    disabled,
    forms,
    formErrors,
    inputChange,
    placeOrder,
    checkboxChange,
} = props;

//////////////////// HELPER FUNCTIONS ////////////////////
const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    
    inputChange(name, value)
};

const onCheckboxChange = event => {
    const name = event.target.name
    const checked = event.target.checked
    
    checkboxChange(name, checked)
};

const onSubmit = event => {
event.preventDefault();
placeOrder();
history.push('/order-history')
}

return (
    <div className="orderContainer">
        <h1>Order Form</h1>
            <div className="customerInfo">
                <label>Name:&nbsp;&nbsp;
                    <input
                        type="text"
                        name="name"
                        value={forms.name}
                        onChange={onChange}
                    ></input>
                </label>
    
                <label>Email:&nbsp;&nbsp;
                    <input
                        type="email"
                        name="email"
                        value={forms.email}
                        onChange={onChange}
                ></input>
                </label>
            </div> 

            <div className="size">
                <label>Size
                    <select 
                    onChange={onChange}
                    value={forms.size}
                    name="size"
                    >
                        <option value="select">Select a Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
            </div>

        <div className="panel crust">
            <h3>Choose a crust:</h3>
                <div className="toppingContainer">
                <label><p>Regular</p>
                    <input
                        type="radio"
                        name="crust"
                        value="Regular"
                        checked={forms.crust === "Regular"}
                        onChange={onChange}
                    ></input>
                </label>

                <label><p>Thick</p>
                    <input
                        type="radio"
                        name="crust"
                        value="Thick"
                        checked={forms.crust === "Thick"}
                        onChange={onChange}
                    ></input>
                </label>
 
                <label><p>Thin</p>
                    <input
                        type="radio"
                        name="crust"
                        value="Thin"
                        checked={forms.crust === "Thin"}
                        onChange={onChange}
                    ></input>
                </label>

                <label><p>Gluten-Free</p>
                    <input
                        type="radio"
                        name="crust"
                        value="Gluten-Free"
                        checked={forms.crust === "Gluten-Free"}
                        onChange={onChange}
                    ></input>
                </label>
                </div>
        </div>

        <div className="panel sauce">
            <h3>Choose a sauce:</h3>
                <div className="toppingContainer">
                <label><p>Original</p>
                    <input
                        type="radio"
                        name="sauce"
                        value="Original"
                        checked={forms.sauce === "Original"}
                        onChange={onChange}
                    ></input>
                </label>

                <label><p>Alfredo</p>
                    <input
                        type="radio"
                        name="sauce"
                        value="Alfredo"
                        checked={forms.sauce === "Alfredo"}
                        onChange={onChange}
                    ></input>
                </label>
 
                <label><p>Garlic</p>
                    <input
                        type="radio"
                        name="sauce"
                        value="Garlic"
                        checked={forms.sauce === "Garlic"}
                        onChange={onChange}
                    ></input>
                </label>

                <label><p>BBQ</p>
                    <input
                        type="radio"
                        name="sauce"
                        value="BBQ"
                        checked={forms.sauce === "BBQ"}
                        onChange={onChange}
                    ></input>
                </label>
                </div>
        </div>

        <div className="panel toppings">
            <h3>Choose your toppings:</h3>
                <div className="toppingContainer">
                <label><p>Sausage</p>
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={forms.toppings.sausage === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
                

                
                <label><p>Pepperoni</p>
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={forms.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
                
                <label><p>Beef</p>
                    <input
                        type="checkbox"
                        name="beef"
                        checked={forms.toppings.beef === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
        
                <label><p>Ham</p>
                    <input
                        type="checkbox"
                        name="ham"
                        checked={forms.toppings.ham === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
 
                <label><p>Green Pepper</p>
                    <input
                        type="checkbox"
                        name="greenPepper"
                        checked={forms.toppings.greenPepper === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
 
                <label><p>Onion</p>
                    <input
                        type="checkbox"
                        name="onion"
                        checked={forms.toppings.onion === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
   
                <label><p>Jalepeno</p>
                    <input
                        type="checkbox"
                        name="jalepeno"
                        checked={forms.toppings.jalepeno === true}
                        onChange={onCheckboxChange}
                    ></input>
                </label>
                </div>
                
        </div>

        <div className="panel special">
            <h3>Special Instructions?</h3>
                <form>
                    <input
                        type="text"
                        name="specialInstructions"
                        value={forms.specialInstructions}
                        onChange={onChange}
                    ></input>
                </form>
        </div>

        <div className="errors">
            <p>{formErrors.name}</p>
            <p>{formErrors.email}</p>
            <p>{formErrors.crust}</p>
            <p>{formErrors.sauce}</p>'
            <p>{formErrors.size}</p>
        </div>
        <button disabled={disabled} onClick={onSubmit}>Place Order!</button>
    </div>
)
}