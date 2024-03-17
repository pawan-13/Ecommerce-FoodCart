import React, { useState } from "react";
import Cardsdata from "./CardsData";
import {ADD} from '../redux/actions/action';
import { useDispatch } from "react-redux";

const Cards = () => {

    const [data, setData] = useState(Cardsdata);
    console.log(setData);

    const dispatch = useDispatch();

    const send = (value) => {
        dispatch(ADD(value));
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <h2 className="text-center">Menu Items Card</h2>

                <div className="row w-100 d-flex align-items-center justify-content-center flex-row gap-15">
                    {
                        data.map((value, id) => {
                            return (
                                <>
                                    <div className="card mx-2 mt-4 card_style" style={{ width: "22rem" }} key={id}>
                                        <img src={value.imgdata} className="card-img-top w-100" alt="pizza" style={{ height: "16rem" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.rname}</h5>
                                            <p className="card-text">Price : ₹ {value.price}</p>
                                            <a href="#" className="btn btn-primary w-100" onClick={() => send(value)}>Add To Cart</a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>

    )
}
export default Cards;