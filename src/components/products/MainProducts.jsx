import DetailsProducts from "./DetailsProducts";
import SliderProducts from "./SliderProducts";

const MainProducts = () => {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-0">
        <SliderProducts />
        <DetailsProducts />
      </main>
    </>
  );
};
export default MainProducts;
