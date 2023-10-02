import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "../../services/types";
import { checkIsSelected } from "../../services/helpers";
import { fetchProducts, saveOrder } from "../../services/api";

//components
import { toast } from "react-toastify";
import OrderLocation from "../../components/order-location";
import OrderSummary from "../../components/order-summary";
import ProductsList from "../../components/products-list";
import StepsHeader from "../../components/steps-headers";

//styles
import "./styles.css";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch(() => toast.warning("Erro ao listar produtos"));
  }, []);

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then(({ data }) => {
        toast.error(`Pedido enviado com sucesso! Nº ${data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => toast.warning("Erro ao enviar pedido"));
  };

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList
        products={products}
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
      <OrderSummary
        amount={selectedProducts.length}
        totalPrice={totalPrice}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
