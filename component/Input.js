Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Input = (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Input.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Input.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isFocused = _a.isFocused, isHovered = _a.isHovered, isRounded = _a.isRounded, isStatic = _a.isStatic, type = _a.type, props = tslib_1.__rest(_a, ["isFocused", "isHovered", "isRounded", "isStatic", "type"]);
        return renderElement_1.renderElement('input', tslib_1.__assign({ type: type }, props), classNames_1.bulmaClassName.input, {
            isFocused: isFocused,
            isHovered: isHovered,
            isRounded: isRounded,
            isStatic: isStatic,
        });
    };
    return Input;
}(React.Component));
exports.Input = Input;
