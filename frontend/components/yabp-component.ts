
import {Inject} from 'angular2/core';
import {Component} from 'angular2/core';
import {Http, Headers, Response, HTTP_PROVIDERS} from 'angular2/http'


@Component({
    selector: 'yabp',
    viewProviders: [HTTP_PROVIDERS],
    template: 'result: {{result.isConfigured}}'
})

export class Yabp{
    result: Object;
    constructor(@Inject(Http) http: Http) {
        this.result = false;
        http.get('',{url : 'http://localhost:1988/REST/config/isConfigured'}).subscribe(res => this.result = JSON.parse(res["_body"]));
    }
}
