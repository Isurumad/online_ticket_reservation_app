import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import '../css/searchBox.css'

class SearchBox extends React.Component {
  constructor(props){
      super(props)
      this.state={
          arrival:'',
          destination:'',
          startTime:'',
          endTime:'',
          date:''

      }
  }

onDestinationChange=(e)=>{
    const destination = e.target.value;
    this.setState(()=>({
        destination
    }))
}

onArrivalChange=(e)=>{
    const arrival = e.target.value;
    this.setState(()=>({
        arrival
    }))
}

onStartTimeChange=(e)=>{
    const startTime = e.target.value;
    this.setState(()=>({
        startTime
    }))
}

render(){  
  return (
      <div className='search-form'>
          <h2>
              Find Schedule...
          </h2>
            <div className='search-form'>
                <Form inline >
                        <FormGroup  className="mb-2 mr-lg-2 mb-sm-0">
                            <Input type="text" name="arrival" id="input"value={this.state.arrival} onChange={this.onArrivalChange} placeholder="Start Station" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Input type="text" name="arrival" id="input" value={this.state.startTime} onChange={this.state.onStartTimeChange} placeholder="Start Time" />
                        </FormGroup>
                        <FormGroup  className="mb-2 mr-lg-2 mb-sm-0">
                            <Input type="text" name="destination" value={this.state.destination} onChange={this.onDestinationChange} id="input" placeholder="End Station" />
                        </FormGroup>
                        <FormGroup  className="mb-2 mr-lg-2 mb-sm-0">
                            <Input type="date" name="arrival" id="input"  placeholder={this.state.date} />
                        </FormGroup>
                     
                        <button >Find Schdule</button>
                </Form>
            </div>
      </div>
  );
  }
}

export default SearchBox;
