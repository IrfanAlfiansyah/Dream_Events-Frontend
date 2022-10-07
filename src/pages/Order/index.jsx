import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import seat from "../../assets/img/seat.png";
import sort from "../../assets/img/sort.png";
import regular from "../../assets/img/reg.png";
import vip from "../../assets/img/vip.png";
import vvip from "../../assets/img/vvip.png";

import "./Order.css";

export default function Order() {
  return (
    <>
      <Header />
      <main className="primary">
        <div className="main-content">
          <div className="side-order">
            <img className="img-order" src={seat} alt="seat" />
          </div>
          <div className="order-class">
            <div className="head-order-class">
              <p className="ticket">Tickets</p>
              <p className="byprice">By Price</p>
              <img className="sort-img" src={sort} alt="sort" />
            </div>
            <div className="order-card">
              <div className="section-img">
                <img className="regular" src={regular} alt="regular" />
              </div>
              <div className="order-description">
                <p className="section">SECTION REG, ROW 1</p>
                <p className="section-left">12 seat available</p>
              </div>
              <div className="price">
                <p className="price-tag">Rp50.000</p>
                <p className="per-person">Per person</p>
              </div>
            </div>
            <div className="quantity">
              <div className="quantity-tag">Quantity</div>
              <button className="quantity-tag-min">-</button>
              <p className="count">0</p>
              <button className="quantity-tag-plus">+</button>
            </div>
            <div className="order-card">
              <div className="section-img">
                <img className="regular" src={vip} alt="vip" />
              </div>
              <div className="order-description">
                <p className="section">SECTION VIP, ROW 2</p>
                <p className="section-left">12 seat available</p>
              </div>
              <div className="price">
                <p className="price-tag">Rp75.000</p>
                <p className="per-person">Per person</p>
              </div>
            </div>
            <div className="quantity">
              <div className="quantity-tag">Quantity</div>
              <button className="quantity-tag-min">-</button>
              <p className="count">0</p>
              <button className="quantity-tag-plus">+</button>
            </div>
            <div className="order-card">
              <div className="section-img">
                <img className="regular" src={vvip} alt="vvip" />
              </div>
              <div className="order-description">
                <p className="section">SECTION REG, ROW 1</p>
                <p className="section-left">12 seat available</p>
              </div>
              <div className="price">
                <p className="price-tag">Rp100.000</p>
                <p className="per-person">Per person</p>
              </div>
            </div>
            <div className="quantity">
              <div className="quantity-tag">Quantity</div>
              <button className="quantity-tag-min">-</button>
              <p className="count">0</p>
              <button className="quantity-tag-plus">+</button>
            </div>
            <div className="detail-order">
              <div className="detail-order-info">
                <p className="detail-order-info-text">Ticket Section</p>
                <p className="detail-order-info-text">Quantity</p>
                <p className="detail-order-info-text">Total Payment</p>
              </div>
              <div className="detail-order-value">
                <p className="detail-order-value-text">VIP</p>
                <p className="detail-order-value-text">2</p>
                <p className="detail-order-value-text">Rp100.000</p>
              </div>
            </div>
            <button className="button-checkout">Checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
