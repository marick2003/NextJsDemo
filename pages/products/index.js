import { getAllProduct } from "../../fake-data";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components';
function ProductList(){
    const products = getAllProduct();
    return (
    <div>{products.map((product) => (
        <Link href={`/products/${product.id}`} passHref>
            <div key={product.id}> {product.title}</div>
        </Link>
        
      ))}</div>
    );
}

export default ProductList