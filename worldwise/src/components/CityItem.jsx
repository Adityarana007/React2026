import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const {currentCity, isLoading, deleteCity} = useCities();
  console.log("cityy", city);
  const { cityName, emoji, date, id, position } = city;
  console.log("position", position);

  function handleClick(e) {
    e.preventDefault();
    if(isLoading) return;
    if(window.confirm("Are you sure you want to delete this city?")) {
      console.log("delete city", id);
      deleteCity(id);
    }
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity?.id ? styles['cityItem--active'] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
