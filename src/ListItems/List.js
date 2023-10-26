import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import "./List.css"
import avacado from "../image/Avocado Hass.jpg"
import { PiPictureInPictureLight } from 'react-icons/pi'
import {TiTick} from "react-icons/ti"
import {RxCross2} from 'react-icons/rx'

// React Hooks 
const List = () => {
  let data = {
    "orderid": "3234324",
    "suplier": "East Coast fruits & vegetables",
    "shippingDate": "Thu,Feb 10",
    "total": "$15,028.3",
    "department": "300-444-678",
    "status": "Awaiting Your approvel",
    "productslist": [
      {
        "img_url":"https://imgur.com/MWdyBOt",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "0",
        "status": "In Stock",
        "right":false,
      },
      {
        "img_url":"https://imgur.com/MWdyBOt",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$25.00",
        "status": "In Stock",
        "right":false,
      },
      {
        "img_url":"https://imgur.com/MWdyBOt",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$2.99",
        "status": "In Stock",
        "right":false,
      },
      {
        "img_url":"https://imgur.com/MWdyBOt",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$2.99",
        "status": "In Stock",
        "right":false,
      },
      {
        "img_url":"https://imgur.com/MWdyBOt",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$2.99",
        "status": "In Stock",
        "right":false,
      }
    ]
  }

  const [rightData,setRightdata]=useState()

  const[wrong,setwrongdata]=useState()

  const onClickRight=(eachRight)=>{
    eachRight.right = !eachRight.right;
    setRightdata([eachRight]);
  }

  const onClickwrong=(wrong)=>{
    wrong.right= !wrong.right;
    setwrongdata([wrong]);
  }

  console.log(rightData)
  console.log(wrong)

  return (
    <div className='container'>
      <input type="text" className="input" />
      <table className="table">
        <thead>
          <tr>
            <th>img_url</th>
            <th>project_name</th>
            <th>brand</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data['productslist'].map(item =>
            <tr>
              <td><img src={item.img_url} alt="avocado"/></td>
              <td>{item.project_name}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
              <div className="status">
                <td><TiTick onClick={() => onClickRight(item)}/></td>
                <td><RxCross2 onClick={() => onClickwrong(item)}/></td>
                <td>Edit</td>
              </div>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List