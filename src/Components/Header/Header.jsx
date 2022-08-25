import React,{useState} from 'react';
import NavBar from './NavBar';
import './Header.css';
import Girl from '../../Images/Girl.png';
import  axios from 'axios';
function Header() {
  const[Inputval , setInputval] = useState('');
  const[Quotes, setQuotes] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: {category: 'all', count: '10'},

    headers: {
      'X-RapidAPI-Key': '915375c98dmsh284e0bcabf67d8fp16be8cjsn5e3bed662136',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };
  const fetchQuotes = async(e) =>{    
    if(e.key === 'Enter'){
        do{
          await axios.request(options).then(response => {
            console.log(response.data.content);
            setQuotes(response.data.content)
          })
          .catch(err => {
            console.log(err);
          })
        }while(Quotes.match(Inputval))
      alert(Quotes)
    }
  }
  const getValue = (e) =>{
      setInputval(e.target.value)     
  }
  // console.log(Quotes)
  return (
    <>
    <section className='header'>
       <NavBar/>
       <div className='container'>
           <div className='searchBx'>
               <i class="fa fa-search"></i>
               <input type="text" placeholder="Search Quotes..." value={Inputval} onChange={getValue} onKeyPress={fetchQuotes} />
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