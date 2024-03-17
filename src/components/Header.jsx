import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../components/style.css';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";
const Header = () => {

    const[price,setPrice]=useState("");
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) =>{
        dispatch(DLT(id))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const total = () => {
        let price = 0;
        getdata.map((ele)=>{
            price = ele.price* ele.qnty + price;
        });
        setPrice(price); 
    };

    useEffect(()=>{
        total();
    },[total])
    return (
        <React.Fragment>
            <div>
                <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                    <Container>
                        <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                        <Nav className="me-auto">
                            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                        </Nav>
                        <Badge badgeContent={getdata.length} color="primary" id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 20, cursor: "Pointer", }}></i>
                        </Badge>
                    </Container>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        {
                            getdata.length ?
                                <div className="card_details" style={{ width: "24rem", padding: 10 }}>
                                    <table className="w-100">
                                        <thead>
                                            <tr style={{marginBottom:"1px solid black;"}}>
                                                <th className="d-inline">Photo</th>
                                                <th className="w-50">Restaurent Name</th>                                               
                                            </tr>                                           
                                        </thead>
                                        <tbody>
                                            {
                                                getdata.map((item) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                   <NavLink to={`/cart/${item.id}`} onClick={handleClose}><img src={item.imgdata} alt=""  className="w-75 mt-2"/></NavLink>
                                                                </td>
                                                                <td className="mt-2 d-block">
                                                                    <p className="mb-1">{item.rname}</p>
                                                                    <p className="mb-1">Price : ₹ {item.price*item.qnty}</p>
                                                                    <p>Quantity : {item.qnty}</p>                                                                    
                                                                </td>
                                                                <td>
                                                                <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(item.id)}>
                                                                        <i className="fas fa-trash smalltrash"></i>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }                                           
                                        </tbody>
                                    </table>
                                    <hr />
                                    <p className="text-center">Total : ₹ {price}</p>
                                </div> :
                                <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "20rem", padding: "10", position: "relative" }}>
                                    <i className="fas fa-close smallclose" style={{ position: "absolute", top: 2, right: 20, fontSize: "1.6rem", display: "block", cursor: "pointer" }} onClick={handleClose}></i>
                                    <p className="text-center" style={{ fontSize: "1.2rem", marginTop: "12px" }}>Your Cart is Empty</p>
                                    <ShoppingCartIcon style={{ width: "5rem" }} />
                                </div>
                        }


                    </Menu>
                </Navbar>
            </div>
        </React.Fragment>
    )
}
export default Header;