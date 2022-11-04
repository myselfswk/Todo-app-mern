const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb+srv://myselfswk:waleed1999@cluster0.wqwkt.mongodb.net/mern-ecommerce",
            connectionParams
        );
        console.log("Connected To Database...");
    } catch (error) {
        console.log("Could Not Connected to Database", error);
    }
}