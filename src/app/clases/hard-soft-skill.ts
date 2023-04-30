export class HardSoftSkill {
    private id?: number;
    private titulo: string;
    private detalle: string; 
    private porcentaje: number; //porcentaje de habilidad de skill 1 - 100 %
    //private url_imagen: string;
    private id_usuario?: number;

    constructor(titulo: string, detalle: string, porcentaje: number, id_usuario?: number){    
        this.titulo = titulo;
        this.detalle = detalle;
        this.porcentaje = porcentaje;    
        this.id_usuario = id_usuario;       
    }

    public getTitulo(){
        return this.titulo;
    }

    public setTitulo(titulo: any){
        this.titulo = titulo;
    }

    public getDetalle(){
        return this.detalle;
    }

    public setDetalle(detalle: any){
        this.detalle = detalle;
    }

    public getPorcentaje(){
        return this.porcentaje;
    }

    public setPorcentaje(porcentaje: any){
        this.porcentaje = porcentaje;
    }    
}
