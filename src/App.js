import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import SideNav from './components/SideNav';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <div className='flex flex-row'>
    <SideNav />
    <div className='flex flex-col w-[100%]'>
    <Topbar className=""/>
    <Header />
    <MainBoard />
    </div>
    </div>
    </div>
  );
}

export default App;
