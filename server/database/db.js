import mongoose from 'mongoose';


const connection = async () => {
    const url = 'mongodb://vedansh_paliwal:12345@cluster0-shard-00-00.m2f4b.mongodb.net:27017,cluster0-shard-00-01.m2f4b.mongodb.net:27017,cluster0-shard-00-02.m2f4b.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-rgz5ia-shard-0&authSource=admin&retryWrites=true&w=majority'
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database Connected Successfully')

    }
    catch (error) {
        console.log('error', error.message)
    }
}

export default connection;