//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import EngineeringTopics from './EngineeringTopics'

function App() {
  const date = new Date();
  const currentyear = date.getFullYear();
  const isLoggedIn = true;
  return (
    <div className="App">
        <h1>ENSF-381: Full Stack Web Development</h1>
        <p>React Components</p>
        <p>{currentyear}</p>
        {isLoggedIn === true? "Welcome Back!" : "Please Log in"}
        
        <Home title="Home Page" description="Welcome to our website."/>
        <About title="About Us" description="We are passionate about delivering quality experiences."/>
        <Contact title="Contact Us" description="Feel free to reach out to us via email or phone."/>

        <EngineeringTopics />
    </div>
  );


}




export default App;
