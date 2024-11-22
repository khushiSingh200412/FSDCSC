import "./App.css"
const App = ({ name,email, mobile }) => {
  return (
    <div id="disp">
      <h1>name:{name}</h1>
      <h2>email:{email}</h2>
      <h2>mobile:{mobile}</h2>
    </div>
  );
};

export default App