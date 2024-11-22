import Movieslist from "./Movieslist";
const App = () => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Netflix-clone App
      </h1>
      <Movieslist />
    </div>
  );
};

export default App;
