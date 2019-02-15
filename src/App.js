import React, {Component} from 'react';
import Table from './Table';
import Title from './Title';

class App extends Component {
    render() {
        return (
            <div className="container">
            	<br />
            	<Title />
                <Table rows={5} col={3}/>
                <Table rows={2} col={3}/>
            </div>
        );
    }
}

export default App;