import { useState } from "react";

const Panel = (props) =>{
    console.log(props);

    const [itemAdd, setItem] = useState(1);

    const increament = () =>{
        setItem(itemAdd + 1);
    }

    // const decreament = () =>{
    //     if(itemAdd > 1){
    //         setItem(itemAdd - 1);
    //     }
    //     else if(itemAdd === 1){
    //         props.removeCart(props.id);
    //     }
    // }

    const decreament = () => {
        if (itemAdd > 1) {
          setItem(itemAdd - 1);
        } else if (itemAdd === 1) {
          props.removeCart(props.id); // Remove the item when quantity reaches 0
        }
      };

    return(
        <div className="cart">
            <div className="left">
                <img src={props.img} alt="phone1" />
                <div className="content">
                    <h2>{props.title}</h2>
                    <p>${props.price}</p>
                    <p className="remove" onClick={() => props.removePanel(props.id, props.price)}>remove</p>
                </div>
            </div>
            <div className="right">
                <i class="fa-solid fa-arrow-up" onClick={() => {props.addQty(props.price); increament(); }}></i>
                <p>{itemAdd}</p>
                <i class="fa-solid fa-arrow-down" onClick={() => {props.reduceQty(props.price); decreament(); }}></i>
            </div>
        </div>
    )
}

export default Panel;