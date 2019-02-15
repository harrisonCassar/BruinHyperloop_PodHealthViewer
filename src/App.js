import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        //array indexes correspond to data's row numbers from 0 to n-1 rows
        let table1_labels = ['Voltage','Current','Temperature'];
        let table1_minValues = [20,21,22];
        let table1_maxValues = [40,41,42];

        let table2_labels = ['Voltage','Current','Temperature'];
        let table2_minValues = [20,21,22];
        let table2_maxValues = [40,41,42];

        let table3_labels = ['Temperature','Motor 1 Current','Motor 2 Current','Motor 3 Current','Motor 4 Current'];
        let table3_minValues = [20,21,22,23,24];
        let table3_maxValues = [40,41,42,43,44];

        let table4_labels = ['there','there'];
        let table4_minValues = [8,8];
        let table4_maxValues = [10,10];

        return (
            <div className="container">
            	<br />
                <br />
            	<div className="title">
                    Pod Health Viewer - UCLA Bruin HYPErloop
                </div>
                <br />

                <div className="tableTitle">
                    Battery
                </div>

                <Table
                    tableLabel="1"
                    labels={table1_labels}
                    minValues={table1_minValues}
                    maxValues={table1_maxValues}
                    rows={3}
                />
                <br />
                <Table
                    tableLabel="2"
                    labels={table2_labels}
                    minValues={table2_minValues}
                    maxValues={table2_maxValues}
                    rows={3}
                />

                <br />
                <br />
                <br />

                <div className="tableTitle">
                    Pod
                </div>

                <Table
                    labels={table3_labels}
                    minValues={table3_minValues}
                    maxValues={table3_maxValues}
                    rows={5}
                />
                <br />
            </div>
        );
    }
}

export default App;