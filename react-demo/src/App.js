import './App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import PageFirst  from './component/PageFirst/PageFirst';
import PageSecond  from './component/PageSecond/PageSecond';
import PageThird  from './component/PageThird/PageThird';

function App() {
  return (
    <HashRouter>
      <h1>首页</h1>
      <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'blue'})} to="/PageSecond">go to PageSecond</NavLink>

      <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'blue'})} to="/PageThird">go to PageThrid</NavLink>
      <Routes>
        <Route path='/' element={<PageFirst/>}/>
        <Route path='/PageSecond' element={<PageSecond/>}/>
        <Route path='/PageThird' element={<PageThird/>}/>
        <Route>

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
