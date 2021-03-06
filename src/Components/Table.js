import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

const CustomNoDataComponent = () => {
  return <div className="table-none">No score yet. Play a game!</div>
}

export default class Table extends Component {
  render() {
    const { scores } = this.props;
    const columns = [{
      id: 'date',
      Header: 'Date',
      accessor: d => d.dateTime
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
        NoDataComponent={CustomNoDataComponent}
        data={scores}
        columns={columns}
        {...props}
      />
    );
  }
}
