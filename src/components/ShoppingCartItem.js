import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {

	const { removeItem } = useContext(CartContext);

	const handleClick = (event) => {
		removeItem(event.target.parentNode.parentNode.id)
	}

	return (
		<div className="shopping-cart_item" id={props.item.id}>
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleClick}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;