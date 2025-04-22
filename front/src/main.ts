import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ✅ Material imports par sous-package
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatSnackBarModule,
      MatDialogModule,
      MatProgressSpinnerModule
    )
  ]
}).catch(err => console.error(err));
