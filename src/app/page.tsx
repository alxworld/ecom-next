import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/db/db";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="flex flex-col items-center">
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[2].imageUrl}
            alt={products[2].name}
            height={400}
            width={400}
            className="w-full max-w-sm rounded-lg shadow-xl"
            priority
          />
          <div className="px-6">
            <h1 className="text-5l font-bold">{products[2].name}</h1>
            <p className="py-5">{products[2].description}</p>
            <Link
              href={"/products/" + products[2].id}
              className="btn btn-primary"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
