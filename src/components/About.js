import React from 'react'; 
import Ubaid from '../components/image/ubaid.jpg'      ; // Replace with the actual path to your image
import '../components/style/About.css';


const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <img src={Ubaid} alt="Profile" className="profile-image" />
      <p>
        Welcome to our To-Do List app! This app helps you manage your daily tasks efficiently.
      </p>
      <p>
        With this app,s you can add, complete, and delete tasks easily. Stay organized and never miss a task again.
      </p>
      <p>
        We hope you find this app useful and that it helps you stay on top of your to-do list!
      </p>
    </div>
  );
};

export default About;
