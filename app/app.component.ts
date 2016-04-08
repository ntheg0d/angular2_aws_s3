import {Component} from 'angular2/core';
import {UploadComponent} from "./upload/upload.component";

@Component({
    selector: 'my-app',
    directives: [UploadComponent],
    template: `
    <h1>Angular2 is awesome</h1>
    <uploader></uploader>
    `
})

export class AppComponent {

}