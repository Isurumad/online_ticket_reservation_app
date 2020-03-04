import React from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux'
import ScheduleItem from './ScheduleItem'
import ScheduleFilter from './scheduleFilter'
import selectSchedules from '../../redux/selectors/selectSchedules'
import Footer from '../Footer' 
import '../../css/scheduleItem.css'

class Schedule extends React.Component {
    constructor(props){
        super(props);
        this.state=[]

    }
  render(){
    return (
        <div>
            <ScheduleFilter/>
            <Table dark id='sch-table-head'>
            <thead>
                <tr>
                <th>Arrival</th>
                <th>Arrival Time</th>
                <th>Destnation</th>
                <th>Destination Time</th>
                <th>Frequency</th>
                <th>Name</th>
                <th>Type</th>
                <th></th>
                </tr>
            </thead>
            {this.props.schedules.map((schedule)=>
                <ScheduleItem schedule={schedule} key={schedule.id}/>
            )}        
            </Table>
           <Footer/> 
        </div>
  );
}
}
const mapStateProps = (state)=>{
    return{
        schedules:selectSchedules(state.schedules,state.scheduleFilter)
    }
}
export default connect(mapStateProps) (Schedule);
