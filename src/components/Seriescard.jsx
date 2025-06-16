const SeriesCard = (props) => {
    const {id, img_url, name, rating, description,cast, genre, watch_url} = props.data;
    return (
        <li key={props}>
            <div>
                <img
                    src={img_url}
                    alt={name}
                    width="40%"
                    height="40%"
                />
            </div>
            <h2>Name: {name} </h2>
            <h3> Rating: {rating} </h3>
            <p>Summary:  {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank" rel="noreferrer">
                <button
                style={{padding: "1.2 rem 2.4rem",
                    border: "none",
                    fontSize: '1.6rem',
                    backgroundColor:  "var(--btn-hover-bg-color)"

                }}
                >
                    
                    Watch Now </button>
            </a>

        </li>
    );
};

export default SeriesCard;


// const SeriesCard = (props) => {
//   return (
//     <li>
//       <div>
//         <img
//           src={props.currElem.img_url}
//           alt={props.currElem.name}
//           width="40%"
//           height="40%"
//         />
//       </div>
//       <h2>Name: {props.currElem.name} </h2>
//       <h3> Rating: {props.currElem.rating} </h3>
//       <p>Summary:  {props.currElem.description}</p>
//       <p>Genre: {props.currElem.genre}</p>
//       <p>Cast: {props.currElem.cast}</p>
//       <a href={props.currElem.watch_url} target="_blank" rel="noreferrer">
//         <button>Watch Now </button>
//       </a>
//     </li>
//   );
// };

// export default SeriesCard;
