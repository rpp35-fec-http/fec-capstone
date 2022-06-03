import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Answer from '../answer/answer.jsx';

class AnswersList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         shownAnswers: [],
         allAnswers: [],
      };
      this.getAnswers = this.getAnswers.bind(this);
      this.addShownAnswers = this.addShownAnswers.bind(this);
   }

   getAnswers() {
      axios
         .get('/api/questionsAnswers/answers', {
            params: { question_id: this.props.question_id },
         })
         .then((results) => {
            this.setState({
               shownAnswers: results.data.results.splice(0, 2),
               allAnswers: results.data.results,
            });
         })
         .catch((error) => {
            console.log('error', error);
         });
   }

   addShownAnswers() {
      let currShownAnswers = this.state.shownAnswers,
         currAllAnswers = this.state.allAnswers;
      currShownAnswers = currShownAnswers.concat(currAllAnswers.splice(0, 2));
      this.setState({
         shownAnswers: currShownAnswers,
         allAnswers: currAllAnswers,
      });
   }

   componentDidMount() {
      this.getAnswers();
      this.addShownAnswers();
   }

   render() {
      let moreAnswers;
      if (this.state.allAnswers.length) {
         moreAnswers = (
            <button
               onClick={() => {
                  this.addShownAnswers();
               }}
            >
               <Typography variant='body1'>See More Answers</Typography>
            </button>
         );
      } else {
         moreAnswers = null;
      }

      return (
         <Card>
            {this.state.shownAnswers.map((answer, index) => {
               return (
                  <Answer
                     key={index}
                     answer={answer}
                     convertDate={this.props.convertDate}
                  />
               );
            })}
            {moreAnswers}
         </Card>
      );
   }
}

export default AnswersList;
