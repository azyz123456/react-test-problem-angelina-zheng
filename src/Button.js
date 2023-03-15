import {React, useState} from 'react';

export default function Button({ task: { title, state }}) {
  const [t, setT] = useState(title);
  const [clicked, setClicked] = useState(state);

  function handleClick() {
    console.log("clicked!");
    if (clicked) {
      setT("Click me!");
    } else {
      setT("Thanks!");
    }
    setClicked(!clicked);
  }
  
  return (
    <div onClick={handleClick} className="btn">
      {t}
    </div>
  );
}