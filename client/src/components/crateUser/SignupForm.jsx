import React from 'react'
import { Col, Row, Button, Form, FormGroup,Input,Label} from 'reactstrap';
import '../../css/signupForm.css'

class SignupForm extends React.Component{
constructor(props){
    super(props);
    this.state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        error:'',
        isLogin:false
    }
}
onFirstNameChange=(e)=>{
    const firstName = e.target.value;
    this.setState(()=>({
        firstName
    }))
}

onLastNameChange=(e)=>{
    const lastName = e.target.value;
    this.setState(()=>({
        lastName
    }))
}
onEmailChange=(e)=>{
    const email = e.target.value;
    this.setState(()=>({
        email
    }))
}
onPasswordChange=(e)=>{
    const password = e.target.value;
    this.setState(()=>({
        password:password
    }))
}

onConfirmPasswordChange=(e)=>{
    const confirmPassword = e.target.value;
    this.setState(()=>({confirmPassword}))
}
onSubmit=(e)=>{
    e.preventDefault()
    if(!this.state.firstName || !this.state.lastName || !this.state.email){
        this.setState(()=>({error:'*Fill All Required Fields'}));
    }else if(this.state.password !== this.state.confirmPassword){
        this.setState(()=>({error:'*Insert Correct Password'}));

    }else{
        this.setState(()=>({error:'',isLogin:true}));
        this.props.onSubmit({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password
        })
    }
}

render(){
    
  
    return(
    <div id='page-body'>
    <Form id='signup-form' onSubmit={this.onSubmit}>
        <h1>USER SIGNUP</h1>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange} />
            </FormGroup>
            </Col>
        </Row>

        <Row form>
        <Col md={6}>
            <FormGroup>
                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}/>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
        <Col md={6}>
            <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}/>
            </FormGroup>
        </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input type="password" name="con-password" id="con-password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup check inline>
        <Label id='check-box' check>
          <Input type="checkbox" /> Signup As Passenger
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label id='check-box' check>
           <Input type="checkbox" /> Signup As Service Provider
        </Label>
      </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input type="password" name="con-password" id="con-password" placeholder="Company Name" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input type="password" name="con-password" id="con-password" placeholder="Company Location" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Input type="password" name="con-password" id="con-password" placeholder="Official Conatct Number" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
            </FormGroup>
            </Col>
        </Row>
        {this.state.error && <p id='error'>{this.state.error}</p>}
        
        <Button id ='signup-button'>Sign up</Button>
    </Form>
   </div> 
        );

    }
}

export default SignupForm
