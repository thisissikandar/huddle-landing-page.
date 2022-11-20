import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import imgCard1 from "./assests/illustration-grow-together.svg";
import imgCard2 from "./assests/illustration-flowing-conversation.svg";
import imgCard3 from "./assests/illustration-your-users.svg";
import Card from './components/Card';
import Footer from './components/Footer';

const cardImg = [
  {
   title :"Grow Together",
   description:"Generate meaningful discussionwith your audience and built a strong, loyal community. Think of the insightfulconversations you miss out on with a feedback from.",
   images : imgCard1,
  },
  {
    title :"Flowing Conversations",
    description:"You wouldn't paginate a conversation in real life, so why do it online? Our thread have just-in-time loading for a more natural flow.",
    images : imgCard2,
   },
   {
    title :"Your Users",
    description:"It takes no time at all to integrate Huddle with Your app's authentication solution. This means, once signed in to your app, your user can start chatting immediately.",
    images : imgCard3,
   },
]

const App = () => {
  return (
    <>
    <header>
      <Navbar/>
      <Hero/>
    </header>
    <Card data={cardImg} />
    <Footer/>
    </>
  )
}

export default App