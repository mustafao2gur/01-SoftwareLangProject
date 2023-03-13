import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Lesson from "./components/Lesson/Lesson";

import { data } from "./data";
function App() {
  return (
    <div>

      
      <Header/>
      <Main/>
      <div className="container">
        {data.map(({id, name , hour , image})=>(
           <Lesson id={id} name={name} hour={hour} image={image}/>
        ))}
      </div>
     
    </div>
  );
}

export default App;
