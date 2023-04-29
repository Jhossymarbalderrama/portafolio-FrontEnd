export class Proyecto {
    private id?: number;
    private nombre_proyecto: string;
    private descripcion: string;
    private sistema: string;
    private id_usuario?: number;

    constructor(nombre_proyecto:string, descripcion: string, sistema: string, id_usuario?: number){
        this.nombre_proyecto = nombre_proyecto;
        this.descripcion = descripcion;
        this.sistema = sistema;
        this.id_usuario = id_usuario;
    }

    public getNombre_Proyecto(){
        return this.nombre_proyecto;
    }

    public setNombre_Proyecto(nombre_proyecto: string){
        this.nombre_proyecto = nombre_proyecto;
    }

    public getDescripcion(){
        return this.descripcion;
    }

    public setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    public getSistema(){
        return this.sistema;
    }

    public setSistema(sistema: string){
        this.sistema = sistema;
    }
}
