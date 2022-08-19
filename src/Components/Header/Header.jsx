import React,{useState} from 'react';
import NavBar from './NavBar';
import './Header.css';
import Girl from '../../Images/Girl.png';
import  axios from 'axios';
function Header() {
  const[Inputval , setInputval] = useState('');
  const[Quotes, setQuotes] = useState([]);
  const fetchQuotes = async() =>{
    const Datas = await axios.get('https://famous-quotes4.p.rapidapi.com/random')
    setQuotes(Datas.data)
  }
  const getValue = (e) =>{
        setInputval(e.target.value)
        fetchQuotes();
  }
  console.log(Quotes)
  return (
    <>
    <section className='header'>
       <NavBar/>
       <div className='container'>
           <div className='searchBx'>
               <i class="fa fa-search"></i>
               <input type="text" placeholder="Search Quotes..." value={Inputval} onChange={getValue}/>
            </div>
            <div className='imgBx'>
                <img src={Girl}/>
            </div>
       </div>
    </section>

    </>
  )
}

export default Header