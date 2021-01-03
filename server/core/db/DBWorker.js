// const {Connection, Request } = require("tedious");
const config = require('../../consts').config;
const mysql = require("mysql");

//!!!
module.exports = class DBWorker {
    connection

    constructor() {
        this.connection = mysql.createPool(config);
    }

    getType = async (id) => {
        return await new Promise((resolve, reject) => {
            this.connection.query(
                `SELECT type FROM employee where id_e = ${id}`,
                (err, resp) => {
                    if (err) {
                        console.log("No such employee id")
                        reject(-1)
                    }

                    resolve (resp[0].type)
                }
            )
        })

    }

    getParams = async (type, id) =>{
        return await new Promise((resolve, reject) => {
            this.connection.query(
                `SELECT * FROM ${type} where id_e = ${id}`,
                (err, resp) => {
                    if (err) {
                        console.log("No such worker")
                        reject(-1)
                    }

                    console.log(resp)
                    resolve (resp[0])
                }
            )
        })
    }

    doRequest = async (id) => {
        const type = await this.getType(id).catch(()=>{throw new Error("No such employee id")});
        console.log("type:" + type)

        const params = await this.getParams(type, id).catch(()=>{throw new Error("No such worker")})

        const result = {
            name: type,
            params: params
        }

        return result
    }
}