import ShoppingList from "./components/ShoppingList.tsx";
import {useState} from "react";
import Item from "./models";
import ShoppingListForm from "./components/ShoppingListForm.tsx";

function App() {

    const [items, setItems] = useState<Item[]>([]);

    const addItem = (product: string) => {
        console.log(product);
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