// This is an event details page which has its own route

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Event = () => {
  const { id } = useParams();
  let [el, setEl] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/meetups/${id}`).then((res) => {
      setEl(res.data);
    });
  });
  return (
    <div className="eventContainer">
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}

      <div className="theme">{el.theme}</div>
      <div className="description">{el.description}</div>
      <div className="date">{el.date}</div>
      <div className="time">{el.time}</div>
      <div className="location">{el.location}</div>
      <img src="el.image" alt="" className="image" />
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => {}}>
        Subscribe
      </button>
    </div>
  );
};
