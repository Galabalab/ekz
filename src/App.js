import React from 'react';
import Header from './components/Header';
import './index.css';
import Items from './components/Items';
import Footer from './components/Footer';



class App extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'Derevyannyie-stulya-84.jpg',
          desc: 'Очень удобный стул',
          category: 'daasds',
          price: '999.99'
        },
        {
          id: 2,
          title: 'Диван серый',
          img: 'komplet-togo-wersalka-bez-bokow-2x-fotel-finka-liczba-elementow-w-zestawie-3.webp',
          desc: 'Очень мягкий диван',
          category: 'daasds',
          price: '1999.99'
        },
        {
          id: 3,
          title: 'Синее кресло',
          img: 'b04853c9aeb71368722f73f86168d18e-1440x1440.webp',
          desc: 'Лучшее по качеству кресло',
          category: 'daasds',
          price: '2999.99'
        },
        {
          id: 4,
          title: 'Торшер',
          img: '2k2e91wqyxtvzc2cv6bq9xm5mr9j8p63.jpg',
          desc: 'Красивый торшер',
          category: 'daasds',
          price: '3999.99'
        },
        {
          id: 5,
          title: 'Камин',
          img: 'drovyanye_kaminy.webp',
          desc: 'Прекрасный камин',
          category: 'daasds',
          price: '5999.99'
        },
        {
          id: 6,
          title: 'Стол деревянный',
          img: 'pasted image 0.jpg',
          desc: 'Очень красивый стол',
          category: 'daasds',
          price: '7999.99'
        }
      ]
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}></Header>
        <Items items={this.state.items} onAdd={this.addToOrder}></Items>
        <Footer></Footer>
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
