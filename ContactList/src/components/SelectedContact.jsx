

export default function SelectedContact({selectedContact, setSelectedContact}){
    function handleClick(){
        setSelectedContact(null);
    }
    
    return(
        <div className="details">
            <h1>Details</h1>
            <span>
                {' '}
                <tr className="info">
                <td>Name</td>
                <td>Address</td>
                </tr>
                
                {selectedContact.name} 
                {selectedContact.address.street} 
                {selectedContact.address.city}
            </span>
            <button className="btn"
            onClick={handleClick}
            >
                Go Back
            </button>
        </div>
    )
}