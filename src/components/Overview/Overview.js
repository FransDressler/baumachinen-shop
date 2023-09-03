import React from 'react';

class Overview extends React.Component {
    constructor() {
        super();
        this.state = {
          title: '',
          source: '',
          rentingprice: '',
          sellingprice: '',
          description: '',
          products: [],
          favorite: false
        }
      }
    // componentDidMount() {
    //     fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
    //       method: 'get',
    //       headers: {'Content-Type': 'application/json'}
    //     })
    //     .then(response => response.json())
    //     .then(products => this.setState({products: products}))
    //     .catch(err => console.log('Error fetching products:', err));
    // }
    onTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    onSourceChange = (event) => {
        this.setState({source: event.target.value})
    }

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    onRentingPriceChange = (event) => {
        this.setState({rentingprice: event.target.value})
    }

    onSellingPriceChange = (event) => {
        this.setState({sellingprice: event.target.value})
    }

    submitProduct = (event) => {
        event.preventDefault();
        fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/addproduct',
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        source: this.state.source,
        favorite: this.state.favorite,
        rentingprice: this.state.rentingprice,
        sellingprice: this.state.sellingprice,
      })
      })
      .then(response => response.json())
    //   .then(products => console.log(products));
    fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
          method: 'get',
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(products => this.setState({products: products}))
        .catch(err => console.log('Error fetching products:', err));
    }

    handleDelete = (id) => {
        fetch(`https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/delete/${id}`, { // Pass the ID as a URL parameter
        method: 'delete',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Item deleted successfully');
            // Perform any additional logic you need here
        } else {
            console.error('Error deleting item:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error deleting item:', error);
    });

          fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .then(products => this.setState({products: products}))
          .catch(err => console.log('Error fetching products:', err));
  
      };

handleFavoriteChange = (id,status) => {
        fetch(`https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/favorite/${id}`, { // Pass the ID as a URL parameter
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({favorite: status})
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Item favorite changed successfully');
            // Perform any additional logic you need here
        } else {
            console.error('Error while changing favorite:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error deleting item:', error);
    });

          fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .then(products => this.setState({products: products}))
          .catch(err => console.log('Error fetching products:', err));
  
      };

      handleStockChange = (id,status) => {
        fetch(`https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/stock/${id}`, { // Pass the ID as a URL parameter
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({instock: status})
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Item favorite changed successfully');
            // Perform any additional logic you need here
        } else {
            console.error('Error while changing favorite:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error deleting item:', error);
    });

          fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .then(products => this.setState({products: products}))
          .catch(err => console.log('Error fetching products:', err));
  
      };
    
    

    componentDidMount() {
        fetch('https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/products', {
          method: 'get',
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(products => {
            console.log(products);
            this.setState({products: products})
        })
        .catch(err => console.log('Error fetching products:', err));
        
    }

    render() {
      return (
        <section className='bg-gray-100'>
          <div className="container pt-[7em] pb-20">
            <div className="flex flex-col align-center -mx-4">
                <div className="w-80 px-4 flex flex-col">
                    <input 
                        onChange={this.onTitleChange}
                        id="title"
                        type="text" 
                        placeholder="Titel"
                    />
                    <textarea
                        onChange={this.onDescriptionChange}
                        id="shortDescription"
                        rows="4" // Defines the number of visible text lines
                        cols="50" // Defines the number of characters visible per line
                        placeholder="Kurzbeschreibung..."
                    />
                    <input 
                        onChange={this.onSourceChange}
                        id="source"
                        type="text" 
                        placeholder="Link"
                    />
                    <input 
                        onChange={this.onRentingPriceChange}
                        id="rentingPrice"
                        type="text" 
                        placeholder="Vermietungspreis pro Tag"
                    />
                    <input 
                        onChange={this.onSellingPriceChange}
                        id="sellingPrice"
                        type="text" 
                        placeholder="Verkauspreis"
                    />
                    { this.state.favorite?     
                        <i onClick={() => this.setState({favorite: false})}className="fa-solid fa-star cursor-pointer text-amber-800"></i> :
                        <i onClick={() => this.setState({favorite: true})}className="fa-regular fa-star cursor-pointer text-amber-800"></i>
                    }
                    {/* <div className="word-count">Zeichen: {charCountShort}/200</div> */}
                    <button class="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                    onClick={this.submitProduct}>
                      Hinzufügen
                    </button>
                </div>
                <table class="table-auto w-full text-left">
                    <thead className="bg-amber-300 text-lg">
                        <tr className="">
                            <th className="p-4 border border-gray-400">Name</th>
                            <th className="p-4 border border-gray-400">Beschreibung</th>
                            <th className="p-4 border border-gray-400">Mietpreis</th>
                            <th className="p-4 border border-gray-400">Verkaufspreis</th>
                            <th className="p-4 border border-gray-400">Favoriten</th>
                            <th className="p-4 border border-gray-400">Vorhanden?</th>
                            <th className="p-4 border border-gray-400"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) => {
                            return(
                                <tr>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0">{product.title}</td>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0">{product.description}</td>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0">{product.rentingprice}</td>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0">{product.sellingprice}</td>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0 text-center">
                                        { product.favorite?     
                                        <i className="fa-solid fa-star cursor-pointer" onClick={() => this.handleFavoriteChange(product.id, false)}></i> :
                                        <i className="fa-regular fa-star cursor-pointer" onClick={() => this.handleFavoriteChange(product.id, true)}></i>
                                    }
                                    </td>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0 text-center">
                                        { product.instock?     
                                        <i className="fa-solid fa-circle-check cursor-pointer" onClick={() => this.handleStockChange(product.id, false)}></i> :
                                        <i className="fa-regular fa-circle cursor-pointer" onClick={() => this.handleStockChange(product.id, true)}></i>
                                    }
                                    </td>
                                    <td key={index} className="p-2 pl-4 border border-amber-400 border-x-0 border-t-0">
                                    <button
                                      className="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                                      onClick={() => this.handleDelete(product.id)}
                                    >
                                      Entfernen
                                    </button>
                                    </td>
                                </tr>
                        )
                        })}
                        
                    </tbody>
                </table>
                
            </div>
          </div>
          </section>
        )
    }
}

export default Overview;