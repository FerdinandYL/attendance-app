import LoginPage from './components/LoginPage';
import './App.css';
import React from 'react';

function App() {
  const [user, setUser] = React.useState();
  console.log(user);

  if(user === undefined){
    return (
      <div className="App">
        <LoginPage setUser={setUser} />
      </div>
    );
  } else {
    return (
      <div className='App'>
        <h1>Halo, {user.name}</h1>
        <button onClick={setUser()}>Logout</button>
        <button >TimeIn</button>
      </div>
    );
  }
}

export default App;
