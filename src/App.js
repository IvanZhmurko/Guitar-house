import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         orders: [],
         currentItems:[],
         items: [
            {
               id: 1,
               img: "acustic.jpg",
               title: "Акустична гітара",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               category: "acoustics",
               price: "5.05",
            },
            {
               id: 2,
               title: "Електро гітара",
               img: "electro.jpg",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               category: "electro",
               price: "10.1",
            },
            {
               id: 3,
               img: "bass.jpg",
               title: "Бас-гітара",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               category: "bass",
               price: "7.77",
            },
            {
               id: 4,
               img: "clasic.jpg",
               title: "Класична гітара",
               desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
               category: "classical",
               price: "9.99",
            },
         ],
      };
      this.state.currentItems=this.state.items
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
      this.chooseCategory = this.chooseCategory.bind(this);
   }
   render() {
      return (
         <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Categories chooseCategory={this.chooseCategory} />
            <Items items={this.state.currentItems} onAdd={this.addToOrder} />
            <Footer />
         </div>
      );
   }

   chooseCategory(category) {
      if (category === 'all') {
         this.setState({ currentItems: this.state.items })
         return
      }
      console.log(category);
     this.setState({currentItems: this.state.items.filter(el=>el.category === category )})
   }
   
   deleteOrder(id) {
   this.setState({orders:this.state.orders.filter(el=>el.id !==id)})
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
