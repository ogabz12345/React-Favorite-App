import React from "react";
import clases from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

const MeetupItem = ({ id, image, title, address, description }) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        description: description,
        address: address,
        image: image,
      });
    }
  };

  return (
    <li className={clases.item}>
      <Card>
        <div className={clases.image}>
          <img src={image} alt={title}></img>
        </div>
        <div className={clases.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={clases.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
