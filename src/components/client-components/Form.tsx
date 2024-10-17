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
import { createProduct, updateProduct } from "@/app/products/products.api";
import { useParams, useRouter } from "next/navigation";

const ProductForm = ({ product }: any) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
      image: product?.image,
    },
  });
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params?.id) {
        await updateProduct(params.id, {
          ...data,
          price: parseFloat(data.price),
        });
      } else {
        await createProduct({ ...data, price: parseFloat(data.price) });
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>{params.id ? "Editar" : "Crear"} Producto</CardTitle>
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
          <Button>{params.id ? "Update" : "Create"}</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
