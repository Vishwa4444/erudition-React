
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  let todos =[
    {
      sno:1,
      title:"Go to the market",
      desc :"get something from the market"
    },
    {
      sno:2,
      title:"Go to the market2",
      desc :"get something from the market2"
    },
    {
      sno:3,
      title:"Go to the market3",
      desc :"get something from the market3"
    }
  ]
  return (
    <>
         <Header title="TODOs LIST" searchBar={true}/>
         <Todos todos={todos}/>
         <Footer/>



     </>
  );
}

export default App;
