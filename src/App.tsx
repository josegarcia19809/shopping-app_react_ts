import ShoppingList from "./components/ShoppingList.tsx";
import {useState} from "react";
import Item from "./models";

function App() {

    const [items, setItems] = useState<Item[]>([]);

    // const items = [
    //     {id: 1, product: "Lemon", quantity: 3},
    //     {id: 2, product: "Chicken breast", quantity: 2},
    // ]

    return (
        <>
            <ShoppingList items={items}/>
        </>
    );
}

export default App;
