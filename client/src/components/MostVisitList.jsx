import React from 'react'
import MostVisitItem from './MostVisitItem'
import Img1 from '../images/temple_of_tooth.jpg'
import Img2 from '../images/sigiriya.jpg'
import Img3 from '../images/dambulla.jpg'

class MostVisitList extends React.Component{
    state=[
        {id:1,title:'Temple Of The Tooth',image:Img1,description:'In the Central Highlands, almost dead centre in the little island of Sri Lanka lays Kandy City. The crown jewel of the city is the famed Sri Dalada Maligawa, also known as the Temple of the Tooth. ‘Maligawa’ literally translates to palace, and the temple is part of the palace complex. The entire complex is over three centuries old at least, and has seen many a king’s rise and fall. It has seen bloody wars and peaceful reigns and is one of the most historical places still standing in the island.'},
        {id:2,title:'Sigiriya',image:Img2,description:'The Lion Rock of Sigiriya is one of the most famous highlights in Sri Lanka. The photogenic rock is over 200 meters high and is on the UNESCO World Heritage List. On top of this rock stood the palace of King Kasyapa in the 5th century. You can still see the ruins of the palace at the top, from where you have an amazing view over the vast green jungle. The rock owes its name to the lion, carved in stone, which guards the stairs. Now only the legs are left. At the foot of the rock you will find beautifully landscaped gardens, canals, a small museum and countless monkeys roaming around. The climb up, via almost 1900 steps, is tough but well worth it. Halfway up you can make a stop at the well-preserved murals of undressed women and at a smoothly polished mirror wall in which the king could admire himself.'},
        {id:3,title:'Dambulla',image:Img3,description:'Dambulla is a “must” during your trip through Sri Lanka, but only because of the famous Dambulla Cave Temples! The caves are on top of a 160 meter high rock, from where a giant golden Buddha is luring you inside. There are 5 different caves that you can visit with around 150 different Buddha statues and murals. The beautiful images vary in size. Many have been here for 2000 years, when King Valagamba sought refuge in the caves and had the temples carved out of it. Dambulla is a popular place of pilgrimage among Sri Lankan Buddhists. The view over the area is also beautiful here.'},
        {id:4,title:'Temple Of The Tooth',image:Img1,description:'In the Central Highlands, almost dead centre in the little island of Sri Lanka lays Kandy City. The crown jewel of the city is the famed Sri Dalada Maligawa, also known as the Temple of the Tooth. ‘Maligawa’ literally translates to palace, and the temple is part of the palace complex. The entire complex is over three centuries old at least, and has seen many a king’s rise and fall. It has seen bloody wars and peaceful reigns and is one of the most historical places still standing in the island.'},
        {id:5,title:'Sigiriya',image:Img2,description:'The Lion Rock of Sigiriya is one of the most famous highlights in Sri Lanka. The photogenic rock is over 200 meters high and is on the UNESCO World Heritage List. On top of this rock stood the palace of King Kasyapa in the 5th century. You can still see the ruins of the palace at the top, from where you have an amazing view over the vast green jungle. The rock owes its name to the lion, carved in stone, which guards the stairs. Now only the legs are left. At the foot of the rock you will find beautifully landscaped gardens, canals, a small museum and countless monkeys roaming around. The climb up, via almost 1900 steps, is tough but well worth it. Halfway up you can make a stop at the well-preserved murals of undressed women and at a smoothly polished mirror wall in which the king could admire himself.'},
        {id:6,title:'Dambulla',image:Img3,description:'Dambulla is a “must” during your trip through Sri Lanka, but only because of the famous Dambulla Cave Temples! The caves are on top of a 160 meter high rock, from where a giant golden Buddha is luring you inside. There are 5 different caves that you can visit with around 150 different Buddha statues and murals. The beautiful images vary in size. Many have been here for 2000 years, when King Valagamba sought refuge in the caves and had the temples carved out of it. Dambulla is a popular place of pilgrimage among Sri Lankan Buddhists. The view over the area is also beautiful here.'}
        
    ]

    render(){
        return(
            <div>
                <h1>Most Visit Places...</h1>
                {this.state.map((place)=>
                    <MostVisitItem place={place} key={place.id}/>
                )}
            </div>
        )
    }
}

export default MostVisitList;