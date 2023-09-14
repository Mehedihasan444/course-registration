import PropTypes from "prop-types";

const Selected_course = ({ select,Credit,Price,remainingHour }) => {
  return (
    <div className="lg:w-full my-10 mx-5 shadow-lg p-5 rounded-md bg-white space-y-3">
      <h1 className="text-lg font-semibold text-purple-600">Credit Hour Remaining : {remainingHour} hr</h1>
      <hr />
      <h1 className="text-lg font-semibold">Course Name</h1>
      <div className="space-y-3">
        <ol>
          {select.map((item, idx) => (
            <li key={idx}>{idx+1}. {item}</li>
          ))}
        </ol>
      </div>
      <hr />
      <h3 className="text-base">Total Credit Hour : {Credit}</h3>
      <hr />
      <h3 className="text-base font-semibold">Total Price : {Price} USD</h3>
    </div>
  );
};
Selected_course.propTypes = {
  select: PropTypes.array.isRequired,
  Credit: PropTypes.number.isRequired,
  Price:PropTypes.number.isRequired,
  remainingHour:PropTypes.number.isRequired,
};
export default Selected_course;
