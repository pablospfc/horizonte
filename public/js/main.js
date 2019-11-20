(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cliente/list-clientes/list-clientes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cliente/list-clientes/list-clientes.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Clientes\n    <small>Listar</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Clientes</li>\n    <li class=\"active\">Listar Clientes</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-primary\">\n    <div class=\"box-header\">\n      <i class=\"ion ion-clipboard\"></i>\n\n      <h3 class=\"box-title\">Listagem de Clientes</h3>\n\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\n      <table id=\"tblClientes\" class=\"table table-bordered table-striped\">\n        <thead>\n        <tr>\n          <th>Razão Social</th>\n          <th>Responsável</th>\n          <th>CNPJ</th>\n          <th>Telefone</th>\n          <th>Situação</th>\n          <th>Ação</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let cliente of clientes\">\n          <td>{{cliente.razao_social}}</td>\n          <td>{{cliente.responsavel}}</td>\n          <td>{{cliente.cnpj}}</td>\n          <td>{{cliente.telefone}}</td>\n          <td>{{cliente.status}}</td>\n          <td>\n            <button type=\"button\"\n                    (click)=\"aprovar(cliente)\"\n                    class=\"btn btn-success btn-xs\">\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.box-body -->\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cliente/new-clientes/new-clientes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cliente/new-clientes/new-clientes.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>new-clientes works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-balencetes/list-balencetes.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-balencetes/list-balencetes.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-balencete works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-boletos/list-boletos.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-boletos/list-boletos.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-boletos works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-certidoes/list-certidoes.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-certidoes/list-certidoes.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-certidoes works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-contratos/list-contratos.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-contratos/list-contratos.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-contratos works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-declaracoes/list-declaracoes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-declaracoes/list-declaracoes.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-declaracoes works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-documentos/list-documentos.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-documentos/list-documentos.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-documentos works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-faturamentos/list-faturamentos.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-faturamentos/list-faturamentos.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-faturamento works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list-folhas-pagamento works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/new-documento/new-documento.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/new-documento/new-documento.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>new-documento works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Versão</b> 1.0\n    </div>\n    <strong>Copyright &copy; 2019-2020 <a href=\"https://www.horizonteassessoria.com.br\">Horizonte Contabilidade</a>.</strong> Todos os direitos reservados.\n  </footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"index2.html\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>A</b>CL</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Área do Cliente</b></span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- start message -->\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"../assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <!-- end message -->\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"../assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"../assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"../assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"../assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n            </ul>\n          </li>\n          <!-- Notifications: style can be found in dropdown.less -->\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\n            </ul>\n          </li>\n          <!-- Tasks: style can be found in dropdown.less -->\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"../assets/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"../assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <!-- Left side column. contains the logo and sidebar -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/menu/menu.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/menu/menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"../assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n          <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MENÚ PRINCIPAL</li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/']\" >\n            <i class=\"fa fa-dashboard\"></i> <span>Home</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/list-clientes']\" >\n            <i class=\"fa fa-users\"></i> <span>Clientes</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/new-documento']\" >\n            <i class=\"fa fa-upload\"></i> <span>Upload de Arquivos</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/list-folhas-pagamento']\" >\n            <i class=\"fa fa-list\"></i> <span>Folha de Pagamento</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/list-faturamentos']\" >\n            <i class=\"fa fa-money\"></i> <span>Faturamento</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/list-balancetes']\" >\n            <i class=\"fa fa-line-chart\"></i> <span>Balancetes</span>\n          </a>\n        </li>\n        <li>\n        <a href=\"#\" [routerLink]=\"['/list-boletos']\" >\n          <i class=\"fa fa-barcode\"></i> <span>Boletos</span>\n        </a>\n      </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Documentos</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"#\" [routerLink]=\"['/list-declaracoes']\"><i class=\"fa fa-circle-o\"></i> Declarações</a></li>\n            <li><a href=\"#\" [routerLink]=\"['/list-contratos']\"><i class=\"fa fa-circle-o\"></i> Contratos</a></li>\n            <li><a href=\"#\" [routerLink]=\"['/list-certidoes']\"><i class=\"fa fa-circle-o\"></i> Certidões Negativas</a></li>\n          </ul>\n        </li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/dashboard-template/dashboard-template.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/dashboard-template/dashboard-template.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-mini\">\n    <div class=\"wrapper\">\n      <app-header></app-header>\n      <app-menu></app-menu>\n      <div class=\"content-wrapper\">\n       <router-outlet></router-outlet>\n      </div>\n      <app-footer></app-footer>\n    </div>\n    </body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/login-template/login-template.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/login-template/login-template.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login-template works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/dashboard-template/dashboard-template.component */ "./src/app/templates/dashboard-template/dashboard-template.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _templates_login_template_login_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/login-template/login-template.component */ "./src/app/templates/login-template/login-template.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _cliente_list_clientes_list_clientes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente/list-clientes/list-clientes.component */ "./src/app/cliente/list-clientes/list-clientes.component.ts");
/* harmony import */ var _documento_list_boletos_list_boletos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documento/list-boletos/list-boletos.component */ "./src/app/documento/list-boletos/list-boletos.component.ts");
/* harmony import */ var _documento_list_certidoes_list_certidoes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documento/list-certidoes/list-certidoes.component */ "./src/app/documento/list-certidoes/list-certidoes.component.ts");
/* harmony import */ var _documento_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./documento/list-contratos/list-contratos.component */ "./src/app/documento/list-contratos/list-contratos.component.ts");
/* harmony import */ var _documento_list_declaracoes_list_declaracoes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documento/list-declaracoes/list-declaracoes.component */ "./src/app/documento/list-declaracoes/list-declaracoes.component.ts");
/* harmony import */ var _documento_list_faturamentos_list_faturamentos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documento/list-faturamentos/list-faturamentos.component */ "./src/app/documento/list-faturamentos/list-faturamentos.component.ts");
/* harmony import */ var _documento_new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./documento/new-documento/new-documento.component */ "./src/app/documento/new-documento/new-documento.component.ts");
/* harmony import */ var _documento_list_folhas_pagamento_list_folhas_pagamento_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./documento/list-folhas-pagamento/list-folhas-pagamento.component */ "./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.ts");
/* harmony import */ var _documento_list_balencetes_list_balencetes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documento/list-balencetes/list-balencetes.component */ "./src/app/documento/list-balencetes/list-balencetes.component.ts");
















const routes = [
    {
        path: '',
        component: _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTemplateComponent"],
        children: [
            {
                path: '',
                component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            },
            {
                path: 'list-clientes',
                component: _cliente_list_clientes_list_clientes_component__WEBPACK_IMPORTED_MODULE_7__["ListClientesComponent"]
            },
            {
                path: 'list-folhas-pagamento',
                component: _documento_list_folhas_pagamento_list_folhas_pagamento_component__WEBPACK_IMPORTED_MODULE_14__["ListFolhasPagamentoComponent"]
            },
            {
                path: 'list-balancetes',
                component: _documento_list_balencetes_list_balencetes_component__WEBPACK_IMPORTED_MODULE_15__["ListBalencetesComponent"]
            },
            {
                path: 'list-boletos',
                component: _documento_list_boletos_list_boletos_component__WEBPACK_IMPORTED_MODULE_8__["ListBoletosComponent"]
            },
            {
                path: 'list-certidoes',
                component: _documento_list_certidoes_list_certidoes_component__WEBPACK_IMPORTED_MODULE_9__["ListCertidoesComponent"]
            },
            {
                path: 'list-contratos',
                component: _documento_list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_10__["ListContratosComponent"]
            },
            {
                path: 'list-declaracoes',
                component: _documento_list_declaracoes_list_declaracoes_component__WEBPACK_IMPORTED_MODULE_11__["ListDeclaracoesComponent"]
            },
            {
                path: 'list-faturamentos',
                component: _documento_list_faturamentos_list_faturamentos_component__WEBPACK_IMPORTED_MODULE_12__["ListFaturamentosComponent"]
            },
            {
                path: 'new-documento',
                component: _documento_new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_13__["NewDocumentoComponent"]
            }
        ]
    },
    {
        path: '',
        component: _templates_login_template_login_template_component__WEBPACK_IMPORTED_MODULE_5__["LoginTemplateComponent"],
        children: [
            {
                path: 'login',
                component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'horizonte-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/menu/menu.component */ "./src/app/layout/menu/menu.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/dashboard-template/dashboard-template.component */ "./src/app/templates/dashboard-template/dashboard-template.component.ts");
/* harmony import */ var _templates_login_template_login_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/login-template/login-template.component */ "./src/app/templates/login-template/login-template.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _cliente_cliente_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cliente/cliente.module */ "./src/app/cliente/cliente.module.ts");
/* harmony import */ var _documento_documento_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./documento/documento.module */ "./src/app/documento/documento.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_8__["DashboardTemplateComponent"],
            _templates_login_template_login_template_component__WEBPACK_IMPORTED_MODULE_9__["LoginTemplateComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
            _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _cliente_cliente_module__WEBPACK_IMPORTED_MODULE_12__["ClienteModule"],
            _documento_documento_module__WEBPACK_IMPORTED_MODULE_13__["DocumentoModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/cliente/cliente.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.module.ts ***!
  \*******************************************/
/*! exports provided: ClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_clientes_list_clientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-clientes/list-clientes.component */ "./src/app/cliente/list-clientes/list-clientes.component.ts");
/* harmony import */ var _new_clientes_new_clientes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-clientes/new-clientes.component */ "./src/app/cliente/new-clientes/new-clientes.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ClienteModule = class ClienteModule {
};
ClienteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_clientes_list_clientes_component__WEBPACK_IMPORTED_MODULE_3__["ListClientesComponent"], _new_clientes_new_clientes_component__WEBPACK_IMPORTED_MODULE_4__["NewClientesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], ClienteModule);



/***/ }),

/***/ "./src/app/cliente/list-clientes/list-clientes.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cliente/list-clientes/list-clientes.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUvbGlzdC1jbGllbnRlcy9saXN0LWNsaWVudGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cliente/list-clientes/list-clientes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cliente/list-clientes/list-clientes.component.ts ***!
  \******************************************************************/
/*! exports provided: ListClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientesComponent", function() { return ListClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes.service */ "./src/app/services/clientes.service.ts");



let ListClientesComponent = class ListClientesComponent {
    constructor(clientesService) {
        this.clientesService = clientesService;
        this.clientes = [];
    }
    ngOnInit() {
        this.listar();
    }
    listar() {
        this.clientesService.list()
            .subscribe(response => {
            this.clientes = response;
        });
    }
    aprovar(cliente) {
        console.log(cliente);
        this.clientesService.approve(cliente)
            .subscribe(response => {
            console.log(response);
            this.listar();
        }, error => {
            console.log("error");
        });
    }
};
ListClientesComponent.ctorParameters = () => [
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"] }
];
ListClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-clientes',
        template: __webpack_require__(/*! raw-loader!./list-clientes.component.html */ "./node_modules/raw-loader/index.js!./src/app/cliente/list-clientes/list-clientes.component.html"),
        styles: [__webpack_require__(/*! ./list-clientes.component.scss */ "./src/app/cliente/list-clientes/list-clientes.component.scss")]
    })
], ListClientesComponent);



/***/ }),

/***/ "./src/app/cliente/new-clientes/new-clientes.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cliente/new-clientes/new-clientes.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUvbmV3LWNsaWVudGVzL25ldy1jbGllbnRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cliente/new-clientes/new-clientes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cliente/new-clientes/new-clientes.component.ts ***!
  \****************************************************************/
/*! exports provided: NewClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientesComponent", function() { return NewClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewClientesComponent = class NewClientesComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-clientes',
        template: __webpack_require__(/*! raw-loader!./new-clientes.component.html */ "./node_modules/raw-loader/index.js!./src/app/cliente/new-clientes/new-clientes.component.html"),
        styles: [__webpack_require__(/*! ./new-clientes.component.scss */ "./src/app/cliente/new-clientes/new-clientes.component.scss")]
    })
], NewClientesComponent);



/***/ }),

/***/ "./src/app/documento/documento.module.ts":
/*!***********************************************!*\
  !*** ./src/app/documento/documento.module.ts ***!
  \***********************************************/
/*! exports provided: DocumentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoModule", function() { return DocumentoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-documento/new-documento.component */ "./src/app/documento/new-documento/new-documento.component.ts");
/* harmony import */ var _list_documentos_list_documentos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-documentos/list-documentos.component */ "./src/app/documento/list-documentos/list-documentos.component.ts");
/* harmony import */ var _list_boletos_list_boletos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-boletos/list-boletos.component */ "./src/app/documento/list-boletos/list-boletos.component.ts");
/* harmony import */ var _list_declaracoes_list_declaracoes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-declaracoes/list-declaracoes.component */ "./src/app/documento/list-declaracoes/list-declaracoes.component.ts");
/* harmony import */ var _list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-contratos/list-contratos.component */ "./src/app/documento/list-contratos/list-contratos.component.ts");
/* harmony import */ var _list_certidoes_list_certidoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-certidoes/list-certidoes.component */ "./src/app/documento/list-certidoes/list-certidoes.component.ts");
/* harmony import */ var _list_balencetes_list_balencetes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-balencetes/list-balencetes.component */ "./src/app/documento/list-balencetes/list-balencetes.component.ts");
/* harmony import */ var _list_faturamentos_list_faturamentos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-faturamentos/list-faturamentos.component */ "./src/app/documento/list-faturamentos/list-faturamentos.component.ts");
/* harmony import */ var _list_folhas_pagamento_list_folhas_pagamento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-folhas-pagamento/list-folhas-pagamento.component */ "./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.ts");












let DocumentoModule = class DocumentoModule {
};
DocumentoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_3__["NewDocumentoComponent"], _list_documentos_list_documentos_component__WEBPACK_IMPORTED_MODULE_4__["ListDocumentosComponent"], _list_faturamentos_list_faturamentos_component__WEBPACK_IMPORTED_MODULE_10__["ListFaturamentosComponent"], _list_balencetes_list_balencetes_component__WEBPACK_IMPORTED_MODULE_9__["ListBalencetesComponent"], _list_boletos_list_boletos_component__WEBPACK_IMPORTED_MODULE_5__["ListBoletosComponent"], _list_declaracoes_list_declaracoes_component__WEBPACK_IMPORTED_MODULE_6__["ListDeclaracoesComponent"], _list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_7__["ListContratosComponent"], _list_certidoes_list_certidoes_component__WEBPACK_IMPORTED_MODULE_8__["ListCertidoesComponent"], _list_folhas_pagamento_list_folhas_pagamento_component__WEBPACK_IMPORTED_MODULE_11__["ListFolhasPagamentoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], DocumentoModule);



/***/ }),

/***/ "./src/app/documento/list-balencetes/list-balencetes.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/documento/list-balencetes/list-balencetes.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWJhbGVuY2V0ZXMvbGlzdC1iYWxlbmNldGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/documento/list-balencetes/list-balencetes.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/documento/list-balencetes/list-balencetes.component.ts ***!
  \************************************************************************/
/*! exports provided: ListBalencetesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBalencetesComponent", function() { return ListBalencetesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListBalencetesComponent = class ListBalencetesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListBalencetesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-balencetes',
        template: __webpack_require__(/*! raw-loader!./list-balencetes.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-balencetes/list-balencetes.component.html"),
        styles: [__webpack_require__(/*! ./list-balencetes.component.scss */ "./src/app/documento/list-balencetes/list-balencetes.component.scss")]
    })
], ListBalencetesComponent);



/***/ }),

/***/ "./src/app/documento/list-boletos/list-boletos.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/documento/list-boletos/list-boletos.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWJvbGV0b3MvbGlzdC1ib2xldG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/documento/list-boletos/list-boletos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/documento/list-boletos/list-boletos.component.ts ***!
  \******************************************************************/
/*! exports provided: ListBoletosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoletosComponent", function() { return ListBoletosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListBoletosComponent = class ListBoletosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListBoletosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-boletos',
        template: __webpack_require__(/*! raw-loader!./list-boletos.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-boletos/list-boletos.component.html"),
        styles: [__webpack_require__(/*! ./list-boletos.component.scss */ "./src/app/documento/list-boletos/list-boletos.component.scss")]
    })
], ListBoletosComponent);



/***/ }),

/***/ "./src/app/documento/list-certidoes/list-certidoes.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/documento/list-certidoes/list-certidoes.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWNlcnRpZG9lcy9saXN0LWNlcnRpZG9lcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/documento/list-certidoes/list-certidoes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/documento/list-certidoes/list-certidoes.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListCertidoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCertidoesComponent", function() { return ListCertidoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListCertidoesComponent = class ListCertidoesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListCertidoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-certidoes',
        template: __webpack_require__(/*! raw-loader!./list-certidoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-certidoes/list-certidoes.component.html"),
        styles: [__webpack_require__(/*! ./list-certidoes.component.scss */ "./src/app/documento/list-certidoes/list-certidoes.component.scss")]
    })
], ListCertidoesComponent);



/***/ }),

/***/ "./src/app/documento/list-contratos/list-contratos.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/documento/list-contratos/list-contratos.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWNvbnRyYXRvcy9saXN0LWNvbnRyYXRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/documento/list-contratos/list-contratos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/documento/list-contratos/list-contratos.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListContratosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContratosComponent", function() { return ListContratosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListContratosComponent = class ListContratosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListContratosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-contratos',
        template: __webpack_require__(/*! raw-loader!./list-contratos.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-contratos/list-contratos.component.html"),
        styles: [__webpack_require__(/*! ./list-contratos.component.scss */ "./src/app/documento/list-contratos/list-contratos.component.scss")]
    })
], ListContratosComponent);



/***/ }),

/***/ "./src/app/documento/list-declaracoes/list-declaracoes.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/documento/list-declaracoes/list-declaracoes.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWRlY2xhcmFjb2VzL2xpc3QtZGVjbGFyYWNvZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/documento/list-declaracoes/list-declaracoes.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/documento/list-declaracoes/list-declaracoes.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListDeclaracoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDeclaracoesComponent", function() { return ListDeclaracoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListDeclaracoesComponent = class ListDeclaracoesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListDeclaracoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-declaracoes',
        template: __webpack_require__(/*! raw-loader!./list-declaracoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-declaracoes/list-declaracoes.component.html"),
        styles: [__webpack_require__(/*! ./list-declaracoes.component.scss */ "./src/app/documento/list-declaracoes/list-declaracoes.component.scss")]
    })
], ListDeclaracoesComponent);



/***/ }),

/***/ "./src/app/documento/list-documentos/list-documentos.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/documento/list-documentos/list-documentos.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWRvY3VtZW50b3MvbGlzdC1kb2N1bWVudG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/documento/list-documentos/list-documentos.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/documento/list-documentos/list-documentos.component.ts ***!
  \************************************************************************/
/*! exports provided: ListDocumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDocumentosComponent", function() { return ListDocumentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListDocumentosComponent = class ListDocumentosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListDocumentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-documentos',
        template: __webpack_require__(/*! raw-loader!./list-documentos.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-documentos/list-documentos.component.html"),
        styles: [__webpack_require__(/*! ./list-documentos.component.scss */ "./src/app/documento/list-documentos/list-documentos.component.scss")]
    })
], ListDocumentosComponent);



/***/ }),

/***/ "./src/app/documento/list-faturamentos/list-faturamentos.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/documento/list-faturamentos/list-faturamentos.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWZhdHVyYW1lbnRvcy9saXN0LWZhdHVyYW1lbnRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/documento/list-faturamentos/list-faturamentos.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/documento/list-faturamentos/list-faturamentos.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListFaturamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFaturamentosComponent", function() { return ListFaturamentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListFaturamentosComponent = class ListFaturamentosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListFaturamentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-faturamentos',
        template: __webpack_require__(/*! raw-loader!./list-faturamentos.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-faturamentos/list-faturamentos.component.html"),
        styles: [__webpack_require__(/*! ./list-faturamentos.component.scss */ "./src/app/documento/list-faturamentos/list-faturamentos.component.scss")]
    })
], ListFaturamentosComponent);



/***/ }),

/***/ "./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9saXN0LWZvbGhhcy1wYWdhbWVudG8vbGlzdC1mb2xoYXMtcGFnYW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListFolhasPagamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFolhasPagamentoComponent", function() { return ListFolhasPagamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListFolhasPagamentoComponent = class ListFolhasPagamentoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListFolhasPagamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-folhas-pagamento',
        template: __webpack_require__(/*! raw-loader!./list-folhas-pagamento.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.html"),
        styles: [__webpack_require__(/*! ./list-folhas-pagamento.component.scss */ "./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.scss")]
    })
], ListFolhasPagamentoComponent);



/***/ }),

/***/ "./src/app/documento/new-documento/new-documento.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/documento/new-documento/new-documento.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50by9uZXctZG9jdW1lbnRvL25ldy1kb2N1bWVudG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/documento/new-documento/new-documento.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documento/new-documento/new-documento.component.ts ***!
  \********************************************************************/
/*! exports provided: NewDocumentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDocumentoComponent", function() { return NewDocumentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewDocumentoComponent = class NewDocumentoComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewDocumentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-documento',
        template: __webpack_require__(/*! raw-loader!./new-documento.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/new-documento/new-documento.component.html"),
        styles: [__webpack_require__(/*! ./new-documento.component.scss */ "./src/app/documento/new-documento/new-documento.component.scss")]
    })
], NewDocumentoComponent);



/***/ }),

/***/ "./src/app/home/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/layout/menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/services/clientes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/clientes.service.ts ***!
  \**********************************************/
/*! exports provided: ClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesService", function() { return ClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ClientesService = class ClientesService {
    constructor(http) {
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API}/clientes`;
    }
    list() {
        return this.http.get(`${this.api}/listar`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
    approve(cliente) {
        return this.http.put(`${this.api}/aprovar/${cliente.id}`, cliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error);
        }));
    }
};
ClientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientesService);



/***/ }),

/***/ "./src/app/templates/dashboard-template/dashboard-template.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/templates/dashboard-template/dashboard-template.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9kYXNoYm9hcmQtdGVtcGxhdGUvZGFzaGJvYXJkLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/dashboard-template/dashboard-template.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/templates/dashboard-template/dashboard-template.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTemplateComponent", function() { return DashboardTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardTemplateComponent = class DashboardTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-template',
        template: __webpack_require__(/*! raw-loader!./dashboard-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/dashboard-template/dashboard-template.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-template.component.scss */ "./src/app/templates/dashboard-template/dashboard-template.component.scss")]
    })
], DashboardTemplateComponent);



/***/ }),

/***/ "./src/app/templates/login-template/login-template.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/templates/login-template/login-template.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9sb2dpbi10ZW1wbGF0ZS9sb2dpbi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/login-template/login-template.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/templates/login-template/login-template.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginTemplateComponent", function() { return LoginTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginTemplateComponent = class LoginTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-template',
        template: __webpack_require__(/*! raw-loader!./login-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/login-template/login-template.component.html"),
        styles: [__webpack_require__(/*! ./login-template.component.scss */ "./src/app/templates/login-template/login-template.component.scss")]
    })
], LoginTemplateComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    API: 'http://localhost:8000',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\horizonte\resources\assets\horizonte-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map