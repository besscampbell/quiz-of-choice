import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <hr />
      <div className="form-group">
        <input
            type='text'
            quizName='quizName'
            placeholder='Quiz Name' />
      </div>
        {/* question One */}
      <div className="form-group">
        <input
          type='text'
          questionOne='Question One'
          placeholder='Enter question One' />
      </div>
      <div className="form-group">
        <input
          type='text'
          optionOneA='Option A'
          placeholder='Enter option A for question One' />
        <input
          type='text'
          optionOneB='Option B'
          placeholder='Enter option B for question One' />
        <input
          type='text'
          optionOneC='Option C'
          placeholder='Enter option C for question One' />
        <input
          type='text'
          optionOneD='Option D'
          placeholder='Enter option D for question One' />
      </div>
        {/* question Two */}
      <div className="form-group">
        <input
          type='text'
          questionTwo='Question Two'
          placeholder='Enter question Two' />
      </div>
      <div className="form-group">
        <input
          type='text'
          optionTwoA='Option A'
          placeholder='Enter option A for question Two' />
        <input
          type='text'
          optionTwoB='Option B'
          placeholder='Enter option B for question Two' />
        <input
          type='text'
          optionTwoC='Option C'
          placeholder='Enter option C for question Two' />
        <input
          type='text'
          optionTwoD='Option D'
          placeholder='Enter option D for question Two' />
      </div>
        {/* question Three */}
      <div className="form-group">
        <input
          type='text'
          questionThree='Question Three'
          placeholder='Enter question Three' />
      </div>
      <div className="form-group">
        <input
          type='text'
          optionThreeA='Option A'
          placeholder='Enter option A for question Three' />
        <input
          type='text'
          optionThreeB='Option B'
          placeholder='Enter option B for question Three' />
        <input
          type='text'
          optionThreeC='Option C'
          placeholder='Enter option C for question Three' />
        <input
          type='text'
          optionThreeD='Option D'
          placeholder='Enter option D for question Three' />
      </div>
        {/* question Four */}
      <div className="form-group">
        <input
          type='text'
          questionFour='Question Four'
          placeholder='Enter question Four' />
      </div>
      <div className="form-group">
        <input
          type='text'
          optionFourA='Option A'
          placeholder='Enter option A for question Four' />
        <input
          type='text'
          optionFourB='Option B'
          placeholder='Enter option B for question Four' />
        <input
          type='text'
          optionFourC='Option C'
          placeholder='Enter option C for question Four' />
        <input
          type='text'
          optionFourD='Option D'
          placeholder='Enter option D for question Four' />
      </div>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

React.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}
export default ReusableForm;

// QuizType=test
// QuizType=survey
// questionSetForSurvey: Test{question:"", optionA:"",..., }
// questionSetFor Test{...questionSetForSurvey, correctAnswer: oprtion 2}
// question
// option
