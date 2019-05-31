// import React from "react";
// import { tsExternalModuleReference } from "@babel/types";

// export default class Account extends React.Component {
//   state = {
//     balance: 0,
//     amount: 0
//   };

//   handleChange = event => {
//     this.setState({
//       amount: event.target.value
//     });
//   };

//   handleClick = () => {
//     this.setState({
//       balance: Number(this.state.amount) + this.state.balance
//     });
//   };

//   render() {
//     const { balance, amount } = this.state;
//     return (
//       <div>
//         <output>{this.state.balance}</output>
//         <input
//           onChange={this.handleChange}
//           type="text"
//           value={this.state.amount}
//         />
//         <button onClick={this.handleClick}>deposit</button>
//       </div>
//     );
//   }
// }
