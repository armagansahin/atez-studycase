"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Employee = class Employee extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        generated: true,
        id: true,
        default: 0
    }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "surname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "phone", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "department", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "salary", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "supervisor", void 0);
Employee = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map