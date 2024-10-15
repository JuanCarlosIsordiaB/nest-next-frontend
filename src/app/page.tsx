import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import CardProduct  from "@/components/client-components/CardProduct";



export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Add new Products</h1>
        <Link href="/products/new">
          <Button>Create Product</Button>
        </Link>
      </div>
      <div className="grid m:grid-cols-2 xl:grid-cols-4 gap-3">
        {products &&
          products.map((product:any) => (
            <CardProduct {...product} key={product.id}  />
          ))}
      </div>
    </div>
  );
}
