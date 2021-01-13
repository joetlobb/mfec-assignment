// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';

function App() {
  return (
    <BrowserRouter>
      <nav class="w-screen sm:flex justify-start bg-indigo-900">
        <ul class="items-center ">
          <li class="m-2.5 ml-24 pr-8 py-3 text-center inline-block text-gray-50">Home</li>
          <li class="m-2.5 pr-4 py-3 text-center inline-block text-gray-50">History</li>
        </ul>
      </nav>

      <div class="container lg-auto h-full pb-12 border-l border-r border-solid border-gray-200" >
        <Home />
        <History />
      </div>
      <footer class="w-screen bg-indigo-900 p-4">
        <div class="text-center text-gray-50 font-light">Assignment Completed by Gulyapas Poonkawinsiri. 
          <br></br>Created with React Hooks and Tailwind
          <br></br>Github Source Code</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
