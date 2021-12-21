import { useState } from "react";

const ContactList = () => {
    const contacts = [
        {
            id: 1,
            name: 'User 1',
            age: 11,
            city: 'City 1'
        },
        {
            id: 2,
            name: 'User 2',
            age: 12,
            city: 'City 2'
        },
        {
            id: 3,
            name: 'User 3',
            age: 13,
            city: 'City 3'
        },
    ];
    const [currentContactId, setCurrentContactId] = useState(1);

    const renderCurrentContact = () => {
        const currentContact = contacts.find(c => c.id === currentContactId);
        return <div>
            <div>Name: {currentContact.name}</div>
            <div>Age: {currentContact.age}</div>
            <div>City: {currentContact.city}</div>
        </div>
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                {contacts.map(contact => <div key={contact.id} onClick={() => setCurrentContactId(contact.id)}>{contact.name}</div>)}
            </div>
            <div>
                {renderCurrentContact()}
            </div>
        </div>
    );
};

export default ContactList;