import React, { Component } from "react";
import axios from "axios";
import emailjs from 'emailjs-com';
import '../style.css'

import photo1 from './image/photo-1.png'
import photo2 from './image/photo-2.png'
import photo3 from './image/photo-3.png'
import photo4 from './image/photo-4.png'

import shopsicon from './image/shop-icon.png'
import boxicon from './image/box_icon.png'

class BuyWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            product: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        // eslint-disable-next-line
        this.state.product = this.props.product;
        axios.post("http://127.0.0.1:5402/api/Statement/post", this.state)
            .then(responce => {
                console.log(responce);
            })

        this.setState({
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            product: ''
        })
        this.sucessfull();
    }

    onChangeInputHandler = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        });
    }

    sucessfull() {
        const { firstname, lastname, phonenumber, email } = this.state;
        emailjs.send("service_89ct3jx", "statement_post", {
            from_name: firstname,
            from_lastname: lastname,
            from_email: email,
            phonenumber: phonenumber,   
            product: this.props.product
        }, "user_FmcGpSttQoK99u0tnhU9x");
    }

    render() {
        const { firstname, lastname, phonenumber, email } = this.state;
        return (
            <body>
                <form id="form" onSubmit={this.handleSubmit} className="buy-bg">
                    <div className="statements-box">
                        <div className="statements-items">
                            <input
                                onChange={this.onChangeInputHandler}
                                name="firstname"
                                className="inpt-card"
                                value={firstname}
                                placeholder="Name..." />
                            <input
                                onChange={this.onChangeInputHandler}
                                name="lastname"
                                className="inpt-card"
                                value={lastname}
                                placeholder="Last Name..." />
                        </div>
                        <div className="statements-items">
                            <input
                                onChange={this.onChangeInputHandler}
                                name="phonenumber"
                                className="inpt-card"
                                value={phonenumber}
                                placeholder="Phonenumber..." />
                            <input
                                onChange={this.onChangeInputHandler}
                                name="email"
                                className="inpt-card"
                                value={email}
                                placeholder="E-Mail..." />
                        </div>
                    </div>
                    <div className="butt-set">
                        <button className="butt-buy" type="submit">Подати заявку</button>
                    </div>
                </form>
            </body>
        )
    }
}

export default class SSD120GB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: photo1
        }
    }

    state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        product: ''
    }

    onHandleChange = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    mouseEnter1 = (e) => {
        e.preventDefault();
        this.setState({
            src: photo1
        });
        document.getElementById("icon1").style.border = "0.1rem solid rgb(209, 0, 0)";
        document.getElementById("icon4").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon3").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon2").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
    }
    mouseEnter2 = (e) => {
        e.preventDefault();
        this.setState({
            src: photo2
        });
        document.getElementById("icon2").style.border = "0.1rem solid rgb(209, 0, 0)";
        document.getElementById("icon4").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon3").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon1").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
    }
    mouseEnter3 = (e) => {
        e.preventDefault();
        this.setState({
            src: photo3
        });
        document.getElementById("icon3").style.border = "0.1rem solid rgb(209, 0, 0)";
        document.getElementById("icon2").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon1").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon4").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
    }
    mouseEnter4 = (e) => {
        e.preventDefault()
        this.setState({
            src: photo4
        });
        document.getElementById("icon4").style.border = "0.1rem solid rgb(209, 0, 0)";
        document.getElementById("icon3").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon2").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
        document.getElementById("icon1").style.border = "0.1rem solid rgba(209, 0, 0, 0)";
    }

    scroll() {
        const $form = document.getElementById("form");
        $form.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <body className="bg">
                <div className="top-text-box">
                    <h1 className="normal-text">Kingston SSD HyperX Fury RGB 240GB 2.5" SATAIII TLC</h1>
                </div>
                <div className="work-window">
                    <div className="s-images">
                        <img id="icon1"
                            className="img-card"
                            onMouseEnter={this.mouseEnter1}
                            src={photo1}
                            alt="photo1" />
                        <img id="icon2"
                            className="img-card"
                            onMouseEnter={this.mouseEnter2}
                            src={photo2}
                            alt="photo2" />
                        <img id="icon3"
                            className="img-card"
                            onMouseEnter={this.mouseEnter3}
                            src={photo3}
                            alt="photo3" />
                        <img
                            id="icon4"
                            className="img-card"
                            onMouseEnter={this.mouseEnter4}
                            src={photo4}
                            alt="photo4" />
                    </div>
                    <div class="vl"></div>
                    <div className="main-image-box">
                        <img className="main-image-ssd" id="mainimage" src={this.state.src} alt="main_image" />
                    </div>
                    <div class="vl2"></div>
                    <div className="buy-set">
                        <div className="price-set">
                            <h1 className="normal-text price">1 800</h1>
                            <h2 className="normal-text sub-price">₴</h2>
                            <button className="butt-buy" onClick={this.scroll}>Купити</button>
                        </div>
                        <hr className="horizonline" />
                        <div className="delivery-various">
                            <div className="delivery-type">
                                <img className="icon" src={shopsicon} alt="shop icon" />
                                <h3 className="delivery-name-text">Самовивіз з віділень поштових операторів</h3>
                                <h3 className="delivery-dev-text">Відправимо завтра</h3>
                                <h3 className="delivery-price">23 ₴ - 64 ₴</h3>
                            </div>
                            <div className="delivery-type">
                                <img className="icon" src={boxicon} alt="shop icon" />
                                <h3 className="delivery-name-text">Доставка кур'єром</h3>
                                <h3 className="delivery-dev-text desc-price">Відправимо завтра</h3>
                                <h3 className="delivery-price">45 ₴ - 75 ₴</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="horizonline" />
                <div className="features-box">
                    <h3 className="features-text">Характеристики <span className="span-name">Kingston SSD HyperX Fury RGB 240GB 2.5" SATAIII TLC</span></h3>
                    <div className="features-items">
                        <div className="features-item">
                            <h3 className="features-text-t">Обсяг/Об'єм</h3>
                            <hr className="hr-features-text" />
                            <h1 className="features-text-t">240 ГБ</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Країна виробник</h3>
                            <hr className="hr-features-text hr2_ssd" />
                            <h1 className="features-text-t">Китай</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Швидкість читання</h3>
                            <hr className="hr-features-text hr3_ssd" />
                            <h1 className="features-text-t">до 550 МБ/сек</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Швидкість запису</h3>
                            <hr className="hr-features-text hr4_ssd" />
                            <h1 className="features-text-t">до 480 МБ/с</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Енергоспоживання</h3>
                            <hr className="hr-features-text hr5_ssd" />
                            <h1 className="features-text-t">Максимум під час читання: 1.2 Вт<br />
                                Максимум під час запису: 2.5 Вт<br />
                                Максимум під час простою: 0.2 Вт</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Час напрацювання на відмову</h3>
                            <hr className="hr-features-text hr6_ssd" />
                            <h1 className="features-text-t">1 мільйон годин</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Форм-фактор</h3>
                            <hr className="hr-features-text hr7_ssd" />
                            <h1 className="features-text-t">2.5"</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Інтерфейс підключення</h3>
                            <hr className="hr-features-text hr8_ssd" />
                            <h1 className="features-text-t">SATAIII</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Тип накопичувача</h3>
                            <hr className="hr-features-text hr9_ssd" />
                            <h1 className="features-text-t">Внутрішній</h1>
                        </div>
                        <div className="features-item">
                            <h3 className="features-text-t">Вага</h3>
                            <hr className="hr-features-text hr10_ssd" />
                            <h1 className="features-text-t">165 г</h1>
                        </div>
                    </div>
                </div>
                <h2 className="center">Оформити покупку</h2>
                <BuyWindow product="SSD Kingston HyperX Fury RGB 240GB"/>
            </body>
        )
    }
}