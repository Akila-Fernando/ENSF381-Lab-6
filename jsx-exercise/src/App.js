//import logo from './logo.svg';
import './App.css';

function App() {

  const date = new Date();
  const currentyear = date.getFullYear();
  const isLoggedIn = false;
  return (
    <div>
        <h1>ENSF-381: Full Stack Web Development</h1>;
        <p>React Components</p>
        <p>{currentyear}</p>
        {isLoggedIn === true? "Welcome Back!" : "Please Log in"}
    </div>
  );
}




export default App;
