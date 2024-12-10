import db from "../models/index";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // get all user from database
        console.log('---------------------------------------------')
        console.log(data);
        console.log('---------------------------------------------')
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    }
    catch (error) {
        console.log(error);
    }
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD
}