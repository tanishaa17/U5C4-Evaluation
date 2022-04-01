import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [meets, setMeets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/meetups").then((res) => {
      setMeets(res.data);
    });
  }, []);

  return (
    <div className="homeContainer">
      {meets.map((el) => {
        return (
          <Link to={`/meetup/${el.id}`} className="events" key={el.id}>
            {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}

            <div className="title">{el.title}</div>
            <div className="theme">{el.theme}</div>
            <div className="description">{el.description}</div>
            <div className="date">{el.date}</div>
            <div className="time">{el.time}</div>
            <div className="location">{el.location}</div>
            <img src="el.image" alt="" className="image" />
          </Link>
        );
      })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"} // add value here
            onChange={(e) => {}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[].map((el) => {
            return (
              <Link to={`add route here`} className="events">
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
