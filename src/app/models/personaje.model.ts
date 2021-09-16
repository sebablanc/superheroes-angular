export class Personaje{
    private id: number = 0;
    private personaje: string = '';
    private nombrePersona: string = '';
    private casa: string = '';
    private equipamiento: string = '';
    private year: Date = new Date();
    private imagenes: number = 0;
    private biografia: string = '';

    constructor(){}

    get personajeID(){
        return this.id
    }

    set personajeID(id: number){
        this.id = id;
    }

    get personajeNombre(){
        return this.personaje;
    }

    set personajeNombre(nombre: string){
        this.personaje = nombre;
    }

    get personajeNombrePersona(){
        return this.nombrePersona;
    }

    set personajeNombrePersona(nombrePersona: string){
        this.nombrePersona = nombrePersona;
    }

    get personajeCasa(){
        return this.casa;
    }

    set personajeCasa(casa: string){
        this.casa = casa;
    }

    get personajeEquipamiento(){
        return this.equipamiento;
    }

    set personajeEquipamiento(equipamiento: string){
        this.equipamiento = equipamiento;
    }

    get personajeAnio(){
        return this.year;
    }

    set personajeAnio(anio: Date){
        this.year = anio;
    }

    get personajeImagenes(){
        return this.imagenes;
    }

    set personajeImagenes(imagenes: number){
        this.imagenes = imagenes;
    }

    get personajeBiografia(){
        return this.biografia;
    }

    set personajeBiografia(biografia: string){
        this.biografia = biografia;
    }

}