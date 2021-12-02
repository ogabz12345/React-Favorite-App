import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom'


const NewMeetupPage = () => {
const navigate = useNavigate();

  const addMeetupHandler = async (meetupData) => {
    //Fetch (GETALL) meetups from API
    const res = await fetch("http://localhost:5000/meetup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meetupData),
    }).then(() => {
        navigate('/');
    });
    //const data = await res.json();
   //console.log(data);
    //return data;
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
};

export default NewMeetupPage;
