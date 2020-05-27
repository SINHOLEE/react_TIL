import {observable, action, computed} from 'mobx';
import { act } from 'react-dom/test-utils';
import NumberWithComma from './../utils/numCal';
export default class MarketStore {
    @observable selectedItems = [];

    constructor(root){
        this.root = root;
    }

    
    @action  // 이런 함수....를 쓸거다..
    put = (name, price) => {
        const {number} = this.root.counter;
        // 상품을 추가한다.?? 장바구니를 추가한다?
        const exist = this.selectedItems.find(item=> item.name === name);
        if (!exist){
            this.selectedItems.push({
                name,
                price,
                count:number,
            })
            // console.log(this.total);
            return;
        }
        exist.count+=number;
        // console.log(this.total);
    };

    @action
    take = name => {
        const {number} = this.root.counter;

        const itemToTake = this.selectedItems.find(item => item.name === name);
        if (itemToTake.count <= number){
            itemToTake.count = 0;
        }else{
            itemToTake.count-= number;
        }
        
        if(itemToTake.count === 0){
            this.selectedItems.remove(itemToTake);
        }
    };

    @computed
    get total() {
        console.log('총합계산...');
        const totalPrice = this.selectedItems.reduce((prev, curr)=>{
            return prev + curr.price * curr.count;
        }, 0)
        return NumberWithComma(totalPrice);
    }
}