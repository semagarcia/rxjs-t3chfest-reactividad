// T3chFest example
class UserAsync {
    private backendUserSrv;

    setName(name: string, cb: Function) {
        const res = this.backendUserSrv.setUserName(name, cb);
        cb(res);
    }

    setSurname(surname: string, cb: Function) {
        const res = this.backendUserSrv.setUserSurname(surname, cb);
        cb(res);
    }

    setAge(age: number, cb: Function) {
        const res = this.backendUserSrv.setUserAge(age, cb);
        cb(res);
    }
}