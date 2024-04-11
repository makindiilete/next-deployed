import AddToCart from "@/app/components/AddToCart";

const ProductCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
