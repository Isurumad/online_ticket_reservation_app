import React from 'react'
import AdvertisementItem from './AdevrtistmentItem'
import {connect} from 'react-redux';
import {getAdvertisement} from '../../redux/action/advertistment'
import '../../css/advertisementItem.css'
class AdvertisementList extends React.Component{
    componentDidMount(){
        this.props.getAdvertisement();
    }

    render(){
        return(
            <div id='add-body'>
         
            {this.props.advertisements.advertisements.map((add)=>
                <AdvertisementItem add={add} key={add._id}/>
            )}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        advertisements:state.advertisements
    }
}

export default connect(mapStateToProps,{getAdvertisement})(AdvertisementList);
