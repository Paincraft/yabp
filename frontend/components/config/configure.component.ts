import {Inject} from 'angular2/core';
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'yabp',
    templateUrl: './configure.component.html'
})

export class Yabp{
    result: Object;
    constructor(@Inject(Http) http: Http) {
        this.result = false;
        http.get('',{url : 'http://localhost:1988/REST/config/isConfigured'}).subscribe(res => this.result = JSON.parse(res["_body"]));
    }
}
