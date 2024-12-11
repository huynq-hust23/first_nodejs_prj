import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    ///REST API
    router.get('/huynguyen', (req, res) => {
        res.send("huy_nguyen23");
    });
    router.get('/get-crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    app.use("/", router);
};

export default initWebRoutes;
