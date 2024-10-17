"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";



export const CardProduct =  (product:any) => {
  const router = useRouter();

  const handleDeleteProduct =  async (id:string) => {
    console.log(id);
    await deleteProduct(id);
    router.refresh();  
  }
    
  return (
    <Card key={product.id} className="" >
      {product.image !== "image.url" && (
        <img src={product.image} className="w-full h-40 object-cover" onClick={() => router.push(`products/${product.id}`)} />
      )}
      <CardContent>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <p>{product.name}</p>
        <div className="flex">
          <Button onClick={() => {router.push(`/products/${product.id}/edit`)}}>Edit </Button>
          <Button onClick={() => handleDeleteProduct(product.id)}  className="bg-red-600 hover:bg-red-800">Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
