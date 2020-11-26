import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
    const { src, title, description, price } = props;
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
};

Card.defaultProps = {
    src: undefined,
    title: undefined,
    description: undefined,
    price: undefined,
};
