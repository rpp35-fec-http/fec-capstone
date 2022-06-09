import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './addAnswer.scss';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

class AddAnswer extends React.Component {
   getInputValues(event) {
      let values = [];
      for (var i = 0; i < event.target.elements.length - 1; i++) {
         values.push(event.target.elements[i].value);
      }
      let data = {};
      data.body = values[0];
      data.name = values[1];
      data.email = values[2];
      data.photos = [];
      data.question_id = this.props.question_id;
      return data;
   }

   postAnswer(answer) {
      axios
         .post('/questionsAnswers/addAnswer', {
            answer: answer,
         })
         .then((results) => {
            console.log(
               'Success adding answer for answer_id ',
               this.props.answer_id
            );
         })
         .catch((error) => {
            console.log(
               'Error adding answer for answer_id ',
               this.props.answer_id
            );
         });
   }

   previewImages(event) {
      // set variable to file list
      const images = event.target.files;
      console.log('images', images);
      // create an hmtl element
      const previews = document.createElement('div');
      previews.className = 'previews';
      // iterate over file list
      for (var i = 0; i < images.length; i++) {
         const image = images[i];
         // create div for image
         const preview = document.createElement('div');
         preview.className = 'preview';
         // create a URL.createObjectURL() for each image
         preview.src = URL.createObjectURL(image);
         // append to previews element
         console.log('preview', preview);
         previews.append(preview);
      }
      // select div w/ gallery id & append previews to html element
      console.log('previews', previews);
      document.getElementsByClassName('gallery').appendChild(previews);
   }

   componentDidMount() {}

   render() {
      return (
         <Card
            elevation={24}
            rounded={true}
            outlined={true}
            className='addAnswer'
         >
            <form
               onSubmit={(event) => {
                  event.preventDefault();
                  this.postAnswer(this.getInputValues(event));
                  this.props.handleInteraction(event);
                  this.props.changeQAState('addAnswerModal', false);
                  this.props.changeQAState('currQuestion_id', null);
                  this.props.changeQAState('currQuestion_body', null);
               }}
            >
               <Typography align='center' variant='h4'>
                  Submit your Answer
               </Typography>
               <Typography align='center' variant='subtitle1'>
                  {this.props.product_name}: {this.props.question_body}
               </Typography>
               <div>
                  <label htmlFor='body'>Your Answer*</label>
                  <textarea
                     name='body'
                     className='body'
                     maxLength='1000'
                     cols='45'
                     rows='15'
                     required
                  ></textarea>
               </div>
               <div>
                  <label htmlFor='name'>What is your nickname?*</label>
                  <input
                     type='text'
                     name='name'
                     className='name'
                     maxLength='60'
                     size='60'
                     required
                     defaultValue='Example: jack543!'
                  />
                  <div>
                     For privacy reasons, do not use your full name or email
                     address
                  </div>
               </div>
               <div>
                  <label htmlFor='email'>Your email*</label>
                  <input
                     type='email'
                     name='email'
                     className='email'
                     maxLength='60'
                     size='60'
                     required
                     defaultValue='Example: jack@email.com'
                  />
                  <div>For authentication reasons, you will not be emailed</div>
               </div>
               <div>
                  <label htmlFor='photos'>Upload Your Photos</label>
                  <input
                     type='file'
                     name='photos'
                     className='email'
                     maxLength='60'
                     size='60'
                     accept='image/png, image/jpeg'
                     onChange={(event) => {
                        // console.log('files event', event.target.files[0])
                        this.previewImages.bind(this)(event);
                     }}
                  />
                  <div className='gallery'></div>
               </div>
               <button ref='sumbit'>Sumbit</button>
               <button
                  onClick={(event) => {
                     this.props.changeQAState('addAnswerModal', false);
                     this.props.handleInteraction(event);
                  }}
               >
                  Cancel
               </button>
            </form>
         </Card>
      );
   }
}

export default AddAnswer;
