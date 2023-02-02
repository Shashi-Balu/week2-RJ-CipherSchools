import "./App.css";
import Binding from "./components/Binding";
import BindingFunction from "./components/BindingFunction";
import EventHandling from "./components/EventHandling";
import PropsTypesApp from "./components/PropsTypesApp";
import LifeCycleMethods from "./components/LifeCycleMethods";
import SumNumbers from "./components/SumNumbers";
import FormValidation from "./components/FormValidation";

function App() {
    return (
        <div className="App">
            <PropsTypesApp />
            <EventHandling />
            <Binding />
            <BindingFunction />
            <LifeCycleMethods />
            <SumNumbers />
            <FormValidation />
        </div>
    );
}

export default App;
