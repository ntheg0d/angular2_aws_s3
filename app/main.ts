import {bootstrap} from 'angular2/platform/browser';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

import {AppComponent} from './app.component';


bootstrap(AppComponent,[Http]);