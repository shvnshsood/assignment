import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Topbar from './components/Topbar';
import MainBorad from './components/MainBoard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupForm from './components/Signup';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: SignupForm,
  },
]);

function App() {
  return (
    <div>
      <div className='flex flex-row'>
    <SideNav />
    <div className='flex flex-col w-full'>
    <Topbar />
    <Header />
    <MainBorad>/</MainBorad>
    </div>
    </div>
    </div>
  );
}

export default App;
