export class Experiencia {
    private id?: number;
    private nombre_empresa: string;
    private descripcion: string;
    private aneos: string;
    private direccion: string;
    private url_logo: string;

    constructor(nombre_empresa: string,
                descripcion: string, aneos: string,
                direccion: string, url_logo: string) {
        this.nombre_empresa = nombre_empresa;
        this.descripcion = descripcion;
        this.aneos = aneos;
        this.direccion = direccion;
        this.url_logo = url_logo;
    }

    public getNombre_Empresa(){
        return this.nombre_empresa;
    }

    public setNombre_Empresa(nombre_empresa: string){
        this.nombre_empresa = nombre_empresa;
    }

    public getDescripcion(){
        return this.descripcion;
    }

    public setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    public getAneos(){
        return this.aneos;
    }

    public setAneos(aneos: string){
        this.aneos = aneos;
    }

    public getDireccion(){
        return this.direccion;
    }

    public setDireccion(direccion: string){
        this.direccion = direccion;
    }

    public getUrl_logo(){
        return this.url_logo;
    }

    public setUrl_logo(url_logo: string){
        this.url_logo = url_logo;
    }
}
