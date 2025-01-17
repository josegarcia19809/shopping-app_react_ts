import ShoppingList from "./components/ShoppingList.tsx";
import {useState} from "react";
import Item from "./models";
import ShoppingListForm from "./components/ShoppingListForm.tsx";
import {v4 as getId} from "uuid";

function App() {

    const [items, setItems] = useState<Item[]>([]);

    const addItem = (product: string) => {
        setItems([...items, {id: getId(), product, quantity: 1}])
    }

    return (
        <>
            <ShoppingList items={items}/>
            <ShoppingListForm onAddItem={addItem}/>
        </>
    );
}

export default App;


// const items = [
//     {id: 1, product: "Lemon", quantity: 3},
//     {id: 2, product: "Chicken breast", quantity: 2},
// ]