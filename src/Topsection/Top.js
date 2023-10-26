import React from "react"
import { AiOutlineRight } from "react-icons/ai"
import "./Top.css"
import {PiBowlFood} from "react-icons/pi"
import {MdOutlineFoodBank} from "react-icons/md"

const Top = () => {
    let data = {
        "suplier": "East Coast fruits & vegetables",
        "shippingDate": "Thu,Feb 10",
        "total": "$15,028.3",
        "department": "300-444-678",
        "status": "Awaiting Your approvel",
        "productslist": [
          {
            "project_name": "Beef Tenderloin Steak",
            "brand": "Angus Prime Cuts",
            "price": "$34.99",
            "quantity": "4 steaks",
            "total": "$139.96",
            "status": "In Stock"
          },
          {
            "project_name": "Salmon Fillet",
            "brand": "Ocean's Bounty",
            "price": "$12.50",
            "quantity": "2 fillets",
            "total": "$25.00",
            "status": "In Stock"
          },
          {
            "project_name": "Organic Kale",
            "brand": "Green Farms",
            "price": "$2.99",
            "quantity": "1 bunch",
            "total": "$2.99",
            "status": "In Stock"
          },
          {
            "project_name": "Organic Kale",
            "brand": "Green Farms",
            "price": "$2.99",
            "quantity": "1 bunch",
            "total": "$2.99",
            "status": "In Stock"
          },
          {
            "project_name": "Organic Kale",
            "brand": "Green Farms",
            "price": "$2.99",
            "quantity": "1 bunch",
            "total": "$2.99",
            "status": "In Stock"
          }
        ]
      }
    return (
        <div>
            <div className="container-fluid top-section">
            <div className="container">
                <p className='para'>Orders <AiOutlineRight /> <span className='span'>Order 32457ABC</span></p>
            </div>

            <div>
                <div className="container">
                    <div className="d-flex justify-content-between ">
                        <h2>Orders 32457ABC</h2>
                        <div className="p-2">
                            <button className="m-2 p-2 back">Back</button>
                            <button className="m-2 p-2 approve">Approve Order</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="container bootstrap-class">
                <div className="row"> 
                
                    <div className="col-2 note">
                        <div className="mini">
                        <p className="title">Supplier </p>
                        <p className="description">{data.suplier}</p>
                        </div>
                        <div className="vl"></div>
                    </div>
        
                    <div className="col-2 note">
                        <div className="mini">
                        <p className="title">shipping date </p>
                        <p className="description">{data.shippingDate}</p>
                        </div>
                        <div className="vl"></div>
                    </div>

                    <div className="col-2 note">
                        <div className="mini">
                        <p className="title">Total </p>
                        <p className="description">{data.total}</p>
                        </div>
                        <div className="vl"></div>
                    </div>
                    <div className="col-2 note">
                        <div className="mini">
                        <p className="title">Category </p>
                        <div className="d-flex">
                            <PiBowlFood/>
                            <MdOutlineFoodBank/>
                        </div>
                        </div>
                        <div className="vl"></div>
                    </div>
                    <div className="col-2 note">
                        <div className="mini">
                        <p className="title">Department </p>
                        <p className="description">{data.department}</p>
                        </div>
                        <div className="vl"></div>
                    </div>
                    <div className="col-2">
                        <div className="mini">
                        <p className="title">Status </p>
                        <p className="description">{data.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top