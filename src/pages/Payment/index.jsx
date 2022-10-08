import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Card from "../../assets/img/card.png";
import AtmCard from "../../assets/img/atm-card.png";
import Bank from "../../assets/img/bank.png";
import Retail from "../../assets/img/retail.png";
import Emoney from "../../assets/img/e-money.png";
import Plus from "../../assets/img/plus.png";

import "./Payment.css";

export default function Payment() {
  return (
    <>
      <Header />
      <main className="primary">
        <div className="main-content">
          <div className="side-payment">
            <p className="payment-method">Payment Method</p>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio"
                name="optradio"
                value="option1"
                checked
              />
              <img className="form-check-img" src={Card} alt="" />
              Card
              <label className="form-check-label" htmlFor="radio1"></label>
            </div>
            <div className="bank-card">
              <img className="img-payment" src={AtmCard} alt="atm-card" />
              <button className="plus-button">
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio"
                name="optradio"
                value="option2"
              />
              <img className="form-check-img" src={Bank} alt="" />
              Bank Trasnfer
              <label className="form-check-label" htmlFor="radio2"></label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio"
                name="optradio"
                value="option3"
              />
              <img className="form-check-img" src={Retail} alt="" />
              Retail
              <label className="form-check-label" htmlFor="radio2"></label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio"
                name="optradio"
                value="option4"
              />
              <img className="form-check-img" src={Emoney} alt="" />
              E-Money
              <label className="form-check-label" htmlFor="radio2"></label>
            </div>
          </div>
          <div className="payment-class">
            <div className="head-payment-class">
              <p className="ticket-detail">Ticket Detail</p>
            </div>
            <div className="detail-payment">
              <div className="detail-payment-info">
                <p className="detail-payment-info-text">Event</p>
                <p className="detail-payment-info-text">Ticket Section</p>
                <p className="detail-payment-info-text">Quantity</p>
                <p className="detail-payment-info-text">Total Payment</p>
              </div>
              <div className="detail-payment-value">
                <p className="detail-payment-value-text">
                  Sights & Sounds Exhibition
                </p>
                <p className="detail-payment-value-text">VIP</p>
                <p className="detail-payment-value-text">2</p>
                <p className="detail-payment-value-text">Rp100.000</p>
              </div>
            </div>
            <button className="button-payment">Payment</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
