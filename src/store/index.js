import { createStore } from 'easy-peasy';
import counter from './counterModel';
import member from './memberModel';
import productModel from './productModel';

const store = createStore(
   {
    member: member,
    counter: counter,
    product: productModel
   }
    
  );

export default store