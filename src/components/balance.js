import React from 'react'
import CurrencyFormat from 'react-currency-format';
var store = require('store2')
const windowGlobal = typeof window !== 'undefined' && window
function useDataFetcher() {
    const [balanc,setbalance]= React.useState({})
    React.useEffect(() => {
        fetch('https://kui-app.firebaseio.com/balance/.json')
        
      .then(response => response.json())
      .then(data => setbalance({ data }));
       
      }, [])
      store('rememberMe',  balanc.data )
 
     // windowGlobal.localStorage.setItem('rememberMe', balanc.data);
  console.log(balanc.data)
    return { balanc }
  }


export default function balance() {

    const { balanc } = useDataFetcher()

  return (
    <div style ={{
    textcolor: 'black',
    fontFamily: 'Courier New, Courier, monospace',
    fontSize: '20px',
    fontWeight: 'bold'}}>
      <CurrencyFormat value={balanc.data} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /> {'\t'}USD
    </div>
  );
}