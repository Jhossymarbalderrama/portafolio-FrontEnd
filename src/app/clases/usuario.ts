export class Usuario {
    private id?: number;
    private usuario: string;
    private contraseña: string;
    private id_persona?: number;

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
