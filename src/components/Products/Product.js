function Product() {
    return(
<div className="bg-white pt-[4em]">

    <main className="my-8">
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full md:w-1/2 h-[40em] ">
                    <img className=" h-full w-full rounded-md object-cover max-w-lg mx-auto drop-shadow-lg" src="https://images.unsplash.com/photo-1590834367872-3297c46273ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Bagger"/>
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">Bagger</h3>
                    <span className="text-gray-500 mt-3">50€/Tag</span> <br/>
                    <span className="text-gray-500 mt-3">100€ zum Verkauf</span>
                    <hr className="my-3"/>
                    <div className="justify-center flex w-fill flex-col md:gap-7 md:flex-row lg:justify-start">
                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                            <a href="mailto:info@dressler-baumaschinen.de">Email</a>
                        </button>
                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                            <a href="tel:03843212123">Anrufen</a>
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

export default Product