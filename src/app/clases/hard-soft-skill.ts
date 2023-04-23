export class HardSoftSkill {
    private id: number;
    private titulo: string;
    private detalle: string; 
    private porcentaje: number; //porcentaje de habilidad de skill 1 - 100 %
    private url_imagen: string;


    constructor(id: number, titulo: string, detalle: string, porcentaje: number, url_imagen: string){
        this.id = id;
        this.titulo = titulo;
        this.detalle = detalle;
        this.porcentaje = porcentaje;
        this.url_imagen = url_imagen;        
    }

    public getId(){
        return this.id;
    }

    public setId(id: any){
        this.id = id;
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
    
    public getUrl_Imagen(){
        return this.url_imagen;
    }

    public setUrl_Imagen(url_imagen: any){
        this.url_imagen = url_imagen;
    }
}
