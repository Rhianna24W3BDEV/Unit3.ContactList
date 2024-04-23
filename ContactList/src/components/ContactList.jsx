
import { useState, useEffect } from "react";
import ContactRow from './ContactRow';


export default function ContactList({setSelectedContact}){
const [contacts,setContacts] = useState([]);
useEffect(() =>{
    async function fetchContacts(){
        try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
            const result = await response.json();
            if (response.status === 200) {
                setContacts(result);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchContacts()
}, []);

    return <table className = 'contactList'>
        <thead>
            <tr>
                <th className = 'contactlistfont'colSpan='3'>Contact List</th>
            </tr>
        </thead>
        <tbody className="list">
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
        { contacts.map((contact) => {
        return <ContactRow key = {contact.id} contact = {contact} setSelectedContact={setSelectedContact}></ContactRow>
    }) } 
    </tbody>
    </table>
    
}