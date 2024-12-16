export default class UserRepository {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getLeaders() {
        return new Promise((resolve,reject) =>{
            this.dbConnection.all('SELECT * FROM users ORDER BY games_win DESC LIMIT 10',[], (err,users) =>{
                if (err) 
                    reject(err);
                resolve(users);
            })
        })
    }

    async getUserById(id) {
        console.log(id)
        return new Promise((resolve, reject) => {
            this.dbConnection.get('SELECT * FROM users WHERE user_id = ?', [id], (err, user) => {
                if (err)
                    reject(err);
                resolve(user);
            })
        })
    }

    async addUser(user_id, username) {
        return new Promise((resolve, reject) => {
            this.dbConnection.run('INSERT INTO users (user_id, username, games_win) VALUES (?,?,?)', [user_id, username, 0], (err) => {
                if (err)
                    reject(err);
                resolve();
            })
        })
    }
}
