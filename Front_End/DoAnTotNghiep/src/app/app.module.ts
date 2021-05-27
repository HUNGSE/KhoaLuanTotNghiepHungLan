
import { ContenComponent } from './Component/conten/conten.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrangChuComponent } from './Component/trang-chu/trang-chu.component';
import { HeaderComponent } from './Component/header/header.component';
import { MenuComponent } from './Component/menu/menu.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { DetailcontenComponent } from './Component/detailconten/detailconten.component';
import { NewsComponent } from './Component/news/news.component';
import { AccountComponent } from './Component/account/account.component';
import { ChangepassComponent } from './Component/changepass/changepass.component';
import { FooterComponent } from './Component/footer/footer.component';
import { EventsComponent } from './Component/events/events.component';
import { DetailcontenTypesComponent } from './Component/detailconten-types/detailconten-types.component';
import { DetailProjectComponent } from './Component/detail-project/detail-project.component';
@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    HeaderComponent,
    MenuComponent,
    ContenComponent,
    RegisterComponent,
    LoginComponent,
    DetailcontenComponent,
    NewsComponent,
    AccountComponent,
    ChangepassComponent,
    FooterComponent,
    EventsComponent,
    DetailcontenTypesComponent,
    DetailProjectComponent,
  ],
  imports:[
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatStepperModule, MatTabsModule, MatRadioModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatBadgeModule, MatPaginatorModule, MatSelectModule,
    MatSidenavModule, MatTableModule, MatToolbarModule, MatSlideToggleModule,
    MatDialogModule, FormsModule, MatDividerModule, MatListModule, MatMenuModule,
      MatSnackBarModule,
    ReactiveFormsModule,MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
