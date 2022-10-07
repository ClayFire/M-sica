import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {
@ViewChild(IonModal) modal: IonModal;

message = 'Aquí se puede colocar un mensaje para que se pueda entender qué está haciendo.';
name: string;
password: string;

cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  this.modal.dismiss(this.name, 'confirm');
}

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
    this.message = `Hola, ${ev.detail.data}!`;
  }
}



}

