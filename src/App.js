import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import History from './components/History/History';

const App = props => {
  const [mainHeight, setMainHeight] = useState(0);
  const navRef = useRef();
  const footRef = useRef();

  useEffect(() => {
    const windowH = window.innerHeight;
    const navH = navRef.current.clientHeight;
    const footH = footRef.current.clientHeight;
    setMainHeight(windowH - navH - footH);
  }, []);

  let mainCssHeight = '';
  let _a = mainHeight % 4;
  _a = mainHeight + (4 - _a); 
  mainCssHeight = 'min-h-' + (_a/4)
  // console.log(_a)
  // console.log(_a/4)
  // console.log(mainCssHeight)
  // console.log(mainCssHeight, mainHeight)

  return (
    <BrowserRouter>
      <div className="w-3/5 h-3/5">
        <img src="/assets/thumbnail.png" alt="" />
      </div>
      <nav ref={navRef} className="w-screen sm:flex justify-start bg-indigo-900">
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

      <div className={"container lg-auto pb-8 sm:py-8 border-l border-r border-solid border-gray-200 " + mainCssHeight}>
        <Route path="/" exact component={Home} />
        <Route path="/history" exact component={History} />
      </div>

      <footer ref={footRef} className="w-screen bg-indigo-900 p-4">
        <div className="text-center text-sm text-gray-50 font-light tracking-wider">Assignment Completed by Gulyapas Poonkawinsiri.
          <br></br>Using React Hooks and Tailwind (First Time Usage)</div>
        <br></br><a className="flex justify-center w-48 mx-auto bg-white rounded-lg hover:bg-red-400"
          href="https://github.com/joetlobb/mfec-assignment">Github Source Code</a>
      </footer>
    </BrowserRouter>
  );
}

export default App;
