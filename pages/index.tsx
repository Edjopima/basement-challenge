import {useEffect, useState} from "react";
import type {NextPage} from "next";
import Image from "next/image";
import fetch from "isomorphic-unfetch";

import Navbar from "../components/Navbar/Navbar";
import TextBanner from "../components/TextBanner/TextBanner";
import ProductList from "../components/ProductList/ProductList";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import {Product} from "../product/types";
import {ShoppingCartItem} from "../types/shoppingCartTypes";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://basement-challenge-i2ox56lwn-edjopima.vercel.app/api/products",
  );
  const productList = await response.json();

  return {
    props: {
      productList: productList.products,
    },
  };
};

const Home = ({productList}: {productList: Product[]}) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const toggleShoppingCart = (): any => {
    setShow(!show);
  };

  const handleAddToCart = (product: Product) => {
    const element = shoppingCart.find((p) => p.product === product);

    if (element) {
      const index = shoppingCart.indexOf(element);

      element.quantity += 1;
      const newCart = [...shoppingCart];

      newCart.splice(index, 1, element);
      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, {product, quantity: 1}]);
    }
    window.localStorage.setItem("cart", JSON.stringify(shoppingCart));
  };

  useEffect(() => {
    const rawCart = window.localStorage.getItem("cart");
    const cart = JSON.parse(rawCart as string);

    setShoppingCart(cart);
  }, []);

  return (
    <div className="w-full flex bg-black flex-col">
      <ShoppingCart
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
        show={show}
        toggleShoppingCart={toggleShoppingCart}
      />
      <Navbar cartLenght={shoppingCart.length} toggleShoppingCart={toggleShoppingCart} />
      <header className="w-full px-8">
        <Image alt="Header" className="h-7" src={header} />
      </header>
      <TextBanner />
      <ProductList handleAddToCart={handleAddToCart} productList={productList} />
      <footer className="w-full px-8">
        <Image alt="Footer" src={footer} />
      </footer>
    </div>
  );
};

export default Home;
