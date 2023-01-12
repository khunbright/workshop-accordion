import { useState } from 'react';
import './App.css';
import SingleContent from './conponents/SingleContent';
import data from './data';

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>My Profile (accordion)</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data}/>
          }
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
