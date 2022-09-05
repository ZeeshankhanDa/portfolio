
import { Routes,Route } from 'react-router-dom';
import './App.scss'
import {Layout} from './component/layout/layout'
import {Home} from './component/Home/home'
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { Project } from './component/project/project';
function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/project' element={<Project/>}/>

    </Route>
  </Routes>
   
  </>
  );
}

export default App;
