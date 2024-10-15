"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createProduct({ ...data, price: parseFloat(data.price) });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear nuevo Producto</CardTitle>
        <CardDescription>
          Crea tus nuevos productos con sus caracetristicas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={onSubmit}>
          <Label>Prodcut Name</Label>
          <Input {...register("name")} />
          <Label>Description </Label>
          <Input {...register("description")} />
          <Label>Price</Label>
          <Input {...register("price")} />
          <Label>Image</Label>
          <Input {...register("image")} />
          <Button>Crear Producto</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
