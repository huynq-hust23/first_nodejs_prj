import db from "../models/index";
import CRUDService from "../services/CRUDService";

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

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("post CRUD from controller");
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    console.log('---------------------------------------------');
    console.log(data);
    console.log('---------------------------------------------');

    return res.send("Display get CRUD from controller");
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}