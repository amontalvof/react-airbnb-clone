import React from "react";
import PropTypes from "prop-types";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult(props) {
    const { img, location, title, description, star, price, total } = props;
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResults__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;

SearchResult.propTypes = {
    img: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    star: PropTypes.number,
    price: PropTypes.string,
    total: PropTypes.string,
};

SearchResult.defaultProps = {
    img: undefined,
    location: undefined,
    title: undefined,
    description: undefined,
    star: undefined,
    price: undefined,
    total: undefined,
};
