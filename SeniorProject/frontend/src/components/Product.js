import React from 'react'

export default function Product(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.title}/>
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.artist} - {product.title} ({product.format})</h2>
                </a>
                <div className="price">
                    ${product.price}
                </div>
            </div>
        </div>
    )
}
