export class Educacion {

    private id?: number;
    private nombre_establecimiento: string;
    private titulo: string;
    private descripcion: string;
    private aneos: number;
    private direccion: string;
    private url_logo : string;

    constructor(nombre_establecimiento: string, titulo:string,
                descripcion: string, aneos: number, direccion:string, url_logo: string) {        
        this.nombre_establecimiento = nombre_establecimiento;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.aneos = aneos;
        this.direccion = direccion;
        this.url_logo = url_logo;
    }       

    public getNombre_Establecimiento(){
        return this.nombre_establecimiento;
    }

    public getTitulo(){
        return this.titulo;
    }

    public getDescripcion(){
        return this.descripcion;
    }

    public getAneos(){
        return this.aneos;
    }

    public getDireccion(){
        return this.direccion;
    }

    public getUrl_Logo(){
        return this.url_logo;
    }

    public setNombre_Establecimiento(nombre_establecimiento: string){
        this.nombre_establecimiento = nombre_establecimiento;
    }

    public setTitulo(titulo: string){
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    public setUrl_Logo(url_logo: string){
        this.url_logo = url_logo;
    }
}
