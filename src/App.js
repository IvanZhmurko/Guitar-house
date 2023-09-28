import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         orders: [],
         items: [
            {
               id: 1,
               img: "acustic.jpg",
               title: "Акустична гітара",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               caregory: "acoustics",
               price: "5.05",
            },
            {
               id: 2,
               title: "Електро гітара",
               img: "electro.jpg",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               caregory: "electro",
               price: "10.1",
            },
            {
               id: 3,
               img: "bass.jpg",
               title: "Бас-гітара",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               caregory: "bass",
               price: "7.77",
            },
            {
               id: 4,
               img: "clasic.jpg",
               title: "Класична гітара",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               caregory: "classical",
               price: "9.99",
            },
         ],
      };
      this.addToOrder = this.addToOrder.bind(this);
   }
   render() {
      return (
         <div className="wrapper">
            <Header orders={this.state.orders} />
            <Items items={this.state.items} onAdd={this.addToOrder} />
            <Footer />
         </div>
      );
   }
   addToOrder(item) {
      let isInArray = false;
      this.state.orders.forEach(el => {
         if (el.id === item.id)
         isInArray = true
      })
      if(!isInArray)
         this.setState({ orders: [...this.state.orders, item] });
   }
}

export default App;
