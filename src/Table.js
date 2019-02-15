import React, {Component} from 'react';

function Cell(props) {
  return (
    <td class="othercol"
    bgcolor={props.bgColor}>
        {props.value}
    </td>
  )
}

//need to make a separate class for each cell, and render value as live render
class Table extends Component {
    constructor(props) {
    super(props);
    this.state = {
        minValues: Array(this.props.rows).fill(21),
        maxValues: Array(this.props.rows).fill(35),
      values: Array(this.props.rows).fill(25),
      bgColors: Array(this.props.rows).fill('lime'),
    };
  }

    renderCell(i) {
        return (
            <Cell
                value={this.state.values[i]}
                bgColor={this.state.bgColors[i]}
            />);
    }

    updateCell(i,newValue)
    {
        const updatedValues = this.state.values.slice();
        const updatedColors = this.state.bgColors.slice();

        let newColor = 'yellow';

        //if (newValue < cell's minimum value || newValue > cell's maximum value) --> set new color to red
        //NEED TO HAVE MAX/MIN VALUES STORED SOMEWHERE (i.e. in state/array) SO COLOR AUTOMATICALLY CHANGES WHEN RESPECTIVE VALUE IS CHANGING
        
        updatedValues[i] = newValue;
        updatedColors[i] = newColor;

        this.setState({
            values: updatedValues,
            bgColors: updatedColors
        })
    }

    render() {
        return (
            <div>
                <br />
                <table>
                    <TableHeader />
                    <TableBody renderCell={(i) => this.renderCell(i)}/>
                </table>

                <UpdateButton
                updateCell={(i,newValue) => this.updateCell(i,newValue)}/>

            </div>
        );
    }
}

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th class="lcol"></th>
                    <th class="othercol">Min</th>
                    <th class="othercol">Actual</th>
                    <th class="othercol">Max</th>
                </tr>
            </thead>
        );
    }
}

class TableBody extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td class="lcol">Temperature</td>
                    <td class="othercol">20</td>
                    {this.props.renderCell(0)}
                    <td class="othercol">36</td>
                </tr>
                <tr>
                    <td class="lcol">Motor 1 Current</td>
                    <td class="othercol">20</td>
                    {this.props.renderCell(1)}
                    <td class="othercol">36</td>
                </tr>
                <tr>
                    <td class="lcol">Motor 2 Current</td>
                    <td class="othercol">20</td>
                    {this.props.renderCell(2)}
                    <td class="othercol">36</td>
                </tr>
                <tr>
                    <td class="lcol">Motor 3 Current</td>
                    <td class="othercol">20</td>
                    {this.props.renderCell(3)}
                    <td class="othercol">36</td>
                </tr>
                <tr>
                    <td class="lcol">Motor 4 Current</td>
                    <td class="othercol">20</td>
                    {this.props.renderCell(4)}
                    <td class="othercol">36</td>
                </tr>
            </tbody>
        );
    }
}

class UpdateButton extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.updateCell(1,65)}>
                    {"click me!"}
                </button>
            </div>
        );
    }
}

export default Table;