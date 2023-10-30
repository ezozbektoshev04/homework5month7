import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
};

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toLowerCase());
  };
  const [category, setCategory] = useState<string[]>([]);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const limit: number = 8;
  const numberOfPages: number = Math.ceil(allProducts.length / limit);
  const arrBtns: number[] = [];
  const [page, setPage] = useState(1);
  for (let i: number = 1; i <= numberOfPages; i++) {
    arrBtns.push(i);
  }
  const fetchData = async (input: string, category: string[]) => {
    let url = `http://localhost:3000/products?q=${input}`;
    category.map((el) => {
      url += `&category=${el}`;
    });
    try {
      const res = await axios.get(url);
      setAllProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPaginatedData = async (
    page: number,
    input: string,
    category: string[]
  ) => {
    let url = `http://localhost:3000/products?_page=${page}&_limit=${limit}&q=${input}`;
    category.map((el) => {
      url += `&category=${el}`;
    });
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(input, category);
  }, [input, category]);

  useEffect(() => {
    fetchPaginatedData(page, input, category);
  }, [page, input, category]);

  const navigate = useNavigate();

  const handleFilterChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    if (!category.includes(e.target.value)) {
      if (e.target.checked) {
        setCategory([...category, e.target.value]);
      }
    } else {
      if (!e.target.checked) {
        setCategory(category.filter((el) => el !== e.target.value));
      }
    }
  };
  // console.log(category);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className=" mt-20  ">
      <section className=" bg-bgHeader">
        <div className="container mx-auto">
          <div className="flex justify-between pt-12 pb-14 gap-3">
            <p className="text-4xl font-medium">Каталог</p>
            <input
              type="text"
              className="form-control w-25 h-50"
              placeholder="Search..."
              id="search"
              name="search"
              onChange={handleChange}
            />
            <div
              onClick={handleShow}
              className={show === false ? "block" : "hidden"}
            >
              <button
                className="filter-tog rounded-sm px-6 py-2 text-textColor font-medium"
                style={{ border: "1px solid #B3BAC1" }}
              >
                Фильтр
              </button>
            </div>
            <div
              onClick={handleShow}
              className={show === true ? "block cursor-pointer" : "hidden"}
            >
              <img src="/image38.svg" alt="" />
            </div>
          </div>
          <div
            className={
              show === true ? "block bg-bgHeader py-7 px-10 mb-4" : "hidden"
            }
            style={{
              background: "#F8F8F6",
              boxShadow: "0px 4px 30px 0px rgba(214, 214, 214, 0.19)",
            }}
          >
            <form>
              <div className="flex pb-3 justify-around gap-24">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="крем для лица"
                    id="cat1"
                    onChange={handleFilterChnage}
                  />
                  <label className="form-check-label" htmlFor="cat1">
                    крем для лица
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="минеральная пудра"
                    id="cat2"
                    onChange={handleFilterChnage}
                  />
                  <label className="form-check-label" htmlFor="cat2">
                    минеральная пудра
                  </label>
                </div>
              </div>
              <div className="flex pb-3 justify-around gap-24">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="масло для тела"
                    id="cat3"
                    onChange={handleFilterChnage}
                  />
                  <label className="form-check-label" htmlFor="cat3">
                    масло для тела
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="бомбочка для ванны"
                    id="cat4"
                    onChange={handleFilterChnage}
                  />
                  <label className="form-check-label" htmlFor="cat4">
                    бомбочка для ванны
                  </label>
                </div>
              </div>
              <div className="flex pb-3 justify-around gap-24">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="маска для лица"
                    id="cat5"
                    onChange={handleFilterChnage}
                  />
                  <label className="form-check-label" htmlFor="cat5">
                    маска для лица
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="мыло ручной работы"
                    id="cat6"
                    onChange={handleFilterChnage}
                  />
                  <label className="form-check-label" htmlFor="cat6">
                    мыло ручной работы
                  </label>
                </div>
              </div>
              <div className="flex pb-3 justify-around gap-24">
                <button
                  className=" rounded-sm px-6 py-3 text-textColor font-medium"
                  style={{ border: "1px solid #B3BAC1" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-between pb-7 gap-y-7 gap-x-3 flex-wrap">
            {products.length > 0
              ? products.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className="relative cursor-pointer"
                      onClick={() => navigate(`/details/${el.id}`)}
                    >
                      <img src={el.image} alt="" />
                      <div className=" absolute bottom-5 left-5 right-5 flex justify-between">
                        <div>
                          <p className=" font-medium text-textColor pb-1">
                            {el.name}
                          </p>
                          <p className="font-medium text-textColor2 text-xs">
                            {el.category}
                          </p>
                        </div>
                        <div>
                          <p className=" font-medium text-textColor pb-1">
                            {el.price} P
                          </p>
                          <p className="font-medium text-textColor2 text-xs">
                            {el.weight}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="page-btns flex gap-3 pt-3 justify-center">
            {arrBtns.length > 0
              ? arrBtns.map((item) => (
                  <button
                    className=" px-3 py-2 rounded hover:bg-orange-400  bg-orange-300 "
                    key={item}
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </button>
                ))
              : null}
          </div>
        </div>
      </section>
      <section className=" bg-bgHeader">
        <div className="container mx-auto pt-24">
          <p className="text-center text-3xl text-textColor font-medium pb-14">
            Вы недавно смотрели
          </p>
          <div className="flex justify-between pb-7 gap-y-7 flex-wrap gap-x-3">
            {products.length > 0
              ? products.slice(4, 8).map((el) => {
                  return (
                    <div key={el.id} className="relative">
                      <img src={el.image} alt="" />
                      <div className=" absolute bottom-5 left-5 right-5 flex justify-between">
                        <div>
                          <p className=" font-medium text-textColor pb-1">
                            {el.name}
                          </p>
                          <p className="font-medium text-textColor2 text-xs">
                            {el.category}
                          </p>
                        </div>
                        <div>
                          <p className=" font-medium text-textColor pb-1">
                            {el.price} P
                          </p>
                          <p className="font-medium text-textColor2 text-xs">
                            {el.weight}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
      <section className=" py-32 bg-bgHeader">
        <div className="container mx-auto flex gap-3  justify-between items-center">
          <div>
            <div className="flex">
              <img src="/image14.png" alt="" />
              <img src="/image15.png" alt="" />
              <img src="/image16.png" alt="" />
            </div>
            <div className="flex">
              <img src="/image17.png" alt="" />
              <img src="/image18.png" alt="" />
              <img src="/image19.png" alt="" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-medium text-textColor pb-5">
              Присоединяйтесь к нам
            </p>
            <p
              className="text-lg  text-textColor pb-8"
              style={{ maxWidth: "371px" }}
            >
              Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
              акциях первыми
            </p>
            <button
              className=" rounded-sm px-6 py-3 text-textColor font-medium"
              style={{ border: "1px solid #B3BAC1" }}
            >
              Подписаться
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-bgHeader">
        <div className="container pb-32 mx-auto ">
          <div
            className=" bg-bgHeader2 p-24 relative"
            style={{ maxWidth: "670px" }}
          >
            <p className=" text-textColor text-3xl font-medium pb-8">
              Контакты
            </p>
            <p className=" text-textColor text-lg font-medium pb-2">Адрес</p>
            <p
              className=" text-textColor text-lg pb-6"
              style={{ maxWidth: "256px" }}
            >
              Санкт-Петербург, ул. Большая Конюшенная, 19
            </p>
            <p className=" text-textColor text-lg font-medium pb-2">Телефон</p>
            <p
              className=" text-textColor text-lg pb-6"
              style={{ maxWidth: "256px" }}
            >
              +7 (923) 888-90-60
            </p>
            <p className=" text-textColor text-lg font-medium pb-2">E-mail</p>
            <p
              className=" text-textColor text-lg pb-6"
              style={{ maxWidth: "256px" }}
            >
              info@maroon.ru
            </p>
            <div className="flex gap-x-7">
              <img src="/image21.svg" alt="" />
              <img src="/image22.svg" alt="" />
              <img src="/image23.svg" alt="" />
            </div>

            <div className="absolute top-20  -end-3/4">
              <img src="/image20.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {}
    </div>
  );
};

export default Catalog;
