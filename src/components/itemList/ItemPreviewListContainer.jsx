import { db } from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useState, useEffect } from "react";

import Item from "./Item.jsx";

import { Swiper, SwiperSlide } from 'swiper/react'


const ItemPreviewListContainer = ({ fieldFilter }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const formatearYSetear = (arrayDeDocumentos) => {
    setItems(
      arrayDeDocumentos.map((documento) => {
        return { ...documento.data(), id: documento.id };
      })
    );
    setLoading(false);
  };

  const getProducts = async () => {
    const productosCollection = collection(db, "products");
    let productsQuery;

    const w1 = where(fieldFilter, "==", true);
    productsQuery = query(productosCollection, w1);
    const consulta = await getDocs(productsQuery);
    formatearYSetear(consulta.docs);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="itemPreview">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={true}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={`swiper_${index}`}>
                  <Item key={`item_${index}`} item={item} footerOption={false} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ItemPreviewListContainer;
