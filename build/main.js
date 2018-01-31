webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_profil__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient} from '@angular/common/http';




// import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/RX';
var HomePage = (function () {
    // Inject HttpClient into your component or service.
    function HomePage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        // this.initializeItems();
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.searchQuery = '';
        this.results = [];
        this.tableau = [];
        this.items = [];
        this.params = '';
        this.tableauValide = [];
        this.VisiteurPresent = 0;
        this.VisiteurInscrit = '';
        // get api
        this.http.get('https://api.airtable.com/v0/appRzgYd2sozz8l2P/personne/?api_key=keyAER9NsfEje3klJ').subscribe(function (data) {
            _this.results = [];
            _this.tableau = [];
            _this.results = data.records;
            _this.VisiteurPresent = 0;
            for (var i = 0; i < _this.results.length; i++) {
                _this.tableau.push(_this.results[i].fields.Nom + " " + _this.results[i].fields.Prenom);
                // compte le nombre de Visiteur Valide = True
                if (_this.results[i].fields.Valide == "True") {
                    _this.VisiteurPresent = _this.VisiteurPresent + 1;
                }
            }
            // compte le nombre d'inscrit
            _this.VisiteurInscrit = _this.results.length;
        });
        // fin get api
    }
    HomePage.prototype.initializeItems = function () {
        //  this.items = [
        //    "Jeremy Nohile",
        //    "Ambre Peix",
        //    "jonathan nohile ",
        //    "juliette nivert",
        //    "nicolas boujeat ",
        //    "joel",
        //    "christelle",
        //    "akash"
        //  ];
        this.items = this.tableau;
    };
    // debut test
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.refresh = function () {
        location.reload();
    };
    HomePage.prototype.goToOtherPage = function (item) {
        // console.log(this.results[this.tableau.indexOf(item)]);
        this.params = this.results[this.tableau.indexOf(item)];
        // this.navCtrl.push(ProfilPage,this.params);
        this.navCtrl.insert(1, __WEBPACK_IMPORTED_MODULE_2__profil_profil__["a" /* ProfilPage */], this.params);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log(refresher);
        // get api
        this.http.get('https://api.airtable.com/v0/appRzgYd2sozz8l2P/personne/?api_key=keyAER9NsfEje3klJ').subscribe(function (data) {
            _this.results = [];
            _this.tableau = [];
            _this.results = data.records;
            _this.VisiteurPresent = 0;
            for (var i = 0; i < _this.results.length; i++) {
                _this.tableau.push(_this.results[i].fields.Nom + " " + _this.results[i].fields.Prenom);
                // compte le nombre de Visiteur Valide = True
                if (_this.results[i].fields.Valide == "True") {
                    _this.VisiteurPresent = _this.VisiteurPresent + 1;
                }
            }
            // compte le nombre d'inscrit
            _this.VisiteurInscrit = _this.results.length;
            refresher.complete();
        });
        // fin get api
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jeremynoh/Desktop/projet/AppBDP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- refresh -->\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- fin refresh -->\n  <ion-fab top right edge color="secondary">\n    <button ion-fab  (tap)="refresh()" color="light"><ion-icon name="ribbon" ></ion-icon></button>\n  </ion-fab>\n  bienvenu sur L\'Appli de Bal de Promo\n  <p>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </p>\n  <ion-item *ngFor="let item of items; "  (click)="goToOtherPage(item)">\n      {{ item }}\n\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title><p>{{VisiteurPresent}}/{{VisiteurInscrit}}  Présent</p></ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n<!--   bottom right   -->\n'/*ion-inline-end:"/Users/jeremynoh/Desktop/projet/AppBDP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

// npm install @ionic-native/core --save
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient } from '@angular/common/http';
// import { HomePage } from '../home/home';


var ProfilPage = (function () {
    function ProfilPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // params: string = this.navParams.get('params');
        this.fields = this.navParams.get('fields');
        this.id = this.navParams.get('id');
        this.isValid = this.fields.Valide;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log(this.fields);
    };
    ProfilPage.prototype.funLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    ProfilPage.prototype.DownDrink = function () {
        var _this = this;
        // console.log(this.fields);
        // console.log("apres le test");
        //   // https://api.airtable.com/v0/appRzgYd2sozz8l2P/personne?api_key=keyAER9NsfEje3klJ
        var url = "https://api.airtable.com/v0/appRzgYd2sozz8l2P/personne/" + this.id + "?api_key=keyAER9NsfEje3klJ";
        this.funLoading();
        this.http.put(url, { "fields": { "id": this.fields.id, "Prenom": this.fields.Prenom, "BTS": this.fields.BTS, "Valide": this.fields.Valide, "Boisson": this.fields.Boisson - 1, "Nom": this.fields.Nom } })
            .subscribe(function (val) {
            console.log("PUT call successful value returned in body", val);
        }, function (response) {
            console.log("PUT call in error", response);
        }, function () {
            _this.fields.Boisson = _this.fields.Boisson - 1;
            var alert = _this.alertCtrl.create({
                title: 'Modification des Boissons',
                subTitle: 'Une Boison a bien été retiré!!',
                buttons: ['Fermer']
            });
            alert.present();
        });
    };
    ProfilPage.prototype.UpDrink = function () {
        var _this = this;
        var url = "https://api.airtable.com/v0/appRzgYd2sozz8l2P/personne/" + this.id + "?api_key=keyAER9NsfEje3klJ";
        // test
        this.funLoading();
        // fin test
        this.http.put(url, { "fields": { "id": this.fields.id, "Prenom": this.fields.Prenom, "BTS": this.fields.BTS, "Valide": this.fields.Valide, "Boisson": this.fields.Boisson + 1, "Nom": this.fields.Nom } })
            .subscribe(function (val) {
            // test
            // let loading = this.loadingCtrl.create({
            //   content: 'Please wait...'
            // });
            //
            // loading.present();
            //
            // setTimeout(() => {
            //   loading.dismiss();
            // }, 3000);
            // fin test
            console.log("PUT call successful value returned in body", val);
        }, function (response) {
            console.log("PUT call in error", response);
        }, function () {
            console.log("Boisson augmenté");
            _this.fields.Boisson = _this.fields.Boisson + 1;
            var alert = _this.alertCtrl.create({
                title: 'Modification des Boissons',
                subTitle: 'Une Boison a bien été retiré!!',
                buttons: ['Fermer']
            });
            alert.present();
            // fin
        });
        // fin test
    };
    ProfilPage.prototype.SavePrence = function () {
        var _this = this;
        var url = "https://api.airtable.com/v0/appRzgYd2sozz8l2P/personne/" + this.id + "?api_key=keyAER9NsfEje3klJ";
        this.funLoading();
        this.http.put(url, { "fields": { "id": this.fields.id, "Prenom": this.fields.Prenom, "BTS": this.fields.BTS, "Valide": "True", "Boisson": this.fields.Boisson, "Nom": this.fields.Nom } })
            .subscribe(function (val) {
            console.log("PUT call successful value returned in body", val);
        }, function (response) {
            console.log("PUT call in error", response);
        }, function () {
            _this.fields.Valide = "True";
            console.log(_this.fields.Valide);
            var alert = _this.alertCtrl.create({
                title: 'Visiteur Enregistrer',
                subTitle: 'Visiteur Enregistrer !!',
                buttons: ['Fermer']
            });
            alert.present();
            // fin
        });
        // fin test
    };
    ProfilPage.prototype.refresh = function () {
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"/Users/jeremynoh/Desktop/projet/AppBDP/src/pages/profil/profil.html"*/'\n<ion-header color="primary">\n\n  <ion-navbar color="primary">\n    <ion-title>profil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-fab top right edge color="secondary">\n    <button ion-fab  (tap)="refresh()" color="light"><ion-icon name="ribbon" ></ion-icon></button>\n    <!-- <ion-img width="80" height="80" src="../../assets/imgs/cocktail.png"></ion-img> -->\n    <!-- <button ion-fab  (tap)="refresh()" color="light" ><ion-icon  ></ion-icon></button>  -->\n  </ion-fab>\n\n  <ion-card>\n  <ion-item>\n\n    <h2>{{fields.Prenom}} {{fields.Nom}}</h2>\n    <p>{{fields.BTS}}</p>\n\n\n\n  <ion-card-content>\n    <p>L\'id est le : {{fields.id}} </p>\n  </ion-card-content>\n  <ion-col center text-center>\n      <ion-icon name="ice-cream"></ion-icon> Nombre de Boisson : {{fields.Boisson}}\n  </ion-col>\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small (tap)="UpDrink()">\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>Up </div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small (tap)="DownDrink()">\n        <ion-icon name="thumbs-down"></ion-icon>\n        <div> Down</div>\n      </button>\n    </ion-col>\n    <button ion-button icon-start outline (tap)="SavePrence()" *ngIf="fields.Valide ===False" >\n\n      <ion-icon name="star"></ion-icon>\n      Enresgister sa présence\n    </button>\n    <button ion-button icon-start outline color ="secondary" *ngIf="fields.Valide ===True" >\n      <ion-icon name="star"></ion-icon>\n      Enresgister\n    </button>\n\n  </ion-row>\n</ion-item>\n</ion-card>\n\n<br><br>\n<ion-card>\n<ion-item>\n\n  <h2><u>Vestiaire : </u></h2>\n</ion-item>\n\n</ion-card>\n</ion-content>\n\n<!-- *ngIf="fields.Boisson == \'False\'" -->\n'/*ion-inline-end:"/Users/jeremynoh/Desktop/projet/AppBDP/src/pages/profil/profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ProfilPage);
    return ProfilPage;
}());

// {id:100,Nom:"test",Prenom:"test",BTS:"test",BTS:"Valide",Boisson:5}
//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__["a" /* ProfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__["a" /* ProfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jeremynoh/Desktop/projet/AppBDP/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jeremynoh/Desktop/projet/AppBDP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map