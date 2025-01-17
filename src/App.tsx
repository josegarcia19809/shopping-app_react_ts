import ShoppingList from "./components/ShoppingList.tsx";
import {useState} from "react";
import Item from "./models";
import ShoppingListForm from "./components/ShoppingListForm.tsx";

function App() {

    const [items, setItems] = useState<Item[]>([]);

    return (
        <>
            <ShoppingList items={items}/>
            <ShoppingListForm/>
        </>
    );
}

export default App;


// const items = [
//     {id: 1, product: "Lemon", quantity: 3},
//     {id: 2, product: "Chicken breast", quantity: 2},
// ]