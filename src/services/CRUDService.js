import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            });

            resolve('Create a new user success');
        } catch (error) {
            reject(error);
        }
    });
};

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll();
            if (users) {
                resolve(users);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};

let hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            let hash = bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
    getAllUsers: getAllUsers
};