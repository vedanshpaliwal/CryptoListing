import express, { response } from "express";
import https from 'https';
import { savelisting } from "../controller/listingcontroller";
import listing from "../model/listingschema";



const router = express.Router()


router.post('/save', savelisting)
router.get('/view', async (req, res) => {
    try {
        const listings = await listing.find()
        res.json(listings)
    } catch (error) {
        console.log('error at productcontroller', error)
    }
})

delete

    router.post('/delete', async (req, res) => {
        try {


            const id = req.body;
            await listing.deleteOne({ "_id": id });
            const listings = await listing.find()
            res.json(listings)
        } catch (error) {
            console.log('error at productcontroller', error)
        }
    })



export default router