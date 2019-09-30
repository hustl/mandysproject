import React from 'react'
import CurrencyFormat from 'react-currency-format';
function useDataFetcher() {
    const [balanc,setbalance]= React.useState({})
    React.useEffect(() => {
        fetch('https://kui-app.firebaseio.com/balance/.json')
        
      .then(response => response.json())
      .then(data => setbalance({ data }));
       
      }, [])
 
  localStorage.setItem('rememberMe', balanc.data);
  console.log(balanc.data)
    return { balanc }
  }


export default function balance() {

    const { balanc } = useDataFetcher()

  return (
    <div style ={{display:'flex', 
   
    textAlign: 'center',
    alignItems: 'center',
    color: 'aliceblue',
    fontFamily: 'Courier New, Courier, monospace',
    fontSize: '20px',
    fontWeight: 'bold'}}>Account Balance  :
      <CurrencyFormat value={balanc.data} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /> {'\t'}USD
    </div>
  );
}