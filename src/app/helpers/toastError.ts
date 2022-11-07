import { MatSnackBar } from '@angular/material/snack-bar';

export const showMessageError = (
  _snackBar: MatSnackBar,
  message: string = 'Se ha producido un error',
  action: string = 'Cerrar'
) => {
  _snackBar.open(message, action, {
    duration: 4000,
    horizontalPosition: 'left',
    verticalPosition: 'top',

    panelClass: ['blue-snackbar'],
  });
};
