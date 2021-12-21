import AddUserForm from "./AddUserForm";
import ContactList from "./ContactList";
import Counter from "./Counter";
import MoveDot from "./MoveDot";
import OnOffSwitch from "./OnOffSwitch";
import Tabs from "./Tabs";

const App = () => {
    return <div>
        <h1>React Examples</h1>
        <Counter />
        <OnOffSwitch />
        <Tabs />
        <MoveDot />
        <ContactList />
        <AddUserForm />
    </div>;
}

export default App;