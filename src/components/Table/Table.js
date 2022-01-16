import React from 'react';
import TableRow from './TableRow';

const Table = ({ heading, headers, data }) => {
    return (
      <>
        <h2 className="mb-5" data-testid="tableHeading">{heading}</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col" data-testid="tableHeader1" >{headers[0]}</th>
                <th scope="col" data-testid="tableHeader2" >{headers[1]}</th>
                <th scope="col" data-testid="tableHeader3" >{headers[2]}</th>
              </tr>
            </thead>
            { (data != null) && 
                <tbody data-testid="tableBody">
                  <TableRow users={data} /> 
                </tbody>
            }
          </table>
        </div>
      </>
    );
};
  
export default Table;