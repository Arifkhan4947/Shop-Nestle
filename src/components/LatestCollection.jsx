import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);   

    const [latestProducts, setLatestProducts] = useState([]);    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10));
            setLoading(false);
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>  
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>

            {/* Loader or Products */}
            {loading ? (
                <div className="flex flex-col justify-center items-center py-10 space-y-4">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
                    <p className="relative overflow-hidden whitespace-nowrap border-r-2 border-gray-800 pr-2 text-gray-600 text-sm sm:text-base text-center animate-typing">
                        Waking up the server... It may take 20-40 seconds. Thank you for your patience!
                    </p>
                </div>
            ) : (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {latestProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default LatestCollection;
