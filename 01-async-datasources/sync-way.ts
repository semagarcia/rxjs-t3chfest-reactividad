// T3chFest example
class UserSync {
    private backendUserSrv;

    setName(name: string) {
        return this.backendUserSrv.setUserName(name);
    }

    setSurname(surname: string) {
        return this.backendUserSrv.setUserSurname(surname);
    }

    setAge(age: number) {
        return this.backendUserSrv.setUserAge(age);
    }
}