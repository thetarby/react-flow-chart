"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
exports.LinkDefault = function (_a) {
    var config = _a.config, link = _a.link, startPos = _a.startPos, endPos = _a.endPos, fromPort = _a.fromPort, toPort = _a.toPort, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, isHovered = _a.isHovered, isSelected = _a.isSelected, matrix = _a.matrix;
    var points = config.smartRouting ?
        !!toPort && !!matrix ? __1.generateSmartPath(matrix, startPos, endPos, fromPort, toPort) : __1.generateRightAnglePath(startPos, endPos)
        : __1.generateCurvePath(startPos, endPos);
    return (React.createElement("svg", { style: { overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 } },
        React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: "cornflowerblue" }),
        React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "3", fill: "none" }),
        React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: (isHovered || isSelected) ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ config: config, linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ config: config, linkId: link.id }); }, onClick: function (e) {
                onLinkClick({ config: config, linkId: link.id });
                e.stopPropagation();
            } }),
        React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: "cornflowerblue" })));
};
//# sourceMappingURL=Link.default.js.map