import SwiperBrands from './SwiperBrands';

const Brands = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands?limit=5`)
    const brands = await res.json()

    return (
        <section className="container pt-17.5">
            <div className="mb-10">
                <SwiperBrands brands={brands} />
            </div>
            <hr />
        </section>
    );
}
export default Brands;