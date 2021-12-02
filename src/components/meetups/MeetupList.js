import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({meetups}) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.address}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
