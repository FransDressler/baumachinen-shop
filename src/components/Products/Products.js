import React from 'react';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
          method: 'get',
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(products => this.setState({products: products}))
        .catch(err => console.log('Error fetching products:', err));
    }

    handleSearch = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        const filteredProducts = this.state.products.filter(product => {
            return (
                product.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                product.rentingprice.toString().includes(this.state.searchTerm)
            );
        });

      return (
        <section className='bg-gray-100'>
          <div className="container pt-[7em] pb-20 grid place-items-center">
            <div className="max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                    Unsere Produkte
                </span>
                <h2 className="mb-4 text-3xl capitalize font-bold text-amber-600 sm:text-4xl md:text-[40px]">
                    Was wir anbieten
                </h2>
                <p className="text-base text-body-color">
                    Hier finden Sie alle Produkte der Baumaschinen & Geräte GmbH Dressler.
                </p>
            </div>
            <input 
                type="text" 
                placeholder="Suche nach Produkten oder Preisen" 
                onChange={this.handleSearch} 
                value={this.state.searchTerm}
                className="p-3 rounded-md"
            />
            
            <div className="flex justify-center gap-7 flex-wrap w-full">
                {filteredProducts.map((product, index) => {
                    return(
                    <ProductCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    source={product.source}
                    price={product.rentingprice}
                />
                )
                })}
            </div>
          </div>
          </section>
        )
    }
}

export default Products;

const ProductCard = ({title,source,price,id}) => {
    return (
    <>
      <div className="group relative w-60">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md grid place-items-center lg:aspect-none group-hover:opacity-75 lg:h-80 drop-shadow-lg">
          <a href={"/produkt?id=" + id}><img src={source} alt="Front of men&#039;s Basic Tee in black." className="w-full object-contain object-center lg:w-full drop-shadow-lg"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={"/produkt?id=" + id}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}€/Tag</p>
        </div>
    </div>
    </>
    )
}
