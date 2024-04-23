/*import './App.css';
import { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact.jsx";


export default function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <SelectedContact selectedContactId = {selectedContactId} setSelectedContactId = {selectedContactId}/>
    ) : (
      <ContactList setSelectedContactId={selectedContactId} />
    )} 
    </>
 );
};*/

import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import { useState } from "react";
import './App.css';

function App(){
  const [selectedContact, setSelectedContact] = useState(null);
  
  return (
  <>
   { selectedContact ? (
    <SelectedContact 
      selectedContact = {selectedContact}
      setSelectedContact = {setSelectedContact}
      />  
   ) : (
   <ContactList setSelectedContact = {setSelectedContact}/> 
   )}
  </>
  )
};

export default App;


