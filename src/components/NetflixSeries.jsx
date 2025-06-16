import seriesdata from "../api/seriesdata.json";
import SeriesCard from "./Seriescard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesdata.map((currElem) => (
        <SeriesCard key={currElem.id} data={currElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;


// import seriesdata from "../api/seriesdata.json"
// import SeriesCard from "./Seriescard"

// const NetflixSeries = () => {

//     return (
//         <ul>

//           {seriesdata.map((currElem) => {
//             <SeriesCard key={currElem.id} currElem={currElem}/>
            
//           })}
          

             
//         </ul>
//     );

// }




// export default NetflixSeries;

