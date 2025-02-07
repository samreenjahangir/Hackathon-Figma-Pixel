//////////////////////////////////////pami/////////////////////////////////////////////////////////


import { client } from "@/sanity/lib/client";
import { Product } from "../../../type/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { slug: string }; // Corrected type
}

// Fetch the product by slug
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      price,
      image
    }`,
    { slug }
  );
}

// Dynamic route page
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  // Handle case where product is not found
  if (!product) {
    notFound(); // Renders a 404 page
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName || "Product image"}
              width={500}
              height={500}
            />
          )}
        </div>
        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.productName}</h1>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-2xl font-bold">${product.description}</p>

        </div>
      </div>
    </div>
  );
}
