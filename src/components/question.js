class Question extends React.Component {
    state = {
        answeredCorrect: null
    };
    handleClick = e => {
        this.setState({answeredCorrect: true});
    };
    render() {
        let btnStyles = this.state.answeredCorrect === true ? 'correct' : '';
        return (
            <div>
                <button className={`btn ${btnStyles}`} onClick={this.handleClick}>
                    test
                </button>
            </div>
        );
    }
}
