import React from 'react';
import Layout from '../components/layout';
import Trivia from '../components/trivia';

class Home extends React.Component {
    render(){
        return (
            <div>
                <Layout>
                <Trivia/>
                </Layout>
            </div>
        )
    }
}

export default Home;