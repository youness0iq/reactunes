import {  useSearchParams } from "react-router-dom";

function CartCategory() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    return(
        <h1>Hello in {category} cars</h1>
    )
}
export default CartCategory;