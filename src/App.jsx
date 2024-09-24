import patches from "./assets/patches.jsx";
import {CardList} from "./components/CardList.jsx";

function App() {
    return (
        <CardList patches={patches} />
    );
}

export default App;
