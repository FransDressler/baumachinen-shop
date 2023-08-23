import React from 'react';

const Hero = () => {
    return(
        <section className="mb-40 pt-12 max-w-full">
                <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div className="block rounded-lg bg-amber-50/50 px-6 py-12 drop-shadow-lg dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                    <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                                        Wir vermieten hochwertige<br /><span className="text-amber-600">Baumaschinen</span>
                                    </h1>
                                    <div className="justify-center flex w-fill flex-col md:gap-7 md:flex-row lg:justify-start">
                                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                                            <a href="/Produkte">Produkte</a>
                                        </button>
                                        {/* <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 rounded">
                                            <a href="">Standort</a>
                                        </button> */}
                                        <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 rounded">
                                            <a href="/Kontakt">Kontakt</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0 drop-shadow-lg">
                                <img src="https://plus.unsplash.com/premium_photo-1677707057044-65a4e662ae27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                    className="rounded-lg shadow-lg dark:shadow-black/20 lg:w-5/6" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

const Service = () => {
    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="block mb-2 text-lg font-semibold text-primary">
                                Unser Service
                            </span>
                            <h2 className="mb-4 text-3xl capitalize font-bold text-amber-700 sm:text-4xl md:text-[40px]">
                                Was wir anbieten
                            </h2>
                            <p className="text-base text-body-color">
                                Hier finden Sie alle Angebote der Baumaschinen GmbH Dressler.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-100 justify-center flex-wrap -mx-4 gap:5 md:gap-8 lg:gap-0">
                    <ServiceCard
                        title="Vermietung"
                        details="Wir vermieten unterschiedliche Baumaschinen. Für nähere Informationen schauen Sie einfach bei den Produkten nach."
                        icon={
                            <i className="fa-solid fa-hands-asl-interpreting fa-3x"></i>
                        }
                    />
                    <ServiceCard
                        title="Verkauf"
                        details="Wir verkaufen auch unsere Baumaschinen."
                        icon={
                            <i className="fa-solid fa-cart-shopping fa-3x"></i>
                        }
                    />
                    <ServiceCard
                        title="Reparatur"
                        details="Ist ihr Gerät kaputt? Kein Problem. Kommen Sie einfach bei uns vorbei und wir reparieren es."
                        icon={
                            <i className="fa-solid fa-screwdriver-wrench fa-3x"></i>
                        }
                    />

                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, details }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-8 rounded-[20px] bg-gray-50 p-10 drop-shadow-lg hover:shadow-lg md:px-7 xl:px-10 min-h-full">
                    <div
                        className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl bg-primary text-amber-500`}
                    >
                        {icon}
                    </div>
                    <h4 className="mb-3 text-xl font-semibold text-amber-600">{title}</h4>
                    <p className="text-body-color">{details}</p>
                </div>
            </div>
        </>
    );
};

const Products = () => {
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col align-center">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                    <span className="block mb-2 text-lg font-semibold text-primary">
                        Ein paar unserer
                    </span>
                    <h2 className="mb-4 text-3xl capitalize font-bold text-amber-700 sm:text-4xl md:text-[40px]">
                        Produkte
                    </h2>
                    <button className="bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white py-2 px-4 border border-amber-800 hover:border-transparent rounded">
                        <a href="/Produkte">Alle Produkte</a>
                    </button>
                </div>
                <div className="flex justify-center gap-7 flex-wrap w-full">
                    <ProductCard
                        title={'Bagger'}
                        source={'https://images.unsplash.com/photo-1590834367872-3297c46273ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'}
                        price={'50'}
                    />
                    <ProductCard
                        title={'Säge'}
                        source={'https://images.unsplash.com/photo-1559295759-389f1c534a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'}
                        price={'20'}
                    />
                    <ProductCard
                        title={'Bagger'}
                        source={'https://images.unsplash.com/photo-1590834367872-3297c46273ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'}
                        price={'50'}
                    />
                    <ProductCard
                        title={'Säge'}
                        source={'https://images.unsplash.com/photo-1559295759-389f1c534a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'}
                        price={'20'}
                    />
                </div>
            </div>
        </div>
    )
}

const ProductCard = ({title,source,price}) => {
    return (
    <>
      <div className="group relative w-60">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 drop-shadow-lg">
          <a href="/Produkt"><img src={source} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full drop-shadow-lg"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="/Produkt">
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



function Home() {
    return (
        <div>
            <Hero/>
            <Service/>
            <Products/>
        </div>
    );
}

export default Home;
