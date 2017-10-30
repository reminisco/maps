import React, {Component} from 'react';

export default class Grid extends Component {
    render() {
        const {
            rows,
            columns,
            row,
            height,
            column,
            width,
            gap = '25px'
        } = this.props;

        const columnConfig = `${column} / span ${width}`,
            rowConfig = `${row} / span ${height}`;

        const style = {
            ...this.props.style,
            display: 'grid',
            gridTemplateRows: rows,
            gridTemplateColumns: columns,
            gridColumn: columnConfig,
            gridRow: rowConfig,
            gridGap: gap,
        };

        return <div style={style}>{this.props.children}</div>
    }
}