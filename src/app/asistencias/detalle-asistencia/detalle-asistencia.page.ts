import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import{AsistenciaService} from '../asistencia.service'
import{Asistencia} from '../asistencia.model'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-asistencia',
  templateUrl: './detalle-asistencia.page.html',
  styleUrls: ['./detalle-asistencia.page.scss'],
})
export class DetalleAsistenciaPage implements OnInit {
  asistencia={
    id:'',
    fecha:'',
    asignatura: '',
    profesor: '',
    hora: ''
  };
  asistenciaService : AsistenciaService;

  campo: string;

  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    AsistenciaService: AsistenciaService, public toastController: ToastController) {
      this.asistenciaService = AsistenciaService;
      this.activatedRoute.paramMap.subscribe(paramMap => {
        const idAsistenciaRecibido=paramMap.get('asistenciaId');
          alert(idAsistenciaRecibido);
        this.asistenciaService.getDetalle(idAsistenciaRecibido).then(res => {
          this.asistencia=res;
          this.asistencia.id=idAsistenciaRecibido;
        });
      }
      );
     }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      //de la ruta activa se toma el Asistenciaid declarado en path en app-routing el numero despues del / en el link
      paramMap=>{
        const idAsistenciaRecibido=paramMap.get('asistenciaId'); //recupero el parametro y lo dejo en una constante
        this.asistenciaService.getDetalle(idAsistenciaRecibido).then(res => {
          this.asistencia=res;
          this.asistencia.id=idAsistenciaRecibido;
        }); //declaro en el objeto ¿asistencia declarado arriba los detalles de asistencia recuperados con la constante 
      }
    );
  }

  modificarRegistro(navigationExtras : NavigationExtras){
    if(this.validateModel(this.asistencia)){
      console.log('Inicio modificar');
      console.log('id modificado: '+this.asistencia.id);
      console.log('Registro con fecha: '+ this.asistencia.fecha);
        this.asistenciaService.updateRegistro(
          this.asistencia.id, 
          this.asistencia.fecha,
          this.asistencia.asignatura.valueOf(),
          this.asistencia.profesor.valueOf(),
          this.asistencia.hora.valueOf());
          this.presentToast('Datos correctamente actualizados');
          this.router.navigate(['/asistencias'],navigationExtras);

          console.log('Fin modificar');
    }
    else{
      this.presentToast('Falta completar: '+this.campo)
    }
  }

  borrarRegistro(navigationExtras : NavigationExtras){
    console.log('Inicia delete');
      // Se declara e instancia un elemento de tipo NavigationExtras
          this.asistenciaService.deleteRegistro(this.asistencia.id);
            this.presentToast('Datos correctamente eliminados');
            this.router.navigate(['/asistencias'],navigationExtras);
            console.log('Fin Delete');
    }

  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
    async presentToast(message: string, duration?: number){
      const toast = await this.toastController.create(
        {
          message,
          duration:duration?duration:2000
        }
      );
      toast.present();
    }

    /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model: any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value==='') {
        // Se asigna el campo faltante
        this.campo=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }

  

}
