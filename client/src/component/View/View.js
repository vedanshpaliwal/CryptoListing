import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { authdelete, authview } from '../../api/api';

const listingintialvalue = {
    "_id": ''

}

export default function View() {
    const [listingcards, setListingcards] = useState([])
    const [listingvalue, setlistingvalue] = useState(listingintialvalue)
    const navigate = useNavigate()

    let responsed = [];
    const handledata = async () => {

        let response = await authview();
        if (!response) {
            console.log("response not positive")
            console.log(response)
        }
        else {
            responsed = response;
            setListingcards(responsed)
            console.log("listing card", listingcards)
        }
    }
    useEffect(() => {
        handledata()
    }, [])


    const handledelete = async (name) => {
        console.log("delete", name)
        setlistingvalue({
            "_id": name
        })
        let response = await authdelete(listingvalue);
        if (!response)
            console.log("problem occured while deleting")
        else {
            console.log("successfully deleted")
            console.log(response)
            setListingcards(response)
        }
    }
    return (
        <div>



            <div className='stock-table-main'>
                <div className='stock-main-saved'>

                    <div className='stock-bottom'>
                        <table>

                            <div className='table-head-saved'>
                                <div className='table-heading saved-table'>

                                    SAVED TABLE DATA
                                </div>
                            </div>
                            {
                                console.log("insidecard yahi hai", listingcards)

                            }

                            {/* iterative part */}
                            {listingcards &&
                                listingcards.map((data, index) => {

                                    return (
                                        <tr className='table-content table-desc' key={index}>
                                            <td className='table-comp-name'>{data.name}</td>
                                            <td className='table-heading'>
                                                <div className='table-symbol'>

                                                    <div className='circle'>

                                                    </div>{data.symbol} </div></td>
                                            <td className='table-market'>{data.marketCap}</td>
                                            <td className='table-heading'> <div style={{ width: 130 }}>
                                                <div className='view' onClick={() => { handledelete(data._id) }} >Delete</div>
                                            </div></td>
                                            <td className='table-price'><div className='price'>
                                                ${data.price}
                                            </div>
                                                <div className='usd'>
                                                    USD
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })


                            }








                            <div className='table-bottom'>
                                <div style={{ display: 'flex', justifyContent: 'center', marginRight: 20, alignItems: 'center', marginTop: 12 }}>

                                    <div className='view' onClick={() => { navigate("/") }}>BACK</div>
                                </div>

                            </div>


                        </table>

                    </div>



                </div>
            </div >




        </div>
    )
}
