import SwiperCategories from './SwiperCategories';

const Categories = async() => {

    const res = await fetch('https://backend-for-ecommerce-plateform2.onrender.com/api/v1/categories')
    const categories = await res.json()

    return (
        <section className="container pt-17.5">
            <div className="mb-10">
                <SwiperCategories data={categories.data} />
            </div>
            <hr />
        </section>
    );
}
export default Categories;