import React from 'react';
import {inject, observer} from 'mobx-react';
import BasketItem from './BasketItem';
import TotalPrice from './TotalPrice';

const BasketItemList = ({items, getTotal, onTake}) => {
    const itemList = items.map(item=> {
        return (
            <BasketItem item={item} onTake={onTake} key={item.name}></BasketItem>
        )
    })
    
    return (
        <div>
            {itemList}
        {/* <hr />
        <p>
    <b>총합: </b> {getTotal}원
        </p> */}
      </div>
    );
};



// export default BasketItemList;
// 1. provider로 전역에서 관리하는 marketStore 클래스를 inject해서 basketItemList에 가지고온다.
export default inject(({ market }) => ({
    // 2. 가지고 올때, 마켓스토어에 존재하는, 함수, 변수를 여기서 쓸 함수로 재 할당해서, 현재 파일에서 사용 할 수 있게한다.
    items : market.selectedItems,
    getTotal:market.total,
    onTake: market.take

  }))(observer(BasketItemList));