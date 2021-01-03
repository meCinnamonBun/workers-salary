module.exports = class MockService {
    resp = {
        0: "manager",
        1: "worker",
        2: "engineer",
        3: "worker",
        4: "engineer",
        5: "manager",
        6: "worker",
        7: "worker",
        8: "engineer",
    }

    worker = {
        details: 100,
        rank:  2
    }

    manager = {
        projects: 14
    }

    engineer = {
        experience: 6
    }

    getType = async (id) => {
        return await new Promise((resolve, reject) => {
            resolve (this.resp[id])
        })

    }

    getParams = async (type, id) =>{
        return await new Promise((resolve, reject) => {
            switch (type) {
                case "worker":
                    resolve(this.worker)
                    break
                case "manager":
                    resolve(this.manager)
                    break
                case "engineer":
                    resolve(this.engineer)
                    break
            }
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