import './app.css'

import Header from './components/navbar/index'
import Image from './components/image-container';
import ProjectsContainer from './components/projects-container';

export default function App() {
  return (
    <div className="App">
        <Header />
      <div className='section'>
        <Image />
        <ProjectsContainer />
      </div>
    </div>
  );
}