import React from 'react'
import { Col, Row,Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux'
import {setArrivalFilter,
        setDestinationFilter,
        setTypeFilter,
        setNameFilter}
        from '../../redux/action/scheduleFilter';
    import '../../css/scheduleFilter.css'

    class ScheduleFilter extends React.Component{
        render(){
            return(
                <div id='filter-box'>
                    <Form>
                        <Row form>
                            <Col md={3}>
                            <FormGroup>
                                <Label >Arrival Station</Label>
                                <Input type="text"  id="arrival" value={this.props.filter.arrival} onChange={(e)=>{
                                    this.props.dispatch(setArrivalFilter(e.target.value));
                                }}/>
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label >Departure Station</Label>
                                <Input type="text" id="destination" value={this.props.filter.destination} onChange={(e)=>{
                                    this.props.dispatch(setDestinationFilter(e.target.value));
                                }}/>
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label>Train Name</Label>
                                <Input type="text"id="destination" value={this.props.filter.trainName} onChange={(e)=>{
                                    this.props.dispatch(setNameFilter(e.target.value));
                                }}/>
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label>Train Type</Label>
                                <Input type="text"  id="type"value={this.props.filter.trainType} onChange={(e)=>{
                                    this.props.dispatch(setTypeFilter(e.target.value));
                                }}/>
                            </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            );
        }
    }

    const mapStateProps = (state)=>{
        return{
            filter:state.scheduleFilter
        }
    }
    export default connect(mapStateProps)(ScheduleFilter);