// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
};

const Korzinka = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  let param = useParams();
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${param.id}`);
      setAllProducts([res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(allProducts);

  return (
    <div className=" mt-20  ">
      <section className=" bg-bgHeader">
        {allProducts.map((el) => {
          return (
            <div
              key={el.id}
              className="container mx-auto pt-10 flex items-center gap-16"
            >
              <div>
                <img
                  src={el.image}
                  alt=""
                  style={{ width: "630px", height: "647px" }}
                />
              </div>
              <div>
                <p className="text-3xl pb-3 text-textColor font-medium">
                  {el.name}
                </p>
                <p className=" pb-10 text-textColor2">{el.category}</p>
                <p
                  className=" pb-10 text-textColor"
                  style={{ maxWidth: "274px" }}
                >
                  Увлажняющий крем идеально подходит для повседневного ухода за
                  молодой кожей. <br /> Крем равномерно распределяется по
                  поверхности благодаря легкой текстуре, обеспечивает глубокое
                  увлажнение, регенерацию клеток.{" "}
                </p>
                <span
                  className="block bg-textColor2 w-full"
                  style={{ height: "1px", width: "370px" }}
                ></span>
                <div>
                  <div className="flex justify-between  py-4">
                    <p className="text-lg font-medium text-textColor">Состав</p>
                    <img src="/image37.svg" alt="" />
                  </div>
                  {/* <p style={{ maxWidth: "350px" }} className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae ex inventore deserunt ipsam quae culpa
                    temporibus totam cum officia? Quisquam, perspiciatis
                    necessitatibus? Eum expedita nisi veniam ratione molestiae
                    nobis dignissimos!
                  </p> */}
                </div>
                <span
                  className="block bg-textColor2 w-full"
                  style={{ height: "1px", width: "370px" }}
                ></span>
                <div>
                  <div className="flex justify-between  py-4">
                    <p className="text-lg font-medium text-textColor">
                      Способ применения
                    </p>
                    <img src="/image37.svg" alt="" />
                  </div>
                  {/* <p style={{ maxWidth: "350px" }} className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae ex inventore deserunt ipsam quae culpa
                    temporibus totam cum officia? Quisquam, perspiciatis
                    necessitatibus? Eum expedita nisi veniam ratione molestiae
                    nobis dignissimos!
                  </p> */}
                </div>
                <span
                  className="block bg-textColor2 w-full"
                  style={{ height: "1px", width: "370px" }}
                ></span>
                <div className="flex justify-between  py-5">
                  <p className="text-2xl  font-medium text-textColor">
                    {el.price} P
                  </p>
                  <button
                    className=" rounded-sm px-6 py-3 text-textColor font-medium"
                    style={{ border: "1px solid #B3BAC1" }}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className=" bg-bgHeader">
        <div className="container mx-auto py-24">
          <p className="text-center text-3xl text-textColor font-medium pb-14">
            Вы недавно смотрели
          </p>
          <div className="flex justify-between pb-7 gap-y-7 gap-x-3">
            <div className="relative">
              <img src="/image29.png" alt="" />
              <div className=" absolute bottom-5 left-5 right-5 flex justify-between">
                <div>
                  <p className=" font-medium text-textColor pb-1">High</p>
                  <p className="font-medium text-textColor2 text-xs">
                    крем для лица
                  </p>
                </div>
                <div>
                  <p className=" font-medium text-textColor pb-1">990 P</p>
                  <p className="font-medium text-textColor2 text-xs">50ml</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/image30.png" alt="" />
              <div className=" absolute bottom-5 left-5 right-5 flex justify-between">
                <div>
                  <p className=" font-medium text-textColor pb-1">High</p>
                  <p className="font-medium text-textColor2 text-xs">
                    крем для лица
                  </p>
                </div>
                <div>
                  <p className=" font-medium text-textColor pb-1">990 P</p>
                  <p className="font-medium text-textColor2 text-xs">50ml</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/image31.png" alt="" />
              <div className=" absolute bottom-5 left-5 right-5 flex justify-between">
                <div>
                  <p className=" font-medium text-textColor pb-1">High</p>
                  <p className="font-medium text-textColor2 text-xs">
                    крем для лица
                  </p>
                </div>
                <div>
                  <p className=" font-medium text-textColor pb-1">990 P</p>
                  <p className="font-medium text-textColor2 text-xs">50ml</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/image32.png" alt="" />
              <div className=" absolute bottom-5 left-5 right-5 flex justify-between">
                <div>
                  <p className=" font-medium text-textColor pb-1">High</p>
                  <p className="font-medium text-textColor2 text-xs">
                    крем для лица
                  </p>
                </div>
                <div>
                  <p className=" font-medium text-textColor pb-1">990 P</p>
                  <p className="font-medium text-textColor2 text-xs">50ml</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Korzinka;
