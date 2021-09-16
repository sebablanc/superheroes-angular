import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputConfig } from 'src/app/ui/input-hero/input-hero.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TextAreaConfig } from 'src/app/ui/textarea-hero/textarea-hero.component';
import { SelectConfig } from 'src/app/ui/select-hero/select-hero.component';
import { PersonajesService } from 'src/app/servicios/personajes.service';
import { Location } from '@angular/common';
import { Personaje } from 'src/app/models/personaje.model';

@Component({
  selector: 'app-form-hero-page',
  templateUrl: './form-hero-page.component.html',
  styleUrls: ['./form-hero-page.component.scss']
})
export class FormHeroPageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    personaje: new FormControl('', Validators.required),
    nombrePersona: new FormControl('', Validators.required),
    casa: new FormControl('', Validators.required),
    equipamiento: new FormControl('', Validators.required),
    year: new FormControl(null, Validators.required),
    imagenes: new FormControl(0, Validators.required),
    biografia: new FormControl('', Validators.required)
  });

  configPersonajeInput: InputConfig = {
    form: this.form,
    formControlName: 'personaje',
    label: 'Personaje',
    type: 'string'
  };

  configNomrbePersonajeInput: InputConfig = {
    form: this.form,
    formControlName: 'nombrePersona',
    label: 'Nombre del personaje',
    type: 'string'
  };

  configEquipamientoInput: InputConfig = {
    form: this.form,
    formControlName: 'equipamiento',
    label: 'Equipamiento',
    type: 'string'
  };

  configAnioInput: InputConfig = {
    form: this.form,
    formControlName: 'year',
    label: 'Año',
    type: 'number'
  };

  configCantImagenesInput: InputConfig = {
    form: this.form,
    formControlName: 'imagenes',
    label: 'Cantidad de imágenes',
    type: 'number'
  };

  configBiografiaTextArea: TextAreaConfig = {
    form: this.form,
    formControlName: 'biografia',
    label: 'Biografía'
  };

  configCasaSelect: SelectConfig = {
    form: this.form,
    formControlName: 'casa',
    label: 'Casa'
  }

  equipamientoImg: SafeUrl = '';
  casaImg: SafeUrl = '';
  imagenesPersonajeList: Array<{path: string}> = [];

  constructor(private sanitizer: DomSanitizer, private location: Location, private personajesSrv: PersonajesService) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(ob => {
      if(this.personajeForm.value && this.personajeForm.value.trim() != '' && this.equipamientoForm.value && this.equipamientoForm.value.trim() != '')
      this.equipamientoImg = this.sanitizer.bypassSecurityTrustUrl('../../../assets/imgs/equipamiento/'+this.equipamientoForm.value.trim().toLowerCase()+'-'+this.personajeForm.value.trim().toLowerCase()+'.png');

      if(this.casaForm.value.trim() != '')
      this.casaImg = this.sanitizer.bypassSecurityTrustUrl('../../../assets/imgs/'+this.casaForm.value.trim().toLowerCase()+'-logo.png');

      this.imagenesPersonajeList = [];
      if(this.personajeForm.value && this.personajeForm.value.trim() != '' && this.imagenesForm.value > 0){
        this.armarListaImagenes();
      }
    })

    if(history.state.data){
      this.llenarFormulario(history.state.data);
    }
  }

  armarListaImagenes(){
    for (let index = 0; index < this.imagenesForm.value; index++) {
          
      let stringPath = '../../../assets/imgs/personajes/'+this.personajeForm.value.trim().toLowerCase();
      
      stringPath += index > 0 ? '_'+index : '';
      
      stringPath += '.png';
      
      this.imagenesPersonajeList.push({path: stringPath});
      
    }
  }

  llenarFormulario(data: any){
    this.idForm.setValue(data.id);
    this.personajeForm.setValue(data.personaje);
    this.nombrePersonaForm.setValue(data.nombrePersona);
    this.equipamientoForm.setValue(data.equipamiento);
    this.casaForm.setValue(data.casa);
    this.imagenesForm.setValue(data.imagenes);
    this.yearForm.setValue(data.year);
    this.biografiaForm.setValue(data.biografia);
    this.armarListaImagenes();
  }

  get idForm(){ return this.form.controls.id; }
  get personajeForm(){ return this.form.controls.personaje; }
  get nombrePersonaForm(){ return this.form.controls.nombrePersona; }
  get equipamientoForm(){ return this.form.controls.equipamiento; }
  get casaForm(){ return this.form.controls.casa; }
  get imagenesForm(){ return this.form.controls.imagenes; }
  get yearForm(){ return this.form.controls.year; }
  get biografiaForm(){ return this.form.controls.biografia; }

  guardarPersonaje(){
    let personaje: Personaje = new Personaje()
    Object.assign(personaje, this.form.value);
    if(this.idForm.value==null){
      this.personajesSrv.savePersonaje(personaje);
    } else {
      this.personajesSrv.updatePersonaje(personaje);
    }
    this.volver();
  }

  eliminarPersonaje(){
    this.personajesSrv.deletePersonaje(this.idForm.value);
    this.volver();
  }

  volver(){
    this.location.back();
  }

}
