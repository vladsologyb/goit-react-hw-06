
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/searchBox/SearchBox'
import ContactsList from './components/contactList/ContactList'
import './App.css'

function App() {
 
  return ( 
    <div>
  <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
     <ContactsList  />
</div>
  )
  
}

export default App
