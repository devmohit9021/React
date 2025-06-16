import NetflixSeries from "./components/NetflixSeries";
import "./components/NetFlix.css";
// import "./idex.css";

export const App = () => {
  return(
    <section className="container" >
      <h1 className="card-heading">list of best netflix series</h1>
    <NetflixSeries />;

    </section>
  );
};




