import axios from "axios";
import { action, persist, thunk } from "easy-peasy";


const productModel = persist({
    products: [],
    addFromProduct: action((state, payload)=>{
        state.products.push(payload)
    }),
    addProduct: thunk(async(state, payload)=>{
        const {data}= await axios.get(payload)
        state.addFromProduct(data)
    })
})

export default productModel;