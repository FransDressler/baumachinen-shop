function Impressum () {
    return (
        <div className="py-[6em] px-3 flex flex-col gap-5 max-w-screen-lg mx-auto h-screen">
            <h1 className="font-bold uppercase text-amber-700 text-3xl">Impressum</h1>
            <p>Bau-maschinen & -Geräte GmbH Dressler</p>
            <p>Glasewitzer Chaussee 17 <br/> 18273 Güstrow</p>
            <p>Geschäftsführer: Herbert Dressler</p>
            <div className="">
                <p className="flex gap-2"><span>Tel.:</span><a href="tel:03843212123" className="underline hover:text-gray-500">03843 212123</a> <br/></p>
                <p className="flex gap-2"><span>Tel.:</span><a href="tel:03843215912" className="underline hover:text-gray-500">03843 215912</a> <br/></p>
                Fax: -215913
            </div>
            <p>Haftungshinweis: Trotz sorgältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            <p>Für die auf dieser Website verwendeten Bilder haben wir keine Rechte. Sie stammen von Websiten, welche die frei zur Verfügung stellen wie upsplash.colm (Wioletta Płonkowska) oder von den Online-Shops zu welchen die entsprechenden Produkte gehören.</p>
        </div>
    )
}

export default Impressum;