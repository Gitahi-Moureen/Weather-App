import Weather from './Weather';


function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log({baseUrl})
  return(

<div>
 <Weather/>
</div>
  );
}

export default App;
