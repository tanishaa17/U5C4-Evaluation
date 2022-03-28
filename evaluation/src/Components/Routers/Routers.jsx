import { Routes, Route } from "react-router-dom";
import { AddMeetup } from "../AddMeetup/AddMeetup";
import { Event } from "../Event/Event";
import { Home } from "../Home/Home";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { Navbar } from "../Navbar/Navbar";
import { NotFound } from "../NotFound/NotFound";

export const Routers = () => {
    return (<>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/loginsignup" element={<LoginSignUp />} />
            <Route exact path="/meetup" element={<AddMeetup />} />
            <Route exact path="/events" element={<Event />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>);
}