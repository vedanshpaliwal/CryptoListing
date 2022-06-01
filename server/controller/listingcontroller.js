import listings from "../model/listingschema";


export const savelisting = async (req, res) => {

    try {
        const exits = await listings.findOne({ name: req.body.name });
        if (exits) {
            return res.status(401).json('already exist')
        }
        const listing = req.body
        const newlisting = new listings(listing)
        let resp = await newlisting.save()
        // console.log(resp)
        return res.status(200).json(resp)
    }
    catch (error) {
        console.log("error in save listing")
    }



}



