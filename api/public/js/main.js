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

/***/ "./node_modules/raw-loader/index.js!./src/app/alert/alert-message.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alert/alert-message.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"message\" [dismissOnTimeout]=\"alert.timeout\" [ngClass]=\"message.cssClass\">{{message.text}}</div>-->\n\n<!--<alert *ngIf=\"message\" [type]=\"message.type\" [dismissible]=\"message.dismissible\" >{{ message.text }}</alert>-->\n<div *ngIf=\"alerts\">\n   <div *ngFor=\"let alert of alerts\">\n  <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.text }}</alert>\n   </div>\n</div>\n"

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

module.exports = "<div class=\"login-box\" style=\"height:600px;\">\n  <div class=\"login-logo\">\n    <b>Acesso ao Sistema</b>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\">Forneça seu CNPJ e senha que você cadastrou no momento da solicitação de cadastro.</p>\n    <app-alert-message></app-alert-message>\n    <form #loginForm=\"ngForm\" name=\"loginForm\" role=\"form\" (submit)=\"onSubmit(loginForm)\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\"\n               class=\"form-control\"\n               [(ngModel)]=\"usuario.login\"\n               name=\"login\"\n               [required]=\"true\"\n               placeholder=\"CNPJ\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\"\n               class=\"form-control\"\n               [(ngModel)]=\"usuario.password\"\n               name=\"password\"\n               [required]=\"true\"\n               placeholder=\"Senha\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" [disabled]=\"!loginForm.valid\">Entrar</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n    <!-- /.social-auth-links -->\n\n    <a href=\"#\">Esqueceu sua senha?</a><br>\n    <a href=\"#\" [routerLink]=\"['/cadastro']\" class=\"text-center\">Solicite seu cadastro caso ainda não solicitou.</a>\n\n  </div>\n  <!-- /.login-box-body -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/perfil/perfil.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/perfil/perfil.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<section class=\"content-header\">\n  <h1>\n    Perfil\n    <small>Atualizar</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Perfil</li>\n    <li class=\"active\">Atualizar</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-primary\">\n    <div class=\"box-header\">\n      <i class=\"ion ion-clipboard\"></i>\n\n      <h3 class=\"box-title\">Atualização</h3>\n      <app-alert-message></app-alert-message>\n    </div>\n\n    <div class=\"box-body\">\n\n      <app-alert-message></app-alert-message>\n      <form #documentoForm=\"ngForm\" name=\"documentoForm\" role=\"form\" (ngSubmit)=\"onSubmit(documentoForm)\">\n        <input type=\"hidden\" name=\"id\" value=\"id\" [(ngModel)]=\"documento.id\"/>\n        <div class=\"modal-body\">\n\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <div class=\"form-group\">\n                <label for=\"name\">Nome</label>\n                <input type=\"text\"\n                       class=\"form-control\"\n                       id=\"name\"\n                       name=\"name\"\n                       [(ngModel)]=\"user.name\"\n                       [required]=\"false\"\n                       placeholder=\"Nome\"/>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"id_tipo_documento\">Tipo de Documento</label>\n                <select class=\"form-control\"\n                        id=\"id_tipo_documento\"\n                        [(ngModel)]=\"documento.id_tipo_documento\"\n                        [required]=\"true\"\n                        name=\"id_tipo_documento\">\n                  <option *ngFor=\"let tipo of tiposDocumentos\" [value]=\"tipo.id\">{{tipo.nome}}</option>\n                </select>\n              </div>\n\n              <div class=\"form-group\"\n                   *ngIf=\"documento.id_tipo_documento == 2 || documento.id_tipo_documento == 3 || documento.id_tipo_documento == 4\">\n                <label for=\"id_mes\">Mês</label>\n                <select class=\"form-control\"\n                        id=\"id_mes\"\n                        [(ngModel)]=\"documento.id_mes\"\n                        [required]=\"documento.id_tipo_documento == 2 || documento.id_tipo_documento == 3 || documento.id_tipo_documento == 4\"\n                        name=\"id_mes\">\n                  <option *ngFor=\"let mes of meses\" [value]=\"mes.id\">{{mes.nome}}</option>\n                </select>\n              </div>\n\n              <div class=\"form-group\" *ngIf=\"documento.id_tipo_documento && documento.id_tipo_documento != 1\">\n                <label for=\"ano\">Ano</label>\n                <input type=\"text\"\n                       class=\"form-control\"\n                       id=\"ano\"\n                       name=\"ano\"\n                       [(ngModel)]=\"documento.ano\"\n                       [required]=\"documento.id_tipo_documento != 1\"\n                       placeholder=\"Ano\"/>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label>\n                <input type=\"text\"\n                       class=\"form-control\"\n                       id=\"descricao\"\n                       name=\"descricao\"\n                       [(ngModel)]=\"documento.descricao\"\n                       [required]=\"false\"\n                       placeholder=\"Descrição\"/>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"arquivo\">Arquivo</label>\n                <input type=\"file\" id=\"arquivo\"\n                       (change)=\"inputFileChange($event)\"\n                       [required]=\"!documento.id\"\n                       name=\"arquivo\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!documentoForm.valid\">Enviar</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</section>\n\n\n-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cliente/list-clientes/list-clientes.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cliente/list-clientes/list-clientes.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Clientes\n    <small>Listar</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Clientes</li>\n    <li class=\"active\">Listar Clientes</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-primary\">\n    <div class=\"box-header\">\n      <i class=\"ion ion-clipboard\"></i>\n\n      <h3 class=\"box-title\">Listagem de Clientes</h3>\n\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"tblClientes\"\n             class=\"table table-bordered table-striped\">\n        <thead>\n        <tr>\n          <th>Razão Social</th>\n          <th>Responsável</th>\n          <th>CNPJ</th>\n          <th>Telefone</th>\n          <th>Situação</th>\n          <th>Ação</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let cliente of clientes\">\n          <td>{{cliente.razao_social}}</td>\n          <td>{{cliente.responsavel}}</td>\n          <td>{{cliente.cnpj}}</td>\n          <td>{{cliente.telefone}}</td>\n          <td>\n            <span class=\"label\"\n                  [ngClass]=\"{'label-warning': cliente.id_status_cliente == 3, 'label-success': cliente.id_status_cliente == 1, 'label-danger': cliente.id_status_cliente == 2}\">\n              {{cliente.status}}\n            </span>\n          </td>\n          <td>\n            <button type=\"button\"\n                    (click)=\"avaliar(cliente)\"\n                    title=\"{{cliente.id_status_cliente == 1 ? 'Rejeitar' : 'Aprovar'}}\"\n                    class=\"btn btn-sm\"\n                    [ngClass]=\"{'btn-success': cliente.id_status_cliente != 1, 'btn-danger': cliente.id_status_cliente == 1}\"\n            >\n              <i class=\"fa\"\n                 [ngClass]=\"{'fa-check': cliente.id_status_cliente != 1, 'fa-close': cliente.id_status_cliente == 1}\"\n                 aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.box-body -->\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cliente/new-clientes/new-clientes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cliente/new-clientes/new-clientes.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"register-box\" style=\"height:600px;\">\n  <div class=\"register-logo\">\n    <b>Solicitação de Cadastro</b>\n  </div>\n\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Forneça seus dados para solicitação de cadastro.</p>\n    <app-alert-message></app-alert-message>\n    <form #formCadastro=\"ngForm\" name=\"formCadastro\" (ngSubmit)=\"onSubmit(formCadastro)\" role=\"form\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\"\n               class=\"form-control\"\n               [(ngModel)]=\"cliente.razao_social\"\n               name=\"razao_social\"\n               #razao_social=\"ngModel\"\n               [required]=\"true\"\n               placeholder=\"Razão Social\"/>\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\"\n               class=\"form-control\"\n               [(ngModel)]=\"cliente.responsavel\"\n               name=\"responsavel\"\n               #responsavel=\"ngModel\"\n               [required]=\"true\"\n               placeholder=\"Responsável\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\"\n               class=\"form-control\"\n               [(ngModel)]=\"cliente.cnpj\"\n               name=\"cnpj\"\n               [cnpj]=\"cliente.cnpj\"\n               #cnpjInput=\"ngModel\"\n               [required]=\"true\"\n               placeholder=\"CNPJ\"/>\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        <div class=\"is-invalid\" *ngIf=\"cnpjInput?.errors?.cnpj\">CNPJ inválido</div>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\"\n               class=\"form-control\"\n               [(ngModel)]=\"cliente.telefone\"\n               name=\"telefone\"\n               #telefone=\"ngModel\"\n               [required]=\"true\"\n               placeholder=\"Telefone\"/>\n        <span class=\"glyphicon glyphicon-phone form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\"\n               class=\"form-control\"\n               [(ngModel)]=\"cliente.password\"\n               name=\"password\"\n               #password=\"ngModel\"\n               [required]=\"true\"\n               placeholder=\"Senha\"/>\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\"\n               class=\"form-control\"\n               [(ngModel)]=\"cliente.confirma_senha\"\n               name=\"confirma_senha\"\n               #confirma_senha=\"ngModel\"\n               [required]=\"true\"\n               placeholder=\"Confirma Senha\"/>\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        <div *ngIf=\"formCadastro.submitted && confirma_senha.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"confirma_senha.errors.mustMatch\">The passwords must be match</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n\n          </div>\n        </div>\n\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" [disabled]=\"!formCadastro.valid\" class=\"btn btn-primary btn-block btn-flat\">Cadastrar</button>\n        </div>\n\n      </div>\n    </form>\n     <br/>\n    <a href=\"#\" [routerLink]=\"['/login']\" class=\"text-center\">Já é cadastrado? Então clique aqui para fazer o login.</a>\n  </div>\n\n</div>\n\n<!--\n<div class=\"container\">\n  <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n    <div class=\"panel panel-info\" >\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">Sign In</div>\n        <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#\">Forgot password?</a></div>\n      </div>\n\n      <div style=\"padding-top:30px\" class=\"panel-body\" >\n\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n\n        <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username or email\">\n          </div>\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\n          </div>\n\n\n\n          <div class=\"input-group\">\n            <div class=\"checkbox\">\n              <label>\n                <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n              </label>\n            </div>\n          </div>\n\n\n          <div style=\"margin-top:10px\" class=\"form-group\">\n\n\n            <div class=\"col-sm-12 controls\">\n              <a id=\"btn-login\" href=\"#\" class=\"btn btn-success\">Login  </a>\n              <a id=\"btn-fblogin\" href=\"#\" class=\"btn btn-primary\">Login with Facebook</a>\n\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n            <div class=\"col-md-12 control\">\n              <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\n                Don't have an account!\n                <a href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">\n                  Sign Up Here\n                </a>\n              </div>\n            </div>\n          </div>\n        </form>\n\n\n\n      </div>\n    </div>\n  </div>\n-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-balencetes/list-balencetes.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-balencetes/list-balencetes.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Balanços\n    <small>Listar</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Documentos</li>\n    <li class=\"active\">Listar Balanços</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-primary\">\n    <div class=\"box-header\">\n      <i class=\"ion ion-clipboard\"></i>\n\n      <h3 class=\"box-title\">Balanços</h3>\n      <app-alert-message></app-alert-message>\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\n      <table id=\"tblBalanco\" class=\"table table-bordered table-striped\">\n        <thead>\n        <tr>\n          <th>Documento</th>\n          <th>Mês</th>\n          <th>Ano</th>\n          <th>Descrição</th>\n          <th>Arquivo</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let documento of documentos\">\n          <td>{{documento.tipo_documento}}</td>\n          <td>{{documento.mes}}</td>\n          <td>{{documento.ano}}</td>\n          <td>{{documento.descricao}}</td>\n          <td>\n            <button type=\"button\"\n                    (click)=\"downloadFile(documento.md5_arquivo)\"\n                    class=\"btn btn-info btn-sm\">\n              <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\n          <td colspan=\"8\" class=\"text-center\">\n            <em>\n              Nenhum resultado foi encontrado\n            </em>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.box-body -->\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-boletos/list-boletos.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-boletos/list-boletos.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Boletos\n    <small>Listar</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Documentos</li>\n    <li class=\"active\">Listar Boletos</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-primary\">\n    <div class=\"box-header\">\n      <i class=\"ion ion-clipboard\"></i>\n\n      <h3 class=\"box-title\">Boletos</h3>\n      <app-alert-message></app-alert-message>\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\n      <table id=\"tblBalanco\" class=\"table table-bordered table-striped\">\n        <thead>\n        <tr>\n          <th>Documento</th>\n          <th>Mês</th>\n          <th>Ano</th>\n          <th>Descrição</th>\n          <th>Arquivo</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let documento of documentos\">\n          <td>{{documento.tipo_documento}}</td>\n          <td>{{documento.mes}}</td>\n          <td>{{documento.ano}}</td>\n          <td>{{documento.descricao}}</td>\n          <td>\n            <button type=\"button\"\n                    (click)=\"downloadFile(documento.md5_arquivo)\"\n                    class=\"btn btn-info btn-sm\">\n              <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\n          <td colspan=\"8\" class=\"text-center\">\n            <em>\n              Nenhum resultado foi encontrado\n            </em>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.box-body -->\n\n  </div>\n</section>\n\n\n"

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

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Parte Contratual\r\n    <small>Listar</small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li class=\"active\">Documentos</li>\r\n    <li class=\"active\">Listar Documentos</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"box box-primary\">\r\n    <div class=\"box-header\">\r\n      <i class=\"ion ion-clipboard\"></i>\r\n\r\n      <h3 class=\"box-title\">Parte Contratual</h3>\r\n      <app-alert-message></app-alert-message>\r\n    </div>\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\r\n      <table id=\"tblParteContratual\" class=\"table table-bordered table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th>Documento</th>\r\n          <th>Descrição</th>\r\n          <th>Arquivo</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let documento of documentos\">\r\n          <td>{{documento.tipo_documento}}</td>\r\n          <td>{{documento.descricao}}</td>\r\n          <td>\r\n            <button type=\"button\"\r\n                    (click)=\"downloadFile(documento.md5_arquivo)\"\r\n                    class=\"btn btn-info btn-sm\">\r\n              <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\r\n          <td colspan=\"8\" class=\"text-center\">\r\n            <em>\r\n              Nenhum resultado foi encontrado\r\n            </em>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.box-body -->\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-declaracoes/list-declaracoes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-declaracoes/list-declaracoes.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Balanços\n    <small>Listar</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Documentos</li>\n    <li class=\"active\">Listar Balanços</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-primary\">\n    <div class=\"box-header\">\n      <i class=\"ion ion-clipboard\"></i>\n\n      <h3 class=\"box-title\">Balanços</h3>\n      <app-alert-message></app-alert-message>\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\n      <table id=\"tblBalanco\" class=\"table table-bordered table-striped\">\n        <thead>\n        <tr>\n          <th>Documento</th>\n          <th>Ano</th>\n          <th>Descrição</th>\n          <th>Arquivo</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let documento of documentos\">\n          <td>{{documento.tipo_documento}}</td>\n          <td>{{documento.ano}}</td>\n          <td>{{documento.descricao}}</td>\n          <td>\n            <button type=\"button\"\n                    (click)=\"downloadFile(documento.md5_arquivo)\"\n                    class=\"btn btn-info btn-sm\">\n              <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\n          <td colspan=\"8\" class=\"text-center\">\n            <em>\n              Nenhum resultado foi encontrado\n            </em>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.box-body -->\n\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-documentos/list-documentos.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-documentos/list-documentos.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Documentos\r\n    <small>Listar</small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li class=\"active\">Documentos</li>\r\n    <li class=\"active\">Listar Documentos</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"box box-primary\">\r\n    <div class=\"box-header\">\r\n      <i class=\"ion ion-clipboard\"></i>\r\n\r\n      <h3 class=\"box-title\">Lista de Documentos</h3>\r\n      <app-alert-message></app-alert-message>\r\n      <div class=\"box-tools pull-right\">\r\n        <!-- BOTÕES DE ADICIONAR-->\r\n        <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"openModalUpload()\"><i class=\"fa fa-upload\"></i> Upload</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\r\n      <table id=\"tblDocumentos\" class=\"table table-bordered table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th>Cliente</th>\r\n          <th>Tipo de Documento</th>\r\n          <th>Mês</th>\r\n          <th>Ano</th>\r\n          <th>Arquivo</th>\r\n          <th>Editar</th>\r\n          <th>Excluir</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let documento of documentos\">\r\n          <td>{{documento.cliente}}</td>\r\n          <td>{{documento.tipo_documento}}</td>\r\n          <td>{{documento.mes ? documento.mes : 'Não se aplica'}}</td>\r\n          <td>{{documento.ano ? documento.ano : 'Não se aplica'}}</td>\r\n          <td>\r\n            <button type=\"button\"\r\n                      (click)=\"downloadFile(documento.md5_arquivo)\"\r\n                      class=\"btn btn-info btn-sm\">\r\n            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n          </button>\r\n          </td>\r\n          <td>\r\n            <button type=\"button\"\r\n                    (click)=\"openModalUpload(documento.id)\"\r\n                    class=\"btn btn-success btn-sm\">\r\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button type=\"button\"\r\n                    (click)=\"openModalConfirm(template, documento.id)\"\r\n                    class=\"btn btn-danger btn-sm\">\r\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\r\n          <td colspan=\"8\" class=\"text-center\">\r\n            <em>\r\n              Nenhum resultado foi encontrado\r\n            </em>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.box-body -->\r\n\r\n  </div>\r\n</section>\r\n\r\n<!--\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Confirma a exclusão deste documento?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Sim</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >Não</button>\r\n  </div>\r\n</ng-template>-->\r\n<ng-template #template>\r\n<div class=\"alert-box\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Confirmação</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Confirma a exclusão deste documento?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Sim</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Não</button>\r\n  </div>\r\n</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-faturamentos/list-faturamentos.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-faturamentos/list-faturamentos.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Impostos sobre Faturamentos\r\n    <small>Listar</small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li class=\"active\">Impostos sobre Faturamentos</li>\r\n    <li class=\"active\">Listar</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"box box-primary\">\r\n    <div class=\"box-header\">\r\n      <i class=\"ion ion-clipboard\"></i>\r\n\r\n      <h3 class=\"box-title\">Impostos sobre Faturamentos</h3>\r\n      <app-alert-message></app-alert-message>\r\n    </div>\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\r\n      <table id=\"tblFaturamento\" class=\"table table-bordered table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th>Documento</th>\r\n          <th>Mês</th>\r\n          <th>Ano</th>\r\n          <th>Descrição</th>\r\n          <th>Arquivo</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let documento of documentos\">\r\n          <td>{{documento.tipo_documento}}</td>\r\n          <td>{{documento.mes}}</td>\r\n          <th>{{documento.ano}}</th>\r\n          <td>{{documento.descricao}}</td>\r\n          <td>\r\n            <button type=\"button\"\r\n                    (click)=\"downloadFile(documento.md5_arquivo)\"\r\n                    class=\"btn btn-info btn-sm\">\r\n              <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\r\n          <td colspan=\"8\" class=\"text-center\">\r\n            <em>\r\n              Nenhum resultado foi encontrado\r\n            </em>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.box-body -->\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/list-folhas-pagamento/list-folhas-pagamento.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    Folhas de Pagamento\r\n    <small>Listar</small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li class=\"active\">Folhas de Pagamento</li>\r\n    <li class=\"active\">Listar</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"box box-primary\">\r\n    <div class=\"box-header\">\r\n      <i class=\"ion ion-clipboard\"></i>\r\n\r\n      <h3 class=\"box-title\">Folhas de Pagamento</h3>\r\n      <app-alert-message></app-alert-message>\r\n    </div>\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n      <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\r\n      <table id=\"tblFolhaPagamento\" class=\"table table-bordered table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th>Documento</th>\r\n          <th>Mês</th>\r\n          <th>Ano</th>\r\n          <th>Descrição</th>\r\n          <th>Arquivo</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let documento of documentos\">\r\n          <td>{{documento.tipo_documento}}</td>\r\n          <td>{{documento.mes}}</td>\r\n          <th>{{documento.ano}}</th>\r\n          <td>{{documento.descricao}}</td>\r\n          <td>\r\n            <button type=\"button\"\r\n                    (click)=\"downloadFile(documento.md5_arquivo)\"\r\n                    class=\"btn btn-info btn-sm\">\r\n              <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr class=\"animate-repeat\" *ngIf=\"documentos.length == 0\">\r\n          <td colspan=\"8\" class=\"text-center\">\r\n            <em>\r\n              Nenhum resultado foi encontrado\r\n            </em>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- /.box-body -->\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/documento/new-documento/new-documento.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/documento/new-documento/new-documento.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Upload de Arquivos</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <app-alert-message></app-alert-message>\r\n  <form #documentoForm=\"ngForm\" name=\"documentoForm\" role=\"form\" (ngSubmit)=\"onSubmit(documentoForm)\">\r\n    <input type=\"hidden\" name=\"id\" value=\"id\" [(ngModel)]=\"documento.id\"/>\r\n    <div class=\"modal-body\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n          <div class=\"form-group\">\r\n            <label for=\"id_cliente\">Cliente</label>\r\n            <select class=\"form-control\"\r\n                    id=\"id_cliente\"\r\n                    [(ngModel)]=\"documento.id_cliente\"\r\n                    [required]=\"true\"\r\n                    name=\"id_cliente\">\r\n              <option *ngFor=\"let cliente of clientes\" [value]=\"cliente.id\">{{cliente.responsavel}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"id_tipo_documento\">Tipo de Documento</label>\r\n            <select class=\"form-control\"\r\n                    id=\"id_tipo_documento\"\r\n                    [(ngModel)]=\"documento.id_tipo_documento\"\r\n                    [required]=\"true\"\r\n                    name=\"id_tipo_documento\">\r\n              <option *ngFor=\"let tipo of tiposDocumentos\" [value]=\"tipo.id\">{{tipo.nome}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\"\r\n               *ngIf=\"documento.id_tipo_documento == 2 || documento.id_tipo_documento == 3 || documento.id_tipo_documento == 4\">\r\n            <label for=\"id_mes\">Mês</label>\r\n            <select class=\"form-control\"\r\n                    id=\"id_mes\"\r\n                    [(ngModel)]=\"documento.id_mes\"\r\n                    [required]=\"documento.id_tipo_documento == 2 || documento.id_tipo_documento == 3 || documento.id_tipo_documento == 4\"\r\n                    name=\"id_mes\">\r\n              <option *ngFor=\"let mes of meses\" [value]=\"mes.id\">{{mes.nome}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"documento.id_tipo_documento && documento.id_tipo_documento != 1\">\r\n            <label for=\"ano\">Ano</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"ano\"\r\n                   name=\"ano\"\r\n                   [(ngModel)]=\"documento.ano\"\r\n                   [required]=\"documento.id_tipo_documento != 1\"\r\n                   placeholder=\"Ano\"/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"descricao\">Descrição</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"descricao\"\r\n                   name=\"descricao\"\r\n                   [(ngModel)]=\"documento.descricao\"\r\n                   [required]=\"false\"\r\n                   placeholder=\"Descrição\"/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"arquivo\">Arquivo</label>\r\n            <input type=\"file\" id=\"arquivo\"\r\n                   (change)=\"inputFileChange($event)\"\r\n                   [required]=\"!documento.id\"\r\n                   name=\"arquivo\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!documentoForm.valid\">Enviar</button>\r\n    </div>\r\n  </form>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Dashboard\n    <small>Painel de Controle</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Dashboard</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 2\">\n      <!-- small box -->\n      <div class=\"small-box bg-aqua\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Clientes</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-person\"></i>\n        </div>\n        <a href=\"#\" [routerLink]=\"['/list-clientes']\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n    <!-- ./col -->\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 2\">\n      <!-- small box -->\n      <div class=\"small-box bg-green\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Documentos</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-document\"></i>\n        </div>\n        <a href=\"#\" [routerLink]=\"['/list-documentos']\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n    <!-- ./col -->\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-yellow\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Folhas de Pagamento</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-ios-list\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detathes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n    <!-- ./col -->\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-red\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Parte Contratual</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-document\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-aqua\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Impostos sobre Faturamento</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-cash\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-green\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Boletos</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-ios-barcode\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-teal\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Certidões</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-document\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-orange\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Balanços</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-ios-analytics\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\" *ngIf=\"auth.getUser().id_perfil == 3\">\n      <!-- small box -->\n      <div class=\"small-box bg-purple\">\n        <div class=\"inner\">\n          <h3>150</h3>\n          <p>Declarações</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-document\"></i>\n        </div>\n        <a href=\"#\" class=\"small-box-footer\">Detalhes <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n    <!-- ./col -->\n  </div>\n</section>\n"

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

module.exports = "<header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"#\" [routerLink]=\"['/']\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>A</b>CL</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Área do Cliente</b></span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">{{auth.getUser().name}}</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  {{auth.getUser().name}}\n                  <small>Cadastrado em</small>\n                </p>\n              </li>\n\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Perfil</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" (click)=\"logout($event)\" class=\"btn btn-default btn-flat\">Sair</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <!-- Left side column. contains the logo and sidebar -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/menu/menu.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/menu/menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>{{auth.getUser().name}}</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n          <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MENÚ PRINCIPAL</li>\n        <li>\n          <a href=\"#\" [routerLink]=\"['/']\" >\n            <i class=\"fa fa-dashboard\"></i> <span>Home</span>\n          </a>\n        </li>\n        <li *ngIf=\"auth.getUser().id_perfil != 3\">\n          <a href=\"#\" [routerLink]=\"['/list-clientes']\" >\n            <i class=\"fa fa-users\"></i> <span>Clientes</span>\n          </a>\n        </li>\n        <li *ngIf=\"auth.getUser().id_perfil != 3\">\n          <a href=\"#\" [routerLink]=\"['/list-documentos']\" >\n            <i class=\"fa fa-upload\"></i> <span>Upload de Arquivos</span>\n          </a>\n        </li>\n        <li *ngIf=\"auth.getUser().id_perfil != 2\">\n          <a href=\"#\" [routerLink]=\"['/list-folhas-pagamento']\" >\n            <i class=\"fa fa-list\"></i> <span>Folha de Pagamento</span>\n          </a>\n        </li>\n        <li *ngIf=\"auth.getUser().id_perfil != 2\">\n          <a href=\"#\" [routerLink]=\"['/list-faturamentos']\" >\n            <i class=\"fa fa-money\"></i> <span>Faturamento</span>\n          </a>\n        </li>\n        <li *ngIf=\"auth.getUser().id_perfil != 2\">\n          <a href=\"#\" [routerLink]=\"['/list-balancetes']\" >\n            <i class=\"fa fa-line-chart\"></i> <span>Balancetes</span>\n          </a>\n        </li>\n        <li *ngIf=\"auth.getUser().id_perfil != 2\">\n        <a href=\"#\" [routerLink]=\"['/list-boletos']\" >\n          <i class=\"fa fa-barcode\"></i> <span>Boletos</span>\n        </a>\n       </li>\n        <li class=\"treeview\" *ngIf=\"auth.getUser().id_perfil != 2\">\n          <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Outros Documentos</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"#\" [routerLink]=\"['/list-declaracoes']\"><i class=\"fa fa-circle-o\"></i> Declarações</a></li>\n            <li><a href=\"#\" [routerLink]=\"['/list-contratos']\"><i class=\"fa fa-circle-o\"></i> Parte Contratual</a></li>\n          </ul>\n        </li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n"

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

module.exports = "<body class=\"hold-transition login-page\">\n<router-outlet></router-outlet>\n</body>\n"

/***/ }),

/***/ "./src/app/alert/alert-message.component.scss":
/*!****************************************************!*\
  !*** ./src/app/alert/alert-message.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert-message.component.ts":
/*!**************************************************!*\
  !*** ./src/app/alert/alert-message.component.ts ***!
  \**************************************************/
/*! exports provided: AlertMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessageComponent", function() { return AlertMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");



let AlertMessageComponent = class AlertMessageComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            this.alerts.push(message);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onClosed(dismissedAlert) {
        //this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }
};
AlertMessageComponent.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert-message',
        template: __webpack_require__(/*! raw-loader!./alert-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/alert/alert-message.component.html"),
        styles: [__webpack_require__(/*! ./alert-message.component.scss */ "./src/app/alert/alert-message.component.scss")]
    })
], AlertMessageComponent);



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
/* harmony import */ var _documento_list_documentos_list_documentos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./documento/list-documentos/list-documentos.component */ "./src/app/documento/list-documentos/list-documentos.component.ts");
/* harmony import */ var _cliente_new_clientes_new_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cliente/new-clientes/new-clientes.component */ "./src/app/cliente/new-clientes/new-clientes.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");



















const routes = [
    {
        path: '',
        component: _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTemplateComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
        canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
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
                path: 'list-documentos',
                component: _documento_list_documentos_list_documentos_component__WEBPACK_IMPORTED_MODULE_16__["ListDocumentosComponent"]
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
            },
            {
                path: 'cadastro',
                component: _cliente_new_clientes_new_clientes_component__WEBPACK_IMPORTED_MODULE_17__["NewClientesComponent"]
            },
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

/***/ "./src/app/app.error-handle.ts":
/*!*************************************!*\
  !*** ./src/app/app.error-handle.ts ***!
  \*************************************/
/*! exports provided: AplicationErrorHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicationErrorHandle", function() { return AplicationErrorHandle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AplicationErrorHandle = class AplicationErrorHandle extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"] {
    constructor(injector) {
        super();
        this.injector = injector;
    }
    handleError(errorResponse) {
        if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse.error;
            if (errorResponse.status === 400 &&
                (error.error === 'token_expired' || error.error === 'token_invalid' ||
                    error.error === 'A token is required' || error.error === 'token_not_provided')) {
                this.goToLogin();
            }
            if (errorResponse.status === 401 && error.error === 'token_has_been_blacklisted') {
                this.goToLogin();
            }
        }
        super.handleError(errorResponse);
    }
    goToLogin() {
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        router.navigate(['/login']);
    }
};
AplicationErrorHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }
];
AplicationErrorHandle = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], AplicationErrorHandle);



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
/* harmony import */ var _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/dashboard-template/dashboard-template.component */ "./src/app/templates/dashboard-template/dashboard-template.component.ts");
/* harmony import */ var _templates_login_template_login_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/login-template/login-template.component */ "./src/app/templates/login-template/login-template.component.ts");
/* harmony import */ var _cliente_cliente_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente/cliente.module */ "./src/app/cliente/cliente.module.ts");
/* harmony import */ var _documento_documento_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documento/documento.module */ "./src/app/documento/documento.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var _interceptors_refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/refresh-token.interceptor */ "./src/app/interceptors/refresh-token.interceptor.ts");
/* harmony import */ var _app_error_handle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.error-handle */ "./src/app/app.error-handle.ts");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-cpf-cnpj */ "./node_modules/ng2-cpf-cnpj/ng2-cpf-cnpj.umd.js");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _templates_dashboard_template_dashboard_template_component__WEBPACK_IMPORTED_MODULE_5__["DashboardTemplateComponent"],
            _templates_login_template_login_template_component__WEBPACK_IMPORTED_MODULE_6__["LoginTemplateComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _cliente_cliente_module__WEBPACK_IMPORTED_MODULE_7__["ClienteModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_19__["AuthModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_20__["HomeModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
            _documento_documento_module__WEBPACK_IMPORTED_MODULE_8__["DocumentoModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
            ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_18__["CpfCnpjModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        ],
        providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"], multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["RefreshTokenInterceptor"], multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _app_error_handle__WEBPACK_IMPORTED_MODULE_17__["AplicationErrorHandle"]
            }
        ],
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _documento_documento_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../documento/documento.module */ "./src/app/documento/documento.module.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/auth/perfil/perfil.component.ts");








let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__["PerfilComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _documento_documento_module__WEBPACK_IMPORTED_MODULE_6__["DocumentoModule"]
        ]
    })
], AuthModule);



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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/usuario.model */ "./src/app/models/usuario.model.ts");






let LoginComponent = class LoginComponent {
    constructor(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
    }
    onSubmit(form) {
        return this.authService.login(form.value)
            .subscribe((resp) => {
            this.router.navigate(['home']);
        }, (error) => {
            this.alertService.error(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/perfil/perfil.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/perfil/perfil.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/perfil/perfil.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/perfil/perfil.component.ts ***!
  \*************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PerfilComponent = class PerfilComponent {
    constructor() { }
    ngOnInit() {
    }
};
PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: __webpack_require__(/*! raw-loader!./perfil.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/perfil/perfil.component.html"),
        styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/auth/perfil/perfil.component.scss")]
    })
], PerfilComponent);



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
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _documento_documento_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../documento/documento.module */ "./src/app/documento/documento.module.ts");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cpf-cnpj */ "./node_modules/ng2-cpf-cnpj/ng2-cpf-cnpj.umd.js");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_9__);










let ClienteModule = class ClienteModule {
};
ClienteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_clientes_list_clientes_component__WEBPACK_IMPORTED_MODULE_3__["ListClientesComponent"], _new_clientes_new_clientes_component__WEBPACK_IMPORTED_MODULE_4__["NewClientesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _documento_documento_module__WEBPACK_IMPORTED_MODULE_8__["DocumentoModule"],
            ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_9__["CpfCnpjModule"],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ListClientesComponent = class ListClientesComponent {
    constructor(clientesService) {
        this.clientesService = clientesService;
        this.clientes = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.listar();
    }
    listar() {
        this.clientesService.list()
            .subscribe(response => {
            this.clientes = response;
            this.rerender();
        });
    }
    avaliar(cliente) {
        this.clientesService.toEvaluate(cliente)
            .subscribe(response => {
            console.log(response);
            this.listar();
        }, error => {
            console.log("error");
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    rerender() {
        this.dtElement.dtInstance.then((dtInstance) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
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
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clientes.service */ "./src/app/services/clientes.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _models_clientes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/clientes.model */ "./src/app/models/clientes.model.ts");





let NewClientesComponent = class NewClientesComponent {
    constructor(clientesService, alertService) {
        this.clientesService = clientesService;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.cliente = new _models_clientes_model__WEBPACK_IMPORTED_MODULE_4__["Clientes"]();
    }
    onSubmit(form) {
        this.clientesService.save(form.value)
            .subscribe(response => {
            const message = response.message;
            this.alertService.success(message);
        }, error => {
            const message = error.message;
            this.alertService.error(message);
        });
    }
};
NewClientesComponent.ctorParameters = () => [
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _alert_alert_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../alert/alert-message.component */ "./src/app/alert/alert-message.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");

















let DocumentoModule = class DocumentoModule {
};
DocumentoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_3__["NewDocumentoComponent"], _list_documentos_list_documentos_component__WEBPACK_IMPORTED_MODULE_4__["ListDocumentosComponent"], _list_faturamentos_list_faturamentos_component__WEBPACK_IMPORTED_MODULE_10__["ListFaturamentosComponent"], _list_balencetes_list_balencetes_component__WEBPACK_IMPORTED_MODULE_9__["ListBalencetesComponent"], _list_boletos_list_boletos_component__WEBPACK_IMPORTED_MODULE_5__["ListBoletosComponent"], _list_declaracoes_list_declaracoes_component__WEBPACK_IMPORTED_MODULE_6__["ListDeclaracoesComponent"], _list_contratos_list_contratos_component__WEBPACK_IMPORTED_MODULE_7__["ListContratosComponent"], _list_certidoes_list_certidoes_component__WEBPACK_IMPORTED_MODULE_8__["ListCertidoesComponent"], _list_folhas_pagamento_list_folhas_pagamento_component__WEBPACK_IMPORTED_MODULE_11__["ListFolhasPagamentoComponent"], _alert_alert_message_component__WEBPACK_IMPORTED_MODULE_15__["AlertMessageComponent"]],
        exports: [
            _alert_alert_message_component__WEBPACK_IMPORTED_MODULE_15__["AlertMessageComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["AlertModule"]
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListBalencetesComponent = class ListBalencetesComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(6, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListBalencetesComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListBoletosComponent = class ListBoletosComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(4, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListBoletosComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListCertidoesComponent = class ListCertidoesComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(5, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListCertidoesComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListContratosComponent = class ListContratosComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(1, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListContratosComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListDeclaracoesComponent = class ListDeclaracoesComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(7, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListDeclaracoesComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-documento/new-documento.component */ "./src/app/documento/new-documento/new-documento.component.ts");
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");






//import {EventEmitterService} from "../../services/event-emitter.service";
let ListDocumentosComponent = class ListDocumentosComponent {
    constructor(modalService, documentoService, alertService) {
        this.modalService = modalService;
        this.documentoService = documentoService;
        this.alertService = alertService;
        this.documentos = [];
    }
    ngOnInit() {
        this.listar();
    }
    //list the all documents
    listar() {
        this.documentoService.list()
            .subscribe(response => {
            this.documentos = response;
        }, error => {
        });
    }
    //download attached file
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
    openModalUpload(id = null) {
        //Open the modal by passing the id, if exists
        this.modalRef = this.modalService.show(_new_documento_new_documento_component__WEBPACK_IMPORTED_MODULE_3__["NewDocumentoComponent"], {
            initialState: {
                id: id
            }
        });
        //Update the table information after close the modal.
        this.modalService.onHide.subscribe((reason) => {
            this.listar();
        });
    }
    //Open the confirmation modal before to remove document.
    openModalConfirm(template, id) {
        this.id = id;
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm',
            initialState: {
                id: id
            }
        });
    }
    //remove the document
    confirm() {
        this.documentoService.remove(this.id)
            .subscribe(response => {
            const message = response.message;
            this.alertService.success(message);
        }, error => {
            const message = error.message;
            this.alertService.error(message);
        });
        this.modalRef.hide();
        this.listar();
    }
    //reject the document removal
    decline() {
        this.modalRef.hide();
    }
};
ListDocumentosComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_4__["DocumentoclienteService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListFaturamentosComponent = class ListFaturamentosComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(2, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListFaturamentosComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




let ListFolhasPagamentoComponent = class ListFolhasPagamentoComponent {
    constructor(documentoService, auth) {
        this.documentoService = documentoService;
        this.auth = auth;
        this.documentos = [];
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.documentoService.getByTipo(3, this.auth.getUser().id)
            .subscribe(response => {
            this.documentos = response;
        });
    }
    downloadFile(arquivo) {
        this.documentoService.download(arquivo)
            .subscribe((res) => {
            this.documentoService.handleFile(res, arquivo);
        });
    }
};
ListFolhasPagamentoComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_2__["DocumentoclienteService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
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
/* harmony import */ var _models_documentoscliente_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/documentoscliente.model */ "./src/app/models/documentoscliente.model.ts");
/* harmony import */ var _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/documentocliente.service */ "./src/app/services/documentocliente.service.ts");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/clientes.service */ "./src/app/services/clientes.service.ts");
/* harmony import */ var _services_tiposdocumentos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tiposdocumentos.service */ "./src/app/services/tiposdocumentos.service.ts");
/* harmony import */ var _services_meses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/meses.service */ "./src/app/services/meses.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");









// import {EventEmitterService} from "../../services/event-emitter.service";
let NewDocumentoComponent = class NewDocumentoComponent {
    constructor(documentoService, tiposDocumentosService, clienteService, mesesService, modalRef, alertService) {
        this.documentoService = documentoService;
        this.tiposDocumentosService = tiposDocumentosService;
        this.clienteService = clienteService;
        this.mesesService = mesesService;
        this.modalRef = modalRef;
        this.alertService = alertService;
        this.meses = [];
        this.clientes = [];
        this.tiposDocumentos = [];
        this.formData = new FormData();
    }
    ngOnInit() {
        this.documento = new _models_documentoscliente_model__WEBPACK_IMPORTED_MODULE_2__["DocumentosCliente"]();
        this.getClientes();
        this.getTiposDocumentos();
        this.getMeses();
        if (this.id) {
            this.buscar(this.id);
        }
    }
    // get data by id
    buscar(id) {
        this.documentoService.getById(id)
            .subscribe(response => {
            this.documento = response;
        });
    }
    // submit form data to backend
    onSubmit(form) {
        this.prepareDados(form.value);
        this.documentoService.save(this.formData)
            .subscribe(response => {
            const message = response.message;
            this.alertService.success(message);
        }, error => {
            const message = error.message;
            this.alertService.error(message);
        });
    }
    // get file in the form
    inputFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
        }
    }
    // get data to show in the select box
    getClientes() {
        this.clienteService.listApproved()
            .subscribe(response => {
            this.clientes = response;
        });
    }
    // get data to show in the select box
    getTiposDocumentos() {
        this.tiposDocumentosService.list()
            .subscribe(response => {
            this.tiposDocumentos = response;
        });
    }
    // get data to show in the select box
    getMeses() {
        this.mesesService.list()
            .subscribe(response => {
            this.meses = response;
        });
    }
    // close the modal
    close() {
        this.modalRef.hide();
    }
    // add form values inside formData object
    prepareDados(formulario) {
        formulario.id ? this.formData.append('id', formulario.id) : null;
        formulario.id_cliente ? this.formData.append('id_cliente', formulario.id_cliente) : null;
        formulario.id_tipo_documento ? this.formData.append('id_tipo_documento', formulario.id_tipo_documento) : null;
        formulario.id_mes ? this.formData.append('id_mes', formulario.id_mes ? formulario.id_mes : null) : null;
        formulario.ano ? this.formData.append('ano', formulario.ano ? formulario.ano : null) : null;
        formulario.descricao ? this.formData.append('descricao', formulario.descricao ? formulario.descricao : null) : null;
        this.formData.append('arquivo', this.file);
    }
};
NewDocumentoComponent.ctorParameters = () => [
    { type: _services_documentocliente_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoclienteService"] },
    { type: _services_tiposdocumentos_service__WEBPACK_IMPORTED_MODULE_5__["TiposdocumentosService"] },
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"] },
    { type: _services_meses_service__WEBPACK_IMPORTED_MODULE_6__["MesesService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewDocumentoComponent.prototype, "id", void 0);
NewDocumentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-documento',
        template: __webpack_require__(/*! raw-loader!./new-documento.component.html */ "./node_modules/raw-loader/index.js!./src/app/documento/new-documento/new-documento.component.html"),
        styles: [__webpack_require__(/*! ./new-documento.component.scss */ "./src/app/documento/new-documento/new-documento.component.scss")]
    })
], NewDocumentoComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.check()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
    canActivateChild(next, state) {
        if (this.auth.check()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], HomeModule);



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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let HomeComponent = class HomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/interceptors/refresh-token.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/interceptors/refresh-token.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: RefreshTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenInterceptor", function() { return RefreshTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






/** Pass untouched request through to the next request handler. */
let RefreshTokenInterceptor = class RefreshTokenInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((errorResponse) => {
            const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
            if (errorResponse.status === 401 && error.error === 'token_expired') {
                const http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
                console.log('chegou aqui, token expirado');
                return http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}/auth/refresh`, {})
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(data => {
                    localStorage.setItem('token', data.token);
                    const cloneRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${data.token}` } });
                    return next.handle(cloneRequest);
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResponse.error);
        }));
    }
};
RefreshTokenInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
RefreshTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RefreshTokenInterceptor);

/*
if (errorResponse.status === 401 && error.error === 'token_expired') {
  const http = this.injector.get(HttpClient);
  return http.post(`${environment.API}/auth/refresh`, {})
    .flatMap(data => {
      localStorage.setItem('token', data.token);
      const cloneRequest = request.clone({setHeaders: {'Authorization': `Bearer ${data.token}`}});

      return next.handle(cloneRequest);
    });

}

*/


/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



/** Pass untouched request through to the next request handler. */
let TokenInterceptor = class TokenInterceptor {
    intercept(request, next) {
        const requestUrl = request.url.split('/');
        const apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API.split('/');
        const token = localStorage.getItem('token');
        if (token && (requestUrl[2] === apiUrl[2])) {
            const newRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
            return next.handle(newRequest);
        }
        else {
            return next.handle(request);
        }
    }
};
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    logout(e) {
        e.preventDefault(0);
        this.auth.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/layout/menu/menu.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]
    })
], LayoutModule);



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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let MenuComponent = class MenuComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        //var $: any
        let $ = window["jQuery"];
        $(document).ready(() => {
            const trees = $('[data-widget="tree"]');
            trees.tree();
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/layout/menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/models/clientes.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/clientes.model.ts ***!
  \******************************************/
/*! exports provided: Clientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clientes", function() { return Clientes; });
class Clientes {
}


/***/ }),

/***/ "./src/app/models/documentoscliente.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/documentoscliente.model.ts ***!
  \***************************************************/
/*! exports provided: DocumentosCliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosCliente", function() { return DocumentosCliente; });
class DocumentosCliente {
}


/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message) {
        this.subject.next({
            type: 'success',
            text: message,
            dismissible: true,
            timeout: 5000
        });
    }
    error(message) {
        this.subject.next({
            type: 'danger',
            text: message,
            dismissible: true,
            timeout: 5000
        });
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API}/auth`;
    }
    login(credentials) {
        return this.http.post(`${this.API}/login`, credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', btoa(JSON.stringify(data.user)));
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error.error);
        }));
    }
    check() {
        return localStorage.getItem('user') ? true : false;
    }
    logout() {
        return this.http.get(`${this.API}/logout`)
            .subscribe(resp => {
            localStorage.clear();
            this.router.navigate(['/login']);
        });
    }
    getUser() {
        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    }
    setUser() {
        return this.http.get(`${this.API}/me`)
            .toPromise()
            .then(data => {
            if (data) {
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                return true;
            }
            return false;
        });
    }
    updateUser(user) {
        return this.http.put(`${this.API}/atualizar/${user.id}`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
    save(cliente) {
        return this.http.post(`${this.api}/cadastrar`, cliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }));
    }
    listApproved() {
        return this.http.get(`${this.api}/listarAprovados`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
    toEvaluate(cliente) {
        return this.http.put(`${this.api}/avaliar/${cliente.id}`, cliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
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

/***/ "./src/app/services/documentocliente.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/documentocliente.service.ts ***!
  \******************************************************/
/*! exports provided: DocumentoclienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoclienteService", function() { return DocumentoclienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let DocumentoclienteService = class DocumentoclienteService {
    constructor(http) {
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API}/documentoscliente`;
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'multipart/form-data'
            })
        };
    }
    list() {
        return this.http.get(`${this.api}/listar`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
    getById(id) {
        return this.http.get(`${this.api}/getById/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
    getByTipo(id, user) {
        return this.http.get(`${this.api}/getByTipo/${id}/${user}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
    download(arquivo) {
        return this.http.get(`${this.api}/download/${arquivo}`, {
            responseType: 'blob'
            // reportProgress
            // content-length
        });
    }
    handleFile(res, fileName) {
        const file = new Blob([res], {
            type: res.type
        });
        // IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(file);
            return;
        }
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = fileName;
        // link.click();
        link.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
        setTimeout(() => {
            window.URL.revokeObjectURL(blob);
            link.remove();
        }, 100);
    }
    save(documento) {
        if (documento.get('id')) {
            return this.update(documento);
        }
        else {
            return this.create(documento);
        }
    }
    create(documento) {
        return this.http.post(`${this.api}/cadastrar`, documento)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error);
        }));
    }
    update(documento) {
        /*
        documento.forEach((value,key) => {
          console.log(key+" "+value)
        });
        */
        return this.http.post(`${this.api}/atualizar/${documento.get('id')}`, documento)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error);
        }));
    }
    remove(id) {
        return this.http.delete(`${this.api}/excluir/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error);
        }));
    }
};
DocumentoclienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DocumentoclienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DocumentoclienteService);



/***/ }),

/***/ "./src/app/services/meses.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/meses.service.ts ***!
  \*******************************************/
/*! exports provided: MesesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesesService", function() { return MesesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MesesService = class MesesService {
    constructor(http) {
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API}/meses`;
    }
    list() {
        return this.http.get(`${this.api}/listar`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
};
MesesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MesesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MesesService);



/***/ }),

/***/ "./src/app/services/tiposdocumentos.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/tiposdocumentos.service.ts ***!
  \*****************************************************/
/*! exports provided: TiposdocumentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposdocumentosService", function() { return TiposdocumentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TiposdocumentosService = class TiposdocumentosService {
    constructor(http) {
        this.http = http;
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API}/tiposdocumentos`;
    }
    list() {
        return this.http.get(`${this.api}/listar`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return data;
        }));
    }
};
TiposdocumentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TiposdocumentosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TiposdocumentosService);



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