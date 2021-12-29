/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config({\n    path:  true ? \".env\" : 0,\n});\nvar config = {\n    typeorm: {\n        connection: process.env.TYPEORM_CONNECTION,\n    },\n    postgres: {\n        host: process.env.POSTGRES_HOST,\n        port: parseInt(process.env.POSTGRES_PORT, 10),\n        username: process.env.POSTGRES_USERNAME,\n        password: process.env.POSTGRES_PASSWORD,\n        database: process.env.POSTGRES_DB,\n    },\n    port: parseInt(process.env.PORT, 10),\n};\nexports[\"default\"] = config;\n\n\n//# sourceURL=webpack://wilmion-api/./src/config/index.ts?");

/***/ }),

/***/ "./src/db/connection.ts":
/*!******************************!*\
  !*** ./src/db/connection.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.db = exports.ConnectionLib = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/config/index.ts\"));\nvar tag_entity_1 = __webpack_require__(/*! ../entities/tag.entity */ \"./src/entities/tag.entity.ts\");\nvar ConnectionLib = /** @class */ (function () {\n    function ConnectionLib() {\n        var options = {\n            type: config_1.default.typeorm.connection,\n            host: config_1.default.postgres.host,\n            port: config_1.default.postgres.port,\n            username: config_1.default.postgres.username,\n            password: config_1.default.postgres.password,\n            database: config_1.default.postgres.database,\n            entities: [tag_entity_1.Tag],\n            logging: true,\n        };\n        this.connect(options);\n    }\n    ConnectionLib.prototype.connect = function (options) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _a = this;\n                        return [4 /*yield*/, (0, typeorm_1.createConnection)(options)];\n                    case 1:\n                        _a._db = _b.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Object.defineProperty(ConnectionLib.prototype, \"db\", {\n        get: function () {\n            return this._db;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return ConnectionLib;\n}());\nexports.ConnectionLib = ConnectionLib;\nexports.db = new ConnectionLib();\n\n\n//# sourceURL=webpack://wilmion-api/./src/db/connection.ts?");

/***/ }),

/***/ "./src/entities/tag.entity.ts":
/*!************************************!*\
  !*** ./src/entities/tag.entity.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Tag = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar Tag = /** @class */ (function () {\n    function Tag() {\n    }\n    __decorate([\n        (0, typeorm_1.PrimaryGeneratedColumn)(),\n        __metadata(\"design:type\", String)\n    ], Tag.prototype, \"id\", void 0);\n    __decorate([\n        (0, typeorm_1.Column)({\n            type: \"varchar\",\n            nullable: false,\n        }),\n        __metadata(\"design:type\", String)\n    ], Tag.prototype, \"color\", void 0);\n    __decorate([\n        (0, typeorm_1.Column)({\n            type: \"varchar\",\n            nullable: false,\n        }),\n        __metadata(\"design:type\", String)\n    ], Tag.prototype, \"text\", void 0);\n    Tag = __decorate([\n        (0, typeorm_1.Entity)({ name: \"tags\" })\n    ], Tag);\n    return Tag;\n}());\nexports.Tag = Tag;\n\n\n//# sourceURL=webpack://wilmion-api/./src/entities/tag.entity.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar connection_1 = __webpack_require__(/*! ./db/connection */ \"./src/db/connection.ts\");\nvar tag_entity_1 = __webpack_require__(/*! ./entities/tag.entity */ \"./src/entities/tag.entity.ts\");\nvar app = (0, express_1.default)();\napp.use(express_1.default.json());\napp.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var database, tagsRepo, tags;\n    return __generator(this, function (_a) {\n        database = connection_1.db.db;\n        tagsRepo = database.getRepository(tag_entity_1.Tag);\n        tags = tagsRepo.find();\n        res.status(200).json({\n            message: \"¡Hola! Bienvenido a la API de https://wilmion.com\",\n            documentationOfApi: \"https://link.com\",\n            tags: tags,\n        });\n        return [2 /*return*/];\n    });\n}); });\napp.listen(3000, function () {\n    console.log(\"App runing on http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack://wilmion-api/./src/index.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;