import SwiperCategories from './SwiperCategories';

const Categories = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories?limit=5`)
    const categories = await res.json()

    return (
        <section className="container pt-17.5">
            <div className="mb-10">
                <SwiperCategories categories={categories} />
            </div>
            <hr />
        </section>
    );
}
export default Categories;