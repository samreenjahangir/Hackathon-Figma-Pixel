import Image from "next/image";
import { products, ProductDetail } from "@/data/detail";  // Import the product data

export default function BEST() {
  return (
    <section className="p-10">
      <div className="flex justify-between items-center py-3">
        <h2 className="font-semibold text-xl" >Gear Up</h2>
        <p className="text-sm" >Shop Men's</p>
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap" >
        {products.map((product: ProductDetail) => (
          <div key={product.id} className="flex flex-col text-base leading-relaxed max-w-[300px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-full"
            />
            <div className="flex gap-10 items-start justify-between mt-5 bg-white">
              <div className="flex flex-col pr-1 text-sm">
                <div className="font-medium text-neutral-900">{product.name}</div>
                <div className="text-neutral-500">{product.description}</div>
              </div>
              <div className="self-start font-medium text-right text-neutral-900">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
