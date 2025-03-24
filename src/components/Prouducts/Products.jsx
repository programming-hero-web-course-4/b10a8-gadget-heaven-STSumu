import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [productsToShow,setProductsToShow]=useState([]);
    const [allProducts,setAllProducts]=useState([]);
    const [categories,setCategories]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState('');
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            const unique=new Set();
            setAllProducts(data);
            setProductsToShow(data);
            setSelectedCategory('all');
            data.forEach((product)=>{unique.add(product.category)});
            const arr=[...unique];
            setCategories(arr);
        }
        );
         
    },[]);
    const handleCategorySelect=(category)=>{
        console.log(category);
        setSelectedCategory(category);
        if(category==='all'){
            const newShow=[...allProducts]
           setProductsToShow(newShow);
        }
        else{
            const newProductsToShow=[...allProducts].filter((product)=>product.category === category);
            setProductsToShow(newProductsToShow);
        }
        
    }
    const customButton='bg-[#9538E2] text-white';
    return (
        <div className='flex flex-col lg:flex-row container mx-auto gap-3 lg:gap-6'>
            <div className='w-full flex-wrap lg:w-1/5 border-black flex lg:flex-col bg-white gap-4 p-3 lg:p-6 rounded-2xl lg:h-fit'>
            <button className={`btn rounded-4xl ${selectedCategory==='all'? customButton : ''}`} onClick={()=>handleCategorySelect('all')}>All Products</button>
                 {
                    categories.map((category,idx)=><button className={`btn rounded-4xl ${selectedCategory === category ? customButton: ''}`} key={idx} onClick={()=>handleCategorySelect(category)}>{category}</button>)
                 }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 border-black'>
                {
                    productsToShow.map((product,idx)=><Product key={idx} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;