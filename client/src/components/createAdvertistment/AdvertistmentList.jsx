import React from 'react'
import AdvertisementItem from './AdevrtistmentItem'
import {connect} from 'react-redux';
import {getAdvertisement} from '../../redux/action/advertistment'

class AdvertisementList extends React.Component{
    componentDidMount(){
        this.props.getAdvertisement();
    }

    render(){
        return(
            <div>
         
            {this.props.advertisements.advertisements.map((add)=>
                <AdvertisementItem add={add} key={add._id}/>
            )}
            </div>
        )
    }
}

// AdvertisementList.propTypes={
//     getAdvertisement:PropTypes.func.isRequired,
//     advertisements:PropTypes.object.isRequired
// }

const mapStateToProps =(state)=>{
    return{
        advertisements:state.advertisements
    }
}

export default connect(mapStateToProps,{getAdvertisement})(AdvertisementList);
