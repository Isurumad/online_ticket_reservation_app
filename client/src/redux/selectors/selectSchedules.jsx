

const getVisibleSchedules = (schedules,{arrival,destination,arrivalTime,destinationTime,name,trainType})=>{
      return schedules.filter((schedule)=>{
        const arrivalMatch = schedule.arrival.toLowerCase().includes(arrival.toLowerCase());
        const destinationMatch = schedule.destination.toLowerCase().includes(destination.toLowerCase());
        const arrivalTimeMatch = schedule.arrivalTime.toLowerCase().includes(arrivalTime.toLowerCase());
        const destinationTimeMatch = schedule.destinationTime.toLowerCase().includes(destinationTime.toLowerCase());
        const nameMatch = schedule.name.toLowerCase().includes(name.toLowerCase());
        const trainTypeMatch = schedule.trainType.toLowerCase().includes(trainType.toLowerCase());

        return arrivalMatch && destinationMatch && arrivalTimeMatch && destinationTimeMatch && nameMatch && trainTypeMatch;
      })
}

export default getVisibleSchedules;