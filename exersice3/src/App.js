
import './App.css';
import Title from './componenets/Title';
import Search from './componenets/Search';
import ProductList from './componenets/ProductList';
function App() {

const products = [

  {
      
      
      name: "Hiiri",
      image: <img src="hiiri.jpg"/>,
      price: "13"

  },

  {
      
      name: "Kello",
      image: <img src="kello.jpg"/>,
      price: "500"

  },
  {
      
      name: "Kovalevy",
      image: <img src="kovalevy.jpg"/>,
      price: "50"

  },
  {
      
      name: "Näyttö",
      image: <img src="naytto.jpg"/>,
      price: "300"
  },
  {
     
      name: "Puhelin",
      image: <img src="phone.jpg"/>,
      price: "600"

  },
  {
    
      name: "Tabletti",
      image: <img src="tabletti.jpg"/>,
      price: "250"

  },
  {
    
    name: "Televisio",
    image: <img src="telkkari.jpg"/>,
    price: "999"

},
{
    
  name: "Tietokone",
  image: <img src="tietokone.jpg"/>,
  price: "500"

},
{
    
  name: "Mustepatruuna",
  image: <img src="ink.jpg"/>,
  price: "10"

}



];




  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  
  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }
    return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
    });
  };
  
  
  const filteredProducts = filterProducts(products, query);

    return (
      <div className="App">
        <Title />
        <Search />
        <div className="productContainer">
        {filteredProducts.map(product => (
          <ProductList key={product.key} nimi={product.name} kuva={product.image} hinta={product.price}/>
        ))}
        </div>
        
      </div>
    );
  }
  
  export default App;