System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, http_1;
    var Yabp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Yabp = (function () {
                function Yabp(http) {
                    var _this = this;
                    this.result = false;
                    http.get('', { url: 'http://localhost:1988/REST/config/isConfigured' }).subscribe(function (res) { return _this.result = JSON.parse(res["_body"]); });
                }
                Yabp = __decorate([
                    core_2.Component({
                        selector: 'yabp',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        template: 'result: {{result.isConfigured}}'
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Yabp);
                return Yabp;
            }());
            exports_1("Yabp", Yabp);
        }
    }
});
