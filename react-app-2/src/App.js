import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ElementsComponent from "./components/ElementsComponent";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";
import higherOrderComponent from "./components/HOC";
import SampleRenderProps from "./components/SampleRenderProps";

function App() {
    const TestApp = higherOrderComponent(() => {
        return <div>Test App</div>;
    });
    return (
        <div className="App">
            <CounterComponent />
            <TaskScreen />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<h1>Home Page</h1>} />
                    <Route path={"/contact"} element={<h1>Contact Page</h1>} />
                    <Route path={"/about"} element={<h1>About Page</h1>} />
                    <Route path={"/signup"} element={<h1>Signup Form</h1>}>
                        <Route path={"elementsComponent"} element={<ElementsComponent />} />
                    </Route>
                    <Route path={"/test"} element={<TestApp />} />
                    <Route path={"/sample"} element={<SampleRenderProps />} />
                    <Route path={"/photos"} element={<Photos />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
