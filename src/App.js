import React,{Component} from 'react';
import './App.css';
import Facebook from './Facebook.js';

 class App extends Component{
   render(){
     return(

   
    <div className="App">
      <header className="App-header">
        
        <h1 className="App-title"> Facebook Authentication</h1>

       
      </header>
      
        <p className="App-nitro">
          To get started, authenticate with Facebook
        </p>
        <Facebook/>
    </div>
 );
}
}

export default App;
