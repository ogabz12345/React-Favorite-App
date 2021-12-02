import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllmeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getAllMeetups = async () => {
      await fetchMeetups()
        .then((data) => {
          setIsLoading(false);
          setLoadedMeetups(data);
        });
      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }
    };

    getAllMeetups();
  }, []);

  //Fetch (GETALL) tasks from API
  const fetchMeetups = async () => {
    const res = await fetch("http://localhost:5000/meetup");
    const data = await res.json();

    return data;
  };

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
};

export default AllmeetupsPage;
