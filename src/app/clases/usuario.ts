export class Usuario {
    private id?: number;
    private usuario: string;
    private contraseña: string;
    private id_persona?: number;

    constructor(usuario: string, contraseña: string, id?: number,id_persona?: number){
        this.id = id;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.id_persona = id_persona;
    }

    public getId(): any{
        return this.id;
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

    public getId_persona(){
        return this.id_persona;
    }

    public setId_persona(id_persona: number){
        this.id_persona = id_persona;
    }
}
