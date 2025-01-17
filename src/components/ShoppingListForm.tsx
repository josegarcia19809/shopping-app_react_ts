import {FormEvent} from "react";

function ShoppingListForm() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product Name"/>
                <button type="submit">Add Item</button>

            </form>
        </>
    );
}

export default ShoppingListForm;