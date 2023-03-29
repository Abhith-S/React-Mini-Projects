import React from 'react'
import Tour from "./Tour"
const Tours = ({tours, removeTour}) => {
  return (
    <div>

        {/* //getting the entire tours data looping through it */}
        {tours.map( (tour)=> {

            // we are passsing the id as the prop tp tour component and passing all the other elements as spread operator
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        
        })}
        
    </div>
  )
}

export default Tours