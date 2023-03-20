import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Habit from "./components/Habit/Habit"
import Accomplishment from './components/Accomplishment/Accomplishment';
import Rewards from './components/Rewards/Rewards';
import Elements from './components/Elements/Elements';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideNav />} >
      <Route path="habits" element={<Habit />} />
      <Route path="/accomplishments" element={<Accomplishment />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/elements" element={<Elements />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

