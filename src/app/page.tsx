import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



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
      <div className="grid grid-cols-4 gap-3">
        {products &&
          products.map((product: any) => (
            <Card key={product.id} className="">
              {
                product.image !== 'image.url' && <img src={product.image}  className="w-full h-40 object-cover" />
              }
              <CardContent>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <p>{product.name}</p>
                <Button>
                    Buy for ${product.price}
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
