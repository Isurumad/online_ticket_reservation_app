import React from 'react'
import Carosal from './Carosal'
import SearchBox from './SerchBox'
import MostVisitList from './MostVisitList'
import Footer from './Footer'
import ConnectedUserList from './UserList'

class ReservationApp extends React.Component{
    
    render(){
        return(
            <div>
                <Carosal/>
                <SearchBox/>
                <MostVisitList/>
                <ConnectedUserList/>
                <Footer/>
            </div>
        );
    }
}

export default ReservationApp