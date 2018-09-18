import Server from "../../server/Server";

class StudentService extends Server {
    constructor(path = "/student2") {
        super(path);
    }

    getStudentList(params) {
        const queryString = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
          }).join('&');
        const path = `?${queryString}`;

        return this.send({ path });
    }
}

export default new StudentService();