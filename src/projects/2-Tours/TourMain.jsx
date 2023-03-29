import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const TourMain = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      //parse the data
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id)=>{
    
    const newTours = tours.filter( (tour)=> tour.id != id )
    setTours(newTours);
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if(tours.length == 0){
    return (<div>
      <h2>No tours left</h2>
      <button onClick={fetchData}>Refresh</button>
    </div>)
  }
  return (
    <div>
      <Title title="Tours App" />
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
};

export default TourMain;
