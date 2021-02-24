import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import * as a from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class QuizControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      selectedQuiz: null,
    };
  }

  handleClick = () => {
    if(this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  handleAddingNewQuizToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({collection: 'quizzes', doc: id})
    this.setState({selectedQuiz: null});
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentVisibleState = null;
      let buttonText= null;
      if(this.state.selectedQuiz != null){
        currentVisibleState = <QuizDetail/>
      } else if(this.props.formVisibleOnPage) {
        currentVisibleState = <NewQuizForm onNewQuizCreate={this.handleAddingNewQuizToList}/>
        buttonText = "Return to Quizzes"
      } else {
        currentVisibleState = <QuizList />
        buttonText = "Add new Quiz"
      }
      return (
        <React.Fragment>
          <button onClick={ this.handleClick }>{ buttonText }</button>
          <br/>
          {currentVisibleState}
        </React.Fragment>
      );
    }
  }
}

QuizControl.propTypes={
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);
export default withFirestore(QuizControl);
