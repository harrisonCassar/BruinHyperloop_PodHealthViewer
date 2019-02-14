import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Table rows={5} col={3}/>
            </div>
        );
    }
}

export default App;