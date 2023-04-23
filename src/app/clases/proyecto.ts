export class Proyecto {
    private id: number;
    private nombre_proyecto: string;
    private descripcion: string;
    private sistema: string;

    constructor(id:any, nombre_proyecto:string, descripcion: string, sistema: string){
        this.id = id;
        this.nombre_proyecto = nombre_proyecto;
        this.descripcion = descripcion;
        this.sistema = sistema;
    }

    
    public getId(){
        return this.id;
    }

    public setId(id: any){
        this.id = id;
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
