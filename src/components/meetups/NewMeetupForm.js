import React from "react";
import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({onAddMeetup}) => {
  //First concept userState(), we use this when we want to have both the values and setState (edit)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  //Second concept useRef(), this is used because we just want the data from the form once you click submit
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    //prevent browser default
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
  };

  const submitHandler2 = (event) => {
    //prevent browser default
    event.preventDefault();

    const meetupData = {
      title: title,
      image: image,
      address: address,
      description: description,
    };
    onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            value={title}
            required
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            required
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows="5"
            value={description}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
