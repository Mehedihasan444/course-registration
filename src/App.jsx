/* eslint-disable no-unused-vars */
// import PropTypes from "prop-types";
import "./App.css";
import Course from "./components/courses/Course";
import Selected_course from "./components/selected_course/Selected_course";
import { useState } from "react";
function App() {
  const [select, setSelect] = useState([]);
  const [Credit, setCredit] = useState(0);
  const [Price, setPrice] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  const handleSelection = (title, credit, price) => {
    const isExist = select.find((element) => element === title);
    if (isExist) {
      alert("You have already selected this course.");
      return;
    }
    const newSelect = [...select, title];
    const newCredit = Credit + credit;
    const newPrice = price + Price;
    const newRemainingHour = remainingHour - credit;
    if (newRemainingHour <= 0) {
      alert("You have reached your limit.");
      return;
    } else {
      setCredit(newCredit);
      setSelect(newSelect);
      setPrice(newPrice);
      setRemainingHour(newRemainingHour);
    }
  };
  // console.log(select);
  // console.log(Credit);

  return (
    <>
      <header className="bg-[#F3F3F3] py-5">
        <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      </header>
      <div className="md:flex justify-center bg-[#F3F3F3]">
        <Course
          handleSelection={handleSelection}
          className=""
        ></Course>
        <div className="">
          <Selected_course
            className=""
            select={select}
            Credit={Credit}
            Price={Price}
            remainingHour={remainingHour}
          ></Selected_course>
        </div>
      </div>
    </>
  );
}

export default App;
