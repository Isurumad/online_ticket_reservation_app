import React from 'react';
import { Table } from 'reactstrap';

const AdvertisementItem = (props) => {
  return (
    <Table dark>
      <tbody>
        <tr>
          <th scope="row">1</th>
            <td>{props.add.title}</td>
            <td>{props.add.description}</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default AdvertisementItem;
