export class Usuario {
    private usuario: string;
    private contraseña: string;

    constructor(usuario: string, contraseña: string){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    public getUsuario(): string{
        return this.usuario;
    }

    public getPassword(): string{
        return this.contraseña;
    }

    public setUsuario(usuario: string){
        this.usuario = usuario;
    }

    public setPassword(contraseña: string){
        this.contraseña = contraseña;
    }
}
