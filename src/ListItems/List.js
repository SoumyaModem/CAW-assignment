import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import "./List.css"
import avacado from "../image/Avocado Hass.jpg"
import { PiPictureInPictureLight } from 'react-icons/pi'
import {TiTickOutline} from "react-icons/ti"
import {RxCross2} from 'react-icons/rx'
import {AiOutlineSearch} from "react-icons/ai"
import {BsPrinter} from "react-icons/bs"

// React Hooks 
const List = () => {
  /*let data = {
    /*"orderid": "3234324",
    "suplier": "East Coast fruits & vegetables",
    "shippingDate": "Thu,Feb 10",
    "total": "$15,028.3",
    "department": "300-444-678",
    "status": "Awaiting Your approvel",*/
    const productslist=[
      {
        "img_url":"https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "0",
        "status": "In Stock",
        "right":false,
        "wrong":false
      },
      {
        "img_url":"https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$25.00",
        "status": "In Stock",
        "right":false,
        "wrong":false,
      },
      {
        "img_url":"https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$2.99",
        "status": "In Stock",
        "right":false,
        "wrong":false,
      },
      {
        "img_url":"https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$2.99",
        "status": "In Stock",
        "right":false,
        "wrong":false,
      },
      {
        "img_url":"https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
        "project_name": "Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid",
        "brand": "Hormel Black Labelmany",
        "price": "$60.67/6*1LB",
        "quantity": "0 x 6 * 1LB",
        "total": "$2.99",
        "status": "In Stock",
        "right":false,
        "wrong":false,
      }
    ]
  /*}*/

  const [rightData,setRightdata]=useState(productslist)

  const[wrong,setwrongdata]=useState()

  const onClickRight=(eachRight)=>{
    eachRight.right = !eachRight.right;
    eachRight.wrong=false
    setRightdata([...rightData]);
  }

  const onClickwrong=(each)=>{
    each.wrong= !each.wrong;
    each.right=false
    setRightdata([...rightData]);
  }

  console.log(rightData)
  console.log(wrong)

  return (
    <div className='container'>
      <div className="d-flex justify-content-between input-group-text">
        <div className='d-flex'>
          <input type="text" className='input' aria-label="Dollar amount (with dot and two decimal places)"/>
          <span className='span'><AiOutlineSearch/></span>
        </div>
        <div className="p-2">
          <button className="m-2 p-2 back">Order item</button>
          <BsPrinter className='printer'/>
        </div>
      </div>
      <div className='table2'>
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
          {rightData.map((item) =>{
            return(
              <tr>
                <td><img src={item.img_url} className="image" alt="avocado"/></td>
                <td>{item.project_name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>{
                  item.right===true?<button className='success'>Approved</button>:item.wrong?<button className='reject'>wrong</button>:""
                }</td>

                <td>{item.right?<TiTickOutline className='approve' onClick={() => onClickRight(item)}/>:<TiTickOutline onClick={() => onClickRight(item)}/>}</td>
                <td>{item.wrong?<RxCross2 className="missed" onClick={() => onClickwrong(item)}/>:<RxCross2 onClick={() => onClickwrong(item)}/>}</td>
                <td>
                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Edit
                  </button>

                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Chicken Breast Fillets,Boneless matuu maMarinated 6 Ounce Raw invivid</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                      <div class="modal-body">
                          ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="back" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            )
          }
            /*<tr>
              <td><img src={item.img_url} alt="avocado"/></td>
              <td>{item.project_name}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
              <div className="status">
                <td><TiTick onClick={() => onClickRight(item)}/></td>
                {
                  item.right===true?<button>back</button>:""
                }
                <td><RxCross2 onClick={() => onClickwrong(item)}/></td>
                <td>Edit</td>
              </div>
            </tr>*/
          )}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default List