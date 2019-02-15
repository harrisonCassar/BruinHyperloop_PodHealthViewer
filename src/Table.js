import React, {Component} from 'react';
import {LabelCell, StaticCell, DynamicCell} from './Cell';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValues: Array(this.props.rows).fill(null),
            maxValues: Array(this.props.rows).fill(null),
            labels: Array(this.props.rows).fill(null),
            init: false,

            values: Array(this.props.rows).fill(2),
            bgColors: Array(this.props.rows).fill('lime'),
        };
    }

    renderDynamicCell(i) {
        return (
            <DynamicCell
                value={this.state.values[i]}
                bgColor={this.state.bgColors[i]}
            />
        );
    }

    //type is either max or min
    renderStaticCell(i,type) {
        
        let extremeValue = 0;
        if (type === 'max' || type === 'maximum')
            extremeValue = this.state.maxValues[i];
        else if (type === 'min' || type === 'minimum')
            extremeValue = this.state.minValues[i];

        return (
            <StaticCell
                value={extremeValue}
                bgColor={this.state.bgColors[i]}
            />
        );
    }

    renderLabelCell(i) {
        return (
            <LabelCell
                label={this.state.labels[i]}
            />
        );
    }

    updateCell(i,newValue)
    {
        const updatedValues = this.state.values.slice();
        const updatedColors = this.state.bgColors.slice();

        let newColor = 'lime';

        if (newValue < this.state.minValues[i] || newValue > this.state.maxValues[i])
            newColor = 'red';
        
        updatedValues[i] = newValue;
        updatedColors[i] = newColor;

        this.setState({
            values: updatedValues,
            bgColors: updatedColors
        })
    }

    render() {
        //wait for passed in custom min/max values or labels, will override (if none passed in, don't render table)
        if (!this.props.minValues || !this.props.maxValues || !this.props.labels)
            return null;
        else if (this.state.init === false) {
            this.setState({
                minValues: this.props.minValues,
                maxValues: this.props.maxValues,
                labels: this.props.labels,

                init: true,
            });
        }

        return (
            <div>
                <br />
                <table>
                    <TableHeader 
                        tableLabel={this.props.tableLabel}
                    />

                    <TableBody
                        rows={this.props.rows}
                        renderLabelCell={(i) => this.renderLabelCell(i)}
                        renderStaticCell={(i,type) => this.renderStaticCell(i,type)}
                        renderDynamicCell={(i) => this.renderDynamicCell(i)}
                    />
                </table>

                {/*button is added just for basic testing update cell functionality*/}
                {/*<UpdateButton
                    updateCell={(i,newValue) => this.updateCell(i,newValue)}
                />*/}
            </div>
        );
    }
}

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th className="lcol" bgcolor={'white'}>{this.props.tableLabel}</th>
                    <th className="othercol" bgcolor={'white'}>Min</th>
                    <th className="othercol" bgcolor={'white'}>Actual</th>
                    <th className="othercol" bgcolor={'white'}>Max</th>
                </tr>
            </thead>
        );
    }
}

class TableBody extends Component {
    
    renderRow(i)
    {
        return (
            <tr>
                {this.props.renderLabelCell(i)}
                {this.props.renderStaticCell(i,'min')}
                {this.props.renderDynamicCell(i)}
                {this.props.renderStaticCell(i,'max')}
            </tr>
        );
    }

    render() {

        let rows = [];

        for (var i = 0; i < this.props.rows; i++) {
            rows.push(this.renderRow(i));
        }

        return (
            <tbody>
                {rows}
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