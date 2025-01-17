import {FormEvent, useRef} from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps) {

    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const quantity = quantityInputRef.current!.value;
        onAddItem(newProduct, parseInt(quantity));

        productInputRef.current!.value = '';
        quantityInputRef.current!.value = '1';
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product Name" ref={productInputRef}/>
                <input type="number" min={0} ref={quantityInputRef}/>
                <button type="submit">Add Item</button>

            </form>
        </>
    );
}

export default ShoppingListForm;