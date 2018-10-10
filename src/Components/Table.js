import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class Table extends Component {
  render() {
    // dummy data for now
    const data = [
    {
      time: '9:36:03',
      hand: '2 of a kind',
      points: '100'
    }, {
      time: '9:35:03',
      hand: 'Straight',
      points: '600'
    }, {
      time: '9:38:02',
      hand: 'Nothing',
      points: '0'
    }];

    const columns = [{
      id: 'time',
      Header: 'Time',
      accessor: d => d.time
    }, {
      id: 'hand',
      Header: 'Hand',
      accessor: d => d.hand
    }, {
      id: 'points',
      Header: 'Points',
      accessor: d => d.points
    }];

    const props = {
      showPagination: false,
      showPaginationTop: false,
      showPaginationBottom: false,
      showPageSizeOptions: false,
      defaultPageSize: 5,
      sortable: false,
      multiSort: false,
    }

    return (
      <ReactTable
        data={data}
        columns={columns}
        {...props}
      />
    );
  }
}
