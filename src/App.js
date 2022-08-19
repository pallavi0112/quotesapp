import React , {useState} from 'react';

import Header from './Components/Header/Header';
import Quotes from './Components/Quotes/Quotes';
import Container2 from './Components/Grid/Container2';
import Container3 from './Components/Flex/Container3';
import Container4 from './Components/Flex/Container4';
import Circle from './Components/Circle/Circle';
import Footer from './Components/Footer/Footer';
import Data1 from './Data1';
import Data2 from './Data2';
import Data3 from './Data3';
import Data4 from './Data4';
function App() {
  // const[Quotes, setQuotes] = useState([])
  return (
    <div className="App">
        <Header/>
        <Quotes/>
        <Container2 Data={Data1}/>
        <Container3 Data={Data2}/>
        <Container4 Data={Data4}/>
        <Container2 Data={Data3}/>
        <Circle/>
        <Container3 Data={Data2}/>
        <Footer/>
    </div>
  );
}

export default App;
