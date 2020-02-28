import React from 'react';
import { ButtonToggle } from 'reactstrap';
import '../../css/scheduleItem.css'

const ScheduleItem = (props) => {
  return (
    <tbody>
        <tr>
            <td>{props.schedule.arrival}</td>
            <td>{props.schedule.arrivalTime}</td>
            <td>{props.schedule.destination}</td>
            <td>{props.schedule.destinationTime}</td>
            <td>{props.schedule.frequency}</td>
            <td>{props.schedule.name}</td>
            <td>{props.schedule.trainType}</td>
            <td><ButtonToggle color="success">Reserve</ButtonToggle></td>
        </tr>
    </tbody>
  );
}

export default ScheduleItem;
