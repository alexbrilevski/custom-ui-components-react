import type { FC } from "react";
import Message from "./Message/Message";

const messageData = {
  avatar: "https://pbs.twimg.com/media/GG0GsL4aoAAvJpy.jpg",
  name: "Joel",
  text: "How it is going in the future?",
  time: "12:03",
};

const responseData = {
  avatar: "https://pbs.twimg.com/media/EYqbdt0XkAANziO.jpg",
  name: "Commander Shepard",
  text: "Really cool! Fighting giant aliens, saving galaxy.",
  time: "12:54",
};

const Messages: FC = () => {
  return (
    <div>
      <Message messageData={messageData} />
      <Message messageData={responseData} />
    </div>
  );
};

export default Messages;