import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropiedadService } from '../../propiedad.service';


@Component({
  selector: 'app-propiedad-edit',
  templateUrl: './propiedad-edit.component.html',
  styleUrls: ['./propiedad-edit.component.css']
})
export class PropiedadEditComponent implements OnInit {

  @Input() item;
  @Input() editMode: boolean;

  imageslist = [];
  propForm: FormGroup;
  selectedFile: File;
  data = new FormData();
  firstimage = '/assets/Images/no-image.png';
  listacategorias = ['propiedad', 'alquiler', 'campo', 'lote', 'arrendamiento'];
  listasubcategorias = ['departamento', 'duplex', 'casa', 'chalet', 'local', 'galpon', 'oficina'];

  constructor(private propService: PropiedadService) { }

  ngOnInit() {
    if (this.editMode) {
      this.fillForm(this.item);
    } else {
      this.initForm();
    }
  }

  onSubmit() {
    // console.log(this.propForm.value);
    // console.log(this.editMode);
    if (!this.editMode) {
      this.propService.newPropiedad(this.data, this.propForm.value);
      this.initForm();
    } else {
      this.propService.editPropiedad(this.data, this.propForm.value);
    }
  }

  newfile2(event, id) {
    this.selectedFile = event.target.files[0];
    document.getElementById(id).innerHTML = this.selectedFile.name;
  }

  newfile(event, id) {
    this.selectedFile = event.target.files[0];
    this.imageslist[id] = this.selectedFile.name;
    if (this.imageslist.length < 5) {
      this.imageslist.push('Seleccione Imagen');
    }
    this.data.append('images', this.selectedFile);
  }

  catSelected(event) {
    this.propForm.get('categoria').setValue(event.target.value);
  }

  subSelected(event) {
    this.propForm.get('subcategoria').setValue(event.target.value);
  }

  deleteImage(event, index) {
    const id = this.imageslist[index];
    const final = this.propService.borrarImagen(id);
    this.imageslist[index] = 'Seleccione Imagen';

  }

  private initForm() {
    let direccion = '';
    let categoria = 'propiedad';
    let subcategoria = 'departamento';
    let descripcion = '';
    let precio = 0;

    this.propForm = new FormGroup({
      'direccion': new FormControl(direccion, Validators.required),
      'categoria': new FormControl(categoria, Validators.required),
      'precio': new FormControl(precio, Validators.required),
      'subcategoria': new FormControl(subcategoria, Validators.required),
      'descripcion': new FormControl(descripcion, Validators.required)
    });

    this.imageslist.push('Seleccione Imagen');
  }

  private fillForm(item) {
    let direccion = item.direccion;
    let categoria = this.listacategorias[this.listacategorias.indexOf(item.categoria)];
    let subcategoria = item.subcategoria;
    let descripcion = item.descripcion;
    let precio = item.precio;

    this.propForm = new FormGroup({
      'direccion': new FormControl(direccion, Validators.required),
      'categoria': new FormControl(categoria),
      'precio': new FormControl(precio, Validators.required),
      'subcategoria': new FormControl(subcategoria),
      'descripcion': new FormControl(descripcion, Validators.required),
      'id': new FormControl(item._id)
    });

    for (const image of item.imagenes_id) {
      this.imageslist.push(image);
    }
    if (this.imageslist.length <= 5) {
      this.imageslist.push('Seleccione Imagen');
    }
  }

}
