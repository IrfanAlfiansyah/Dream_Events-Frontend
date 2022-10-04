import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CardEvent from "../../components/CardEvent";
import axios from "../../utils/axios";

function Home() {
  // const data = [
  //   { id: 1, name: "Tea", category: "Drink" },
  //   { id: 2, name: "Milk", category: "Drink" },
  //   { id: 3, name: "Coffee", category: "Drink" },
  // ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getDataProduct();
  }, []);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        "product?searchName=&sort=&limit=5&page=1&searchDateCreated="
      );
      // console.log(result);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      {/* START MAIN */}
      <main className="container d-flex gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <CardEvent item={item} newData="Data Baru" />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </main>
      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button className="btn btn-primary">&lt;</button>
        <button className="btn btn-primary">&gt;</button>
      </div>
      {/* END MAIN */}
    </>
  );
}

export default Home;
