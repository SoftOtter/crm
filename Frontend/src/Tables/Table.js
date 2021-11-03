import React from 'react';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import { dataForSalesTileTableHeader } from '../data/dataForSalesTileTableHeader';
import { dataSales } from '../data/dataSales';
import './table-style.css'

export class Table extends React.Component {
    render() {
        return (
            <table className={'Table'}>
                <TableHeader
                    dataForTableHeader={this.props.dataForTableHeader}
                />
                <TableBody
                    dataForTableBody={this.props.dataForTableBody}
                    maxRows={this.props.maxRows}
                />
            </table>
        );
    }
}
