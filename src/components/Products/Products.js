import React from 'react';

function Products() {
  return (
    <section className='bg-gray-100'>
      <div className="container pt-[7em] pb-20">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
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
      </div>
      </section>
    )
}

export default Products;

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
