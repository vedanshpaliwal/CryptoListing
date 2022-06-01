import React, { useState, useEffect } from 'react';
import './stock.css';
import search from '../../Assests/Search.png';
import left from '../../Assests/left.png';
import right from '../../Assests/right.png';
import { authlisting } from '../../api/api';
import { useNavigate } from "react-router-dom";


const listingintialvalue = {
    name: '',
    symbol: '',
    marketCap: '',
    price: '',
    isSaved: false

}

export default function StockTable() {
    const history = useNavigate()
    let [listings, setListings] = useState(listingintialvalue)
    const [result, setResult] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    let [page, setpage] = useState(1)
    useEffect(() => {

        handledata()

    }, [])
    const handleleft = () => {
        page = page - 1;
        setpage(page)
        handledata()
    }
    const handleright = () => {
        page = page + 1;
        setpage(page);
        handledata()
    }
    const handledata = async () => {
        let url = `https://api.nomics.com/v1/currencies/ticker?key=6440c8b05e31abf42cd10d3aae42d9da5dc8905d&per-page=5&page=${page}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(page)
        console.log(parsedData)
        setResult(parsedData)
    }
    function numFormatter(num) {
        if (num > 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        }
        else if (num > 1000000) {
            return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 

        }
        else if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K';
        }// convert to K for number from > 1000 < 1 million 

        else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }

    const handlesave = async (e, data, final, rounded) => {
        console.log(data.name, data.symbol, final, rounded)

        let finalstr = final.toString();
        await setListings({
            name: data.name,
            symbol: data.symbol,
            marketCap: finalstr,
            price: rounded,
            isSaved: true
        })

        let response = await authlisting(listings);

        if (!response) {
            alert("already exists")
            console.log("response not positive")
        }
        else {

            e.target.className = 'view'
            e.target.innerText = "VIEW"
            e.target.style.pointerEvents = "none"
            console.log(listings)

        }
    }
    return (
        <div className='stock-table-main'>
            <div className='stock-main'>

                <div className='stock-top'>
                    <div className='stock-top-title'>Stock Details Table</div>
                    <div className='stock-search-box'><span className='search-icon'><img src={search} /></span> <input type="text" placeholder='Search By Company Name' onChange={(e) => { setsearchTerm(e.target.value) }} /> </div>
                </div>
                <div className='stock-bottom'>
                    <table>

                        <tr className='table-content table-head'>
                            <th className='table-heading'>COMPANY NAME</th>
                            <th className='table-heading' >SYMBOL</th>
                            <th className='table-heading'>MARKET CAP</th>
                            <th className='table-heading'> </th>

                            <th className='table-heading' >CURRENT PRICE</th>
                        </tr>

                        {/* iterative part */}
                        {result &&
                            result.filter((data) => {
                                if (searchTerm === "") {
                                    return data;
                                }
                                else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return data;
                                }
                            }).map((data, index) => {
                                let price = data.price
                                let rounded = Math.round(price * 100) / 100;

                                let market = data.market_cap;
                                let final = numFormatter(market)
                                console.log(final)
                                return (
                                    <tr className='table-content table-desc' key={index}>
                                        <td className='table-comp-name'>{data.name}</td>
                                        <td className='table-heading'>
                                            <div className='table-symbol'>

                                                <div className='circle'>

                                                </div>{data.symbol} </div></td>
                                        <td className='table-market'>{final}</td>
                                        <td className='table-heading'> <div style={{ width: 130 }}>
                                            <div className='save' onClick={(e) => { handlesave(e, data, final, rounded) }}>Save Data</div>
                                        </div></td>
                                        <td className='table-price'><div className='price'>
                                            ${rounded}
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
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 20, alignItems: 'center', marginTop: 12 }}>
                                <button className='views' onClick={() => history('/view')}>VIEW</button>
                                <div className='page'>
                                    {page} of 280
                                </div>
                                <div className='left-arrow'> <img src={left} alt="left" className='align-margin' onClick={() => { page <= 1 ? alert("Aleardy on First Page") : handleleft() }} /> </div>
                                <div className='right-arrow'> <img src={right} alt="right" className='align-margin' onClick={handleright} /> </div>

                            </div>

                        </div>
                    </table>

                </div>



            </div >
        </div >
    )
}
