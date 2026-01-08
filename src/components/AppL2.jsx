import "./App.css";
import { useState, useEffect } from "react";

const CustomButton = ({ message, children }) => {
  //   console.log(children, message);
  return <button onClick={() => alert(message)}> {children}</button>;
};

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="m">
      <button onClick={handleClick}>Current: {clicks}</button>
    </div>
  );
};

const Modal = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log(`Interval - ${Date.now()}`);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      Modal
      <br />
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export const AppL2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
    console.log("You can see me only once!");
  }, []);
  useEffect(() => {
    console.log("First updated: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
    console.log(`Clicks changed - ${clicks}`);
  }, [clicks]);

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <div className="m">
        <p>
          x:{values.x}, y:{values.y}
        </p>
        <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button>
      </div>
      <div className="m">
        <button onClick={handleClick}>First button</button>
        <button onClick={(evt) => console.log(evt)}>Second button</button>
        <CustomButton message="Playing music!">Play some music</CustomButton>
        <CustomButton message="Uloading your data!">Upload data</CustomButton>
      </div>
      <div className="m">
        <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && <p>Now you can see me!</p>}
      </div>
      <div className="m">
        <ClickCounter />
        <ClickCounter />
        <ClickCounter />
      </div>
      <div className="m">
        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <button onClick={() => setClicks(0)}>Reset</button>
      </div>
      <div className="m">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen && <Modal />}
        </button>
      </div>
      <div className="m">
        <button onClick={() => setFirst(first + 1)}>First: {first}</button>
        <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      </div>
    </>
  );
};
