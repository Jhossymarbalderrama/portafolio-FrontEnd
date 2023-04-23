export class Persona {
    private id: number;
    private nombre: string;
    private apellido: string;
    private edad: number;
    private telefono: number;
    private celular: number;
    private email: string;
    private titulo: string;
    private sobre_mi: string;
    private url_banner_perfil: string;
    private url_foto_perfil: string;

    constructor(id: number, nombre: string, apellido: string,
        edad: number, telefono: number, celular: number,
        email: string, titulo: string, sobre_mi: string,
        url_banner_perfil: string, url_foto_perfil: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.celular = celular;
        this.email = email;
        this.titulo = titulo;
        this.sobre_mi = sobre_mi;
        this.url_banner_perfil = url_banner_perfil;
        this.url_foto_perfil = url_foto_perfil;
    }

    
    public getId() {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getNombre() {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getApellido() {
        return this.apellido;
    }
    public setApellido(apellido: string) {
        this.apellido = apellido;
    }

    public getEdad() {
        this.edad;
    }
    public setEdad(edad: number) {
        this.edad = edad;
    }

    public getTelefono() {
        return this.telefono;
    }
    public setTelefono(telefono: number) {
        this.telefono = telefono;
    }

    public getCelular() {
        return this.celular;
    }
    public setCelular(celular: number) {
        this.celular = celular;
    }

    public getEmail(){
        return this.email;
    }
    public setEmail(email:string){
        this.email = email;
    }

    public getTitulo(){
        return this.titulo;
    }
    public setTitulo(titulo:string){
        this.titulo = titulo;
    }

    public getSobre_mi(){
        return this.sobre_mi;
    }
    public setSobre_mi(sobre_mi: string){
        this.sobre_mi = sobre_mi;
    }

    public getUrl_banner_perfil(){
        return this.url_banner_perfil;
    }
    public setUrl_banner_perfil(url_banner_perfil: string){
        this.url_banner_perfil = url_banner_perfil;
    }

    public getUrl_foto_perfil(){
        return this.url_foto_perfil;
    }
    public setUrl_foto_perfil(url_foto_perfil: string){
        this.url_foto_perfil = url_foto_perfil;
    }

}
