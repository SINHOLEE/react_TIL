import React from 'react';
import ShopItem from './ShopItem';
import {inject, observer} from 'mobx-react';

const items = [
    {
        name: '생수',
        price: 850,
    },
    {
        name: '신라면',
        price: 900,
    },
    {
        name: '포카칩',
        price: 1500,
    },
    {
        name: '새우깡',
        price: 1000,
    },
]

// 3. onPut이라는 action함수를 인자로 받아 컴포넌트를 구성한다.
const ShopItemList = ({onPut}) => {
    // 4. onPutㅇ
    const itemList = items.map(item => <ShopItem {...item} key={item.name} onPut={onPut}></ShopItem>)
    return <div>{itemList}</div>
}

// export default ShopItemList;

// 1. provider로 전역에서 관리하는 marketStore 클래스를 inject해서 shopitemlist에 가지고온다.
export default inject(({ market }) => ({
    // 2. 가지고 올때, 마켓스토어에 존재하는, 함수를 여기서 쓸 함수로 재 할당해서, 현재 파일에서 사용 할 수 있게한다.
    onPut: market.put,
  }))(observer(ShopItemList));