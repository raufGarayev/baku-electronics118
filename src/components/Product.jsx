import React from 'react'
// Obyektin parcalanmasi
const Product = ({product, basket,total,setBasket}) => {
  return (
    <div className="product">
    <img src={product.image} alt="" />
    <h5>{product.title}</h5>
    <div className="price">{product.price}</div>

    <div className="actions">
        <button className="refund-btn"  >REFUND BASKET</button>
        <span></span>
        <button className="add-basket-btn">ADD BASKET</button>
    </div>
</div>
  )
}

export default Product