/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 141:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContentSchema = exports.ContentSchema = exports.querySchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var enum_1 = __webpack_require__(5033);
var content_entity_1 = __webpack_require__(8416);
var typeSchema = (_a = joi_1.default.string()).valid.apply(_a, (0, enum_1.ToArray)(content_entity_1.TypeContent));
var contentSchema = joi_1.default.string().min(1);
var imageIdSchema = joi_1.default.string();
var postIdSchema = joi_1.default.string();
exports.querySchema = {
    limit: joi_1.default.number(),
    offset: joi_1.default.number().min(0),
    post_id: joi_1.default.string(),
};
exports.ContentSchema = {
    type: typeSchema.required(),
    content: contentSchema.required(),
    imageId: imageIdSchema.required(),
    postId: postIdSchema.required(),
};
exports.UpdateContentSchema = {
    type: typeSchema,
    content: contentSchema,
    imageId: imageIdSchema,
};


/***/ }),

/***/ 8589:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.querySchema = exports.idRouteSchema = exports.idSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
exports.idSchema = joi_1.default.string();
var limitSchema = joi_1.default.number().min(0).positive();
var offsetSchema = joi_1.default.number().min(0).positive();
exports.idRouteSchema = {
    id: exports.idSchema.required(),
};
exports.querySchema = {
    limit: limitSchema,
    offset: offsetSchema,
};


/***/ }),

/***/ 4599:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var sizeSchema = joi_1.default.string().min(4);
exports.imageSchema = {
    size: sizeSchema.required(),
};


/***/ }),

/***/ 9949:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateJobSchema = exports.JobSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var nameBusinnessSchema = joi_1.default.string().min(5).max(50);
var descriptionSchema = joi_1.default.string().min(20);
var colorSchema = joi_1.default.string();
var activeSchema = joi_1.default.boolean();
var roleSchema = joi_1.default.string();
var fromSchema = joi_1.default.string();
var toSchema = joi_1.default.string();
var functionSchema = joi_1.default.string();
var imageId = joi_1.default.string().min(1);
exports.JobSchema = {
    nameBusinness: nameBusinnessSchema.required(),
    color: colorSchema.required(),
    description: descriptionSchema.required(),
    active: activeSchema.required(),
    role: roleSchema.required(),
    from: fromSchema.required(),
    to: toSchema.required(),
    function1: functionSchema,
    function2: functionSchema,
    function3: functionSchema,
    function4: functionSchema,
    imageId: imageId.required(),
};
exports.UpdateJobSchema = {
    nameBusinness: nameBusinnessSchema,
    color: colorSchema,
    description: descriptionSchema,
    active: activeSchema,
    role: roleSchema,
    from: fromSchema,
    to: toSchema,
    function1: functionSchema,
    function2: functionSchema,
    function3: functionSchema,
    function4: functionSchema,
    imageId: imageId,
};


/***/ }),

/***/ 3593:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePostSchema = exports.postSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var titleSchema = joi_1.default.string().min(5);
var tagsIdSchema = joi_1.default.array().items(joi_1.default.string());
exports.postSchema = {
    title: titleSchema.required(),
    tagsId: tagsIdSchema.required(),
};
exports.UpdatePostSchema = {
    title: titleSchema,
    tagsId: tagsIdSchema,
};


/***/ }),

/***/ 6197:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateProjectSchema = exports.projectSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var nameSchema = joi_1.default.string().min(4);
var descriptionSchema = joi_1.default.string().min(10);
var linkFrontendSchema = joi_1.default.string().uri();
var linkBackendSchema = joi_1.default.string().uri();
var linkBlogSchema = joi_1.default.string().uri();
var linkFigmaSchema = joi_1.default.string().uri();
var linkRepositorySchema = joi_1.default.string().uri();
var imageIdSchema = joi_1.default.string();
var skillsIdsSchema = joi_1.default.array().items(joi_1.default.string());
exports.projectSchema = {
    name: nameSchema.required(),
    description: descriptionSchema.required(),
    linkFrontend: linkFrontendSchema.required(),
    linkBackend: linkBackendSchema,
    linkBlog: linkBlogSchema,
    linkFigma: linkFigmaSchema,
    linkRepository: linkRepositorySchema.required(),
    imageId: imageIdSchema.required(),
    skillsIds: skillsIdsSchema.required(),
};
exports.updateProjectSchema = {
    name: nameSchema,
    description: descriptionSchema,
    linkFrontend: linkFrontendSchema,
    linkBackend: linkBackendSchema,
    linkBlog: linkBlogSchema,
    linkFigma: linkFigmaSchema,
    linkRepository: linkRepositorySchema,
    imageId: imageIdSchema,
    skillsIds: skillsIdsSchema,
};


/***/ }),

/***/ 2603:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateSkillSchema = exports.skillSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var nameSchema = joi_1.default.string().min(4);
var backgroundColorSchema = joi_1.default.string().hex();
var iconColorSchema = joi_1.default.string().hex();
var iconSchema = joi_1.default.string();
var imageIdSchema = joi_1.default.string();
exports.skillSchema = {
    name: nameSchema.required(),
    backgroundColor: backgroundColorSchema.required(),
    iconColor: iconColorSchema.required(),
    icon: iconSchema,
    imageId: imageIdSchema,
};
exports.updateSkillSchema = {
    name: nameSchema,
    backgroundColor: backgroundColorSchema,
    iconColor: iconColorSchema,
    icon: iconSchema,
    imageId: imageIdSchema,
};


/***/ }),

/***/ 1582:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateSocialMediaSchema = exports.socialMediaSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var nameSchema = joi_1.default.string().min(4);
var iconSchema = joi_1.default.string();
var colorSchema = joi_1.default.string().hex();
var redirectUrlSchema = joi_1.default.string().uri();
exports.socialMediaSchema = {
    name: nameSchema.required(),
    icon: iconSchema.required(),
    color: colorSchema.required(),
    redirectUrl: redirectUrlSchema.required(),
};
exports.updateSocialMediaSchema = {
    name: nameSchema,
    icon: iconSchema,
    color: colorSchema,
    redirectUrl: redirectUrlSchema,
};


/***/ }),

/***/ 3376:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.querySchema = exports.statSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var stats_entity_1 = __webpack_require__(5642);
var enum_1 = __webpack_require__(5033);
var typeSchema = (_a = joi_1.default.string()).valid.apply(_a, (0, enum_1.ToArray)(stats_entity_1.TypeStat));
exports.statSchema = {
    type: typeSchema.required(),
};
exports.querySchema = {
    limit: joi_1.default.number().min(0),
    offset: joi_1.default.number().min(0),
    type: typeSchema,
};


/***/ }),

/***/ 1067:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pageParamSchema = exports.staticContentUpdateSchema = exports.staticContentSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var user_joi_1 = __webpack_require__(3447);
var introductionSchema = joi_1.default.string().min(20);
var responseQuestionSchema = joi_1.default.string().min(20);
exports.staticContentSchema = {
    introduction: introductionSchema.required(),
    responseQuestion: responseQuestionSchema.required(),
    contactEmail: user_joi_1.emailSchema,
};
exports.staticContentUpdateSchema = {
    introduction: introductionSchema,
    responseQuestion: responseQuestionSchema,
    contactEmail: user_joi_1.emailSchema,
};
exports.pageParamSchema = { page: joi_1.default.string().valid("contact") };


/***/ }),

/***/ 1015:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTagSchema = exports.tagSchema = void 0;
var joi_1 = __importDefault(__webpack_require__(8414));
var colorSchema = joi_1.default.string().hex();
var textSchema = joi_1.default.string().min(5).max(35);
exports.tagSchema = {
    color: colorSchema.required(),
    text: textSchema.required(),
};
exports.UpdateTagSchema = {
    color: colorSchema,
    text: textSchema,
};


/***/ }),

/***/ 3447:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updatePasswordSchema = exports.loginSchema = exports.UserUpdateSchema = exports.UserSchenma = exports.imageIdSchema = exports.jobSchema = exports.nameSchema = exports.usernameSchema = exports.passwordSchema = exports.emailSchema = void 0;
var Joi = __importStar(__webpack_require__(8414));
exports.emailSchema = Joi.string().email();
exports.passwordSchema = Joi.string().min(8);
exports.usernameSchema = Joi.string().min(4).max(100);
exports.nameSchema = Joi.string().min(1).max(100);
exports.jobSchema = Joi.string().min(5).max(50);
exports.imageIdSchema = Joi.number();
exports.UserSchenma = {
    username: exports.usernameSchema.required(),
    password: exports.passwordSchema.required(),
    name: exports.nameSchema.required(),
    job: exports.jobSchema.required(),
    email: exports.emailSchema.required(),
    imageId: exports.imageIdSchema.required(),
};
exports.UserUpdateSchema = {
    username: exports.usernameSchema,
    name: exports.nameSchema,
    job: exports.jobSchema,
    email: exports.emailSchema,
    imageId: exports.imageIdSchema,
};
exports.loginSchema = {
    email: exports.emailSchema.required(),
    password: exports.passwordSchema.required(),
};
exports.updatePasswordSchema = {
    oldPassword: exports.passwordSchema.required(),
    newPassword: exports.passwordSchema.required(),
};


/***/ }),

/***/ 2275:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var dotenv_1 = __importDefault(__webpack_require__(5142));
var development = "production" === "development";
dotenv_1.default.config({
    path: development ? ".develop.env" : ".env",
});
var config = {
    mode: development ? "DEV" : "PROD",
    typeorm: {
        url: process.env.DATABASE_URL,
    },
    port: process.env.PORT || 5000,
    hostAllowedList: process.env.HOSTALLOWEDLIST.split(" "),
    encryption: {
        saltRounds: parseInt(process.env.ENCRYPTION_SALT_ROUNDS, 10),
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    firebaseConfig: {
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID,
        measurementId: process.env.MEASUREMENTID,
    },
};
exports["default"] = config;


/***/ }),

/***/ 4207:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var content_joi_1 = __webpack_require__(141);
var contents_service_1 = __webpack_require__(4890);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new contents_service_1.ContentService();
route.get("/", (0, validator_middleware_1.validateHandler)(content_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, post_id, contents, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, post_id = _a.post_id;
                return [4 /*yield*/, service.getAll(limit, offset, post_id)];
            case 1:
                contents = _b.sent();
                (0, response_1.default)(res, 200, contents, "The data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, content, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                content = _a.sent();
                (0, response_1.default)(res, 200, content, "The data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(content_joi_1.ContentSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The content with post ID ".concat(body.postId, " has been successfully created \uD83E\uDD63\uD83E\uDDC2"));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), (0, validator_middleware_1.validateHandler)(content_joi_1.UpdateContentSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, service.update(body, id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The content was updated 💓");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The content has been removed from database 📅");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 1869:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var image_service_1 = __webpack_require__(5784);
var image_joi_1 = __webpack_require__(4599);
var global_joi_1 = __webpack_require__(8589);
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var response_1 = __importDefault(__webpack_require__(178));
var router = (0, express_1.Router)();
var service = new image_service_1.ImageService();
router.get("/", (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "Data traveled successfully");
                return [3 /*break*/, 3];
            case 2:
                e_1 = _b.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/:id", (0, validator_middleware_1.validateHandler)(global_joi_1.idRouteSchema, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, image, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                image = _a.sent();
                (0, response_1.default)(res, 200, image, "This is an image");
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/by-md5/:id", (0, validator_middleware_1.validateHandler)(global_joi_1.idRouteSchema, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, image, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getByMd5(id)];
            case 1:
                image = _a.sent();
                (0, response_1.default)(res, 200, image, "This is an image");
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                next(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(image_joi_1.imageSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, files, data, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                files = req.files;
                return [4 /*yield*/, service.create(body, files.image)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 201, data, "Insert Image in the database");
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                next(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(global_joi_1.idRouteSchema, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The Image with ID ".concat(id, " has removed"));
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                next(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ 7140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var ipsUser_service_1 = __webpack_require__(9597);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new ipsUser_service_1.IpsUserService();
route.get("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull ✈️🛫🛬");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/my-ip", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ip, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
                return [4 /*yield*/, service.getByIp(ip)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull ✈️🛫🛬");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ip, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
                return [4 /*yield*/, service.create({ ip: ip })];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "🚲🚴‍♀️🚴‍♂️");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 4879:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var job_joi_1 = __webpack_require__(9949);
var jobs_service_1 = __webpack_require__(3139);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new jobs_service_1.JobsService();
route.get("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, service.getAll()];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled sucessfull");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(job_joi_1.JobSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, createdJob, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                createdJob = _a.sent();
                (0, response_1.default)(res, 201, createdJob, "Job successfull created 💪🧑‍🏭");
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), (0, validator_middleware_1.validateHandler)(job_joi_1.UpdateJobSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, id, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                id = req.params.id;
                return [4 /*yield*/, service.update(id, body)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The job with ID ".concat(id, " was updated with successful"));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/activate/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.activate(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The job was successfull activate");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.deactivate(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The job was successfull deactivate");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 4930:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var post_joi_1 = __webpack_require__(3593);
var post_service_1 = __webpack_require__(7440);
var datePostWithIps_service_1 = __webpack_require__(1060);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new post_service_1.PostsService();
var datePostsWithIpsService = new datePostWithIps_service_1.DatePostsWithIpsService();
route.get("/", (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "Data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "Data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(post_joi_1.postSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, body, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.user;
                body = req.body;
                return [4 /*yield*/, service.create(body, token.id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The post has been created 🍻");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/like/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, ip, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
                return [4 /*yield*/, datePostsWithIpsService.setLike(true, id, ip)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "Just, the post was liked for you 💓😻");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/dislike/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, ip, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
                return [4 /*yield*/, datePostsWithIpsService.setLike(false, id, ip)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "Ohh , we lament that you dislike this post");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/view/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, ip, result, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
                return [4 /*yield*/, datePostsWithIpsService.incrementView(id, ip)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "Do you like this post? 👀");
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(post_joi_1.UpdatePostSchema), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, result, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, service.update(body, id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The post has been updated ⚒️");
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                next(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The post has been deleted 🚆");
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                next(error_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 6124:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var project_joi_1 = __webpack_require__(6197);
var project_service_1 = __webpack_require__(6795);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new project_service_1.ProjectService();
route.get("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, service.getAll()];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull 🛬🛫✈️");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull 🛬🛫✈️");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(project_joi_1.projectSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The project has been created now 📽️");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(project_joi_1.updateProjectSchema), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, service.update(body, id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The project has been updated 🆙");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/activate/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.activateProject(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The project reactivate! 😁😸🙌");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The project has been deleted ☹️");
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 3941:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var skill_joi_1 = __webpack_require__(2603);
var skills_service_1 = __webpack_require__(7444);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new skills_service_1.SkillService();
route.get("/", (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfully 🛩️");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfully 🛩️");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(skill_joi_1.skillSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The skill has created 🎳🎳");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), (0, validator_middleware_1.validateHandler)(skill_joi_1.updateSkillSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, service.update(body, id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The skill has updated 👍");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The skill has removed 😔 ID: " + id);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 9101:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var socialMedia_joi_1 = __webpack_require__(1582);
var socialMedia_service_1 = __webpack_require__(1307);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new socialMedia_service_1.SocialMediaService();
route.get("/", (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfully 🛬🛫✈️");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfully 🛬🛫✈️");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(socialMedia_joi_1.socialMediaSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The social media has been created 😎😎");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), (0, validator_middleware_1.validateHandler)(socialMedia_joi_1.updateSocialMediaSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, service.update(body, id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The social media has been updated 😎😎");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The social media with Id ".concat(id, " has been removed \u2639\uFE0F"));
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 7963:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var boom_1 = __importDefault(__webpack_require__(3767));
var authorization_middleware_1 = __webpack_require__(9683);
var validator_middleware_1 = __webpack_require__(7058);
var staticContent_joi_1 = __webpack_require__(1067);
var global_joi_1 = __webpack_require__(8589);
var static_contents_service_1 = __webpack_require__(1200);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new static_contents_service_1.StaticContentsService();
route.get("/", (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "Data traveled successfully");
                return [3 /*break*/, 3];
            case 2:
                e_1 = _b.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:page", (0, validator_middleware_1.validateHandler)(staticContent_joi_1.pageParamSchema, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var page, staticContent, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                page = req.params.page;
                return [4 /*yield*/, service.getOne(page)];
            case 1:
                staticContent = _a.sent();
                if (!staticContent)
                    throw boom_1.default.notFound("The ".concat(page, " page does not exist"));
                (0, response_1.default)(res, 200, staticContent, "This is a static content");
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(staticContent_joi_1.staticContentSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, data, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 201, data, "Insert static content");
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                next(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(global_joi_1.idRouteSchema, "params"), (0, validator_middleware_1.validateHandler)(staticContent_joi_1.staticContentUpdateSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, params, id, data, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body, params = req.params;
                id = params.id;
                return [4 /*yield*/, service.update(id, body)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 206, data, "The static content was updated successfully");
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                next(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(global_joi_1.idRouteSchema, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, staticContentDeleted, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                staticContentDeleted = _a.sent();
                (0, response_1.default)(res, 200, staticContentDeleted, "Static Content with ID ".concat(id, " has removed"));
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                next(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 5396:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var stat_joi_1 = __webpack_require__(3376);
var stat_service_1 = __webpack_require__(4376);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new stat_service_1.StatService();
route.get("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(stat_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, type, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, type = _a.type;
                return [4 /*yield*/, service.getAll(limit, offset, type)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfully 🛬🛫✈️");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfully 🛬🛫✈️");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", (0, validator_middleware_1.validateHandler)(stat_joi_1.statSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, origin_1, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                origin_1 = req.get("host");
                return [4 /*yield*/, service.create(body, origin_1)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The stat was created successfully 🥵");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The stat with id ".concat(id, " has been removed \u2639\uFE0F"));
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 446:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var authorization_middleware_1 = __webpack_require__(9683);
var global_joi_1 = __webpack_require__(8589);
var tag_joi_1 = __webpack_require__(1015);
var tags_service_1 = __webpack_require__(2837);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new tags_service_1.TagsService();
route.get("/", (0, validator_middleware_1.validateHandler)(global_joi_1.querySchema, "query"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                return [4 /*yield*/, service.getAll(limit, offset)];
            case 1:
                data = _b.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.get("/:id", (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.getById(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "The data traveled successfull");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)(tag_joi_1.tagSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 201, result, "The tag was created successfull 🏷️");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), (0, validator_middleware_1.validateHandler)(tag_joi_1.UpdateTagSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, service.update(body, id)];
            case 1:
                result = _a.sent();
                (0, response_1.default)(res, 200, result, "The tag was updated successfull 🏷️🔁");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), (0, authorization_middleware_1.validatePermision)(["admin"]), (0, validator_middleware_1.validateHandler)({ id: global_joi_1.idSchema.required() }, "params"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "Remove successfully");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 3630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
var passport_1 = __importDefault(__webpack_require__(3511));
var validator_middleware_1 = __webpack_require__(7058);
var user_joi_1 = __webpack_require__(3447);
var users_service_1 = __webpack_require__(5099);
var response_1 = __importDefault(__webpack_require__(178));
var route = (0, express_1.Router)();
var service = new users_service_1.UsersService();
route.get("/get-my-account", passport_1.default.authenticate("jwt", { session: false }), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.user;
                return [4 /*yield*/, service.getById(token.id)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "This is your user's profile");
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/register", (0, validator_middleware_1.validateHandler)(user_joi_1.UserSchenma), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.create(body)];
            case 1:
                user = _a.sent();
                (0, response_1.default)(res, 201, user, "Register was successfull");
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/login", (0, validator_middleware_1.validateHandler)(user_joi_1.loginSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body, data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                return [4 /*yield*/, service.login(body)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "Login successfuly");
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                next(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.patch("/", passport_1.default.authenticate("jwt", { session: false }), (0, validator_middleware_1.validateHandler)(user_joi_1.UserUpdateSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, id, body, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.user;
                id = token.id;
                body = req.body;
                return [4 /*yield*/, service.update(id, body)];
            case 1:
                data = _a.sent();
                (0, response_1.default)(res, 200, data, "User updated successfully");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/change-email", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, service.changeEmail()];
            case 1:
                payload = _a.sent();
                (0, response_1.default)(res, 200, payload, payload);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                next(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.post("/change-password", passport_1.default.authenticate("jwt", { session: false }), (0, validator_middleware_1.validateHandler)(user_joi_1.updatePasswordSchema), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, id, body, payload, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.user;
                id = token.id;
                body = req.body;
                return [4 /*yield*/, service.changePassword(body.oldPassword, body.newPassword, id)];
            case 1:
                payload = _a.sent();
                (0, response_1.default)(res, 200, payload, "Your password are updated now");
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                next(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route.delete("/", passport_1.default.authenticate("jwt", { session: false }), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, id, payload, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                token = req.user;
                id = token.id;
                return [4 /*yield*/, service.delete(id)];
            case 1:
                payload = _a.sent();
                (0, response_1.default)(res, 200, payload, "Desactivate your account.");
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                next(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = route;


/***/ }),

/***/ 681:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connection = exports.ConnectionLib = void 0;
var typeorm_1 = __webpack_require__(5250);
var index_1 = __importDefault(__webpack_require__(2275));
var entities_1 = __importDefault(__webpack_require__(2751));
var ConnectionLib = /** @class */ (function () {
    function ConnectionLib() {
        this.options = {
            type: "postgres",
            url: index_1.default.typeorm.url,
            synchronize: false,
            entities: entities_1.default,
            logging: true,
            ssl: {
                rejectUnauthorized: false,
            },
        };
        if (index_1.default.mode === "PROD")
            this.setSslConnection();
        this.connect();
    }
    ConnectionLib.prototype.setSslConnection = function () {
        this.options = __assign({}, this.options);
    };
    ConnectionLib.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, typeorm_1.createConnection)(this.options)];
                    case 1:
                        _a._db = _b.sent();
                        return [2 /*return*/, this._db];
                }
            });
        });
    };
    Object.defineProperty(ConnectionLib.prototype, "db", {
        get: function () {
            if (!this._db)
                return this.connect();
            return this._db;
        },
        enumerable: false,
        configurable: true
    });
    return ConnectionLib;
}());
exports.ConnectionLib = ConnectionLib;
exports.connection = new ConnectionLib();


/***/ }),

/***/ 2751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tag_entity_1 = __webpack_require__(9074);
var stats_entity_1 = __webpack_require__(5642);
var staticContents_entity_1 = __webpack_require__(4318);
var socialMedia_entity_1 = __webpack_require__(9196);
var image_entity_1 = __webpack_require__(6488);
var user_entity_1 = __webpack_require__(7052);
var project_entity_1 = __webpack_require__(4971);
var job_entity_1 = __webpack_require__(4352);
var skill_entity_1 = __webpack_require__(4472);
var content_entity_1 = __webpack_require__(8416);
var post_entity_1 = __webpack_require__(1091);
var ip_entity_1 = __webpack_require__(7229);
var datePostWithIps_entity_1 = __webpack_require__(7579);
var entities = [
    tag_entity_1.Tag,
    socialMedia_entity_1.SocialMedia,
    staticContents_entity_1.StaticContent,
    stats_entity_1.Stat,
    image_entity_1.Image,
    user_entity_1.User,
    project_entity_1.Project,
    job_entity_1.Job,
    post_entity_1.Post,
    content_entity_1.Content,
    skill_entity_1.Skill,
    ip_entity_1.IPUser,
    datePostWithIps_entity_1.DatePostWithIps,
];
exports["default"] = entities;


/***/ }),

/***/ 8416:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Content = exports.TypeContent = void 0;
var typeorm_1 = __webpack_require__(5250);
var post_entity_1 = __webpack_require__(1091);
var image_entity_1 = __webpack_require__(6488);
var TypeContent;
(function (TypeContent) {
    TypeContent["subtitle"] = "SUBTITLE";
    TypeContent["paragraph"] = "PARAGRAPH";
    TypeContent["listForPoint"] = "LIST-FOR-POINT";
    TypeContent["listForNumbers"] = "LIST-FOR-NUMBERS";
    TypeContent["code"] = "CODE";
    TypeContent["image"] = "IMAGE";
})(TypeContent = exports.TypeContent || (exports.TypeContent = {}));
var Content = /** @class */ (function () {
    function Content() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Content.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: TypeContent,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Content.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "int",
            name: "order_number",
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Content.prototype, "orderNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Content.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return image_entity_1.Image; }, { nullable: false }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", image_entity_1.Image)
    ], Content.prototype, "image", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return post_entity_1.Post; }, function (post) { return post.contents; }),
        __metadata("design:type", post_entity_1.Post)
    ], Content.prototype, "post", void 0);
    Content = __decorate([
        (0, typeorm_1.Entity)({ name: "contents" })
    ], Content);
    return Content;
}());
exports.Content = Content;


/***/ }),

/***/ 7579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatePostWithIps = void 0;
var typeorm_1 = __webpack_require__(5250);
var ip_entity_1 = __webpack_require__(7229);
var post_entity_1 = __webpack_require__(1091);
var DatePostWithIps = /** @class */ (function () {
    function DatePostWithIps() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], DatePostWithIps.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamptz",
            default: new Date(),
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], DatePostWithIps.prototype, "lastView", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "int",
            default: 0,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], DatePostWithIps.prototype, "quantityViews", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], DatePostWithIps.prototype, "likedPost", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return post_entity_1.Post; }, function (post) { return post.datePostWithIps; }, { nullable: false }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", post_entity_1.Post)
    ], DatePostWithIps.prototype, "post", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ip_entity_1.IPUser; }, function (ipUser) { return ipUser.datePostWithIps; }, {
            nullable: false,
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", ip_entity_1.IPUser)
    ], DatePostWithIps.prototype, "ip", void 0);
    DatePostWithIps = __decorate([
        (0, typeorm_1.Entity)({ name: "date_posts_with_ips" })
    ], DatePostWithIps);
    return DatePostWithIps;
}());
exports.DatePostWithIps = DatePostWithIps;


/***/ }),

/***/ 6488:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
var typeorm_1 = __webpack_require__(5250);
var Image = /** @class */ (function () {
    function Image() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: false, name: "image_url" }),
        __metadata("design:type", String)
    ], Image.prototype, "imageUrl", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
        __metadata("design:type", String)
    ], Image.prototype, "size", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
        __metadata("design:type", String)
    ], Image.prototype, "resolution", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], Image.prototype, "md5", void 0);
    Image = __decorate([
        (0, typeorm_1.Entity)({ name: "images" })
    ], Image);
    return Image;
}());
exports.Image = Image;


/***/ }),

/***/ 7229:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IPUser = void 0;
var typeorm_1 = __webpack_require__(5250);
var datePostWithIps_entity_1 = __webpack_require__(7579);
var IPUser = /** @class */ (function () {
    function IPUser() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], IPUser.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], IPUser.prototype, "ip", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return datePostWithIps_entity_1.DatePostWithIps; }, function (datePostWithIps) { return datePostWithIps.ip; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Array)
    ], IPUser.prototype, "datePostWithIps", void 0);
    IPUser = __decorate([
        (0, typeorm_1.Entity)({ name: "ips_user" })
    ], IPUser);
    return IPUser;
}());
exports.IPUser = IPUser;


/***/ }),

/***/ 4352:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Job = void 0;
var typeorm_1 = __webpack_require__(5250);
var image_entity_1 = __webpack_require__(6488);
var Job = /** @class */ (function () {
    function Job() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Job.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            name: "name_businness",
        }),
        __metadata("design:type", String)
    ], Job.prototype, "nameBusinness", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "color", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            nullable: false,
        }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Job.prototype, "from", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "to", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "function_1",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "function1", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "function_2",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "function2", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "function_3",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "function3", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "function_4",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Job.prototype, "function4", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return image_entity_1.Image; }, { nullable: false }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", image_entity_1.Image)
    ], Job.prototype, "image", void 0);
    Job = __decorate([
        (0, typeorm_1.Entity)({ name: "jobs" })
    ], Job);
    return Job;
}());
exports.Job = Job;


/***/ }),

/***/ 1091:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Post = void 0;
var typeorm_1 = __webpack_require__(5250);
var content_entity_1 = __webpack_require__(8416);
var user_entity_1 = __webpack_require__(7052);
var tag_entity_1 = __webpack_require__(9074);
var datePostWithIps_entity_1 = __webpack_require__(7579);
var stats_entity_1 = __webpack_require__(5642);
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Post.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            name: "created_at",
            default: new Date(),
        }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Post.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double precision",
            name: "time_read",
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Post.prototype, "timeRead", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Post.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.posts; }, { nullable: false }),
        __metadata("design:type", user_entity_1.User)
    ], Post.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return content_entity_1.Content; }, function (content) { return content.post; }, { nullable: false }),
        __metadata("design:type", Array)
    ], Post.prototype, "contents", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return datePostWithIps_entity_1.DatePostWithIps; }, function (datePostWithIps) { return datePostWithIps.post; }),
        __metadata("design:type", Array)
    ], Post.prototype, "datePostWithIps", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return stats_entity_1.Stat; }, function (stat) { return stat.post; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Array)
    ], Post.prototype, "stats", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return tag_entity_1.Tag; }, function (tag) { return tag.posts; }),
        (0, typeorm_1.JoinTable)({ name: "CONNECTION_TAGS_TO_POSTS" }),
        __metadata("design:type", Array)
    ], Post.prototype, "tags", void 0);
    Post = __decorate([
        (0, typeorm_1.Entity)({ name: "posts" })
    ], Post);
    return Post;
}());
exports.Post = Post;


/***/ }),

/***/ 4971:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Project = void 0;
var typeorm_1 = __webpack_require__(5250);
var image_entity_1 = __webpack_require__(6488);
var skill_entity_1 = __webpack_require__(4472);
var Project = /** @class */ (function () {
    function Project() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "link_frontend",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "linkFrontend", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "link_backend",
            default: null,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "linkBackend", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "link_blog",
            default: null,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "linkBlog", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "link_figma",
            default: null,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "linkFigma", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "link_repository",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Project.prototype, "linkRepository", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Project.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return image_entity_1.Image; }, { nullable: false }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", image_entity_1.Image)
    ], Project.prototype, "image", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return skill_entity_1.Skill; }),
        (0, typeorm_1.JoinTable)({ name: "CONNECTION_PROJECTS_TO_KILLS" }),
        __metadata("design:type", Array)
    ], Project.prototype, "skills", void 0);
    Project = __decorate([
        (0, typeorm_1.Entity)({ name: "projects" })
    ], Project);
    return Project;
}());
exports.Project = Project;


/***/ }),

/***/ 4472:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Skill = void 0;
var typeorm_1 = __webpack_require__(5250);
var image_entity_1 = __webpack_require__(6488);
var Skill = /** @class */ (function () {
    function Skill() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Skill.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], Skill.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            name: "background_color",
        }),
        __metadata("design:type", String)
    ], Skill.prototype, "backgroundColor", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            name: "icon_color",
        }),
        __metadata("design:type", String)
    ], Skill.prototype, "iconColor", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Skill.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            default: null,
        }),
        __metadata("design:type", String)
    ], Skill.prototype, "icon", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return image_entity_1.Image; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", image_entity_1.Image)
    ], Skill.prototype, "image", void 0);
    Skill = __decorate([
        (0, typeorm_1.Entity)({ name: "skills" })
    ], Skill);
    return Skill;
}());
exports.Skill = Skill;


/***/ }),

/***/ 9196:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocialMedia = void 0;
var typeorm_1 = __webpack_require__(5250);
var SocialMedia = /** @class */ (function () {
    function SocialMedia() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], SocialMedia.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], SocialMedia.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], SocialMedia.prototype, "icon", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], SocialMedia.prototype, "color", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], SocialMedia.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: false, name: "redirect_url" }),
        __metadata("design:type", String)
    ], SocialMedia.prototype, "redirectUrl", void 0);
    SocialMedia = __decorate([
        (0, typeorm_1.Entity)({ name: "social-media" })
    ], SocialMedia);
    return SocialMedia;
}());
exports.SocialMedia = SocialMedia;


/***/ }),

/***/ 4318:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticContent = void 0;
var typeorm_1 = __webpack_require__(5250);
var StaticContent = /** @class */ (function () {
    function StaticContent() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], StaticContent.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
        __metadata("design:type", String)
    ], StaticContent.prototype, "introduction", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: false, name: "response_question" }),
        __metadata("design:type", String)
    ], StaticContent.prototype, "responseQuestion", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", name: "contact_email" }),
        __metadata("design:type", String)
    ], StaticContent.prototype, "contactEmail", void 0);
    StaticContent = __decorate([
        (0, typeorm_1.Entity)({ name: "static-contents" })
    ], StaticContent);
    return StaticContent;
}());
exports.StaticContent = StaticContent;


/***/ }),

/***/ 5642:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stat = exports.TypeStat = void 0;
var typeorm_1 = __webpack_require__(5250);
var post_entity_1 = __webpack_require__(1091);
var TypeStat;
(function (TypeStat) {
    TypeStat["newUsers"] = "NU";
    TypeStat["visitsToTheBlogPost"] = "VTTBP";
    TypeStat["visitsToThePortafolioPage"] = "VTTPP";
    TypeStat["visitsToTheContactPage"] = "VTTCP";
    TypeStat["numberOfClickWhenSubmittingTheForm"] = "NOCWSTF";
})(TypeStat = exports.TypeStat || (exports.TypeStat = {}));
var Stat = /** @class */ (function () {
    function Stat() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Stat.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: TypeStat, nullable: false }),
        __metadata("design:type", String)
    ], Stat.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "timestamp",
            name: "created_at",
            nullable: false,
            default: new Date(),
        }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Stat.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return post_entity_1.Post; }, function (post) { return post.stats; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", post_entity_1.Post)
    ], Stat.prototype, "post", void 0);
    Stat = __decorate([
        (0, typeorm_1.Entity)({ name: "stats" })
    ], Stat);
    return Stat;
}());
exports.Stat = Stat;


/***/ }),

/***/ 9074:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tag = void 0;
var typeorm_1 = __webpack_require__(5250);
var post_entity_1 = __webpack_require__(1091);
var Tag = /** @class */ (function () {
    function Tag() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Tag.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Tag.prototype, "color", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], Tag.prototype, "text", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Tag.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return post_entity_1.Post; }, function (post) { return post.tags; }),
        __metadata("design:type", Array)
    ], Tag.prototype, "posts", void 0);
    Tag = __decorate([
        (0, typeorm_1.Entity)({ name: "tags" })
    ], Tag);
    return Tag;
}());
exports.Tag = Tag;


/***/ }),

/***/ 7052:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
var typeorm_1 = __webpack_require__(5250);
var image_entity_1 = __webpack_require__(6488);
var post_entity_1 = __webpack_require__(1091);
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            default: "NOT-DEFINED",
        }),
        __metadata("design:type", String)
    ], User.prototype, "job", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "boolean",
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return image_entity_1.Image; }, { nullable: false }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", image_entity_1.Image)
    ], User.prototype, "image", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return post_entity_1.Post; }, function (post) { return post.user; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Array)
    ], User.prototype, "posts", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)({ name: "users" })
    ], User);
    return User;
}());
exports.User = User;


/***/ }),

/***/ 9844:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
var app_1 = __webpack_require__(4324);
var index_1 = __importDefault(__webpack_require__(2275));
exports.app = (0, app_1.initializeApp)(index_1.default.firebaseConfig);


/***/ }),

/***/ 7017:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUriFromFile = exports.uploadStorage = void 0;
var storage_1 = __webpack_require__(1668);
var index_1 = __webpack_require__(9844);
var storage = (0, storage_1.getStorage)(index_1.app);
function uploadStorage(name, file) {
    return __awaiter(this, void 0, void 0, function () {
        var referency, snapshot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    referency = (0, storage_1.ref)(storage, "images/".concat(name));
                    return [4 /*yield*/, (0, storage_1.uploadBytes)(referency, file)];
                case 1:
                    snapshot = _a.sent();
                    return [2 /*return*/, snapshot];
            }
        });
    });
}
exports.uploadStorage = uploadStorage;
function getUriFromFile(name, folder) {
    if (folder === void 0) { folder = "images"; }
    return __awaiter(this, void 0, void 0, function () {
        var referency, URI;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    referency = (0, storage_1.ref)(storage, "".concat(folder, "/").concat(name));
                    return [4 /*yield*/, (0, storage_1.getDownloadURL)(referency)];
                case 1:
                    URI = _a.sent();
                    return [2 /*return*/, URI];
            }
        });
    });
}
exports.getUriFromFile = getUriFromFile;


/***/ }),

/***/ 3607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(3236);
__webpack_require__(681);
__webpack_require__(3370);
var express_1 = __importDefault(__webpack_require__(6860));
var cors_1 = __importDefault(__webpack_require__(3582));
var express_fileupload_1 = __importDefault(__webpack_require__(6674));
var config_swagger_1 = __webpack_require__(3618);
var index_1 = __importDefault(__webpack_require__(2275));
var index_2 = __importDefault(__webpack_require__(8479));
var error_handler_1 = __webpack_require__(3341);
var notFound_middleware_1 = __webpack_require__(6504);
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: index_1.default.hostAllowedList,
}));
app.use((0, express_fileupload_1.default)({
    createParentPath: true,
}));
app.use(express_1.default.json());
app.set("trust proxy", true);
(0, config_swagger_1.setupSwagger)(app);
(0, index_2.default)(app);
app.use(error_handler_1.logErrors);
app.use(error_handler_1.wrapError);
app.use(notFound_middleware_1.notFoundMiddleware);
app.use(error_handler_1.errorHandler);
app.listen(index_1.default.port, function () {
    console.log("App runing on http://localhost:3000");
});


/***/ }),

/***/ 9683:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validatePermision = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
function validatePermision(permisions) {
    return function (req, res, next) {
        var user = req.user;
        if (!user || (user && !user.role)) {
            next(boom_1.default.unauthorized("Missing token or roles"));
        }
        var isAuthorized = permisions.find(function (r) { return r === user.role; });
        if (!isAuthorized)
            next(boom_1.default.unauthorized("Your role is not sufficient for access this route"));
        next();
    };
}
exports.validatePermision = validatePermision;


/***/ }),

/***/ 3341:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorHandler = exports.wrapError = exports.logErrors = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var index_1 = __importDefault(__webpack_require__(2275));
var response_1 = __importDefault(__webpack_require__(178));
function logErrors(err, req, res, next) {
    if (index_1.default.mode === "DEV")
        console.log(err);
    next(err);
}
exports.logErrors = logErrors;
function wrapError(err, req, res, next) {
    if (!err.isBoom) {
        next(boom_1.default.badImplementation(err.message));
        return;
    }
    next(err);
}
exports.wrapError = wrapError;
function errorHandler(err, req, res, next) {
    var _a = err.output, statusCode = _a.statusCode, payload = _a.payload;
    (0, response_1.default)(res, statusCode || 500, {}, err.message);
}
exports.errorHandler = errorHandler;


/***/ }),

/***/ 6504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.notFoundMiddleware = void 0;
var boom_1 = __webpack_require__(3767);
function notFoundMiddleware(res, req, next) {
    next((0, boom_1.notFound)("The rute of API doesn't exist 🧑‍🏫"));
}
exports.notFoundMiddleware = notFoundMiddleware;


/***/ }),

/***/ 7058:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateHandler = void 0;
var Joi = __importStar(__webpack_require__(8414));
var boom_1 = __webpack_require__(3767);
function validatorSchema(schema, data) {
    var error = Joi.object(schema).validate(data).error;
    return error;
}
function validateHandler(schema, check) {
    if (check === void 0) { check = "body"; }
    return function (req, res, next) {
        var data = req[check];
        var error = validatorSchema(schema, data);
        if (error)
            next((0, boom_1.badRequest)(error.message));
        next();
    };
}
exports.validateHandler = validateHandler;


/***/ }),

/***/ 8479:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __webpack_require__(6860);
//routes
var static_contents_controller_1 = __importDefault(__webpack_require__(7963));
var users_controller_1 = __importDefault(__webpack_require__(3630));
var image_controller_1 = __importDefault(__webpack_require__(1869));
var jobs_controller_1 = __importDefault(__webpack_require__(4879));
var tags_controller_1 = __importDefault(__webpack_require__(446));
var posts_controller_1 = __importDefault(__webpack_require__(4930));
var contents_controller_1 = __importDefault(__webpack_require__(4207));
var ipsUser_controller_1 = __importDefault(__webpack_require__(7140));
var skills_controller_1 = __importDefault(__webpack_require__(3941));
var project_controller_1 = __importDefault(__webpack_require__(6124));
var social_media_controller_1 = __importDefault(__webpack_require__(9101));
var stats_controller_1 = __importDefault(__webpack_require__(5396));
function setAllRouters(app) {
    return __awaiter(this, void 0, void 0, function () {
        var router;
        return __generator(this, function (_a) {
            router = (0, express_1.Router)();
            // Routes
            router.use("/static-contents", static_contents_controller_1.default);
            router.use("/users", users_controller_1.default);
            router.use("/images", image_controller_1.default);
            router.use("/jobs", jobs_controller_1.default);
            router.use("/tags", tags_controller_1.default);
            router.use("/posts", posts_controller_1.default);
            router.use("/contents", contents_controller_1.default);
            router.use("/ips", ipsUser_controller_1.default);
            router.use("/skills", skills_controller_1.default);
            router.use("/projects", project_controller_1.default);
            router.use("/social-media", social_media_controller_1.default);
            router.use("/stats", stats_controller_1.default);
            app.use("/api", router);
            return [2 /*return*/];
        });
    });
}
exports["default"] = setAllRouters;


/***/ }),

/***/ 4890:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var content_entity_1 = __webpack_require__(8416);
var post_entity_1 = __webpack_require__(1091);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var image_service_1 = __webpack_require__(5784);
var ContentService = /** @class */ (function () {
    function ContentService() {
        this.connect();
    }
    ContentService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(content_entity_1.Content);
                        this.dbPost = database.getRepository(post_entity_1.Post);
                        this.imageService = new image_service_1.ImageService();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContentService.prototype.getPostById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dbPost.findOne(id)];
                    case 1:
                        post = _a.sent();
                        if (!post)
                            throw boom_1.default.notFound("The post with ID " + id + " doesn't exist");
                        return [2 /*return*/, post];
                }
            });
        });
    };
    ContentService.prototype.incrementOrDecrementTimeReadOfPost = function (post, whatIncrementOrDecrement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        post.timeRead = post.timeRead + whatIncrementOrDecrement;
                        return [4 /*yield*/, this.dbPost.save(post)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContentService.prototype.calculateSecondsOfContent = function (content) {
        return (content.length / 400) * 60;
    };
    ContentService.prototype.getAll = function (limit, offset, postId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, contents, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        contents = [];
                        if (!postId) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getPostById(postId)];
                    case 1:
                        post = _a.sent();
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, queryParams), { where: {
                                    post: post,
                                }, relations: ["image", "post"] }))];
                    case 2:
                        contents = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.db.find(__assign(__assign({}, queryParams), { relations: ["image", "post"] }))];
                    case 4:
                        contents = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, contents];
                }
            });
        });
    };
    ContentService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, { relations: ["image", "post"] })];
                    case 1:
                        content = _a.sent();
                        if (!content)
                            throw boom_1.default.notFound("This content of post doesn't exist 🚫");
                        return [2 /*return*/, content];
                }
            });
        });
    };
    ContentService.prototype.create = function (contentDto) {
        return __awaiter(this, void 0, void 0, function () {
            var previousContents, image, post, newContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll("999", "0", contentDto.postId)];
                    case 1:
                        previousContents = _a.sent();
                        return [4 /*yield*/, this.imageService.getById(contentDto.imageId)];
                    case 2:
                        image = _a.sent();
                        return [4 /*yield*/, this.getPostById(contentDto.postId)];
                    case 3:
                        post = _a.sent();
                        newContent = this.db.create(contentDto);
                        newContent.orderNumber = previousContents.length + 1;
                        newContent.image = image;
                        newContent.post = post;
                        return [4 /*yield*/, this.incrementOrDecrementTimeReadOfPost(post, this.calculateSecondsOfContent(newContent.content))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.db.save(newContent)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContentService.prototype.update = function (UpdateContentDto, id, numberOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var content, secondsOfPrincipal, secondsOfNew, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        content = _a.sent();
                        if (!UpdateContentDto.content) return [3 /*break*/, 3];
                        secondsOfPrincipal = this.calculateSecondsOfContent(content.content);
                        secondsOfNew = this.calculateSecondsOfContent(UpdateContentDto.content);
                        return [4 /*yield*/, this.incrementOrDecrementTimeReadOfPost(content.post, secondsOfNew - secondsOfPrincipal)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        content = __assign(__assign(__assign({}, content), UpdateContentDto), { orderNumber: numberOrder ? numberOrder : content.orderNumber });
                        if (!UpdateContentDto.imageId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.imageService.getById(UpdateContentDto.imageId)];
                    case 4:
                        image = _a.sent();
                        content.image = image;
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.db.save(content)];
                }
            });
        });
    };
    ContentService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var content, contents, newContents, _i, newContents_1, contentFor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        content = _a.sent();
                        return [4 /*yield*/, this.getAll("999", "0", content.post.id)];
                    case 2:
                        contents = _a.sent();
                        newContents = contents.filter(function (c, index) { return index >= content.orderNumber; });
                        _i = 0, newContents_1 = newContents;
                        _a.label = 3;
                    case 3:
                        if (!(_i < newContents_1.length)) return [3 /*break*/, 6];
                        contentFor = newContents_1[_i];
                        return [4 /*yield*/, this.update({}, contentFor.id, contentFor.orderNumber - 1)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [4 /*yield*/, this.incrementOrDecrementTimeReadOfPost(contents[0].post, this.calculateSecondsOfContent(content.content) / -1)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, this.db.delete(id)];
                }
            });
        });
    };
    return ContentService;
}());
exports.ContentService = ContentService;


/***/ }),

/***/ 1060:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatePostsWithIpsService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var datePostWithIps_entity_1 = __webpack_require__(7579);
var ip_entity_1 = __webpack_require__(7229);
var stats_entity_1 = __webpack_require__(5642);
var post_service_1 = __webpack_require__(7440);
var stat_service_1 = __webpack_require__(4376);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var DatePostsWithIpsService = /** @class */ (function () {
    function DatePostsWithIpsService() {
        this.connect();
    }
    DatePostsWithIpsService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(datePostWithIps_entity_1.DatePostWithIps);
                        this.dbIp = database.getRepository(ip_entity_1.IPUser);
                        this.postService = new post_service_1.PostsService();
                        this.statService = new stat_service_1.StatService();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatePostsWithIpsService.prototype.getByPostAndIp = function (post, ip) {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne({
                            where: {
                                post: post,
                                ip: ip,
                            },
                            relations: ["ip", "post"],
                        })];
                    case 1:
                        info = _a.sent();
                        return [2 /*return*/, info];
                }
            });
        });
    };
    // It's deprecated for now
    DatePostsWithIpsService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var queries, infos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queries = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, queries), { relations: ["post", "ip"] }))];
                    case 1:
                        infos = _a.sent();
                        return [2 /*return*/, infos];
                }
            });
        });
    };
    DatePostsWithIpsService.prototype.create = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var post, ip, newInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.getById(dto.postId)];
                    case 1:
                        post = _a.sent();
                        return [4 /*yield*/, this.dbIp.findOneOrFail(dto.ipId)];
                    case 2:
                        ip = _a.sent();
                        newInfo = this.db.create();
                        newInfo.post = post;
                        newInfo.ip = ip;
                        return [4 /*yield*/, this.db.save(newInfo)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatePostsWithIpsService.prototype.setLike = function (like, idPost, ipString) {
        return __awaiter(this, void 0, void 0, function () {
            var post, ip, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.getById(idPost)];
                    case 1:
                        post = _a.sent();
                        return [4 /*yield*/, this.dbIp.findOneOrFail({ ip: ipString })];
                    case 2:
                        ip = _a.sent();
                        return [4 /*yield*/, this.getByPostAndIp(post, ip)];
                    case 3:
                        info = _a.sent();
                        if (!info) {
                            throw boom_1.default.badRequest("Want you like this post without see it post? 🤔🤔");
                        }
                        info.likedPost = like;
                        return [2 /*return*/, info];
                }
            });
        });
    };
    DatePostsWithIpsService.prototype.incrementView = function (idPost, ipString) {
        return __awaiter(this, void 0, void 0, function () {
            var post, ip, info, last, now, transcurso;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.getById(idPost)];
                    case 1:
                        post = _a.sent();
                        return [4 /*yield*/, this.dbIp.findOneOrFail({ ip: ipString })];
                    case 2:
                        ip = _a.sent();
                        return [4 /*yield*/, this.getByPostAndIp(post, ip)];
                    case 3:
                        info = _a.sent();
                        if (!!info) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.create({
                                postId: idPost,
                                ipId: ip.id,
                            })];
                    case 4:
                        info = _a.sent();
                        _a.label = 5;
                    case 5:
                        last = new Date(info.lastView.toString());
                        now = new Date();
                        transcurso = now.getTime() - last.getTime();
                        if (transcurso < 600000)
                            throw boom_1.default.locked("Hmmmmmmmmm.... 😣");
                        info.quantityViews = info.quantityViews + 1;
                        info.lastView = now;
                        // Turn on the stat
                        return [4 /*yield*/, this.statService.create({
                                type: stats_entity_1.TypeStat.visitsToTheBlogPost,
                                postId: idPost,
                            })];
                    case 6:
                        // Turn on the stat
                        _a.sent();
                        return [4 /*yield*/, this.db.save(info)];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DatePostsWithIpsService;
}());
exports.DatePostsWithIpsService = DatePostsWithIpsService;


/***/ }),

/***/ 5784:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var image_entity_1 = __webpack_require__(6488);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var upload_storage_1 = __webpack_require__(7017);
var ImageService = /** @class */ (function () {
    function ImageService() {
        this.connect();
    }
    ImageService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(image_entity_1.Image);
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageService.prototype.getResolutionBySize = function (size) {
        var _a = size.split("x"), width = _a[0], height = _a[1];
        var resolution = parseInt(width, 10) / parseInt(height, 10);
        resolution = resolution.toFixed(4);
        return resolution;
    };
    ImageService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id)];
                    case 1:
                        image = _a.sent();
                        if (!image)
                            throw boom_1.default.notFound("This image is not exist in this database");
                        return [2 /*return*/, image];
                }
            });
        });
    };
    ImageService.prototype.getByMd5 = function (md5) {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne({ md5: md5 })];
                    case 1:
                        image = _a.sent();
                        if (!image)
                            throw boom_1.default.notFound("This image is not exist in this database");
                        return [2 /*return*/, image];
                }
            });
        });
    };
    ImageService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var options, images;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(options)];
                    case 1:
                        images = _a.sent();
                        return [2 /*return*/, images];
                }
            });
        });
    };
    ImageService.prototype.create = function (imageDto, file) {
        return __awaiter(this, void 0, void 0, function () {
            var blob, name, existImage, Uri, newImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!file)
                            throw boom_1.default.notAcceptable("The image? 🤨");
                        if (Array.isArray(file)) {
                            throw boom_1.default.notAcceptable("The image is only one 👀");
                        }
                        blob = file.data;
                        name = file.md5;
                        return [4 /*yield*/, this.db.findOne({ md5: name })];
                    case 1:
                        existImage = _a.sent();
                        if (existImage)
                            throw boom_1.default.conflict("This image already exist, the ID is " + existImage.id);
                        return [4 /*yield*/, (0, upload_storage_1.uploadStorage)(name, blob)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, (0, upload_storage_1.getUriFromFile)(name)];
                    case 3:
                        Uri = _a.sent();
                        return [4 /*yield*/, this.db.create(imageDto)];
                    case 4:
                        newImage = _a.sent();
                        newImage.imageUrl = Uri;
                        newImage.resolution = this.getResolutionBySize(newImage.size);
                        newImage.md5 = name;
                        return [4 /*yield*/, this.db.save(newImage)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImageService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.db.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "This image with for ID ".concat(id, " was deleted")];
                }
            });
        });
    };
    return ImageService;
}());
exports.ImageService = ImageService;


/***/ }),

/***/ 9597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IpsUserService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var ip_entity_1 = __webpack_require__(7229);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var IpsUserService = /** @class */ (function () {
    function IpsUserService() {
        this.connect();
    }
    IpsUserService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(ip_entity_1.IPUser);
                        return [2 /*return*/];
                }
            });
        });
    };
    IpsUserService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var queries, ips;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queries = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, queries), { relations: ["datePostWithIps"] }))];
                    case 1:
                        ips = _a.sent();
                        return [2 /*return*/, ips];
                }
            });
        });
    };
    IpsUserService.prototype.getByIp = function (ip) {
        return __awaiter(this, void 0, void 0, function () {
            var ipUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne({ ip: ip }, {
                            relations: ["datePostWithIps"],
                        })];
                    case 1:
                        ipUser = _a.sent();
                        if (!ipUser)
                            throw boom_1.default.notFound("This IP doesn't exist 🙃");
                        return [2 /*return*/, ipUser];
                }
            });
        });
    };
    IpsUserService.prototype.create = function (ipuserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newIpUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newIpUser = this.db.create(ipuserDto);
                        return [4 /*yield*/, this.db.save(newIpUser)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return IpsUserService;
}());
exports.IpsUserService = IpsUserService;


/***/ }),

/***/ 3139:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JobsService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var image_service_1 = __webpack_require__(5784);
var connection_1 = __webpack_require__(681);
var job_entity_1 = __webpack_require__(4352);
var JobsService = /** @class */ (function () {
    function JobsService() {
        this.connect();
        this.imageService = new image_service_1.ImageService();
    }
    JobsService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(job_entity_1.Job);
                        return [2 /*return*/];
                }
            });
        });
    };
    JobsService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.find({ relations: ["image"] })];
                    case 1:
                        jobs = _a.sent();
                        return [2 /*return*/, jobs];
                }
            });
        });
    };
    JobsService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, { relations: ["image"] })];
                    case 1:
                        job = _a.sent();
                        if (!job)
                            throw boom_1.default.notFound("This job doesn't exist");
                        return [2 /*return*/, job];
                }
            });
        });
    };
    JobsService.prototype.create = function (jobDto) {
        return __awaiter(this, void 0, void 0, function () {
            var jobs, image, newJob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        jobs = _a.sent();
                        return [4 /*yield*/, this.imageService.getById(jobDto.imageId)];
                    case 2:
                        image = _a.sent();
                        if (jobs.length >= 2)
                            throw boom_1.default.notAcceptable("The maximun jobs is 2. Update the jobs is the best way");
                        newJob = this.db.create(jobDto);
                        newJob.image = image;
                        return [4 /*yield*/, this.db.save(newJob)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    JobsService.prototype.update = function (id, jobUpdateDto) {
        return __awaiter(this, void 0, void 0, function () {
            var job, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        job = _b.sent();
                        if (!jobUpdateDto.imageId) return [3 /*break*/, 4];
                        _a = job;
                        return [4 /*yield*/, this.imageService.getById(jobUpdateDto.imageId)];
                    case 2:
                        _a.image = _b.sent();
                        delete jobUpdateDto.imageId;
                        return [4 /*yield*/, this.db.save(job)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.db.update(job.id, jobUpdateDto)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobsService.prototype.deactivate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        job = _a.sent();
                        if (!job.active)
                            throw boom_1.default.conflict("This job already deactivate");
                        return [4 /*yield*/, this.db.update(job.id, { active: false })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobsService.prototype.activate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        job = _a.sent();
                        if (job.active)
                            throw boom_1.default.conflict("This job already activate");
                        return [4 /*yield*/, this.db.update(job.id, { active: true })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return JobsService;
}());
exports.JobsService = JobsService;


/***/ }),

/***/ 7440:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var post_entity_1 = __webpack_require__(1091);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var tags_service_1 = __webpack_require__(2837);
var users_service_1 = __webpack_require__(5099);
var get_nor_repeat_in_many_to_many_relations_1 = __webpack_require__(2405);
var PostsService = /** @class */ (function () {
    function PostsService() {
        this.connect();
    }
    PostsService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(post_entity_1.Post);
                        this.tagsService = new tags_service_1.TagsService();
                        this.userService = new users_service_1.UsersService();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsService.prototype.getTags = function (tagsIds) {
        return __awaiter(this, void 0, void 0, function () {
            var tags, _i, tagsIds_1, tagId, tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tags = [];
                        _i = 0, tagsIds_1 = tagsIds;
                        _a.label = 1;
                    case 1:
                        if (!(_i < tagsIds_1.length)) return [3 /*break*/, 4];
                        tagId = tagsIds_1[_i];
                        return [4 /*yield*/, this.tagsService.getById(tagId)];
                    case 2:
                        tag = _a.sent();
                        tags.push(tag);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, tags];
                }
            });
        });
    };
    PostsService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, posts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, queryParams), { where: {
                                    active: true,
                                }, relations: ["user", "contents", "tags"] }))];
                    case 1:
                        posts = _a.sent();
                        return [2 /*return*/, posts];
                }
            });
        });
    };
    PostsService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, {
                            relations: ["user", "contents", "tags"],
                        })];
                    case 1:
                        post = _a.sent();
                        if (!post || !post.active)
                            throw boom_1.default.notFound("The post is not exist 🤭");
                        return [2 /*return*/, post];
                }
            });
        });
    };
    PostsService.prototype.create = function (postDto, idUser) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newPost, tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getById(idUser)];
                    case 1:
                        user = _a.sent();
                        newPost = this.db.create(postDto);
                        newPost.timeRead = 0;
                        newPost.user = user;
                        return [4 /*yield*/, this.getTags(postDto.tagsId)];
                    case 2:
                        tags = _a.sent();
                        newPost.tags = tags;
                        return [4 /*yield*/, this.db.save(newPost)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PostsService.prototype.update = function (postUpdateDto, id) {
        return __awaiter(this, void 0, void 0, function () {
            var post, tagsId, newTagsIds, newTags;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        post = _b.sent();
                        if (!postUpdateDto.tagsId) return [3 /*break*/, 3];
                        tagsId = postUpdateDto.tagsId;
                        newTagsIds = (0, get_nor_repeat_in_many_to_many_relations_1.getNotRepeatInManyToManyRelations)(tagsId, post.tags);
                        return [4 /*yield*/, this.getTags(newTagsIds)];
                    case 2:
                        newTags = _b.sent();
                        (_a = post.tags).push.apply(_a, newTags);
                        _b.label = 3;
                    case 3:
                        post = __assign(__assign({}, post), postUpdateDto);
                        return [4 /*yield*/, this.db.save(post)];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    PostsService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        post = _a.sent();
                        post.active = false;
                        return [2 /*return*/, this.db.save(post)];
                }
            });
        });
    };
    return PostsService;
}());
exports.PostsService = PostsService;


/***/ }),

/***/ 6795:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var project_entity_1 = __webpack_require__(4971);
var image_service_1 = __webpack_require__(5784);
var skills_service_1 = __webpack_require__(7444);
var get_nor_repeat_in_many_to_many_relations_1 = __webpack_require__(2405);
var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.connect();
    }
    ProjectService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(project_entity_1.Project);
                        this.imageService = new image_service_1.ImageService();
                        this.skillService = new skills_service_1.SkillService();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.find({
                            relations: ["image", "skills"],
                        })];
                    case 1:
                        project = _a.sent();
                        return [2 /*return*/, project];
                }
            });
        });
    };
    ProjectService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, {
                            relations: ["skills", "image"],
                        })];
                    case 1:
                        project = _a.sent();
                        if (!project)
                            throw boom_1.default.notFound("This Project doesn't exist");
                        return [2 /*return*/, project];
                }
            });
        });
    };
    ProjectService.prototype.create = function (projectDto) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, image, skills, _i, _a, skillId, skill, newProject;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        projects = _b.sent();
                        if (projects.length > 2)
                            throw boom_1.default.illegal("No! The max length is 3 💢");
                        return [4 /*yield*/, this.imageService.getById(projectDto.imageId)];
                    case 2:
                        image = _b.sent();
                        skills = [];
                        _i = 0, _a = projectDto.skillsIds;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        skillId = _a[_i];
                        return [4 /*yield*/, this.skillService.getById(skillId)];
                    case 4:
                        skill = _b.sent();
                        skills.push(skill);
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        newProject = this.db.create(projectDto);
                        newProject.image = image;
                        newProject.skills = skills;
                        return [4 /*yield*/, this.db.save(newProject)];
                    case 7: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ProjectService.prototype.update = function (projectDto, id) {
        return __awaiter(this, void 0, void 0, function () {
            var project, _a, newSkillsIds, _i, newSkillsIds_1, skillId, skill;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        project = _b.sent();
                        if (!projectDto.imageId) return [3 /*break*/, 3];
                        _a = project;
                        return [4 /*yield*/, this.imageService.getById(projectDto.imageId)];
                    case 2:
                        _a.image = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!projectDto.skillsIds) return [3 /*break*/, 7];
                        newSkillsIds = (0, get_nor_repeat_in_many_to_many_relations_1.getNotRepeatInManyToManyRelations)(projectDto.skillsIds, project.skills);
                        _i = 0, newSkillsIds_1 = newSkillsIds;
                        _b.label = 4;
                    case 4:
                        if (!(_i < newSkillsIds_1.length)) return [3 /*break*/, 7];
                        skillId = newSkillsIds_1[_i];
                        return [4 /*yield*/, this.skillService.getById(skillId)];
                    case 5:
                        skill = _b.sent();
                        project.skills.push(skill);
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        project = __assign(__assign({}, project), projectDto);
                        return [4 /*yield*/, this.db.save(project)];
                    case 8: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ProjectService.prototype.activateProject = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        project = _a.sent();
                        project.active = true;
                        return [4 /*yield*/, this.db.save(project)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        project = _a.sent();
                        project.active = false;
                        return [4 /*yield*/, this.db.save(project)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProjectService;
}());
exports.ProjectService = ProjectService;


/***/ }),

/***/ 7444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SkillService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var skill_entity_1 = __webpack_require__(4472);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var image_service_1 = __webpack_require__(5784);
var SkillService = /** @class */ (function () {
    function SkillService() {
        this.connect();
    }
    SkillService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(skill_entity_1.Skill);
                        this.imageService = new image_service_1.ImageService();
                        return [2 /*return*/];
                }
            });
        });
    };
    SkillService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var query, skills;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, query), { where: {
                                    active: true,
                                }, relations: ["image"] }))];
                    case 1:
                        skills = _a.sent();
                        return [2 /*return*/, skills];
                }
            });
        });
    };
    SkillService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var skill;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id)];
                    case 1:
                        skill = _a.sent();
                        if (!skill || !skill.active)
                            throw boom_1.default.notFound("The skill doesn't exist ✏️");
                        return [2 /*return*/, skill];
                }
            });
        });
    };
    SkillService.prototype.create = function (skillDto) {
        return __awaiter(this, void 0, void 0, function () {
            var existSkill, image, newSkill;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((skillDto.imageId && skillDto.icon) ||
                            (!skillDto.imageId && !skillDto.icon)) {
                            throw boom_1.default.conflict("Only one parameter is exist");
                        }
                        return [4 /*yield*/, this.db.findOne({ name: skillDto.name })];
                    case 1:
                        existSkill = _a.sent();
                        if (!(existSkill && !existSkill.active)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.update(skillDto, existSkill.id)];
                    case 2: 
                    // If exist, reactivate the skill
                    return [2 /*return*/, _a.sent()];
                    case 3:
                        image = null;
                        if (!skillDto.imageId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.imageService.getById(skillDto.imageId)];
                    case 4:
                        image = _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.db.create(skillDto)];
                    case 6:
                        newSkill = _a.sent();
                        newSkill.image = image;
                        return [4 /*yield*/, this.db.save(newSkill)];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SkillService.prototype.update = function (skillDto, id) {
        return __awaiter(this, void 0, void 0, function () {
            var skill, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (skillDto.imageId && skillDto.icon) {
                            throw boom_1.default.conflict("Only one parameter is exist");
                        }
                        return [4 /*yield*/, this.getById(id)];
                    case 1:
                        skill = _b.sent();
                        skill.active = true;
                        if (!skillDto.imageId) return [3 /*break*/, 3];
                        _a = skill;
                        return [4 /*yield*/, this.imageService.getById(skillDto.imageId)];
                    case 2:
                        _a.image = _b.sent();
                        skill.icon = null;
                        _b.label = 3;
                    case 3:
                        if (skillDto.icon) {
                            skill.image = null;
                            skill.icon = skillDto.icon;
                        }
                        skill = __assign(__assign({}, skill), skillDto);
                        return [4 /*yield*/, this.db.save(skill)];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    SkillService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var skill;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        skill = _a.sent();
                        skill.active = false;
                        return [4 /*yield*/, this.db.save(skill)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    return SkillService;
}());
exports.SkillService = SkillService;


/***/ }),

/***/ 1307:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocialMediaService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var socialMedia_entity_1 = __webpack_require__(9196);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var SocialMediaService = /** @class */ (function () {
    function SocialMediaService() {
        this.connect();
    }
    SocialMediaService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(socialMedia_entity_1.SocialMedia);
                        return [2 /*return*/];
                }
            });
        });
    };
    SocialMediaService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var queries, allSocialMedia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queries = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, queries), { where: {
                                    active: true,
                                } }))];
                    case 1:
                        allSocialMedia = _a.sent();
                        return [2 /*return*/, allSocialMedia];
                }
            });
        });
    };
    SocialMediaService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var socialMedia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id)];
                    case 1:
                        socialMedia = _a.sent();
                        if (!socialMedia || !socialMedia.active)
                            throw boom_1.default.notFound("This social media doesn't exist ☹️");
                        return [2 /*return*/, socialMedia];
                }
            });
        });
    };
    SocialMediaService.prototype.create = function (socialMediaDto) {
        return __awaiter(this, void 0, void 0, function () {
            var existSocialMedia, newSocialMedia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne({ name: socialMediaDto.name })];
                    case 1:
                        existSocialMedia = _a.sent();
                        if (!(existSocialMedia && !existSocialMedia.active)) return [3 /*break*/, 3];
                        existSocialMedia = __assign(__assign({}, existSocialMedia), socialMediaDto);
                        return [4 /*yield*/, this.db.save(existSocialMedia)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        newSocialMedia = this.db.create(socialMediaDto);
                        return [4 /*yield*/, this.db.save(newSocialMedia)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SocialMediaService.prototype.update = function (socialMediaDto, id) {
        return __awaiter(this, void 0, void 0, function () {
            var socialMedia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        socialMedia = _a.sent();
                        return [4 /*yield*/, this.db.update(socialMedia.id, socialMediaDto)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SocialMediaService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var socialMedia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        socialMedia = _a.sent();
                        socialMedia.active = false;
                        return [4 /*yield*/, this.db.save(socialMedia)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SocialMediaService;
}());
exports.SocialMediaService = SocialMediaService;


/***/ }),

/***/ 4376:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var index_1 = __importDefault(__webpack_require__(2275));
var connection_1 = __webpack_require__(681);
var stats_entity_1 = __webpack_require__(5642);
var post_entity_1 = __webpack_require__(1091);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var StatService = /** @class */ (function () {
    function StatService() {
        this.connect();
    }
    StatService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(stats_entity_1.Stat);
                        this.dbPost = database.getRepository(post_entity_1.Post);
                        return [2 /*return*/];
                }
            });
        });
    };
    StatService.prototype.getAll = function (limit, offset, type) {
        return __awaiter(this, void 0, void 0, function () {
            var queries, query, stats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset)];
                    case 1:
                        queries = _a.sent();
                        query = __assign(__assign({}, queries), { relations: ["post"] });
                        if (type) {
                            query.where = { type: type };
                        }
                        return [4 /*yield*/, this.db.find(query)];
                    case 2:
                        stats = _a.sent();
                        return [2 /*return*/, stats];
                }
            });
        });
    };
    StatService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, { relations: ["post"] })];
                    case 1:
                        stat = _a.sent();
                        if (!stat)
                            throw boom_1.default.notFound("The stat with ID: ".concat(id, " doesn't exist"));
                        return [2 /*return*/, stat];
                }
            });
        });
    };
    StatService.prototype.create = function (statDto, origin) {
        return __awaiter(this, void 0, void 0, function () {
            var newStat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (origin) {
                            if (!index_1.default.hostAllowedList.includes(origin)) {
                                throw boom_1.default.forbidden("🤨🤨🤨");
                            }
                        }
                        newStat = this.db.create(statDto);
                        if (!statDto.postId) return [3 /*break*/, 2];
                        _a = newStat;
                        return [4 /*yield*/, this.dbPost.findOneOrFail(statDto.postId)];
                    case 1:
                        _a.post = _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.db.save(newStat)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    StatService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        stat = _a.sent();
                        return [4 /*yield*/, this.db.delete(stat.id)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return StatService;
}());
exports.StatService = StatService;


/***/ }),

/***/ 1200:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticContentsService = void 0;
var typeorm_1 = __webpack_require__(5250);
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var staticContents_entity_1 = __webpack_require__(4318);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var StaticContentsService = /** @class */ (function () {
    function StaticContentsService() {
        this.connect();
    }
    StaticContentsService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(staticContents_entity_1.StaticContent);
                        return [2 /*return*/];
                }
            });
        });
    };
    StaticContentsService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id)];
                    case 1:
                        content = _a.sent();
                        if (!content)
                            throw boom_1.default.notFound("The static content was not found");
                        return [2 /*return*/, content];
                }
            });
        });
    };
    StaticContentsService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var options, staticContents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(options)];
                    case 1:
                        staticContents = _a.sent();
                        return [2 /*return*/, staticContents];
                }
            });
        });
    };
    StaticContentsService.prototype.getOne = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(page === "contact")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.findOne({ contactEmail: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()) })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2: throw boom_1.default.notFound("This page isn't exist");
                }
            });
        });
    };
    StaticContentsService.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, newStaticContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!payload.contactEmail) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getOne("contact")];
                    case 1:
                        contact = _a.sent();
                        if (contact)
                            throw boom_1.default.conflict("The contact page already exist");
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.db.create(payload)];
                    case 3:
                        newStaticContent = _a.sent();
                        return [4 /*yield*/, this.db.save(newStaticContent)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StaticContentsService.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.db.update(data.id, payload)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, data), payload)];
                }
            });
        });
    };
    StaticContentsService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.db.delete(data.id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "Removed successfully"];
                }
            });
        });
    };
    return StaticContentsService;
}());
exports.StaticContentsService = StaticContentsService;


/***/ }),

/***/ 2837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagsService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var tag_entity_1 = __webpack_require__(9074);
var convertQueryParamsInOptions_1 = __webpack_require__(2126);
var TagsService = /** @class */ (function () {
    function TagsService() {
        this.connect();
    }
    TagsService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(tag_entity_1.Tag);
                        return [2 /*return*/];
                }
            });
        });
    };
    TagsService.prototype.getAll = function (limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = (0, convertQueryParamsInOptions_1.convertQueryParamsInOptions)(limit, offset);
                        return [4 /*yield*/, this.db.find(__assign(__assign({}, queryParams), { relations: ["posts"] }))];
                    case 1:
                        tags = _a.sent();
                        return [2 /*return*/, tags];
                }
            });
        });
    };
    TagsService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, {
                            relations: ["posts"],
                        })];
                    case 1:
                        tag = _a.sent();
                        if (!tag || !tag.active)
                            throw boom_1.default.notFound("The tag was not found");
                        return [2 /*return*/, tag];
                }
            });
        });
    };
    TagsService.prototype.create = function (tagDto) {
        return __awaiter(this, void 0, void 0, function () {
            var tag, newTag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne({ text: tagDto.text })];
                    case 1:
                        tag = _a.sent();
                        if (!(tag && !tag.active)) return [3 /*break*/, 3];
                        tag.active = true;
                        tag = __assign(__assign({}, tag), tagDto);
                        return [4 /*yield*/, this.db.save(tag)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        newTag = this.db.create(tagDto);
                        return [4 /*yield*/, this.db.save(newTag)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TagsService.prototype.update = function (tagDto, id) {
        return __awaiter(this, void 0, void 0, function () {
            var tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        tag = _a.sent();
                        return [4 /*yield*/, this.db.update(tag.id, tagDto)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tag), tagDto)];
                }
            });
        });
    };
    TagsService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        tag = _a.sent();
                        if (!tag.active)
                            throw boom_1.default.notFound("This tag doesn't exist");
                        tag.posts = [];
                        tag.active = false;
                        return [2 /*return*/, this.db.save(tag)];
                }
            });
        });
    };
    return TagsService;
}());
exports.TagsService = TagsService;


/***/ }),

/***/ 5099:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
var boom_1 = __importDefault(__webpack_require__(3767));
var connection_1 = __webpack_require__(681);
var image_service_1 = __webpack_require__(5784);
var user_entity_1 = __webpack_require__(7052);
var security_1 = __webpack_require__(9189);
var jwt_1 = __webpack_require__(1913);
var UsersService = /** @class */ (function () {
    function UsersService() {
        this.connect();
    }
    UsersService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.connection.db];
                    case 1:
                        database = _a.sent();
                        this.db = database.getRepository(user_entity_1.User);
                        this.imageService = new image_service_1.ImageService();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.findOne(id, {
                            relations: ["image"],
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user || !user.active) {
                            throw boom_1.default.notFound("User not found");
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UsersService.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var image, password, newUser, userSaved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageService.getById(payload.imageId)];
                    case 1:
                        image = _a.sent();
                        return [4 /*yield*/, (0, security_1.encryption)(payload.password)];
                    case 2:
                        password = _a.sent();
                        return [4 /*yield*/, this.db.create(__assign(__assign({}, payload), { password: password }))];
                    case 3:
                        newUser = _a.sent();
                        newUser.image = image;
                        return [4 /*yield*/, this.db.save(newUser)];
                    case 4:
                        userSaved = _a.sent();
                        return [2 /*return*/, this.quitPasswordFromReturnData(userSaved)];
                }
            });
        });
    };
    UsersService.prototype.login = function (loginDto) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isPassword, payloadToken;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.db.findOne({ email: loginDto.email }, {
                            relations: ["image"],
                        })];
                    case 1:
                        user = _b.sent();
                        if (!user || !user.active)
                            throw boom_1.default.notFound("This user doesn't exist");
                        return [4 /*yield*/, (0, security_1.verify)(loginDto.password, user.password)];
                    case 2:
                        isPassword = _b.sent();
                        if (!isPassword)
                            throw boom_1.default.unauthorized("You're not this user 👎🙅‍♂️🙅‍♀️");
                        payloadToken = {
                            id: user.id,
                            role: user.email === "wilmion92@gmail.com" ? "admin" : "customer",
                        };
                        _a = {
                            user: this.quitPasswordFromReturnData(user)
                        };
                        return [4 /*yield*/, (0, jwt_1.generateToken)(payloadToken)];
                    case 3: return [2 /*return*/, (_a.token = _b.sent(),
                            _a)];
                }
            });
        });
    };
    UsersService.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!payload.imageId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.comprobateImageId(payload.imageId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (payload.password || payload.email)
                            throw boom_1.default.conflict("The password or email is not change");
                        return [4 /*yield*/, this.getById(id)];
                    case 3:
                        user = _a.sent();
                        return [4 /*yield*/, this.db.update(user.id, payload)];
                    case 4:
                        userUpdated = _a.sent();
                        return [2 /*return*/, userUpdated];
                }
            });
        });
    };
    UsersService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, this.db.update(user.id, __assign(__assign({}, user), { active: false }))];
                }
            });
        });
    };
    UsersService.prototype.changeEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "This function for now, it not exist"];
            });
        });
    };
    UsersService.prototype.changePassword = function (oldPassword, newPassword, id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isCurrentPassword, password;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, (0, security_1.verify)(oldPassword, user.password)];
                    case 2:
                        isCurrentPassword = _a.sent();
                        if (!isCurrentPassword)
                            throw boom_1.default.unauthorized("You're not have property of this user 🤔🙄😑");
                        return [4 /*yield*/, (0, security_1.encryption)(newPassword)];
                    case 3:
                        password = _a.sent();
                        return [2 /*return*/, this.db.update(id, { password: password })];
                }
            });
        });
    };
    UsersService.prototype.comprobateImageId = function (imageId) {
        return __awaiter(this, void 0, void 0, function () {
            var existAnImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageService.getById(imageId)];
                    case 1:
                        existAnImage = _a.sent();
                        if (!existAnImage)
                            throw boom_1.default.notFound("Image entity does not exist");
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.quitPasswordFromReturnData = function (user) {
        return __assign(__assign({}, user), { password: "" });
    };
    return UsersService;
}());
exports.UsersService = UsersService;


/***/ }),

/***/ 3370:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var passport_1 = __importDefault(__webpack_require__(3511));
var jwt_strategy_1 = __webpack_require__(5360);
passport_1.default.use("jwt", jwt_strategy_1.jwtStrategy);


/***/ }),

/***/ 5360:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtStrategy = void 0;
var passport_jwt_1 = __webpack_require__(136);
var boom_1 = __importDefault(__webpack_require__(3767));
var index_1 = __importDefault(__webpack_require__(2275));
var users_service_1 = __webpack_require__(5099);
var service = new users_service_1.UsersService();
exports.jwtStrategy = new passport_jwt_1.Strategy({
    secretOrKey: index_1.default.jwt.secret,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
}, function (payload, done) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, service.getById(payload.id)];
            case 1:
                _a.sent();
                done(null, payload);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, done(boom_1.default.unauthorized(e_1))];
            case 3: return [2 /*return*/];
        }
    });
}); });


/***/ }),

/***/ 3618:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupSwagger = void 0;
//Documentation
var swagger_jsdoc_1 = __importDefault(__webpack_require__(7777));
var swagger_ui_express_1 = __importDefault(__webpack_require__(9948));
var options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "WILMION API",
            version: "1.0.0",
            description: "A simple express library API",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./src/swagger/*.ts"],
};
function setupSwagger(app) {
    var specs = (0, swagger_jsdoc_1.default)(options);
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
}
exports.setupSwagger = setupSwagger;


/***/ }),

/***/ 2126:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertQueryParamsInOptions = void 0;
function convertQueryParamsInOptions(limit, offset) {
    var options = {
        take: limit ? parseInt(limit, 10) : 20,
        skip: offset ? parseInt(offset, 10) : 0,
    };
    return options;
}
exports.convertQueryParamsInOptions = convertQueryParamsInOptions;


/***/ }),

/***/ 5033:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToArray = void 0;
function ToArray(enumme) {
    var StringIsNumber = function (value) { return isNaN(Number(value)) === false; };
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(function (key) { return enumme[key]; });
}
exports.ToArray = ToArray;


/***/ }),

/***/ 2405:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNotRepeatInManyToManyRelations = void 0;
function getNotRepeatInManyToManyRelations(listIds, entities) {
    var newTagsIds = listIds.filter(function (id) {
        var isUnique = true;
        entities.forEach(function (entity) {
            if (String(entity.id) === id)
                isUnique = false;
        });
        return isUnique;
    });
    return newTagsIds;
}
exports.getNotRepeatInManyToManyRelations = getNotRepeatInManyToManyRelations;


/***/ }),

/***/ 1913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(__webpack_require__(9344));
var index_1 = __importDefault(__webpack_require__(2275));
function generateToken(data) {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            token = jsonwebtoken_1.default.sign(data, index_1.default.jwt.secret, {
                expiresIn: "8h",
            });
            return [2 /*return*/, token];
        });
    });
}
exports.generateToken = generateToken;


/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function response(res, status, payload, message) {
    var obj = {
        status: status,
        message: message,
        payload: payload,
    };
    res.status(status).json(obj);
}
exports["default"] = response;


/***/ }),

/***/ 9189:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verify = exports.encryption = void 0;
var bcrypt_1 = __importDefault(__webpack_require__(7096));
var index_1 = __importDefault(__webpack_require__(2275));
function encryption(password) {
    return __awaiter(this, void 0, void 0, function () {
        var hashedPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.default.hash(password, index_1.default.encryption.saltRounds)];
                case 1:
                    hashedPassword = _a.sent();
                    return [2 /*return*/, hashedPassword];
            }
        });
    });
}
exports.encryption = encryption;
function verify(password, hashedPassword) {
    return __awaiter(this, void 0, void 0, function () {
        var isPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.default.compare(password, hashedPassword)];
                case 1:
                    isPassword = _a.sent();
                    return [2 /*return*/, isPassword];
            }
        });
    });
}
exports.verify = verify;


/***/ }),

/***/ 3767:
/***/ ((module) => {

module.exports = require("@hapi/boom");

/***/ }),

/***/ 8414:
/***/ ((module) => {

module.exports = require("@hapi/joi");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 6860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 6674:
/***/ ((module) => {

module.exports = require("express-fileupload");

/***/ }),

/***/ 4324:
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("firebase/storage");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3511:
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ 136:
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ 3236:
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ 7777:
/***/ ((module) => {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ 9948:
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ 5250:
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
/******/ 	var __webpack_exports__ = __webpack_require__(3607);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;