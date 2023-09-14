import { useEffect } from "react";
import { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import PropTypes from "prop-types";
const Course = ({ handleSelection }) => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("Course_data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  //   console.log(courses);
  return (
    <div className="px-5  md:w-3/4 grid md:grid-cols-2 md:px-3 lg:grid-cols-3 gap-5 my-10 ">
      {courses.map((course) => (
        <div
          className="text-center space-y-3 shadow-lg p-5 rounded-md bg-white"
          key={course.id}
        >
          <div className="flex justify-center items-center">
            <img src={course.cover} alt="" className="w-full"/>
          </div>
          <div className="px-3 space-y-3">
            <h1 className="text-xl font-semibold ">{course.title}</h1>
            <p className="text-xs text-justify ">{course.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <BiDollar></BiDollar>
                <small className=""><span className="font-semibold">Price:</span> {course.price}</small>
              </div>
              <div className="flex justify-between items-center gap-3">
                <FiBookOpen></FiBookOpen>
                <small className=""><span className="font-semibold">Credit:</span> {course.credit}hr</small>
              </div>
            </div>
            <button
              className="btn btn-primary w-full text-base font-semibold"
              onClick={() => handleSelection(course.title,course.credit,course.price)}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
Course.propTypes = {
  handleSelection: PropTypes.func.isRequired,
};

export default Course;
