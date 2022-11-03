import './App.css';
import CarList from "./pages/CarList";
import RootRouter from "./router/RootRouter";

function App() {
    return (
        <>
            <RootRouter>
                <CarList/>
            </RootRouter>
        </>
    );
}

export default App;
