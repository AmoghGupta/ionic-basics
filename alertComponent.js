function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = '';
    alert.message = 'Are you sure you want to clear?';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }
 