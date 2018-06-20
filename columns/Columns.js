var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var classname_1 = require("classname");
var Columns = (function (_super) {
    __extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        var _a = this.props, isDesktop = _a.isDesktop, isGapeless = _a.isGapeless, isMobile = _a.isMobile, isMultiline = _a.isMultiline;
        return (react_1.default.createElement("div", { className: classname_1.default(['columns'], {
                'is-desktop': isDesktop,
                'is-gapelesss': isGapeless,
                'is-mobile': isMobile,
                'is-multiline': isMultiline
            }) }, this.props.children));
    };
    return Columns;
}(react_1.Component));
exports.default = Columns;