import ProductForm from "@/components/client-components/Form";
import { getProduct } from "../products.api";

interface Props {
  params: {
    id: string;
  }
}

const ProductNewPage = async ({params}:Props) => {
  console.log(params);

  const product = await getProduct(params.id);

  return (
    <div className="h-screen flex- justify-center items-center">
      <ProductForm product={product} />
    </div>
  );
};

export default ProductNewPage;
