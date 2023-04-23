export class Usuario {
    private user: string;
    private password: string;

    constructor(user: string, password: string){
        this.user = user;
        this.password = password;
    }

    public getUser(): string{
        return this.user;
    }

    public getPassword(): string{
        return this.password;
    }

    public setUser(user: string){
        this.user = user;
    }

    public setPassword(password: string){
        this.password = password;
    }
}
