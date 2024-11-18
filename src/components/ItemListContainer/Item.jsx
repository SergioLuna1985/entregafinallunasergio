import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div className="item">
          <img src={product.image} className="img-item" alt=""  />
          <p className="text-item">{product.name}</p>
          <p className="text-item">${product.price}</p>
    
          <Link to={"/detail/" + product.id} className="button" >Ver detalles</Link>
        </div>
      )
}

export default Item