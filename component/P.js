Object.defineProperty(exports, "__esModule", { value: true });
exports.P = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var P = (function (_super) {
    tslib_1.__extends(P, _super);
    function P() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    P.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    P.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('p', this.props);
    };
    return P;
}(React.Component));
exports.P = P;
