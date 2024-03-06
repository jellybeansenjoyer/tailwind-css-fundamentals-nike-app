import {
  CustomerReviews,
  Hero,
  Footer,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  SpecialOffers,
} from './sections/index';


const App = ()=>(
  <main className = "relative">
      {/* <Nav/> */}
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>

    <section className="padding">
      <PopularProducts/>
    </section>

    <section className="padding">
      <SuperQuality/>
    </section>

    <section className="padding">
      <Services/>
    </section>

    <section className="padding-x py-10">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8 text-white">
      <Footer/>
    </section>
  </main>
);

export default App;