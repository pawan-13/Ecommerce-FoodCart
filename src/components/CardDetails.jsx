/* eslint-disable no-undef */
import React, { useState } from "react";
import './style.css';
import Table from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
const CardDetails = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    const history = useNavigate();

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);

    const dispatch = useDispatch();

    const send = (value) => {
        dispatch(ADD(value));
    }

    const dlt = (id) => {
        dispatch(DLT(id));
        history("/");
    }

    const remove = (item) => {
        dispatch(REMOVE(item));
    }

    const compare = () => {
        let comparedata = getdata.filter((check) => {
            return check.id == id
        });
        setData(comparedata);
    }



    useEffect(() => {
        compare();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <React.Fragment>
            <div>
                <div className="container">
                    <h2 className="text-center mt-3">Items Detail Page</h2>
                </div>
            </div>

            <section className="container mt-2">
                <div className="itemsdetails">
                    {
                        data.map((items) => {
                            return (
                                <>
                                    <div className="items_img">
                                        <img src={items.imgdata} />
                                    </div>
                                    <div>
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong> : {items.rname}</p>
                                                    <p><strong>Price</strong> : ₹ {items.price}</p>
                                                    <p><strong>Dishes</strong> : {items.address}</p>
                                                    <p><strong>Total</strong> : ₹ {items.price * items.qnty}</p>
                                                    <div className="mt-3 d-flex align-iteme-center justify-content-between" style={{ width: 100,padding:4, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                        <span style={{ fontSize: 22 }} onClick={items.qnty <=1 ? (()=>dlt(items.id)) : ()=>remove(items)}>-</span>
                                                        <span style={{ fontSize: 20 }}>{items.qnty}</span>
                                                        <span style={{ fontSize: 22 }} onClick={()=>send(items)}>+</span>
                                                    </div>
                                                </td>
                                                <td className="mt-3 d-block">
                                                    <p><strong>Rating : </strong><span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> {items.rating} ★</span></p>
                                                    <p><strong>Order Review :</strong><span>{items.somedata}</span></p>
                                                    <p><strong>Remove :</strong><span> <i className="fas fa-trash" onClick={() => dlt(items.id)} style={{ color: "red", fontSize: "20px", cursor: "pointer" }}></i></span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>

    )
}
export default CardDetails;