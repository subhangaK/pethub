import React from 'react';

function Product({ imageSrc, altText, title, description, link }) {
    return (
        <div className="product">
            <img src={imageSrc} alt={altText} />
            <h2>{title}</h2>
            <p>{description}</p>
            <br />
            <a href={link} className="cta-btn">Explore</a>
        </div>
    );
}

export default Product;
