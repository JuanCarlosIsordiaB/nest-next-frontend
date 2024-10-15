import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Add new Products</h1>
        <Link href="/products/new" >
        <Button>Create Product</Button>
          
        </Link>
      </div>
     
    </div>
  );
}
