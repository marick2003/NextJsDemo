import { getSelectProduct } from "../../fake-data";
import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "next/link";
import {
    Product,
    ImageWrapper,
    ProductDetail,
    ProductTitle,
    ProductDescription,
    ProductPrice,
  } from "./style";


 function ProductCard(all=true){
    const {query,isReady } = useRouter()
    const { pid } = query
    const  product=  getSelectProduct(pid) || {};
    
    const { id, image, title, description, price } = product || {};
    
    return(
        <Product key={id}>
        <ImageWrapper>
          <Image src={image} alt="product" layout="fill" objectFit="cover" />
        </ImageWrapper>
        <ProductDetail>
          
            <ProductTitle>{title}</ProductTitle>
          
          <ProductDescription all>{description}</ProductDescription>
          <ProductPrice>${price}</ProductPrice>
        </ProductDetail>
      </Product>
    )
}
export default ProductCard;