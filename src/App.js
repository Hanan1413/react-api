import './App.css';
import ContactCard from './Components/ContactCard'
import React,{useState, useEffect} from 'react'



function App() {
   const [results, setResults] = useState([]);

useEffect(() => {
      fetch("https://random-data-api.com/api/v2/users?size=6")
        .then(response => response.json())
        .then(data => {
          console.log(data);
           const results = data 
           
           setResults(results);
        });
   
  }, [])
  

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.avatar}
            name={result.first_name}
            email={result.email}
            birth={result.date_of_birth}
          />
        );
      })}
    </div>
  );
}

export default App