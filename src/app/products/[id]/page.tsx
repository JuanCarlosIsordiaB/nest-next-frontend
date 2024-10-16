
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const ProductDetailPage = async ({ params }) => {
  
  const { name, description, image, price } = await getProduct(params.id);
  return (
    <div>
      <Link href="/" className="bg-red-500 p-2 rounded-xl font-semibold text-white m-2 hover:bg-red-800 transition-all mt-5">Go Home</Link>
      <Card className="m-5">
        <CardContent>
          <img src={image} className="w-full h-64 object-cover" />
          <CardHeader>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <p>{description}</p>
          <div className="flex">
            <h4 className="bg-blue-500 p-2 rounded-xl font-semibold text-white m-2 hover:bg-blue-800 transition-all mt-5">Buy for ${price}</h4>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
