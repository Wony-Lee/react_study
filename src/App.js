import "./App.css";
import Counter from "./components/counter/CounterClass";
import MyCompClass from "./components/MyCompClass";
import MyComponent from "./components/MyComponent";

function App() {
    return (
        <>
            <MyComponent favoriteNumber={2} name={"Hi"}></MyComponent>
            <MyCompClass favoriteNumber={1}>칭칭</MyCompClass>
            <Counter />
        </>
    );
}

export default App;
