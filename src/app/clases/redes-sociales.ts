export class RedesSociales {
    private id?: number;
    private nombre: string;
    private link: string;

    private id_usuario?: number;

    constructor(nombre: string, link: string, id_usuario?: number, id?: number){
        this.id = id;
        this.nombre = nombre;
        this.link = link;
        this.id_usuario = id_usuario;
    }

    public getId(){
        return this.id;
    }

    public getId_Usuario(){
        return this.id_usuario;
    }

    public getNombre(){
        return this.nombre;
    }

    public getLink(){
        return this.link;
    }
    
    public setId_Usuario(id_usuario: number){
        this.id_usuario = id_usuario;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public setLink(link :string){
        this.link = link;
    }
}
