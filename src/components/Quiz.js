import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenQuizClicked(props.id)}>
        <h3>{props.quizName}</h3>
      </div>
      <hr />
    </React.Fragment>

  );
}

Quiz.propTypes = {
  quizName: PropTypes.string,
  questionOne: PropTypes.string,
  optionOneA: PropTypes.string,
  optionOneB: PropTypes.string,
  optionOneC: PropTypes.string,
  optionOneD: PropTypes.string,
  questionTwo: PropTypes.string,
  optionTwoA: PropTypes.string,
  optionTwoB: PropTypes.string,
  optionTwoC: PropTypes.string,
  optionTwoD: PropTypes.string,
  questionThree: PropTypes.string,
  optionThreeA: PropTypes.string,
  optionThreeB: PropTypes.string,
  optionThreeC: PropTypes.string,
  optionThreeD: PropTypes.string,
  questionFour: PropTypes.string,
  optionFourA: PropTypes.string,
  optionFourB: PropTypes.string,
  optionFourC: PropTypes.string,
  optionFourD: PropTypes.string,
};

export default Quiz;