import React from "react";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import "./pricing.css";

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section__title text-cs">Pricing</h2>
      <p className="section__subtitle">
        My <span>Price Board</span>
      </p>

      <div className="pricing__container container grid">
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Monthly Basis</span>
          <h3 className="pricing__price">
            250.000,00 <span>₦</span> <em>Monthly</em>
          </h3>

          <p className="pricing__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            incidunt eum esse ab tempora harum! Animi quae reiciendis soluta
            earum repudiandae, optio consequuntur dicta.
          </p>

          <ul className="pricing__list">
            <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>UI/UX Design</span>
            </li>

            <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Web Development</span>
            </li>

            <li className="list__item">
                <span>Digital Marketing</span>
            </li>

            <li className="list__item">
                <span>Google Ads</span>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>

          <img src={shapeTwo } alt="" className="shape c__shape" />
        </div>

        <div className="pricing__item-wrapper">
            <span className="pricing__label text-cs">popular</span>
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Freelancing</span>
          <h3 className="pricing__price">
            300.000,00 <span>₦</span> <em>Monthly</em>
          </h3>

          <p className="pricing__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            incidunt eum esse ab tempora harum! Animi quae reiciendis soluta
            earum repudiandae, optio consequuntur dicta.
          </p>

          <ul className="pricing__list">
            <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>UI/UX Design</span>
            </li>

            <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Web Development</span>
            </li>

            <li className="list__item">
            <FaCheck className="list__icon"></FaCheck>
                <span>Digital Marketing</span>
            </li>

            <li className="list__item">
                <span>Google Ads</span>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>

          <img src={shapeTwo } alt="" className="shape c__shape" />
        </div>
        </div>

        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Full Time</span>
          <h3 className="pricing__price">
            400.000,00 <span>₦</span> <em>Monthly</em>
          </h3>

          <p className="pricing__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            incidunt eum esse ab tempora harum! Animi quae reiciendis soluta
            earum repudiandae, optio consequuntur dicta.
          </p>

          <ul className="pricing__list">
            <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>UI/UX Design</span>
            </li>

            <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Web Development</span>
            </li>

            <li className="list__item">
            <FaCheck className="list__icon"></FaCheck>
                <span>Digital Marketing</span>
            </li>

            <li className="list__item">
            <FaCheck className="list__icon"></FaCheck>
                <span>Google Ads</span>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>

          <img src={shapeTwo } alt="" className="shape c__shape" />
        </div>
      </div>

      <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
        <span className="bg__title">Pricing</span>
      </div>
    </section>
  );
};

export default Pricing;
