import React from 'react';

class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            source: '',
            rentingprice: '',
            sellingprice: '',
            favorite: '',
            description: ''
        };
    }

    componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // Now you have the itemId, use it to fetch the data for the specific item
    fetch(`https://baumaschinen-shop-api-47cd6e358646.herokuapp.com/product/${itemId}`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(itemData => {
        console.log(itemData);

        // Update the component state with the fetched item data
        this.setState({
            title: itemData.title,
            source: itemData.source,
            rentingprice: itemData.rentingprice,
            sellingprice: itemData.sellingprice,
            favorite: itemData.favorite,
            description: itemData.description
        });

    })
    .catch(error => {
        console.error('Error fetching item:', error);
    });
}
render() {

return(
<div className="bg-white pt-[4em] min-h-screen">
    <main className="my-8">
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full md:w-1/2 h-[40em] grid place-items-center">
                    <img className="w-full block rounded-md object-cover max-h-[40em] object-center  mx-auto drop-shadow-lg" src={this.state.source} alt="Bagger"/>
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">{this.state.title}</h3>
                    <span className="text-gray-500 mt-3">{this.state.rentingprice}€/Tag</span> <br/>
                    <span className="text-gray-500 mt-3">{this.state.sellingprice}€ zum Verkauf</span>
                    <hr className="my-3"/>
                    <span className="text-gray-500 mt-3">{this.state.description}</span>
                    <div className="justify-center flex w-fill flex-col md:gap-7 md:flex-row lg:justify-start mt-5">
                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                            <a href="mailto:info@dressler-baumaschinen.de">Email</a>
                        </button>
                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                            <a href="tel:03843212123">Anrufen</a>
                        </button>
                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                            <a href="/Kontakt">Kontakt</a>
                        </button>
                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 rounded">
                            <a href="/Produkte">Zurück</a>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
</div>
    )
}
}

export default Product