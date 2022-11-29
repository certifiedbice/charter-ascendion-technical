import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app.component';
import { ComponentRegistrationModule } from 'src/modules/component-registration.module';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, ComponentRegistrationModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
