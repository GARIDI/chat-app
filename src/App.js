import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'


function App() {
  return (
    <div className="App">
      <Contact name="Sally Simmmons"
               avatar="https://randomuser.me/api/portraits/women/71.jpg"
               online />
      <Contact name="Daisy Jenkins"
               avatar="https://randomuser.me/api/portraits/women/86.jpg"
               offline/>
      <Contact name="Tammy Schmidt"
               avatar="https://randomuser.me/api/portraits/women/90.jpg"
               online />
      <ContactList/>
    </div>
  );
}


export default App;
