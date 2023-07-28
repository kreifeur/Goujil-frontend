import ProductForm from "./productsGrid/ProductForm";
import ProductsList from "./productsGrid/ProductsList";


const Products = () => {
  return (
    <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-4">
      <ProductsList/>
      <ProductForm/>
    </div>
  );
};

export default Products;
