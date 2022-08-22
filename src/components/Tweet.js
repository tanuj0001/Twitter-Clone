import React, { useState, useEffect } from "react";
import TweetCard from "./TweetCard";

const Tweet = () => {
  const [tweets, settweets] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:8000/gettweets")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => settweets(result));
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard
          name={tweet.name}
          img={tweet.img}
          phonenumber={tweet.phonenumber}
          tweet={tweet.tweet}
          addimgUrl={tweet.addimgUrl}
        />
      ))}
    </div>
  );
};

export default Tweet;
