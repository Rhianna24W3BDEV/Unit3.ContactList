
export default function ContactRow({contact, setSelectedContact}){
    

    function handleClick(){
       setSelectedContact(contact);
    }
    
    return(
        <tr className ='row' onClick={handleClick}>
         <td>{contact.name}</td>
         <td>{contact.email}</td>
         <td>{contact.phone}</td>
        </tr>
     );
}