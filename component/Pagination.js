Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var renderElement_1 = require("./renderElement");
var PaginationEllipsis = (function (_super) {
    tslib_1.__extends(PaginationEllipsis, _super);
    function PaginationEllipsis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PaginationEllipsis.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PaginationEllipsis.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], className = _b.className, props = tslib_1.__rest(_b, ["className"]);
        return (React.createElement("li", null,
            React.createElement("span", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.paginationEllipsis, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), "\u2026")));
    };
    return PaginationEllipsis;
}(React.Component));
var PaginationLink = (function (_super) {
    tslib_1.__extends(PaginationLink, _super);
    function PaginationLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PaginationLink.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PaginationLink.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isCurrent = _a.isCurrent, props = tslib_1.__rest(_a, ["isCurrent"]);
        return (React.createElement("li", null, renderElement_1.renderElement('a', props, classNames_1.bulmaClassName.paginationLink, {
            isCurrent: isCurrent,
        })));
    };
    return PaginationLink;
}(React.Component));
var PaginationList = (function (_super) {
    tslib_1.__extends(PaginationList, _super);
    function PaginationList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PaginationList.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PaginationList.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('ul', this.props, classNames_1.bulmaClassName.paginationList);
    };
    return PaginationList;
}(React.Component));
var PaginationNext = (function (_super) {
    tslib_1.__extends(PaginationNext, _super);
    function PaginationNext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PaginationNext.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PaginationNext.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('a', this.props, classNames_1.bulmaClassName.paginationNext);
    };
    return PaginationNext;
}(React.Component));
var PaginationPrevious = (function (_super) {
    tslib_1.__extends(PaginationPrevious, _super);
    function PaginationPrevious() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PaginationPrevious.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PaginationPrevious.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('a', this.props, classNames_1.bulmaClassName.paginationPrevious);
    };
    return PaginationPrevious;
}(React.Component));
var Pagination = (function (_super) {
    tslib_1.__extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Pagination.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Pagination.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('nav', this.props, classNames_1.bulmaClassName.pagination);
    };
    Pagination.defaultProps = {
        'aria-label': 'pagination',
        role: 'navigation',
    };
    Pagination.Ellipsis = PaginationEllipsis;
    Pagination.Link = PaginationLink;
    Pagination.List = PaginationList;
    Pagination.Next = PaginationNext;
    Pagination.Previous = PaginationPrevious;
    return Pagination;
}(React.Component));
exports.Pagination = Pagination;
