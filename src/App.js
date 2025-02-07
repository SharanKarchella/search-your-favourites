import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import axios from "axios";
import Cardcomponent from "./components/Cardcomponent";
import { Col, Container, Row } from "react-bootstrap";

function App() {

  //API_Key
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const[searchData, setSearchData] = useState('');
  const[storeApiData,setApiData] = useState([]);
  //console.log(searchData);
  
  //State & Toggle Function
  const [darkMode, setDarkMode] = useState(false); 
  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    //console.log('apikey',API_KEY)

    try{
      const url = await axios.get(`https://www.omdbapi.com/?s=${searchData}&apikey=${API_KEY}`);
      //console.log(url.data.Search);
      setApiData(url.data.Search);
      setSearchData('');
    }

    catch(capturingError){
      console.log("FetchingError:", capturingError.message)
    }

  }

  // console.log("ApiData",storeApiData);


  return (
    <>
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
                
                {/* Your Existing Code */}
 
              <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
            <button onClick={toggleTheme}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

      <div style={{ display: "flex", justifyContent: "center", paddingTop:"10px"}}>
        <h1>Search for your <span style={{ color: darkMode? 'yellow' : 'blue' }}>Favourite Movies/Genres or Webseries</span> </h1>  
      </div>
      
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Search here..." style={{width:"200px"}} onChange={(e)=>{setSearchData(e.target.value)}} value={searchData}  />
              <button>Search</button>
        </form>
      </div>
    <br />

      <Container>
        <Row>
        {storeApiData?.map((items)=>(
            // <li>
            //   <h1>{items.Title}</h1>
            //   </li>
            <Col key={items.imdbID}  md={4} xs={12} className="mx-auto">
              <Cardcomponent items={items} />
            </Col>
        ))    
        }
        </Row>
      </Container>
</div>
    </>
  );
}

export default App;
