"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const package_json_1 = __importDefault(require("../package.json"));
const { PORT } = process.env;
app_1.default.listen(PORT || 4040, () => {
    console.info(`** TEST v${package_json_1.default.version} executed in port ${PORT || 4040} **`);
});
