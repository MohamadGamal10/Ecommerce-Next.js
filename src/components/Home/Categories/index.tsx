import getCategories from '@/actions/categories/getCategories';
import SwiperCategories from './SwiperCategories';

const Categories = async () => {

    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories?limit=5`, {
    //     next: { revalidate: 3600 }
    // })
    const categories = await getCategories();

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