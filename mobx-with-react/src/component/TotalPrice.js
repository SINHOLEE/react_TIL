import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// @inject(({market})=>({total:market.total}))
// @observer
// class TotalPrice extends Component {
//     render() {
//         const {total} = this.props;
//         return(
//             <div>
//                 <hr/>
//                 <p>
//                     <b>총합: </b>{total}원
//                 </p>
//             </div>
//         );
//     }
// }

// export default TotalPrice;

const TotalPrice = ({total})=> {
        return(
            <div>
                <hr/>
                <p>
                    <b>총합: </b>{total}원
                </p>
            </div>
        );
}

// 함수형으로 짜면 옵저버를 데코레이션으로 사용할 수 없다. 
export default inject(({market})=>({
    total:market.total,
}))(observer(TotalPrice));