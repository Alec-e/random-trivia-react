import React from 'react';
import Button from './button';

class Trivia extends React.Component {
    state = {
      isLoaded: false,
      error: null,
      questions: [],
      points: 0,
      difficulty: null
    };
  
    componentDidMount(){
      
      let level = (this.state.difficulty === null) ? '' :  `&difficulty=${this.state.difficulty}`;
      
      fetch(`https://opentdb.com/api.php?amount=10${level}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          questions: result.results
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      });
    }
  
     handleClick = (e) => {
      e.preventDefault();
      if(e.target.value === "1"){
        this.setState({points: this.state.points + 1})
        console.log('points', this.state.points);
      } else {
        console.warn('incorrect answer');
        return;
      }
    }
    render(){
      const data = this.state.questions;
      return (
        <div>
          <h3>Points: {this.state.points} / {data.length}</h3>
         {data.map(question => {
            let correctAnswer = question.correct_answer;
            let answers = question.incorrect_answers.map( incorrect => {
              return {answer: incorrect, correct: false}
            })
            answers.push({answer: question.correct_answer, correct: true});
            return (
                <div className="card">
                    <p dangerouslySetInnerHTML={{__html: question.question }}/>
                    {answers.map(answer => {
                    let correct = (answer.answer == correctAnswer) ? 1 : 0;
                    return (
                        <Button value={correct} onClick={(e) => { this.handleClick(e)}}>
                            <span dangerouslySetInnerHTML={{__html: answer.answer}}/>
                        </Button>
                    )
                    })}
                </div>
            )
          })}
          <style jsx>{`
            .card p {
                color: #fff;
                font-weight: bold;
                font-family: 'Abel', sans-serif;
                font-size: 18px;       
            }
          `}</style>
        </div>
      )
    }
  }

  export default Trivia;