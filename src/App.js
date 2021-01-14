// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import History from './components/History/History';

function App() {
  return (
    <BrowserRouter>
      <nav className="w-screen sm:flex justify-start bg-indigo-900">
        <ul className="items-center ">
          <li className="m-2.5 ml-24 pr-8 py-3 text-center inline-block 
            text-gray-50 active:border-b active">
            {/* <a href="/">Home</a></li> */}
            <Link to="/" >Home</Link></li>
          <li className="m-2.5 pr-4 py-3 text-center inline-block text-gray-50">
            {/* <a href="/history">History</a></li> */}
            <Link to="/history" >History</Link></li>
        </ul>
      </nav>

      <div className="container lg-auto h-full pb-8 sm:py-8 border-l border-r border-solid 
      border-gray-200" >
        <Route path="/" exact component={Home} />
        <Route path="/history" exact component={History} />
      </div>
      <footer className="w-screen bg-indigo-900 p-4">
        <div className="text-center text-gray-50 font-light tracking-wider">Assignment Completed by Gulyapas Poonkawinsiri.
          <br></br>Using React Hooks and Tailwind
          <br></br>Github Source Code</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
