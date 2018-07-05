(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs-index-module"],{

/***/ "./site/src/app/docs/changelog-en.html":
/*!*********************************************!*\
  !*** ./site/src/app/docs/changelog-en.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Change Log<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/changelog.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1>\n  <section class=\"markdown\" ngNonBindable><p><code>ng-zorro-antd</code> strictly follows <a href=\"http://semver.org/lang/zh-CN/\">Semantic Versioning 2.0.0</a>.</p>\n<h4 id=\"release-schedule\"><span>Release Schedule</span><a onclick=\"window.location.hash = 'release-schedule'\" class=\"anchor\">#</a></h4><ul>\n<li>Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).</li>\n<li>Monthly release: minor version at the end of every month for new features.</li>\n<li>Major version release is not included in this schedule for breadking change and new features.</li>\n</ul>\n<hr>\n<h2 id=\"1-1-1\"><span>1.1.1</span><a onclick=\"window.location.hash = '1-1-1'\" class=\"anchor\">#</a></h2><p><code>2018-07-02</code></p>\n<h3 id=\"bug-fixes\"><span>Bug Fixes</span><a onclick=\"window.location.hash = 'bug-fixes'\" class=\"anchor\">#</a></h3><ul>\n<li><strong>tree:</strong> fix disabled node status &amp; doc (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1737\">#1737</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/92675e4\">92675e4</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1721\">#1721</a></li>\n<li><strong>auto-complete, mention, tree-select:</strong> update cdk overlay positioning strategy (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1761\">#1761</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/82af2ff\">82af2ff</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1756\">#1756</a></li>\n<li><strong>date-picker:</strong> support changing language at runtime (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1768\">#1768</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/9caabb5\">9caabb5</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1717\">#1717</a></li>\n<li><strong>list:</strong> fix loading style misplacement of spin (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1767\">#1767</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/336cc08\">336cc08</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1739\">#1739</a></li>\n<li><strong>radio:</strong> fix radio disabled bug in group (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1746\">#1746</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/86fc773\">86fc773</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1734\">#1734</a></li>\n<li><strong>radio:</strong> fix radio in reactive form (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1748\">#1748</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/b7a831d\">b7a831d</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1735\">#1735</a></li>\n<li><strong>select:</strong> trigger keyboard on ios (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1653\">#1653</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1751\">#1751</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/89d05f9\">89d05f9</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1752\">#1752</a> <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1274\">#1274</a></li>\n<li><strong>transfer:</strong> fix title dislocation when form-item layout (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1745\">#1745</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/4005c7c\">4005c7c</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1732\">#1732</a></li>\n<li><strong>tree-select:</strong> fix unable to set null (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1760\">#1760</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/689f8b4\">689f8b4</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1740\">#1740</a></li>\n<li><strong>tree-select:</strong> width is 0 when trigger element is invisible (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1775\">#1775</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/4eb039a\">4eb039a</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1772\">#1772</a></li>\n<li><strong>table:</strong> fix selector error (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1742\">#1742</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/aeb485f\">aeb485f</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1736\">#1736</a></li>\n</ul>\n<h3 id=\"features\"><span>Features</span><a onclick=\"window.location.hash = 'features'\" class=\"anchor\">#</a></h3><ul>\n<li><strong>carousel:</strong> support autoplay speed (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1741\">#1741</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/a516949\">a516949</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1711\">#1711</a></li>\n</ul>\n<h2 id=\"1-1-0\"><span>1.1.0</span><a onclick=\"window.location.hash = '1-1-0'\" class=\"anchor\">#</a></h2><p><code>2018-06-25</code></p>\n<h3 id=\"bug-fixes\"><span>Bug Fixes</span><a onclick=\"window.location.hash = 'bug-fixes'\" class=\"anchor\">#</a></h3><ul>\n<li><strong> cascader:</strong> fix custom render with nzClear (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1676\">#1676</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/c683bc3\">c683bc3</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1646\">#1646</a></li>\n<li><strong>autocomplete:</strong> AOT compiler requires public properties (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1686\">#1686</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/a1f326d\">a1f326d</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1683\">#1683</a></li>\n<li><strong>card:</strong> fix card loading style (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1696\">#1696</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/70cb591\">70cb591</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1695\">#1695</a></li>\n<li><strong>date-picker:</strong> fix date display of the end part is not as expected (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1709\">#1709</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/b1a1235\">b1a1235</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1693\">#1693</a></li>\n<li><strong>nz-alert:</strong> emit close after fade animation is done (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1667\">#1667</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/6b31ca3\">6b31ca3</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1666\">#1666</a></li>\n<li><strong>select:</strong> move select ovarlay to the last of container (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1673\">#1673</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/442e3f3\">442e3f3</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1672\">#1672</a> <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1643\">#1643</a></li>\n<li><strong>table:</strong> fix table th filter &amp; style bug (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1674\">#1674</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/1a4332a\">1a4332a</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1671\">#1671</a> <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1660\">#1660</a></li>\n<li><strong>tree-select:</strong> position error when in the modal-box (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1687\">#1687</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/43910f9\">43910f9</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1681\">#1681</a></li>\n<li><strong>ng-add:</strong> remove compiled css from styles when use custom theme (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1655\">#1655</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/fc67ce5\">fc67ce5</a>)</li>\n<li><strong>showcase:</strong> use differenceInCalendarDays to do judgement with days for date-picker&#39;s demo (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1648\">#1648</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/7d593e6\">7d593e6</a>)</li>\n</ul>\n<h3 id=\"features\"><span>Features</span><a onclick=\"window.location.hash = 'features'\" class=\"anchor\">#</a></h3><ul>\n<li><strong>table:</strong> support nzSimple option (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1699\">#1699</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/4868c41\">4868c41</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1599\">#1599</a></li>\n</ul>\n<h2 id=\"1-0-0\"><span>1.0.0</span><a onclick=\"window.location.hash = '1-0-0'\" class=\"anchor\">#</a></h2><p><code>2018-06-11</code></p>\n<p>We released the first version of ng-zorro-antd 10 months ago. In those 10 months we received PRs from more than 35 contributors. Underwent about 386 commits and 35 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/releases\">releases</a>.</p>\n<p><strong>Today, we are happy to announce that ng-zorro-antd 1.0 has finally been released. </strong></p>\n<p>In this release we supported i18n in 35 languages, provided all components same as <a href=\"https://ant.design/docs/react/introduce\">react version</a>, refactored code for multiple underlying components, introduced new features of <a href=\"https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2\">schematics</a>. We made this change to clarify cross compatibility.</p>\n<p>All releases notes can be found <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/releases\">here</a></p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/changelog-en.ts":
/*!*******************************************!*\
  !*** ./site/src/app/docs/changelog-en.ts ***!
  \*******************************************/
/*! exports provided: NzDocChangelogEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocChangelogEnComponent", function() { return NzDocChangelogEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocChangelogEnComponent = /** @class */ (function () {
    function NzDocChangelogEnComponent() {
    }
    NzDocChangelogEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocChangelogEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-changelog-en',
            template: __webpack_require__(/*! ./changelog-en.html */ "./site/src/app/docs/changelog-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocChangelogEnComponent);
    return NzDocChangelogEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/changelog-zh.html":
/*!*********************************************!*\
  !*** ./site/src/app/docs/changelog-zh.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>更新日志<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/changelog.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1>\n  <section class=\"markdown\" ngNonBindable><p><code>ng-zorro-antd</code> 严格遵循 <a href=\"http://semver.org/lang/zh-CN/\">Semantic Versioning 2.0.0</a> 语义化版本规范。</p>\n<h4 id=\"发布周期\"><span>发布周期</span><a onclick=\"window.location.hash = '发布周期'\" class=\"anchor\">#</a></h4><ul>\n<li>修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）</li>\n<li>次版本号：每月发布一个带有新特性的向下兼容的版本。</li>\n<li>主版本号：含有破坏性更新和新特性，不在发布周期内。</li>\n</ul>\n<hr>\n<h2 id=\"1-1-1\"><span>1.1.1</span><a onclick=\"window.location.hash = '1-1-1'\" class=\"anchor\">#</a></h2><p><code>2018-07-02</code></p>\n<h3 id=\"bug-fixes\"><span>Bug Fixes</span><a onclick=\"window.location.hash = 'bug-fixes'\" class=\"anchor\">#</a></h3><ul>\n<li><strong>tree:</strong> 修复 disabled 状态节点的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1737\">#1737</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/92675e4\">92675e4</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1721\">#1721</a></li>\n<li><strong>auto-complete, mention, tree-select:</strong> 修复组件在 Firefox 下的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1761\">#1761</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/82af2ff\">82af2ff</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1756\">#1756</a></li>\n<li><strong>date-picker:</strong> 修复动态切换语言不生效的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1768\">#1768</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/9caabb5\">9caabb5</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1717\">#1717</a></li>\n<li><strong>list:</strong> 修复 loading 状态的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1767\">#1767</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/336cc08\">336cc08</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1739\">#1739</a></li>\n<li><strong>radio:</strong> 修复 radio group 状态冲突的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1746\">#1746</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/86fc773\">86fc773</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1734\">#1734</a></li>\n<li><strong>radio:</strong> 修复在 reactive form 下的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1748\">#1748</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/b7a831d\">b7a831d</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1735\">#1735</a></li>\n<li><strong>select:</strong> 修复在 IOS 上不触发键盘展开的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1653\">#1653</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1751\">#1751</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/89d05f9\">89d05f9</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1752\">#1752</a> <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1274\">#1274</a></li>\n<li><strong>transfer:</strong> 修复样式问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1745\">#1745</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/4005c7c\">4005c7c</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1732\">#1732</a></li>\n<li><strong>tree-select:</strong> 修复不能设置为 null 的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1760\">#1760</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/689f8b4\">689f8b4</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1740\">#1740</a></li>\n<li><strong>tree-select:</strong> 修复样式问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1775\">#1775</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/4eb039a\">4eb039a</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1772\">#1772</a></li>\n<li><strong>table:</strong> 提供跳过组件渲染的方式 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1742\">#1742</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/aeb485f\">aeb485f</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1736\">#1736</a></li>\n</ul>\n<h3 id=\"features\"><span>Features</span><a onclick=\"window.location.hash = 'features'\" class=\"anchor\">#</a></h3><ul>\n<li><strong>carousel:</strong> 支持手动设定 AutoSpeed (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1741\">#1741</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/a516949\">a516949</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1711\">#1711</a></li>\n</ul>\n<h2 id=\"1-1-0\"><span>1.1.0</span><a onclick=\"window.location.hash = '1-1-0'\" class=\"anchor\">#</a></h2><p><code>2018-06-25</code></p>\n<h3 id=\"bug-fixes\"><span>Bug Fixes</span><a onclick=\"window.location.hash = 'bug-fixes'\" class=\"anchor\">#</a></h3><ul>\n<li><strong> cascader:</strong> 修复 nzClear 后不生效的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1676\">#1676</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/c683bc3\">c683bc3</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1646\">#1646</a></li>\n<li><strong>autocomplete:</strong> 修复 AutoComplete 在 AoT 编译下的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1686\">#1686</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/a1f326d\">a1f326d</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1683\">#1683</a></li>\n<li><strong>card:</strong> 修复 Card 的 loading 样式问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1696\">#1696</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/70cb591\">70cb591</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1695\">#1695</a></li>\n<li><strong>date-picker:</strong> 修复 DatePicker 在跨日期选择下的时间展示问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1709\">#1709</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/b1a1235\">b1a1235</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1693\">#1693</a></li>\n<li><strong>nz-alert:</strong> 修复 close 事件的逻辑 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1667\">#1667</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/6b31ca3\">6b31ca3</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1666\">#1666</a></li>\n<li><strong>select:</strong> 修复 select 在弹出框中的顺序问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1673\">#1673</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/442e3f3\">442e3f3</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1672\">#1672</a> <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1643\">#1643</a></li>\n<li><strong>table:</strong> 修复 table 中 重置 filter 及 表头滚动条样式问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1674\">#1674</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/1a4332a\">1a4332a</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1671\">#1671</a> <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1660\">#1660</a></li>\n<li><strong>tree-select:</strong> 修复 TreeSelect 在弹出框中的下拉菜单定位问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1687\">#1687</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/43910f9\">43910f9</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1681\">#1681</a></li>\n<li><strong>ng-add:</strong> 修复使用 ng add 多次执行后的样式导入问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1655\">#1655</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/fc67ce5\">fc67ce5</a>)</li>\n<li><strong>showcase:</strong> 修复文档中 DatePicker 禁止时间范围的问题 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1648\">#1648</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/7d593e6\">7d593e6</a>)</li>\n</ul>\n<h3 id=\"features\"><span>Features</span><a onclick=\"window.location.hash = 'features'\" class=\"anchor\">#</a></h3><ul>\n<li><strong>table:</strong> 支持 pagination 的 nzSimple 选项 (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1699\">#1699</a>) (<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/commit/4868c41\">4868c41</a>), closes <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1599\">#1599</a></li>\n</ul>\n<h2 id=\"1-0-0\"><span>1.0.0</span><a onclick=\"window.location.hash = '1-0-0'\" class=\"anchor\">#</a></h2><p><code>2018-06-11</code></p>\n<p>更多内容见 NG ZORRO 1.0 <a href=\"https://zhuanlan.zhihu.com/p/37916702\">发布公告</a>。</p>\n<p>10个月之前我们发布了 NG-ZORRO 的第一个版本，在这 10个月的时间里，我们接收了超过 35 个 contributor 的 386 次 Commit。</p>\n<p><strong>在经过了 35 个版本 的迭代之后，1.0 版本在今天正式发布。</strong></p>\n<p>1.0 版本基于最新的 Angular ^6.0.0 与 RxJS ^6.0.0 构建，与 @angular/cli 进行了深度整合，完善了文档系统，降低了上手难度，同步了最新的设计规范。除此之外，我们完成了与 Ant Design 所有组件（共51个）的完全同步工作，并对之前的部分组件进行了重构。</p>\n<p>最重要的是，这些工作相对于上一个版本（0.7.1）没有引入任何破坏性更新，这意味着所有你需要做的只是要升级目前项目的 Angular 版本到 6.0。</p>\n<blockquote>\n<p>注：升级到最新的 Angular 6 版本只需要很少的工作就可以完成，具体的步骤可以参考官方的 <a href=\"https://update.angular.io\">升级指南</a>。</p>\n</blockquote>\n<p>Tooltip、Popover、PopConfirm 等组件在1.0版本中推荐使用 Directive 方式，原有的方式虽然不推荐，但是仍然可以继续使用。另外，借助与 Angular 6.0的部分新特性，原有的forRoot的使用方式不再必要，在任何位置都可以直接引入 <code>NgZorroAntdModule</code> 而不用再考虑当前是否是在根模块中。当然，原有的<code>forRoot</code>的方式也继续兼容。</p>\n<h2 id=\"1-0-之前版本\"><span>1.0 之前版本</span><a onclick=\"window.location.hash = '1-0-之前版本'\" class=\"anchor\">#</a></h2><p>1.0 之前版本的更新记录可以在 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/releases\">Github</a> 查看</p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/changelog-zh.ts":
/*!*******************************************!*\
  !*** ./site/src/app/docs/changelog-zh.ts ***!
  \*******************************************/
/*! exports provided: NzDocChangelogZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocChangelogZhComponent", function() { return NzDocChangelogZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocChangelogZhComponent = /** @class */ (function () {
    function NzDocChangelogZhComponent() {
    }
    NzDocChangelogZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocChangelogZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-changelog-zh',
            template: __webpack_require__(/*! ./changelog-zh.html */ "./site/src/app/docs/changelog-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocChangelogZhComponent);
    return NzDocChangelogZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/contributing-en.html":
/*!************************************************!*\
  !*** ./site/src/app/docs/contributing-en.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Contributing to NG-ZORRO<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/contributing.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#code-of-conduct\" nzTitle=\"Code of Conduct\"></nz-link><nz-link nzHref=\"#open-development\" nzTitle=\"Open Development\"></nz-link><nz-link nzHref=\"#bugs\" nzTitle=\"Bugs\"></nz-link><nz-link nzHref=\"#proposing-a-change\" nzTitle=\"Proposing a Change\"></nz-link><nz-link nzHref=\"#your-first-pull-request\" nzTitle=\"Your First Pull Request\"></nz-link><nz-link nzHref=\"#sending-a-pull-request\" nzTitle=\"Sending a Pull Request\"></nz-link><nz-link nzHref=\"#development-workflow\" nzTitle=\"Development Workflow\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>The following is a set of guidelines for contributing to NG ZORRO. Please spend several minutes in reading these guidelines before you create an issue or pull request.</p>\n<h2 id=\"code-of-conduct\"><span>Code of Conduct</span><a onclick=\"window.location.hash = 'code-of-conduct'\" class=\"anchor\">#</a></h2><p>We have adopted a <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CODE_OF_CONDUCT.md\">Code of Conduct</a> that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.</p>\n<h2 id=\"open-development\"><span>Open Development</span><a onclick=\"window.location.hash = 'open-development'\" class=\"anchor\">#</a></h2><p>All work on NG-ZORRO happens directly on <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd\">GitHub</a>. Both core team members and external contributors send pull requests which go through the same review process.</p>\n<h2 id=\"bugs\"><span>Bugs</span><a onclick=\"window.location.hash = 'bugs'\" class=\"anchor\">#</a></h2><p>We are using <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues\">GitHub Issues</a> for bug tracing. The best way to get your bug fixed is using our <a href=\"https://ng.ant.design/issue-helper/#/en\">issue helper</a> and provide a reprduction with this <a href=\"https://stackblitz.com/edit/ng-zorro-antd-setup?file=app%2Fapp.component.ts\">template</a>.</p>\n<p>Before you reporting a bug, please make sure you&#39;ve searched exists issues, and read our <a href=\"docs/faq/en\">FAQ</a>.</p>\n<h2 id=\"proposing-a-change\"><span>Proposing a Change</span><a onclick=\"window.location.hash = 'proposing-a-change'\" class=\"anchor\">#</a></h2><p>If you intend to change the public API or introduce new feature, we also recommend use our <a href=\"https://ng.ant.design/issue-helper/#/en\">issue helper</a> to create a feature request issue.</p>\n<h2 id=\"your-first-pull-request\"><span>Your First Pull Request</span><a onclick=\"window.location.hash = 'your-first-pull-request'\" class=\"anchor\">#</a></h2><p>Working on your first Pull Request? You can learn how from this free video series:</p>\n<p><a href=\"https://opensource.guide/how-to-contribute/\">How to Contribute to Open Source</a></p>\n<p>To help you get your feet wet and get you familiar with our contribution process, we have a list of <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/labels/good%20first%20issue\">good first issues</a> that contain bugs or small features that have a relatively limited scope. This is a great place to get started.</p>\n<p>If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.</p>\n<p>If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should still leave a comment.</p>\n<h2 id=\"sending-a-pull-request\"><span>Sending a Pull Request</span><a onclick=\"window.location.hash = 'sending-a-pull-request'\" class=\"anchor\">#</a></h2><p>The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.</p>\n<p><strong>Before submitting a pull request</strong>, please make sure the following is done:</p>\n<ol>\n<li>Run <code>npm install</code> in the repository root.</li>\n<li>If you’ve fixed a bug or added code that should be tested, add tests!</li>\n<li>Ensure the test suite passes (npm run test).</li>\n<li>Make sure your code lints (npm run lint). Tip: Lint runs automatically when you <code>git commit</code>.</li>\n<li>Make sure rebase your code to keep the history clean.</li>\n<li>Make sure your commit message meet the <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md#-commit-message-guidelines\">guidelines</a></li>\n</ol>\n<h2 id=\"development-workflow\"><span>Development Workflow</span><a onclick=\"window.location.hash = 'development-workflow'\" class=\"anchor\">#</a></h2><p>After cloning <code>ng-zorro-antd</code>, run <code>npm install</code> to fetch its dependencies. Then, you can run several commands:</p>\n<ol>\n<li><code>npm run site:start</code> runs NG-ZORRO website locally.</li>\n<li><code>npm run lint</code> checks the code style.</li>\n<li><code>npm test</code> runs the complete test suite.</li>\n<li><code>npm run generate</code> creates build of <code>ng-zorro-antd</code>.</li>\n</ol>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/contributing-en.ts":
/*!**********************************************!*\
  !*** ./site/src/app/docs/contributing-en.ts ***!
  \**********************************************/
/*! exports provided: NzDocContributingEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocContributingEnComponent", function() { return NzDocContributingEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocContributingEnComponent = /** @class */ (function () {
    function NzDocContributingEnComponent() {
    }
    NzDocContributingEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocContributingEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-contributing-en',
            template: __webpack_require__(/*! ./contributing-en.html */ "./site/src/app/docs/contributing-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocContributingEnComponent);
    return NzDocContributingEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/contributing-zh.html":
/*!************************************************!*\
  !*** ./site/src/app/docs/contributing-zh.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>贡献指南<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/contributing.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#行为准则\" nzTitle=\"行为准则\"></nz-link><nz-link nzHref=\"#透明的开发\" nzTitle=\"透明的开发\"></nz-link><nz-link nzHref=\"#bugs\" nzTitle=\"Bugs\"></nz-link><nz-link nzHref=\"#新增功能\" nzTitle=\"新增功能\"></nz-link><nz-link nzHref=\"#第一次贡献\" nzTitle=\"第一次贡献\"></nz-link><nz-link nzHref=\"#pull-request\" nzTitle=\"Pull Request\"></nz-link><nz-link nzHref=\"#开发流程\" nzTitle=\"开发流程\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>这篇指南会指导你如何为 NG-ZORRO 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。</p>\n<h2 id=\"行为准则\"><span>行为准则</span><a onclick=\"window.location.hash = '行为准则'\" class=\"anchor\">#</a></h2><p>我们有一份 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CODE_OF_CONDUCT.md\">行为准则</a>，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。</p>\n<h2 id=\"透明的开发\"><span>透明的开发</span><a onclick=\"window.location.hash = '透明的开发'\" class=\"anchor\">#</a></h2><p>我们所有的工作都会放在 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd\">GitHub</a> 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要进过同样流程的 review。</p>\n<h2 id=\"bugs\"><span>Bugs</span><a onclick=\"window.location.hash = 'bugs'\" class=\"anchor\">#</a></h2><p>我们使用 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues\">GitHub Issues</a> 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，最好的办法就是通过我们提供的 <a href=\"https://ng.ant.design/issue-helper/#/zh\">issue 小助手</a> 来提 issue。 并且能使用这个 <a href=\"https://stackblitz.com/edit/ng-zorro-antd-setup?file=app%2Fapp.component.ts\">模板</a> 来提供重现。</p>\n<p>在你报告一个 bug 之前，请先确保已经搜索过已有的 issue 和阅读了我们的 <a href=\"docs/faq/zh\">常见问题</a>。</p>\n<h2 id=\"新增功能\"><span>新增功能</span><a onclick=\"window.location.hash = '新增功能'\" class=\"anchor\">#</a></h2><p>如果你有改进我们的 API 或者新增功能的想法，我们同样推荐你使用我们提供的 <a href=\"https://ng.ant.design/issue-helper/#/zh\">issue 小助手</a> 来新建一个添加新功能的 issue。</p>\n<h2 id=\"第一次贡献\"><span>第一次贡献</span><a onclick=\"window.location.hash = '第一次贡献'\" class=\"anchor\">#</a></h2><p>如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习：</p>\n<p><a href=\"https://opensource.guide/zh-cn/how-to-contribute/\">如何为开源做贡献</a></p>\n<p>为了能帮助你开始你的第一次尝试，我们用 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/labels/good%20first%20issue\">good first issues</a> 标记了一些比较比较容易修复的 bug 和小功能。这些 issue 可以很好地做为你的首次尝试。</p>\n<p>如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个 issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 issue，以免别人重复劳动。</p>\n<p>如果之前有人留言说会处理这个 issue 但是一两个星期都没有动静，那么你也可以接手处理这个 issue，当然还是需要留言告知其他人。</p>\n<h2 id=\"pull-request\"><span>Pull Request</span><a onclick=\"window.location.hash = 'pull-request'\" class=\"anchor\">#</a></h2><p>NG ZORRO 团队会关注所有的 pull request，我们会 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。</p>\n<p><strong>在你发送 Pull Request 之前</strong>，请确认你是按照下面的步骤来做的：</p>\n<ol>\n<li>在项目根目录下运行了 <code>npm install</code>。</li>\n<li>如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要。</li>\n<li>确认所有的测试都是通过的 <code>npm run test</code>。 小贴士: Test 会在你 <code>git commit</code> 的时候自动运行。</li>\n<li>确保你的代码通过了 lint 检查 <code>npm run lint</code>. 小贴士: Lint 会在你 <code>git commit</code> 的时候自动运行。</li>\n<li>确保你的代码在提交之前经过了正确的 <a href=\"https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request\">Rebase</a></li>\n<li>确保你的提交符合<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md#-commit-message-guidelines\">规范</a></li>\n</ol>\n<h2 id=\"开发流程\"><span>开发流程</span><a onclick=\"window.location.hash = '开发流程'\" class=\"anchor\">#</a></h2><p>在你 clone 了 <code>ng-zorro-antd</code>  的代码并且使用 <code>npm install</code> 安装完依赖后，你还可以运行下面几个常用的命令：</p>\n<ol>\n<li><code>npm run site:start</code> 在本地运行 <code>NG-ZORRO</code> 的网站。</li>\n<li><code>npm run lint</code> 检查代码风格。</li>\n<li><code>npm run test</code> 运行测试。</li>\n<li><code>npm run generate</code> 构建 <code>ng-zorro-antd</code> 到 <code>publish</code> 目录。</li>\n</ol>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/contributing-zh.ts":
/*!**********************************************!*\
  !*** ./site/src/app/docs/contributing-zh.ts ***!
  \**********************************************/
/*! exports provided: NzDocContributingZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocContributingZhComponent", function() { return NzDocContributingZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocContributingZhComponent = /** @class */ (function () {
    function NzDocContributingZhComponent() {
    }
    NzDocContributingZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocContributingZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-contributing-zh',
            template: __webpack_require__(/*! ./contributing-zh.html */ "./site/src/app/docs/contributing-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocContributingZhComponent);
    return NzDocContributingZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/customize-theme-en.html":
/*!***************************************************!*\
  !*** ./site/src/app/docs/customize-theme-en.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Customize Theme<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/customize-theme.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#less-variables\" nzTitle=\"Less variables\"></nz-link><nz-link nzHref=\"#local-deployment-fonts\" nzTitle=\"Local deployment fonts\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.</p>\n<p><img src=\"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png\" alt=\"\"></p>\n<h2 id=\"less-variables\"><span>Less variables</span><a onclick=\"window.location.hash = 'less-variables'\" class=\"anchor\">#</a></h2><p>We are using <a href=\"http://lesscss.org/\">Less</a> as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.</p>\n<blockquote>\n<p>You can use the theme define file of react version in ng-zorro-antd too.</p>\n</blockquote>\n<h3 id=\"customize-theme-with-schematics\"><span>Customize theme with schematics</span><a onclick=\"window.location.hash = 'customize-theme-with-schematics'\" class=\"anchor\">#</a></h3><p>Run <code>ng add ng-zorro-antd --theme</code>，then modified the file <code>src/theme.less</code>.</p>\n<blockquote>\n<p>Note: <code>ng add ng-zorro-antd --theme</code> will <a href=\"https://github.com/angular/angular-cli/issues/10430\">downgrade</a> the version of <code>less</code> to <code>2.7</code>.</p>\n</blockquote>\n<h3 id=\"without-schematics\"><span>Without schematics</span><a onclick=\"window.location.hash = 'without-schematics'\" class=\"anchor\">#</a></h3><p>Create a standalone less file named <code>theme.less</code> in <code>src</code> folder, and add the path of it to the list of <code>styles</code> in <code>angular.json</code> file.</p>\n<blockquote>\n<p>Note: You have to <a href=\"https://github.com/angular/angular-cli/issues/10430\">downgrade</a> the version of <code>less</code> to <code>2.7</code>.</p>\n</blockquote>\n<pre><code class=\"lang-json\">...\n  <span class=\"token property\">\"styles\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    ...\n    <span class=\"token string\">\"src/theme.less\"</span>\n    ...\n  <span class=\"token punctuation\">]</span>\n...\n</code></pre>\n<p>Here is an example of <code>theme.less</code></p>\n<blockquote>\n<p>The base color is changed to <code>#f5222d</code> in the example below.</p>\n</blockquote>\n<pre><code class=\"lang-css\">// -------- import official less file -----------\n<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"../node_modules/ng-zorro-antd/src/ng-zorro-antd.less\"</span><span class=\"token punctuation\">;</span></span>\n\n// -------- override less var -----------\n<span class=\"token atrule\"><span class=\"token rule\">@primary-color</span>          <span class=\"token punctuation\">:</span> #f5222d<span class=\"token punctuation\">;</span></span>\n</code></pre>\n<p>All less vars can be checked <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/site_scripts/_site/src/theme.less\">here</a> is a sample of theme define file.</p>\n<h2 id=\"local-deployment-fonts\"><span>Local deployment fonts</span><a onclick=\"window.location.hash = 'local-deployment-fonts'\" class=\"anchor\">#</a></h2><p>You can modify <code>@icon-url</code> to make a locally deployed version of the icon font, the newest iconfont file could be downloaded <a href=\"https://github.com/ant-design/ant-design/releases/download/resource/iconfont-3.x.zip\">here</a>.\nHere is an example set icon url to the folder <code>assets/fonts</code></p>\n<pre><code class=\"lang-css\">// -------- import official less file -----------\n<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"../node_modules/ng-zorro-antd/src/ng-zorro-antd.less\"</span><span class=\"token punctuation\">;</span></span>\n\n// -------- override less var -----------\n<span class=\"token atrule\"><span class=\"token rule\">@icon-url</span>               <span class=\"token punctuation\">:</span> <span class=\"token string\">\"/assets/fonts/iconfont\"</span><span class=\"token punctuation\">;</span></span>\n</code></pre>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/customize-theme-en.ts":
/*!*************************************************!*\
  !*** ./site/src/app/docs/customize-theme-en.ts ***!
  \*************************************************/
/*! exports provided: NzDocCustomizeThemeEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocCustomizeThemeEnComponent", function() { return NzDocCustomizeThemeEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocCustomizeThemeEnComponent = /** @class */ (function () {
    function NzDocCustomizeThemeEnComponent() {
    }
    NzDocCustomizeThemeEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocCustomizeThemeEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-customize-theme-en',
            template: __webpack_require__(/*! ./customize-theme-en.html */ "./site/src/app/docs/customize-theme-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocCustomizeThemeEnComponent);
    return NzDocCustomizeThemeEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/customize-theme-zh.html":
/*!***************************************************!*\
  !*** ./site/src/app/docs/customize-theme-zh.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>定制主题<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/customize-theme.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#定制方式\" nzTitle=\"定制方式\"></nz-link><nz-link nzHref=\"#本地部署字体\" nzTitle=\"本地部署字体\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。</p>\n<p><img src=\"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png\" alt=\"\"></p>\n<h2 id=\"定制方式\"><span>定制方式</span><a onclick=\"window.location.hash = '定制方式'\" class=\"anchor\">#</a></h2><p>Ant Design 的样式使用了 <a href=\"http://lesscss.org/\">Less</a> 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，<a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/style/themes/default.less\">默认样式变量</a></p>\n<blockquote>\n<p>Ant Design React 的主题定制文件在 <code>ng-zorro-antd</code> 中同样可以使用。</p>\n</blockquote>\n<h3 id=\"初始化项目时定制主题\"><span>初始化项目时定制主题</span><a onclick=\"window.location.hash = '初始化项目时定制主题'\" class=\"anchor\">#</a></h3><p>在初始化项目时 <code>ng add ng-zorro-antd --theme</code> 即可自动配置好自定义主题的相关文件，修改 <code>src/theme.less</code> 文件内容就可以自定义主题。</p>\n<blockquote>\n<p>注意：使用 <code>ng add ng-zorro-antd --theme</code> 时会<a href=\"https://github.com/angular/angular-cli/issues/10430\">自动</a>降级 <code>less</code> 到 <code>2.7</code> 版本</p>\n</blockquote>\n<h3 id=\"手动修改\"><span>手动修改</span><a onclick=\"window.location.hash = '手动修改'\" class=\"anchor\">#</a></h3><p>在 <code>src</code> 目录下建立一个单独的 <code>theme.less</code> 文件，在 <code>angular.json</code> 文件的 <code>styles</code> 列表加入该文件</p>\n<blockquote>\n<p>注意：由于 <code>less</code> 在 <code>3.0</code> 以上版本默认禁用了 <code>javascriptEnabled</code>，需要手动降级 <code>less</code> 到 <code>2.7</code> 版本</p>\n</blockquote>\n<pre><code class=\"lang-json\">...\n  <span class=\"token property\">\"styles\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    ...\n    <span class=\"token string\">\"src/theme.less\"</span>\n    ...\n  <span class=\"token punctuation\">]</span>\n...\n</code></pre>\n<p><code>theme.less</code> 样例如下</p>\n<blockquote>\n<p>在样例中通过修改 <code>@primary-color</code> 的数值将 <code>ng-zorro-antd</code> 的基础色修改为 <code>#f5222d</code>，开发者可以根据实际需求自由修改。</p>\n</blockquote>\n<pre><code class=\"lang-css\">// -------- 引入官方提供的 less 样式入口文件 -----------\n<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"../node_modules/ng-zorro-antd/src/ng-zorro-antd.less\"</span><span class=\"token punctuation\">;</span></span>\n\n// -------- 自定义参数覆盖 -----------\n<span class=\"token atrule\"><span class=\"token rule\">@primary-color</span>          <span class=\"token punctuation\">:</span> #f5222d<span class=\"token punctuation\">;</span></span>\n</code></pre>\n<p>全部可被自定义 less 变量可以参考 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/site_scripts/_site/src/theme.less\">这里</a>。</p>\n<h2 id=\"本地部署字体\"><span>本地部署字体</span><a onclick=\"window.location.hash = '本地部署字体'\" class=\"anchor\">#</a></h2><p>在 <code>src/theme.less</code> 文件中修改 <code>@icon-url</code> 变量， 可以将字体部署到本地，最新的 iconfont 可以在 <a href=\"https://github.com/ant-design/ant-design/releases/download/resource/iconfont-3.x.zip\">这里</a> 下载。</p>\n<p>例如通过以下设置可以将字体文件的部署位置指向 <code>assets/fonts</code> 文件夹下的 <code>iconfont</code> 文件</p>\n<pre><code class=\"lang-css\">// -------- 引入官方提供的 less 样式入口文件 -----------\n<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"../node_modules/ng-zorro-antd/src/ng-zorro-antd.less\"</span><span class=\"token punctuation\">;</span></span>\n\n// -------- 自定义参数覆盖 -----------\n<span class=\"token atrule\"><span class=\"token rule\">@icon-url</span>               <span class=\"token punctuation\">:</span> <span class=\"token string\">\"/assets/fonts/iconfont\"</span><span class=\"token punctuation\">;</span></span>\n</code></pre>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/customize-theme-zh.ts":
/*!*************************************************!*\
  !*** ./site/src/app/docs/customize-theme-zh.ts ***!
  \*************************************************/
/*! exports provided: NzDocCustomizeThemeZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocCustomizeThemeZhComponent", function() { return NzDocCustomizeThemeZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocCustomizeThemeZhComponent = /** @class */ (function () {
    function NzDocCustomizeThemeZhComponent() {
    }
    NzDocCustomizeThemeZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocCustomizeThemeZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-customize-theme-zh',
            template: __webpack_require__(/*! ./customize-theme-zh.html */ "./site/src/app/docs/customize-theme-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocCustomizeThemeZhComponent);
    return NzDocCustomizeThemeZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/faq-en.html":
/*!***************************************!*\
  !*** ./site/src/app/docs/faq-en.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>FAQ<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/faq.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      \n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>This article has not been translated, hope that your can PR to translated it.</p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/faq-en.ts":
/*!*************************************!*\
  !*** ./site/src/app/docs/faq-en.ts ***!
  \*************************************/
/*! exports provided: NzDocFaqEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocFaqEnComponent", function() { return NzDocFaqEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocFaqEnComponent = /** @class */ (function () {
    function NzDocFaqEnComponent() {
    }
    NzDocFaqEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocFaqEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-faq-en',
            template: __webpack_require__(/*! ./faq-en.html */ "./site/src/app/docs/faq-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocFaqEnComponent);
    return NzDocFaqEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/faq-zh.html":
/*!***************************************!*\
  !*** ./site/src/app/docs/faq-zh.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>常见问题<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/faq.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      \n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><h3 id=\"为什么不提供模块单独引入\"><span>为什么不提供模块单独引入</span><a onclick=\"window.location.hash = '为什么不提供模块单独引入'\" class=\"anchor\">#</a></h3><p>事实上，从 <code>ng-zorro-antd</code> 的第一个版本开始，所有的 <code>ng-zorro-antd</code> 代码就完全由 TypeScript 编写，打包时会根据代码中使用的模块 Tree Shaking，未使用的模块并不会打包进生成的应用中，因此单模块引入是完全没有任何必要的。</p>\n<p><img src=\"https://img.alicdn.com/tfs/TB1D8MXdTtYBeNjy1XdXXXXyVXa-2864-1592.jpg\" alt=\"\"></p>\n<h3 id=\"有些特性为什么不会被支持\"><span>有些特性为什么不会被支持</span><a onclick=\"window.location.hash = '有些特性为什么不会被支持'\" class=\"anchor\">#</a></h3><p><code>ng-zorro-antd</code> 是 Angular 版本 Ant Design 的实现，这意味着只有 Ant Design 支持的交互、功能 才会被 <code>ng-zorro-antd</code> 实现。</p>\n<h3 id=\"打包出来的文件太大\"><span>打包出来的文件太大</span><a onclick=\"window.location.hash = '打包出来的文件太大'\" class=\"anchor\">#</a></h3><p>首先请确定使用了 <code>ng build --prod</code> 正确的方式进行了打包，如果除 <code>ng-zorro-antd</code> 之外还引入了其他第三方组件库，你可以通过 <code>ng build --prod --sourcemaps</code> 命令生成 sourcemap 文件后，再通过 source-map-explorer 检查每个模块所占用的体积，具体操作可以参考<a href=\"https://angular.io/guide/deployment#inspect-the-bundles\">官方文档</a>。</p>\n<h3 id=\"浏览器兼容性问题\"><span>浏览器兼容性问题</span><a onclick=\"window.location.hash = '浏览器兼容性问题'\" class=\"anchor\">#</a></h3><p>首先请确定浏览器版本得到了 Angular 的<a href=\"https://github.com/angular/angular\">官方支持</a>，并正确引入了 <a href=\"https://angular.io/guide/browser-support\">polyfill</a> 文件，另外有些组件的部分使用方式不支持部分浏览器（例如 flex显示方式），如果不是以上问题，请提 ISSUE 给我们。</p>\n<h3 id=\"数据修改后页面为什么没有更新\"><span>数据修改后页面为什么没有更新</span><a onclick=\"window.location.hash = '数据修改后页面为什么没有更新'\" class=\"anchor\">#</a></h3><p>请确认按照正确方式使用了 <a href=\"https://angular.io/guide/lifecycle-hooks#onchanges\">Angular</a></p>\n<h3 id=\"为什么我的-issue-会被关闭\"><span>为什么我的 ISSUE 会被关闭</span><a onclick=\"window.location.hash = '为什么我的-issue-会被关闭'\" class=\"anchor\">#</a></h3><p>ISSUE 列表是为了 开发者 和 用户 追踪相关的开发进度而设计的，这意味 ISSUE 只接受 bug 报告或是新功能请求 (feature requests)，这意味着我们不接受用法问题。\n另外为了给予 更具体的工作更高的优先级和提高 ISSUE 处理的效率，未按照 格式提交的 ISSUE 也将会被立刻自动关闭。</p>\n<h3 id=\"angular的相关问题在哪里提问\"><span>Angular的相关问题在哪里提问</span><a onclick=\"window.location.hash = 'angular的相关问题在哪里提问'\" class=\"anchor\">#</a></h3><p>除了Angular的官方文档和相关的论坛之外，Angular的相关问题可以在 Google 或者 百度 上搜索 <code>关键字 -angularjs</code> 来避免 <code>angularjs</code> 的干扰，例如 <code>angular ngmodel -angularjs</code> 就可以获得 Angular 关于 <code>ngModel</code> 的相关文章。</p>\n<h3 id=\"ng-zorro-与-ant-design-的关系\"><span>NG-ZORRO 与 Ant Design 的关系</span><a onclick=\"window.location.hash = 'ng-zorro-与-ant-design-的关系'\" class=\"anchor\">#</a></h3><p>NG-ZORRO 由阿里计算平台事业部、阿里云等不同部门的一些小伙伴在原业务组件的基础上共同构建而成，整体的设计完全兼容并遵守 Ant Design 的规范，并定期会与 Ant Design React 版本保持功能同步。</p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/faq-zh.ts":
/*!*************************************!*\
  !*** ./site/src/app/docs/faq-zh.ts ***!
  \*************************************/
/*! exports provided: NzDocFaqZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocFaqZhComponent", function() { return NzDocFaqZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocFaqZhComponent = /** @class */ (function () {
    function NzDocFaqZhComponent() {
    }
    NzDocFaqZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocFaqZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-faq-zh',
            template: __webpack_require__(/*! ./faq-zh.html */ "./site/src/app/docs/faq-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocFaqZhComponent);
    return NzDocFaqZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/getting-started-en.html":
/*!***************************************************!*\
  !*** ./site/src/app/docs/getting-started-en.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Getting Started<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/getting-started.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#playground\" nzTitle=\"Playground\"></nz-link><nz-link nzHref=\"#first-local-development\" nzTitle=\"First Local Development\"></nz-link><nz-link nzHref=\"#customized-work-flow\" nzTitle=\"Customized Work Flow\"></nz-link><nz-link nzHref=\"#customization\" nzTitle=\"Customization\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>Ant Design of Angular is dedicated to providing a <strong>good development experience</strong> for programmers.</p>\n<blockquote>\n<p>Before delving into Ant Design Angular, a good knowledge of <a href=\"https://angular.io/\">Angular</a> and <a href=\"http://babeljs.io/docs/learn-es2015/\">JavaScript ES2015</a> is needed.</p>\n</blockquote>\n<h2 id=\"playground\"><span>Playground</span><a onclick=\"window.location.hash = 'playground'\" class=\"anchor\">#</a></h2><p>The following StackBlitz demo is the simplest use case, and it&#39;s also a good habit to fork this demo to provide a re-producible demo while reporting a bug. Please don&#39;t use this demo as a scaffold in production.</p>\n<ul>\n<li><a href=\"https://stackblitz.com/edit/ng-zorro-antd-start?file=src%2Fapp%2Fapp.component.ts\">NG-ZORRO StackBlitz</a></li>\n</ul>\n<h2 id=\"first-local-development\"><span>First Local Development</span><a onclick=\"window.location.hash = 'first-local-development'\" class=\"anchor\">#</a></h2><p>During development, you may need to compile and debug TypeScript code, and even proxy some of the requests to mock data or other external services. All of these can be done with quick feedback provided through hot reloading of changes.</p>\n<p>Such features, together with packaging the production version, are covered in this work flow.</p>\n<h3 id=\"1--installation\"><span>1. Installation</span><a onclick=\"window.location.hash = '1--installation'\" class=\"anchor\">#</a></h3><p>We strongly recommended to develop Angular with <code>@angular/cli</code>, you can install it with the following commands.</p>\n<blockquote>\n<p>Read <a href=\"https://github.com/angular/angular-cli/wiki\">the documentation of <code>Angular CLI</code></a> to explore more features.</p>\n</blockquote>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">npm</span> install -g <span class=\"token function\">@angular/cli</span>\n</code></pre>\n<h3 id=\"2--create-a-new-project\"><span>2. Create a New Project</span><a onclick=\"window.location.hash = '2--create-a-new-project'\" class=\"anchor\">#</a></h3><p>A new project can be created using Angular CLI tools.</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> new PROJECT-NAME\n</code></pre>\n<p><code>@angular/cli</code> will run <code>npm install</code> after a project is created. If it fails, you can run <code>npm install</code> by yourself.</p>\n<h3 id=\"3--install-ng-zorro-antd\"><span>3. Install ng-zorro-antd</span><a onclick=\"window.location.hash = '3--install-ng-zorro-antd'\" class=\"anchor\">#</a></h3><p><code>ng-zorro-antd</code> support init configuration with schematics, you can get more info in the <a href=\"/docs/schematics/en\">schematics</a> part.</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">cd</span> PROJECT-NAME\n$ <span class=\"token function\">ng</span> add <span class=\"token function\">ng-zorro-antd</span> --i18n<span class=\"token operator\">=</span>en_US\n</code></pre>\n<h3 id=\"4--development-&amp;-debugging\"><span>4. Development &amp; Debugging</span><a onclick=\"window.location.hash = '4--development-&amp;-debugging'\" class=\"anchor\">#</a></h3><p>Run your project now, you can see the img below now.</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> serve --port 0 --open\n</code></pre>\n<p><img style=\"display: block;padding: 30px 30%;height: 260px;\" src=\"https://img.alicdn.com/tfs/TB1MGSRv21TBuNjy0FjXXajyXXa-89-131.svg\"></p>\n<h3 id=\"5--building-&amp;-deployment\"><span>5. Building &amp; Deployment</span><a onclick=\"window.location.hash = '5--building-&amp;-deployment'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> build --prod\n</code></pre>\n<p>Entry files will be built and generated in <code>dist</code> directory, where we can deploy it to different environments.</p>\n<h2 id=\"customized-work-flow\"><span>Customized Work Flow</span><a onclick=\"window.location.hash = 'customized-work-flow'\" class=\"anchor\">#</a></h2><p>If you want to customize your work flow, you can use any scaffold available in the Angular ecosystem. If you encounter problems, you can use our <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/integration\">config</a> and modify it.</p>\n<h3 id=\"1--install-ng-zorro-antd\"><span>1. Install ng-zorro-antd</span><a onclick=\"window.location.hash = '1--install-ng-zorro-antd'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\">$ <span class=\"token function\">npm</span> install <span class=\"token function\">ng-zorro-antd</span> --save\n</code></pre>\n<h3 id=\"2--import-module\"><span>2. Import module</span><a onclick=\"window.location.hash = '2--import-module'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> BrowserModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/platform-browser'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> BrowserAnimationsModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/platform-browser/animations'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> NgModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/core'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> FormsModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/forms'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> HttpClientModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common/http'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> NgZorroAntdModule<span class=\"token punctuation\">,</span> NZ_I18N<span class=\"token punctuation\">,</span> en_US <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ng-zorro-antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> AppComponent <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./app.component'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/** config angular i18n **/</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> registerLocaleData <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> en <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common/locales/en'</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">registerLocaleData</span><span class=\"token punctuation\">(</span>en<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n@<span class=\"token function\">NgModule</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">&#123;</span>\n  declarations<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    AppComponent\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  imports<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    BrowserModule<span class=\"token punctuation\">,</span>\n    FormsModule<span class=\"token punctuation\">,</span>\n    HttpClientModule<span class=\"token punctuation\">,</span>\n    BrowserAnimationsModule<span class=\"token punctuation\">,</span>\n    <span class=\"token comment\" spellcheck=\"true\">/** import ng-zorro-antd root module，you should import NgZorroAntdModule instead in sub module **/</span>\n    NgZorroAntdModule\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  bootstrap<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> AppComponent <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\" spellcheck=\"true\">/** config ng-zorro-antd i18n **/</span>\n  providers   <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token punctuation\">&#123;</span> provide<span class=\"token punctuation\">:</span> NZ_I18N<span class=\"token punctuation\">,</span> useValue<span class=\"token punctuation\">:</span> en_US <span class=\"token punctuation\">&#125;</span> <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">&#125;</span><span class=\"token punctuation\">)</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">AppModule</span> <span class=\"token punctuation\">&#123;</span> <span class=\"token punctuation\">&#125;</span>\n</code></pre>\n<h3 id=\"5--add-styles\"><span>5. Add Styles</span><a onclick=\"window.location.hash = '5--add-styles'\" class=\"anchor\">#</a></h3><p>Add <code>node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css</code> in your global style. You can get more info about how to customize styles at <a href=\"/docs/customize-theme/en\">customize theme</a> part.</p>\n<h2 id=\"customization\"><span>Customization</span><a onclick=\"window.location.hash = 'customization'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"/docs/customize-theme/en\">Customize Theme</a></li>\n<li><a href=\"/docs/customize-theme/en\">Local Iconfont</a></li>\n</ul>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/getting-started-en.ts":
/*!*************************************************!*\
  !*** ./site/src/app/docs/getting-started-en.ts ***!
  \*************************************************/
/*! exports provided: NzDocGettingStartedEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocGettingStartedEnComponent", function() { return NzDocGettingStartedEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocGettingStartedEnComponent = /** @class */ (function () {
    function NzDocGettingStartedEnComponent() {
    }
    NzDocGettingStartedEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocGettingStartedEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-getting-started-en',
            template: __webpack_require__(/*! ./getting-started-en.html */ "./site/src/app/docs/getting-started-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocGettingStartedEnComponent);
    return NzDocGettingStartedEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/getting-started-zh.html":
/*!***************************************************!*\
  !*** ./site/src/app/docs/getting-started-zh.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>快速上手<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/getting-started.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#在线演示\" nzTitle=\"在线演示\"></nz-link><nz-link nzHref=\"#第一个本地实例\" nzTitle=\"第一个本地实例\"></nz-link><nz-link nzHref=\"#自行构建\" nzTitle=\"自行构建\"></nz-link><nz-link nzHref=\"#配置主题和字体\" nzTitle=\"配置主题和字体\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>NG-ZORRO 致力于提供给程序员<strong>愉悦</strong>的开发体验。</p>\n<blockquote style=\"border-color: red;\"><p><strong>官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Angular 及配套设施的正确开发方式。如果你刚开始学习前端或者 Angular ，将框架作为你的第一步可能不是最好的主意 —— 掌握好基础知识再来吧！</strong></p></blockquote>\n\n<h2 id=\"在线演示\"><span>在线演示</span><a onclick=\"window.location.hash = '在线演示'\" class=\"anchor\">#</a></h2><p>最简单的使用方式参照以下 StackBlitz 演示，也推荐 Fork 本例来进行 <code>Bug Report</code>，注意不要在实际项目中这样使用。</p>\n<ul>\n<li><a href=\"https://stackblitz.com/edit/ng-zorro-antd-start?file=src%2Fapp%2Fapp.component.ts\">NG-ZORRO StackBlitz</a></li>\n</ul>\n<h2 id=\"第一个本地实例\"><span>第一个本地实例</span><a onclick=\"window.location.hash = '第一个本地实例'\" class=\"anchor\">#</a></h2><p>实际项目开发中，你会需要对 TypeScript 代码的构建、调试、代理、打包部署等一系列工程化的需求。\n我们强烈建议使用官方的 <code>@angular/cli</code> 工具链辅助进行开发，下面我们用一个简单的实例来说明。</p>\n<h3 id=\"1--安装脚手架工具\"><span>1. 安装脚手架工具</span><a onclick=\"window.location.hash = '1--安装脚手架工具'\" class=\"anchor\">#</a></h3><blockquote>\n<p>使用 <code>@angular/cli</code> 前，务必确认 <a href=\"https://nodejs.org/en/\">Node.js</a> 已经升级到 v8.10 或以上，强烈建议升级至最新版本的 <code>@angular/cli</code>。\n如果你想了解更多CLI工具链的功能和命令，建议访问 <a href=\"https://github.com/angular/angular-cli\">Angular CLI</a> 了解更多。</p>\n</blockquote>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">npm</span> install -g <span class=\"token function\">@angular/cli</span>\n</code></pre>\n<h3 id=\"2--创建一个项目\"><span>2. 创建一个项目</span><a onclick=\"window.location.hash = '2--创建一个项目'\" class=\"anchor\">#</a></h3><blockquote>\n<p>在创建项目之前，请确保 <code>@angular/cli</code> 已被成功安装。</p>\n</blockquote>\n<p>执行以下命令，<code>@angular/cli</code> 会在当前目录下新建一个名称为 <code>PROJECT-NAME</code> 的文件夹，并自动安装好相应依赖。</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> new PROJECT-NAME\n</code></pre>\n<h3 id=\"3--初始化配置\"><span>3. 初始化配置</span><a onclick=\"window.location.hash = '3--初始化配置'\" class=\"anchor\">#</a></h3><p>进入项目文件夹，执行以下命令后将自动完成 <code>ng-zorro-antd</code> 的初始化配置，包括引入国际化文件，导入模块，引入样式文件等工作。</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> add <span class=\"token function\">ng-zorro-antd</span>\n</code></pre>\n<p>开发者可以通过增加参数来完成个性化的初始化配置，例如国际化或者自定义主题等，详细可以参考 <a href=\"/docs/schematics/zh\">脚手架</a> 部分。</p>\n<h3 id=\"4--开发调试\"><span>4. 开发调试</span><a onclick=\"window.location.hash = '4--开发调试'\" class=\"anchor\">#</a></h3><p>一键启动调试，运行成功后显示欢迎页面。</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> serve --port 0 --open\n</code></pre>\n<p><img style=\"display: block;padding: 30px 30%;height: 260px;\" src=\"https://img.alicdn.com/tfs/TB1MGSRv21TBuNjy0FjXXajyXXa-89-131.svg\"></p>\n<h3 id=\"5--构建和部署\"><span>5. 构建和部署</span><a onclick=\"window.location.hash = '5--构建和部署'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> build --prod\n</code></pre>\n<p>入口文件会构建到 <code>dist</code> 目录中，你可以自由部署到不同环境中进行引用。</p>\n<h2 id=\"自行构建\"><span>自行构建</span><a onclick=\"window.location.hash = '自行构建'\" class=\"anchor\">#</a></h2><p>如果想自己维护工作流，理论上你可以利用 Angular 生态圈中的 各种脚手架进行开发，如果遇到问题可参考我们所使用的 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/integration\">配置</a> 进行定制。</p>\n<h3 id=\"1--安装组件\"><span>1. 安装组件</span><a onclick=\"window.location.hash = '1--安装组件'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\">$ <span class=\"token function\">npm</span> install <span class=\"token function\">ng-zorro-antd</span> --save\n</code></pre>\n<h3 id=\"2-引入模块\"><span>2.引入模块</span><a onclick=\"window.location.hash = '2-引入模块'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> BrowserModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/platform-browser'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> BrowserAnimationsModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/platform-browser/animations'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> NgModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/core'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> FormsModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/forms'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> HttpClientModule <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common/http'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> NgZorroAntdModule<span class=\"token punctuation\">,</span> NZ_I18N<span class=\"token punctuation\">,</span> zh_CN <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ng-zorro-antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> AppComponent <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./app.component'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/** 配置 angular i18n **/</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> registerLocaleData <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> zh <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common/locales/zh'</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">registerLocaleData</span><span class=\"token punctuation\">(</span>zh<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n@<span class=\"token function\">NgModule</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">&#123;</span>\n  declarations<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    AppComponent\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  imports<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    BrowserModule<span class=\"token punctuation\">,</span>\n    FormsModule<span class=\"token punctuation\">,</span>\n    HttpClientModule<span class=\"token punctuation\">,</span>\n    BrowserAnimationsModule<span class=\"token punctuation\">,</span>\n    <span class=\"token comment\" spellcheck=\"true\">/** 导入 ng-zorro-antd 模块 **/</span>\n    NgZorroAntdModule\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  bootstrap<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> AppComponent <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\" spellcheck=\"true\">/** 配置 ng-zorro-antd 国际化 **/</span>\n  providers   <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token punctuation\">&#123;</span> provide<span class=\"token punctuation\">:</span> NZ_I18N<span class=\"token punctuation\">,</span> useValue<span class=\"token punctuation\">:</span> zh_CN <span class=\"token punctuation\">&#125;</span> <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">&#125;</span><span class=\"token punctuation\">)</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">AppModule</span> <span class=\"token punctuation\">&#123;</span> <span class=\"token punctuation\">&#125;</span>\n\n</code></pre>\n<p>这样就成功在全局引入了 <code>ng-zorro-antd</code>。</p>\n<h3 id=\"3--引入样式\"><span>3. 引入样式</span><a onclick=\"window.location.hash = '3--引入样式'\" class=\"anchor\">#</a></h3><p>在全局样式中引入 <code>node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css</code> 文件。如果需要自定义主题样式，请参考<a href=\"/docs/customize-theme/zh\">自定义主题</a>部分。</p>\n<h2 id=\"配置主题和字体\"><span>配置主题和字体</span><a onclick=\"window.location.hash = '配置主题和字体'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"/docs/customize-theme/zh\">自定义主题</a></li>\n<li><a href=\"/docs/customize-theme/zh\">使用本地字体</a></li>\n</ul>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/getting-started-zh.ts":
/*!*************************************************!*\
  !*** ./site/src/app/docs/getting-started-zh.ts ***!
  \*************************************************/
/*! exports provided: NzDocGettingStartedZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocGettingStartedZhComponent", function() { return NzDocGettingStartedZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocGettingStartedZhComponent = /** @class */ (function () {
    function NzDocGettingStartedZhComponent() {
    }
    NzDocGettingStartedZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocGettingStartedZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-getting-started-zh',
            template: __webpack_require__(/*! ./getting-started-zh.html */ "./site/src/app/docs/getting-started-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocGettingStartedZhComponent);
    return NzDocGettingStartedZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/i18n-en.html":
/*!****************************************!*\
  !*** ./site/src/app/docs/i18n-en.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Internationalization<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/i18n.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#providers\" nzTitle=\"Providers\"></nz-link><nz-link nzHref=\"#service\" nzTitle=\"Service\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>The default language of <code>ng-zorro-antd</code> is Chinese as of yet.\nIf you want to use other languages, you can follow the instructions below.\nYou can also set the language with <code>ng add ng-zorro-antd --i18n=language</code> when creating project.</p>\n<h2 id=\"providers\"><span>Providers</span><a onclick=\"window.location.hash = 'providers'\" class=\"anchor\">#</a></h2><p><code>ng-zorro-antd</code> provides the token of <code>NZ_I18N</code> for configuring antd locale text globally. Besides that，some components of <code>ng-zorro-antd</code>&#39;s locale are coming from <a href=\"https://angular.io/guide/i18n\">Angular i18n</a> which should be provided too.</p>\n<pre><code class=\"lang-typescript\">\n<span class=\"token comment\" spellcheck=\"true\">/** config angular i18n **/</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> registerLocaleData <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> en <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common/locales/en'</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">registerLocaleData</span><span class=\"token punctuation\">(</span>en<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/** config ng-zorro-antd i18n **/</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> NZ_I18N<span class=\"token punctuation\">,</span> en_US <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ng-zorro-antd'</span><span class=\"token punctuation\">;</span>\n\n@<span class=\"token function\">NgModule</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">&#123;</span>\n  <span class=\"token operator\">...</span>\n  imports     <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> NgZorroAntdModule <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  providers   <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token punctuation\">&#123;</span> provide<span class=\"token punctuation\">:</span> NZ_I18N<span class=\"token punctuation\">,</span> useValue<span class=\"token punctuation\">:</span> en_US <span class=\"token punctuation\">&#125;</span> <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">&#125;</span><span class=\"token punctuation\">)</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">AppModule</span> <span class=\"token punctuation\">&#123;</span> <span class=\"token punctuation\">&#125;</span>\n\n</code></pre>\n<h2 id=\"service\"><span>Service</span><a onclick=\"window.location.hash = 'service'\" class=\"anchor\">#</a></h2><p><code>ng-zorro-antd</code> provides the service of  <code>NzI18nService</code> to dynamic change the locale text.</p>\n<pre><code class=\"lang-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> en_US<span class=\"token punctuation\">,</span> NzI18nService <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ng-zorro-antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>\n<span class=\"token keyword\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">private</span> nzI18nService<span class=\"token punctuation\">:</span>NzI18nService<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">&#123;</span>\n<span class=\"token punctuation\">&#125;</span>\n\n<span class=\"token function\">switchLanguage</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">&#123;</span>\n  <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>nzI18nService<span class=\"token punctuation\">.</span><span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span>en_US<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">&#125;</span>\n\n</code></pre>\n<p>Note: <code>en_US</code> is the package name, follow below.</p>\n<p>Supported languages:</p>\n<table>\n<thead>\n<tr>\n<th>Language</th>\n<th>Packagename</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Arabic</td>\n<td>ar_EG</td>\n</tr>\n<tr>\n<td>Bulgarian</td>\n<td>bg_BG</td>\n</tr>\n<tr>\n<td>Catalan</td>\n<td>ca_ES</td>\n</tr>\n<tr>\n<td>Czech</td>\n<td>cs_CZ</td>\n</tr>\n<tr>\n<td>German</td>\n<td>de_DE</td>\n</tr>\n<tr>\n<td>Greek</td>\n<td>el_GR</td>\n</tr>\n<tr>\n<td>English (Global)</td>\n<td>en_GB</td>\n</tr>\n<tr>\n<td>English</td>\n<td>en_US</td>\n</tr>\n<tr>\n<td>Spanish</td>\n<td>es_ES</td>\n</tr>\n<tr>\n<td>Estonian</td>\n<td>et_EE</td>\n</tr>\n<tr>\n<td>Persian</td>\n<td>fa_IR</td>\n</tr>\n<tr>\n<td>Finnish</td>\n<td>fi_FI</td>\n</tr>\n<tr>\n<td>French (Belgium)</td>\n<td>fr_BE</td>\n</tr>\n<tr>\n<td>French (France)</td>\n<td>fr_FR</td>\n</tr>\n<tr>\n<td>Italian</td>\n<td>it_IT</td>\n</tr>\n<tr>\n<td>Icelandic</td>\n<td>is_IS</td>\n</tr>\n<tr>\n<td>Japanese</td>\n<td>ja_JP</td>\n</tr>\n<tr>\n<td>Korean</td>\n<td>ko_KR</td>\n</tr>\n<tr>\n<td>Norwegian</td>\n<td>nb_NO</td>\n</tr>\n<tr>\n<td>Dutch (Belgium)</td>\n<td>nl_BE</td>\n</tr>\n<tr>\n<td>Dutch</td>\n<td>nl_NL</td>\n</tr>\n<tr>\n<td>Polish</td>\n<td>pl_PL</td>\n</tr>\n<tr>\n<td>Portuguese (Brazil)</td>\n<td>pt_BR</td>\n</tr>\n<tr>\n<td>Portuguese</td>\n<td>pt_PT</td>\n</tr>\n<tr>\n<td>Slovak</td>\n<td>sk_SK</td>\n</tr>\n<tr>\n<td>Serbian</td>\n<td>sr_RS</td>\n</tr>\n<tr>\n<td>Swedish</td>\n<td>sv_SE</td>\n</tr>\n<tr>\n<td>Thai</td>\n<td>th_TH</td>\n</tr>\n<tr>\n<td>Turkish</td>\n<td>tr_TR</td>\n</tr>\n<tr>\n<td>Russian</td>\n<td>ru_RU</td>\n</tr>\n<tr>\n<td>Ukrainian</td>\n<td>uk_UA</td>\n</tr>\n<tr>\n<td>Vietnamese</td>\n<td>vi_VN</td>\n</tr>\n<tr>\n<td>Chinese (Simplified)</td>\n<td>zh_CN</td>\n</tr>\n<tr>\n<td>Chinese (Traditional)</td>\n<td>zh_TW</td>\n</tr>\n</tbody>\n</table>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/i18n-en.ts":
/*!**************************************!*\
  !*** ./site/src/app/docs/i18n-en.ts ***!
  \**************************************/
/*! exports provided: NzDocI18nEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocI18nEnComponent", function() { return NzDocI18nEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocI18nEnComponent = /** @class */ (function () {
    function NzDocI18nEnComponent() {
    }
    NzDocI18nEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocI18nEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-i18n-en',
            template: __webpack_require__(/*! ./i18n-en.html */ "./site/src/app/docs/i18n-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocI18nEnComponent);
    return NzDocI18nEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/i18n-zh.html":
/*!****************************************!*\
  !*** ./site/src/app/docs/i18n-zh.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>国际化<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/i18n.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#全局配置\" nzTitle=\"全局配置\"></nz-link><nz-link nzHref=\"#运行时修改\" nzTitle=\"运行时修改\"></nz-link><nz-link nzHref=\"#支持语言\" nzTitle=\"支持语言\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>目前的默认文案是中文，如果需要使用其他语言，可以在初始化时进行配置，也可以在运行中随时修改，可以参考下面的方案。\n你也可以在新建项目时通过 <code>ng add ng-zorro-antd --i18n=语言包</code> 快速设置国际化语言。</p>\n<h2 id=\"全局配置\"><span>全局配置</span><a onclick=\"window.location.hash = '全局配置'\" class=\"anchor\">#</a></h2><p><code>ng-zorro-antd</code> 提供了一个配置型 token <code>NZ_I18N</code> 用于全局配置国际化文案，可以在引入模块时初始化语言。除此之外，<code>ng-zorro-antd</code> 的部分组件依赖了 Angular 自身的<a href=\"https://angular.io/guide/i18n\">国际化支持</a>，需要引入相应的 Angular 语言包。</p>\n<pre><code class=\"lang-typescript\">\n<span class=\"token comment\" spellcheck=\"true\">/** 配置 angular i18n **/</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> registerLocaleData <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> en <span class=\"token keyword\">from</span> <span class=\"token string\">'@angular/common/locales/en'</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">registerLocaleData</span><span class=\"token punctuation\">(</span>en<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/** 配置 ng-zorro-antd 国际化 **/</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> NZ_I18N<span class=\"token punctuation\">,</span> en_US <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ng-zorro-antd'</span><span class=\"token punctuation\">;</span>\n\n@<span class=\"token function\">NgModule</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">&#123;</span>\n  <span class=\"token operator\">...</span>\n  imports     <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> NgZorroAntdModule <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  providers   <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token punctuation\">&#123;</span> provide<span class=\"token punctuation\">:</span> NZ_I18N<span class=\"token punctuation\">,</span> useValue<span class=\"token punctuation\">:</span> en_US <span class=\"token punctuation\">&#125;</span> <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">&#125;</span><span class=\"token punctuation\">)</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">AppModule</span> <span class=\"token punctuation\">&#123;</span> <span class=\"token punctuation\">&#125;</span>\n\n</code></pre>\n<h2 id=\"运行时修改\"><span>运行时修改</span><a onclick=\"window.location.hash = '运行时修改'\" class=\"anchor\">#</a></h2><p><code>ng-zorro-antd</code> 提供了一个服务 <code>NzI18nService</code> 用于动态修改国际化文案。</p>\n<pre><code class=\"lang-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">&#123;</span> en_US<span class=\"token punctuation\">,</span> NzI18nService <span class=\"token punctuation\">&#125;</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ng-zorro-antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>\n<span class=\"token keyword\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">private</span> nzI18nService<span class=\"token punctuation\">:</span>NzI18nService<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">&#123;</span>\n<span class=\"token punctuation\">&#125;</span>\n\n<span class=\"token function\">switchLanguage</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">&#123;</span>\n  <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>nzI18nService<span class=\"token punctuation\">.</span><span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span>en_US<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">&#125;</span>\n\n</code></pre>\n<p>注意：<code>en_US</code> 是语言包名称，以下表格也遵循同样的规则。</p>\n<h2 id=\"支持语言\"><span>支持语言</span><a onclick=\"window.location.hash = '支持语言'\" class=\"anchor\">#</a></h2><table>\n<thead>\n<tr>\n<th>语言</th>\n<th>语言包名称</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>阿拉伯</td>\n<td>ar_EG</td>\n</tr>\n<tr>\n<td>保加利亚语</td>\n<td>bg_BG</td>\n</tr>\n<tr>\n<td>加泰罗尼亚语</td>\n<td>ca_ES</td>\n</tr>\n<tr>\n<td>捷克语</td>\n<td>cs_CZ</td>\n</tr>\n<tr>\n<td>德语</td>\n<td>de_DE</td>\n</tr>\n<tr>\n<td>希腊语</td>\n<td>el_GR</td>\n</tr>\n<tr>\n<td>英语</td>\n<td>en_GB</td>\n</tr>\n<tr>\n<td>英语（美式）</td>\n<td>en_US</td>\n</tr>\n<tr>\n<td>西班牙语</td>\n<td>es_ES</td>\n</tr>\n<tr>\n<td>爱沙尼亚语</td>\n<td>et_EE</td>\n</tr>\n<tr>\n<td>波斯语</td>\n<td>fa_IR</td>\n</tr>\n<tr>\n<td>芬兰语</td>\n<td>fi_FI</td>\n</tr>\n<tr>\n<td>法语（比利时）</td>\n<td>fr_BE</td>\n</tr>\n<tr>\n<td>法语</td>\n<td>fr_FR</td>\n</tr>\n<tr>\n<td>冰岛语</td>\n<td>is_IS</td>\n</tr>\n<tr>\n<td>意大利语</td>\n<td>it_IT</td>\n</tr>\n<tr>\n<td>日语</td>\n<td>ja_JP</td>\n</tr>\n<tr>\n<td>韩语/朝鲜语</td>\n<td>ko_KR</td>\n</tr>\n<tr>\n<td>挪威</td>\n<td>nb_NO</td>\n</tr>\n<tr>\n<td>荷兰语（比利时）</td>\n<td>nl_BE</td>\n</tr>\n<tr>\n<td>荷兰语</td>\n<td>nl_NL</td>\n</tr>\n<tr>\n<td>波兰语</td>\n<td>pl_PL</td>\n</tr>\n<tr>\n<td>葡萄牙语(巴西)</td>\n<td>pt_BR</td>\n</tr>\n<tr>\n<td>葡萄牙语</td>\n<td>pt_PT</td>\n</tr>\n<tr>\n<td>斯洛伐克语</td>\n<td>sk_SK</td>\n</tr>\n<tr>\n<td>塞尔维亚</td>\n<td>sr_RS</td>\n</tr>\n<tr>\n<td>瑞典语</td>\n<td>sv_SE</td>\n</tr>\n<tr>\n<td>泰语</td>\n<td>th_TH</td>\n</tr>\n<tr>\n<td>土耳其语</td>\n<td>tr_TR</td>\n</tr>\n<tr>\n<td>俄罗斯语</td>\n<td>ru_RU</td>\n</tr>\n<tr>\n<td>乌克兰语</td>\n<td>uk_UA</td>\n</tr>\n<tr>\n<td>越南语</td>\n<td>vi_VN</td>\n</tr>\n<tr>\n<td>简体中文</td>\n<td>zh_CN</td>\n</tr>\n<tr>\n<td>繁体中文</td>\n<td>zh_TW</td>\n</tr>\n</tbody>\n</table>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/i18n-zh.ts":
/*!**************************************!*\
  !*** ./site/src/app/docs/i18n-zh.ts ***!
  \**************************************/
/*! exports provided: NzDocI18nZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocI18nZhComponent", function() { return NzDocI18nZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocI18nZhComponent = /** @class */ (function () {
    function NzDocI18nZhComponent() {
    }
    NzDocI18nZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocI18nZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-i18n-zh',
            template: __webpack_require__(/*! ./i18n-zh.html */ "./site/src/app/docs/i18n-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocI18nZhComponent);
    return NzDocI18nZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/index.module.ts":
/*!*******************************************!*\
  !*** ./site/src/app/docs/index.module.ts ***!
  \*******************************************/
/*! exports provided: NzDocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocsModule", function() { return NzDocsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/src/app/share/share.module.ts");
/* harmony import */ var _changelog_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog-en */ "./site/src/app/docs/changelog-en.ts");
/* harmony import */ var _changelog_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changelog-zh */ "./site/src/app/docs/changelog-zh.ts");
/* harmony import */ var _contributing_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contributing-en */ "./site/src/app/docs/contributing-en.ts");
/* harmony import */ var _contributing_zh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contributing-zh */ "./site/src/app/docs/contributing-zh.ts");
/* harmony import */ var _customize_theme_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customize-theme-en */ "./site/src/app/docs/customize-theme-en.ts");
/* harmony import */ var _customize_theme_zh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customize-theme-zh */ "./site/src/app/docs/customize-theme-zh.ts");
/* harmony import */ var _faq_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faq-en */ "./site/src/app/docs/faq-en.ts");
/* harmony import */ var _faq_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq-zh */ "./site/src/app/docs/faq-zh.ts");
/* harmony import */ var _getting_started_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getting-started-en */ "./site/src/app/docs/getting-started-en.ts");
/* harmony import */ var _getting_started_zh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getting-started-zh */ "./site/src/app/docs/getting-started-zh.ts");
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./i18n-en */ "./site/src/app/docs/i18n-en.ts");
/* harmony import */ var _i18n_zh__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./i18n-zh */ "./site/src/app/docs/i18n-zh.ts");
/* harmony import */ var _introduce_en__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./introduce-en */ "./site/src/app/docs/introduce-en.ts");
/* harmony import */ var _introduce_zh__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./introduce-zh */ "./site/src/app/docs/introduce-zh.ts");
/* harmony import */ var _recommendation_en__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recommendation-en */ "./site/src/app/docs/recommendation-en.ts");
/* harmony import */ var _recommendation_zh__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./recommendation-zh */ "./site/src/app/docs/recommendation-zh.ts");
/* harmony import */ var _schematics_en__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./schematics-en */ "./site/src/app/docs/schematics-en.ts");
/* harmony import */ var _schematics_zh__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./schematics-zh */ "./site/src/app/docs/schematics-zh.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var NzDocsModule = /** @class */ (function () {
    function NzDocsModule() {
    }
    NzDocsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'changelog/zh', component: _changelog_zh__WEBPACK_IMPORTED_MODULE_4__["NzDocChangelogZhComponent"] },
                    { path: 'changelog/en', component: _changelog_en__WEBPACK_IMPORTED_MODULE_3__["NzDocChangelogEnComponent"] },
                    { path: 'contributing/zh', component: _contributing_zh__WEBPACK_IMPORTED_MODULE_6__["NzDocContributingZhComponent"] },
                    { path: 'contributing/en', component: _contributing_en__WEBPACK_IMPORTED_MODULE_5__["NzDocContributingEnComponent"] },
                    { path: 'customize-theme/zh', component: _customize_theme_zh__WEBPACK_IMPORTED_MODULE_8__["NzDocCustomizeThemeZhComponent"] },
                    { path: 'customize-theme/en', component: _customize_theme_en__WEBPACK_IMPORTED_MODULE_7__["NzDocCustomizeThemeEnComponent"] },
                    { path: 'faq/zh', component: _faq_zh__WEBPACK_IMPORTED_MODULE_10__["NzDocFaqZhComponent"] },
                    { path: 'faq/en', component: _faq_en__WEBPACK_IMPORTED_MODULE_9__["NzDocFaqEnComponent"] },
                    { path: 'getting-started/zh', component: _getting_started_zh__WEBPACK_IMPORTED_MODULE_12__["NzDocGettingStartedZhComponent"] },
                    { path: 'getting-started/en', component: _getting_started_en__WEBPACK_IMPORTED_MODULE_11__["NzDocGettingStartedEnComponent"] },
                    { path: 'i18n/zh', component: _i18n_zh__WEBPACK_IMPORTED_MODULE_14__["NzDocI18nZhComponent"] },
                    { path: 'i18n/en', component: _i18n_en__WEBPACK_IMPORTED_MODULE_13__["NzDocI18nEnComponent"] },
                    { path: 'introduce/zh', component: _introduce_zh__WEBPACK_IMPORTED_MODULE_16__["NzDocIntroduceZhComponent"] },
                    { path: 'introduce/en', component: _introduce_en__WEBPACK_IMPORTED_MODULE_15__["NzDocIntroduceEnComponent"] },
                    { path: 'recommendation/zh', component: _recommendation_zh__WEBPACK_IMPORTED_MODULE_18__["NzDocRecommendationZhComponent"] },
                    { path: 'recommendation/en', component: _recommendation_en__WEBPACK_IMPORTED_MODULE_17__["NzDocRecommendationEnComponent"] },
                    { path: 'schematics/zh', component: _schematics_zh__WEBPACK_IMPORTED_MODULE_20__["NzDocSchematicsZhComponent"] },
                    { path: 'schematics/en', component: _schematics_en__WEBPACK_IMPORTED_MODULE_19__["NzDocSchematicsEnComponent"] },
                ])
            ],
            declarations: [
                _changelog_zh__WEBPACK_IMPORTED_MODULE_4__["NzDocChangelogZhComponent"],
                _changelog_en__WEBPACK_IMPORTED_MODULE_3__["NzDocChangelogEnComponent"],
                _contributing_zh__WEBPACK_IMPORTED_MODULE_6__["NzDocContributingZhComponent"],
                _contributing_en__WEBPACK_IMPORTED_MODULE_5__["NzDocContributingEnComponent"],
                _customize_theme_zh__WEBPACK_IMPORTED_MODULE_8__["NzDocCustomizeThemeZhComponent"],
                _customize_theme_en__WEBPACK_IMPORTED_MODULE_7__["NzDocCustomizeThemeEnComponent"],
                _faq_zh__WEBPACK_IMPORTED_MODULE_10__["NzDocFaqZhComponent"],
                _faq_en__WEBPACK_IMPORTED_MODULE_9__["NzDocFaqEnComponent"],
                _getting_started_zh__WEBPACK_IMPORTED_MODULE_12__["NzDocGettingStartedZhComponent"],
                _getting_started_en__WEBPACK_IMPORTED_MODULE_11__["NzDocGettingStartedEnComponent"],
                _i18n_zh__WEBPACK_IMPORTED_MODULE_14__["NzDocI18nZhComponent"],
                _i18n_en__WEBPACK_IMPORTED_MODULE_13__["NzDocI18nEnComponent"],
                _introduce_zh__WEBPACK_IMPORTED_MODULE_16__["NzDocIntroduceZhComponent"],
                _introduce_en__WEBPACK_IMPORTED_MODULE_15__["NzDocIntroduceEnComponent"],
                _recommendation_zh__WEBPACK_IMPORTED_MODULE_18__["NzDocRecommendationZhComponent"],
                _recommendation_en__WEBPACK_IMPORTED_MODULE_17__["NzDocRecommendationEnComponent"],
                _schematics_zh__WEBPACK_IMPORTED_MODULE_20__["NzDocSchematicsZhComponent"],
                _schematics_en__WEBPACK_IMPORTED_MODULE_19__["NzDocSchematicsEnComponent"],
            ]
        })
    ], NzDocsModule);
    return NzDocsModule;
}());



/***/ }),

/***/ "./site/src/app/docs/introduce-en.html":
/*!*********************************************!*\
  !*** ./site/src/app/docs/introduce-en.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Ant Design of Angular<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/introduce.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#features\" nzTitle=\"Features\"></nz-link><nz-link nzHref=\"#environment-support\" nzTitle=\"Environment Support\"></nz-link><nz-link nzHref=\"#version\" nzTitle=\"Version\"></nz-link><nz-link nzHref=\"#angular-support\" nzTitle=\"Angular Support\"></nz-link><nz-link nzHref=\"#design-specification\" nzTitle=\"Design Specification\"></nz-link><nz-link nzHref=\"#installation\" nzTitle=\"Installation\"></nz-link><nz-link nzHref=\"#companies-using-ng-zorro-antd\" nzTitle=\"Companies using ng-zorro-antd\"></nz-link><nz-link nzHref=\"#contributing\" nzTitle=\"Contributing\"></nz-link><nz-link nzHref=\"#need-help\" nzTitle=\"Need Help?\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>Following the Ant Design specification, we developed a Angular UI library <code>ng-zorro-antd</code> that contains a set of high quality components and demos for building rich, interactive user interfaces.</p>\n<div class=\"pic-plus\">\n  <img width=\"150\" src=\"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg\">\n  <span>+</span>\n  <img height=\"150\" src=\"https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg\">\n</div>\n\n<style>\n.pic-plus > * &#123;\n  display: inline-block !important;\n  vertical-align: middle;\n&#125;\n.pic-plus span &#123;\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n&#125;\n</style>\n\n<h2 id=\"features\"><span>Features</span><a onclick=\"window.location.hash = 'features'\" class=\"anchor\">#</a></h2><ul>\n<li>An enterprise-class UI design language for web applications.</li>\n<li>A set of high-quality Angular components out of the box.</li>\n<li>Written in TypeScript with complete defined types.</li>\n</ul>\n<h2 id=\"environment-support\"><span>Environment Support</span><a onclick=\"window.location.hash = 'environment-support'\" class=\"anchor\">#</a></h2><p>Modern browsers and Internet Explorer 9+ (with <a href=\"https://angular.io/guide/browser-support\">polyfills</a>)</p>\n<h2 id=\"version\"><span>Version</span><a onclick=\"window.location.hash = 'version'\" class=\"anchor\">#</a></h2><p><a href=\"https://www.npmjs.org/package/ng-zorro-antd\"><img src=\"https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square\" alt=\"npm package\"></a></p>\n<h2 id=\"angular-support\"><span>Angular Support</span><a onclick=\"window.location.hash = 'angular-support'\" class=\"anchor\">#</a></h2><p>Now Supports Angular <code>^6.0.0</code>.</p>\n<h2 id=\"design-specification\"><span>Design Specification</span><a onclick=\"window.location.hash = 'design-specification'\" class=\"anchor\">#</a></h2><p><code>ng-zorro-antd</code> synchronizes design specification with <a href=\"https://ant.design/docs/spec/introduce\">Ant Design</a> on a regular basis, you can check the <a href=\"https://nz-styles-syncer.now.sh/\">log</a> online.</p>\n<h2 id=\"installation\"><span>Installation</span><a onclick=\"window.location.hash = 'installation'\" class=\"anchor\">#</a></h2><p><strong>We recommend using <code>@angular/cli</code> to install</strong>，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of angular packages and tooling.</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> new PROJECT_NAME\n$ <span class=\"token function\">cd</span> PROJECT_NAME\n$ <span class=\"token function\">ng</span> add <span class=\"token function\">ng-zorro-antd</span> --i18n<span class=\"token operator\">=</span>en_US\n</code></pre>\n<blockquote>\n<p>More information about <code>@angular/cli</code> <a href=\"https://github.com/angular/angular-cli\">here</a>.</p>\n</blockquote>\n<p>You can also install <code>ng-zorro-antd</code> with npm or yarn</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">npm</span> install <span class=\"token function\">ng-zorro-antd</span>\n</code></pre>\n<h2 id=\"companies-using-ng-zorro-antd\"><span>Companies using ng-zorro-antd</span><a onclick=\"window.location.hash = 'companies-using-ng-zorro-antd'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"http://www.alibaba.com/\">Alibaba</a></li>\n<li><a href=\"http://www.aliyun.com/\">Aliyun</a></li>\n</ul>\n<blockquote>\n<p>If your company or product uses ng-zorro-antd, let us know <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1142\">here</a>!</p>\n</blockquote>\n<h2 id=\"contributing\"><span>Contributing</span><a onclick=\"window.location.hash = 'contributing'\" class=\"anchor\">#</a></h2><p>Please read our <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md\">CONTRIBUTING.md</a> first.</p>\n<p>If you&#39;d like to help us improve ng-zorro-antd, just create a <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/pulls\">Pull Request</a>. Feel free to report bugs and issues <a href=\"http://ng.ant.design/issue-helper/#/en\">here</a>.</p>\n<blockquote>\n<p>If you&#39;re new to posting issues, we ask that you read <a href=\"http://www.catb.org/~esr/faqs/smart-questions.html\"><em>How To Ask Questions The Smart Way</em></a>(This guide does not provide actual support services for this project!) and <a href=\"https://github.com/seajs/seajs/issues/545\">How to Ask a Question in Open Source Community</a> and <a href=\"http://www.chiark.greenend.org.uk/~sgtatham/bugs.html\">How to Report Bugs Effectively</a> prior to posting. Well written bug reports help us help you!</p>\n</blockquote>\n<h2 id=\"need-help\"><span>Need Help?</span><a onclick=\"window.location.hash = 'need-help'\" class=\"anchor\">#</a></h2><p>For questions on how to use ng-zorro-antd, please post questions to <a href=\"http://stackoverflow.com/questions/tagged/ng-zorro\"><img alt=\"Stack Overflow\" src=\"https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66\" width=\"140\" /></a> using the <code>ng-zorro</code> tag. If you&#39;re not finding what you need on stackoverflow, you can find us on <a href=\"https://gitter.im/ng-zorro/ng-zorro-antd\"><img src=\"https://img.shields.io/gitter/room/ng-zorro/ng-zorro-antd.svg?style=flat-square\" alt=\"Gitter\"></a> as well.</p>\n<p>As always, we encourage experienced users to help those who are not familiar with <code>ng-zorro-antd</code>!</p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/introduce-en.ts":
/*!*******************************************!*\
  !*** ./site/src/app/docs/introduce-en.ts ***!
  \*******************************************/
/*! exports provided: NzDocIntroduceEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocIntroduceEnComponent", function() { return NzDocIntroduceEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocIntroduceEnComponent = /** @class */ (function () {
    function NzDocIntroduceEnComponent() {
    }
    NzDocIntroduceEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocIntroduceEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-introduce-en',
            template: __webpack_require__(/*! ./introduce-en.html */ "./site/src/app/docs/introduce-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocIntroduceEnComponent);
    return NzDocIntroduceEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/introduce-zh.html":
/*!*********************************************!*\
  !*** ./site/src/app/docs/introduce-zh.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Ant Design of Angular<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/introduce.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#特性\" nzTitle=\"特性\"></nz-link><nz-link nzHref=\"#支持环境\" nzTitle=\"支持环境\"></nz-link><nz-link nzHref=\"#当前版本\" nzTitle=\"当前版本\"></nz-link><nz-link nzHref=\"#支持-angular-版本\" nzTitle=\"支持 Angular 版本\"></nz-link><nz-link nzHref=\"#设计规范\" nzTitle=\"设计规范\"></nz-link><nz-link nzHref=\"#安装\" nzTitle=\"安装\"></nz-link><nz-link nzHref=\"#链接\" nzTitle=\"链接\"></nz-link><nz-link nzHref=\"#谁在使用\" nzTitle=\"谁在使用\"></nz-link><nz-link nzHref=\"#如何贡献\" nzTitle=\"如何贡献\"></nz-link><nz-link nzHref=\"#社区互助\" nzTitle=\"社区互助\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>这里是 Ant Design 的 Angular 实现，开发和服务于企业级后台产品。</p>\n<div class=\"pic-plus\">\n  <img width=\"150\" src=\"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg\">\n  <span>+</span>\n  <img height=\"150\" src=\"https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg\">\n</div>\n\n<style>\n.pic-plus > * &#123;\n  display: inline-block !important;\n  vertical-align: middle;\n&#125;\n.pic-plus span &#123;\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n&#125;\n</style>\n\n\n<h2 id=\"特性\"><span>特性</span><a onclick=\"window.location.hash = '特性'\" class=\"anchor\">#</a></h2><ul>\n<li>提炼自企业级中后台产品的交互语言和视觉风格。</li>\n<li>开箱即用的高质量 Angular 组件。</li>\n<li>使用 TypeScript 构建，提供完整的类型定义文件。</li>\n</ul>\n<h2 id=\"支持环境\"><span>支持环境</span><a onclick=\"window.location.hash = '支持环境'\" class=\"anchor\">#</a></h2><p>现代浏览器和 IE9 及以上（需要 <a href=\"https://angular.io/guide/browser-support\">polyfills</a>）。</p>\n<h2 id=\"当前版本\"><span>当前版本</span><a onclick=\"window.location.hash = '当前版本'\" class=\"anchor\">#</a></h2><p><a href=\"https://www.npmjs.org/package/ng-zorro-antd\"><img src=\"https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square\" alt=\"npm package\"></a></p>\n<h2 id=\"支持-angular-版本\"><span>支持 Angular 版本</span><a onclick=\"window.location.hash = '支持-angular-版本'\" class=\"anchor\">#</a></h2><p>目前支持 Angular <code>^6.0.0</code> 版本。</p>\n<h2 id=\"设计规范\"><span>设计规范</span><a onclick=\"window.location.hash = '设计规范'\" class=\"anchor\">#</a></h2><p>与 Ant Design 设计规范定期同步，你可以在线查看<a href=\"https://nz-styles-syncer.now.sh/\">同步日志</a>。</p>\n<h2 id=\"安装\"><span>安装</span><a onclick=\"window.location.hash = '安装'\" class=\"anchor\">#</a></h2><p>我们强烈推荐官方的 <code>@angular/cli</code> 工具链辅助进行开发，在实际项目开发中，它可以很好的满足对 TypeScript 代码的构建、调试、代理、打包部署等一系列工程化的需求。</p>\n<pre><code class=\"lang-bash\">$ <span class=\"token function\">ng</span> new PROJECT_NAME\n$ <span class=\"token function\">cd</span> PROJECT_NAME\n$ <span class=\"token function\">ng</span> add <span class=\"token function\">ng-zorro-antd</span>\n</code></pre>\n<blockquote>\n<p>如果你想了解更多CLI工具链的功能和命令，建议访问 <a href=\"https://github.com/angular/angular-cli\">Angular CLI</a> 了解更多</p>\n</blockquote>\n<h2 id=\"链接\"><span>链接</span><a onclick=\"window.location.hash = '链接'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"http://ng.ant.design\">首页</a></li>\n<li><a href=\"https://angular.io/\">Angular官方文档</a></li>\n<li><a href=\"https://cli.angular.io/\">开发脚手架</a></li>\n<li><a href=\"https://www.typescriptlang.org/\">TypeScript</a></li>\n<li><a href=\"https://github.com/ReactiveX/rxjs\">RxJS</a></li>\n</ul>\n<h2 id=\"谁在使用\"><span>谁在使用</span><a onclick=\"window.location.hash = '谁在使用'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"http://www.alibaba.com/\">阿里巴巴</a></li>\n<li><a href=\"http://www.aliyun.com/\">阿里云</a></li>\n</ul>\n<blockquote>\n<p>如果你的公司和产品使用了 NG-ZORRO，欢迎到 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/issues/1142\">这里</a> 留言。</p>\n</blockquote>\n<h2 id=\"如何贡献\"><span>如何贡献</span><a onclick=\"window.location.hash = '如何贡献'\" class=\"anchor\">#</a></h2><p>在任何形式的参与前，请先阅读 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md\">贡献者文档</a>。如果你希望参与贡献，欢迎 <a href=\"https://github.com/NG-ZORRO/ng-zorro-antd/pulls\">Pull Request</a>，或给我们 <a href=\"http://ng.ant.design/issue-helper/#/en\">报告 Bug</a>。</p>\n<blockquote>\n<p>强烈推荐阅读 <a href=\"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way\">《提问的智慧》</a>(本指南不提供此项目的实际支持服务！)、<a href=\"https://github.com/seajs/seajs/issues/545\">《如何向开源社区提问题》</a> 和 <a href=\"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html\">《如何有效地报告 Bug》</a>、<a href=\"https://zhuanlan.zhihu.com/p/25795393\">《如何向开源项目提交无法解答的问题》</a>，更好的问题更容易获得帮助。</p>\n</blockquote>\n<h2 id=\"社区互助\"><span>社区互助</span><a onclick=\"window.location.hash = '社区互助'\" class=\"anchor\">#</a></h2><p>如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。</p>\n<p>通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 <code>ng-zorro</code> 标签。</p>\n<ol>\n<li><a href=\"https://stackoverflow.com/questions/tagged/ng-zorro\"><img alt=\"Stack Overflow\" src=\"https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66\" width=\"140\" /></a>（English）</li>\n<li><a href=\"https://segmentfault.com/t/ng-zorro\"><img alt=\"Segment Fault\" src=\"https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg\" width=\"100\" /></a>（中文）</li>\n<li><a href=\"https://gitter.im/ng-zorro/ng-zorro-antd\"><img src=\"https://img.shields.io/gitter/room/ng-zorro/ng-zorro-antd.svg?style=flat-square\" alt=\"Gitter\"></a></li>\n</ol>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/introduce-zh.ts":
/*!*******************************************!*\
  !*** ./site/src/app/docs/introduce-zh.ts ***!
  \*******************************************/
/*! exports provided: NzDocIntroduceZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocIntroduceZhComponent", function() { return NzDocIntroduceZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocIntroduceZhComponent = /** @class */ (function () {
    function NzDocIntroduceZhComponent() {
    }
    NzDocIntroduceZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocIntroduceZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-introduce-zh',
            template: __webpack_require__(/*! ./introduce-zh.html */ "./site/src/app/docs/introduce-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocIntroduceZhComponent);
    return NzDocIntroduceZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/recommendation-en.html":
/*!**************************************************!*\
  !*** ./site/src/app/docs/recommendation-en.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Third-Party Libraries<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/recommendation.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#tools\" nzTitle=\"Tools\"></nz-link><nz-link nzHref=\"#blog-&-website\" nzTitle=\"Blog & Website\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><h2 id=\"tools\"><span>Tools</span><a onclick=\"window.location.hash = 'tools'\" class=\"anchor\">#</a></h2><table>\n<thead>\n<tr>\n<th>Category</th>\n<th>Recommended Components</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Scaffold</td>\n<td><a href=\"http://ng-alain.com/\">NG ALAIN</a></td>\n</tr>\n<tr>\n<td>Charts</td>\n<td><a href=\"https://swimlane.github.io/ngx-charts/\">NGX-CHARTS</a></td>\n</tr>\n<tr>\n<td>Dag</td>\n<td><a href=\"https://swimlane.github.io/ngx-graph/\">NGX-CHARTS-DAG</a></td>\n</tr>\n<tr>\n<td>Drag</td>\n<td><a href=\"https://swimlane.github.io/ngx-dnd/\">NGX-DND</a></td>\n</tr>\n<tr>\n<td>Infinite Scroll</td>\n<td><a href=\"https://github.com/orizens/ngx-infinite-scroll\">NGX-INFINITE-SCROLL</a></td>\n</tr>\n<tr>\n<td>CLI</td>\n<td><a href=\"https://cli.angular.io/\">Angular CLI</a></td>\n</tr>\n<tr>\n<td>Debug</td>\n<td><a href=\"https://augury.angular.io/\">Angular Augury</a></td>\n</tr>\n<tr>\n<td>Server Render</td>\n<td><a href=\"https://universal.angular.io/\">Angular Universal</a></td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"blog-&amp;-website\"><span>Blog &amp; Website</span><a onclick=\"window.location.hash = 'blog-&amp;-website'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"https://angular.io/\">Angular</a></li>\n<li><a href=\"https://blog.angular.io/\">Angular Blog</a></li>\n<li><a href=\"http://g.co/ng/weekly-notes\">Angular Weekly Meeting Notes</a></li>\n<li><a href=\"https://blog.thoughtram.io/\">ThoughtRam Blog</a></li>\n<li><a href=\"http://blog.mgechev.com/\">Mgechev Blog</a></li>\n<li><a href=\"https://blog.angularindepth.com/\">Angular In Depth</a></li>\n</ul>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/recommendation-en.ts":
/*!************************************************!*\
  !*** ./site/src/app/docs/recommendation-en.ts ***!
  \************************************************/
/*! exports provided: NzDocRecommendationEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocRecommendationEnComponent", function() { return NzDocRecommendationEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocRecommendationEnComponent = /** @class */ (function () {
    function NzDocRecommendationEnComponent() {
    }
    NzDocRecommendationEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocRecommendationEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-recommendation-en',
            template: __webpack_require__(/*! ./recommendation-en.html */ "./site/src/app/docs/recommendation-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocRecommendationEnComponent);
    return NzDocRecommendationEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/recommendation-zh.html":
/*!**************************************************!*\
  !*** ./site/src/app/docs/recommendation-zh.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>社区推荐<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/recommendation.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#工具及解决方案\" nzTitle=\"工具及解决方案\"></nz-link><nz-link nzHref=\"#博客及网站\" nzTitle=\"博客及网站\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p><code>ng-zorro-antd</code> 是 Ant Design 设计规范的 Angular 实现，我们推荐使用以下社区已有的优秀实现和网站，希望能为你的开发过程提供帮助。</p>\n<h2 id=\"工具及解决方案\"><span>工具及解决方案</span><a onclick=\"window.location.hash = '工具及解决方案'\" class=\"anchor\">#</a></h2><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>脚手架</td>\n<td><a href=\"http://ng-alain.com/\">NG ALAIN</a></td>\n<td>基于 <code>ng-zorro-antd</code> 的 Admin 系统解决方案</td>\n</tr>\n<tr>\n<td>可视化</td>\n<td><a href=\"https://swimlane.github.io/ngx-charts/\">NGX-CHARTS</a></td>\n<td>基于 D3 的Angular 可视化组件库</td>\n</tr>\n<tr>\n<td>可视化</td>\n<td><a href=\"https://swimlane.github.io/ngx-graph/\">NGX-CHARTS-DAG</a></td>\n<td>基于 Dagre 的有向无环图可视化组件库</td>\n</tr>\n<tr>\n<td>拖拽</td>\n<td><a href=\"https://swimlane.github.io/ngx-dnd/\">NGX-DND</a></td>\n<td>Angular 的拖拽组件库</td>\n</tr>\n<tr>\n<td>无限滚动</td>\n<td><a href=\"https://github.com/orizens/ngx-infinite-scroll\">NGX-INFINITE-SCROLL</a></td>\n<td>无限滚动组件</td>\n</tr>\n<tr>\n<td>打包</td>\n<td><a href=\"https://cli.angular.io/\">Angular CLI</a></td>\n<td>Angular 的配套打包工具</td>\n</tr>\n<tr>\n<td>调试</td>\n<td><a href=\"https://augury.angular.io/\">Angular Augury</a></td>\n<td>Angular Chrome 调试工具</td>\n</tr>\n<tr>\n<td>服务端渲染</td>\n<td><a href=\"https://universal.angular.io/\">Angular Universal</a></td>\n<td>Angular服务端渲染工具</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"博客及网站\"><span>博客及网站</span><a onclick=\"window.location.hash = '博客及网站'\" class=\"anchor\">#</a></h2><ul>\n<li><a href=\"https://angular.cn/\">Angular中文官网</a></li>\n<li><a href=\"https://angular.io/\">Angular英文官网</a></li>\n<li><a href=\"https://blog.angular.io/\">Angular官方博客</a></li>\n<li><a href=\"http://g.co/ng/weekly-notes\">Angular Weekly Meeting Notes</a></li>\n<li><a href=\"https://blog.thoughtram.io/\">ThoughtRam Blog</a></li>\n<li><a href=\"http://blog.mgechev.com/\">Mgechev Blog</a></li>\n<li><a href=\"http://www.ngfans.net\">NgFans</a></li>\n<li><a href=\"https://blog.angularindepth.com/\">Angular In Depth</a></li>\n<li><a href=\"https://ithelp.ithome.com.tw/users/20103367/ironman/1199\">30 天精通 RxJS</a></li>\n<li><a href=\"https://github.com/RxJS-CN\">RxJS 中文社区</a></li>\n<li><a href=\"https://zhuanlan.zhihu.com/angular-news\">Angular News</a></li>\n</ul>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/recommendation-zh.ts":
/*!************************************************!*\
  !*** ./site/src/app/docs/recommendation-zh.ts ***!
  \************************************************/
/*! exports provided: NzDocRecommendationZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocRecommendationZhComponent", function() { return NzDocRecommendationZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocRecommendationZhComponent = /** @class */ (function () {
    function NzDocRecommendationZhComponent() {
    }
    NzDocRecommendationZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocRecommendationZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-recommendation-zh',
            template: __webpack_require__(/*! ./recommendation-zh.html */ "./site/src/app/docs/recommendation-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocRecommendationZhComponent);
    return NzDocRecommendationZhComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/schematics-en.html":
/*!**********************************************!*\
  !*** ./site/src/app/docs/schematics-en.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>Schematics<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/schematics.en-US.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#init-project\" nzTitle=\"Init Project\"></nz-link><nz-link nzHref=\"#component-generation\" nzTitle=\"Component Generation\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p><code>ng-zorro-antd</code> support <a href=\"https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2\">schematics</a>, you can init configuration and generate component with schematics now.</p>\n<h2 id=\"init-project\"><span>Init Project</span><a onclick=\"window.location.hash = 'init-project'\" class=\"anchor\">#</a></h2><p>Init project with <code>ng-zorro-antd</code>.</p>\n<h3 id=\"command\"><span>Command</span><a onclick=\"window.location.hash = 'command'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\"><span class=\"token function\">ng</span> add <span class=\"token function\">ng-zorro-antd</span> <span class=\"token punctuation\">[</span>options<span class=\"token punctuation\">]</span>\n</code></pre>\n<h3 id=\"options\"><span>Options</span><a onclick=\"window.location.hash = 'options'\" class=\"anchor\">#</a></h3><p><strong><em>--theme</em></strong></p>\n<p><code>ng-zorro-antd</code> will <a href=\"https://github.com/angular/angular-cli/issues/10430\">downgrade</a> the version of <code>less</code> to <code>2.7</code> and create <code>theme.less</code> in <code>src</code> folder.</p>\n<p>You can get more information at the <a href=\"/docs/customize-theme/en\">Customize Theme</a> part.</p>\n<p><strong><em>--i18n</em></strong></p>\n<p>If you add <code>--i18n=[language]</code>，<code>ng-zorro-antd</code> import the language package and the <a href=\"https://angular.io/guide/i18n\">i18n</a> part of angular in the <code>app.module.ts</code>.</p>\n<p>The default i18n config of <code>ng-zorro-antd</code> is <code>zh_CN</code> now，you can get more information at the <a href=\"/docs/i18n/en\">Internationalization</a> part.</p>\n<h2 id=\"component-generation\"><span>Component Generation</span><a onclick=\"window.location.hash = 'component-generation'\" class=\"anchor\">#</a></h2><p>You can get component generation code in our doc after expand the code panel below every example.</p>\n<h3 id=\"command\"><span>Command</span><a onclick=\"window.location.hash = 'command'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\"><span class=\"token function\">ng</span> g ng-zorro-antd:<span class=\"token punctuation\">[</span>template<span class=\"token punctuation\">]</span> --name<span class=\"token operator\">=</span>NAME <span class=\"token punctuation\">[</span>options<span class=\"token punctuation\">]</span>\n</code></pre>\n<p>For example, you can generate an login form with the follow command.</p>\n<pre><code class=\"lang-bash\"><span class=\"token function\">ng</span> g ng-zorro-antd:form-normal-login -p app --styleext<span class=\"token operator\">=</span><span class=\"token string\">'less'</span> --name<span class=\"token operator\">=</span>login\n</code></pre>\n<h3 id=\"options\"><span>Options</span><a onclick=\"window.location.hash = 'options'\" class=\"anchor\">#</a></h3><p><strong><em>--name</em></strong></p>\n<p>Specify the component name(required)</p>\n<p><strong><em>--styleext</em></strong></p>\n<p>The type of style file（default css).</p>\n<p><strong><em>--prefix</em></strong>, <strong><em>-p</em></strong></p>\n<p>The prefix name of the component.</p>\n<p><strong><em>--inlineStyle</em></strong>, <strong><em>-s</em></strong></p>\n<p>Using inline style.</p>\n<p><strong><em>--inlineTemplate</em></strong>, <strong><em>-t</em></strong></p>\n<p>Using inline template.</p>\n<p><strong><em>--path</em></strong></p>\n<p>Specify the path of the created component.</p>\n<p><strong><em>--spec</em></strong></p>\n<p>Create test file.</p>\n<p><strong><em>--skipImport</em></strong></p>\n<p>Skip module import.</p>\n<p><strong><em>--selector</em></strong></p>\n<p>The name of selector.</p>\n<p><strong><em>--export</em></strong></p>\n<p>Should add component to <code>exports</code> part.</p>\n<p><strong><em>--module</em></strong>, <strong><em>-m</em></strong></p>\n<p>Specify the module name.</p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/schematics-en.ts":
/*!********************************************!*\
  !*** ./site/src/app/docs/schematics-en.ts ***!
  \********************************************/
/*! exports provided: NzDocSchematicsEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocSchematicsEnComponent", function() { return NzDocSchematicsEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocSchematicsEnComponent = /** @class */ (function () {
    function NzDocSchematicsEnComponent() {
    }
    NzDocSchematicsEnComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocSchematicsEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-schematics-en',
            template: __webpack_require__(/*! ./schematics-en.html */ "./site/src/app/docs/schematics-en.html"),
            preserveWhitespaces: false
        })
    ], NzDocSchematicsEnComponent);
    return NzDocSchematicsEnComponent;
}());



/***/ }),

/***/ "./site/src/app/docs/schematics-zh.html":
/*!**********************************************!*\
  !*** ./site/src/app/docs/schematics-zh.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"markdown\"><h1>脚手架<span class=\"subtitle\"></span>\r\n\t<a class=\"edit-button\" href=\"https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/docs/schematics.zh-CN.md\" target=\"_blank\">\r\n\t\t<i class=\"anticon anticon-edit\"></i></a>\r\n</h1><nz-affix class=\"toc-affix\" [nzOffsetTop]=\"16\">\n    <nz-anchor [nzAffix]=\"false\" nzShowInkInFixed (nzClick)=\"goLink($event)\">\n      <nz-link nzHref=\"#项目初始化\" nzTitle=\"项目初始化\"></nz-link><nz-link nzHref=\"#生成组件\" nzTitle=\"生成组件\"></nz-link>\n    </nz-anchor>\n  </nz-affix>\n  <section class=\"markdown\" ngNonBindable><p>使用脚手架可以更加方便的初始化项目，生成模板代码，节省开发时间。</p>\n<blockquote>\n<p>脚手架部分完全基于 <a href=\"https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2\">Schematics</a> 部分进行开发。</p>\n</blockquote>\n<h2 id=\"项目初始化\"><span>项目初始化</span><a onclick=\"window.location.hash = '项目初始化'\" class=\"anchor\">#</a></h2><p>自动完成 <code>ng-zorro-antd</code> 的初始化配置，包括引入国际化文件，导入模块，引入样式文件等工作。</p>\n<h3 id=\"初始化命令\"><span>初始化命令</span><a onclick=\"window.location.hash = '初始化命令'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\"><span class=\"token function\">ng</span> add <span class=\"token function\">ng-zorro-antd</span> <span class=\"token punctuation\">[</span>options<span class=\"token punctuation\">]</span>\n</code></pre>\n<h3 id=\"初始化参数\"><span>初始化参数</span><a onclick=\"window.location.hash = '初始化参数'\" class=\"anchor\">#</a></h3><p><strong><em>--theme</em></strong></p>\n<p><code>ng-zorro-antd</code> 会<a href=\"https://github.com/angular/angular-cli/issues/10430\">自动</a>降级 <code>less</code> 版本至 <code>2.7</code> 并在 <code>src</code> 目录下生成 <code>theme.less</code> 的主题配置文件</p>\n<p>详细的配置可以在<a href=\"/docs/customize-theme/zh\">自定义主题</a>中查看。</p>\n<p><strong><em>--i18n</em></strong></p>\n<p>初始化配置时增加 <code>--i18n=[语言]</code> 参数，<code>ng-zorro-antd</code> 会自动引入支持的语言包以及 Angular 对应的 <a href=\"https://angular.io/guide/i18n\">i18n 文件</a></p>\n<p>默认的国际化配置为中文(zh_CN)，详细的可配置选项可以在<a href=\"/docs/i18n/zh\">国际化</a>中查看。</p>\n<h2 id=\"生成组件\"><span>生成组件</span><a onclick=\"window.location.hash = '生成组件'\" class=\"anchor\">#</a></h2><p>快速生成模板代码，每个官网的代码演示都附有可生成的模板，开发者可以通过展开每个组件的代码演示部分获取其生成代码。</p>\n<h3 id=\"生成组件命令\"><span>生成组件命令</span><a onclick=\"window.location.hash = '生成组件命令'\" class=\"anchor\">#</a></h3><pre><code class=\"lang-bash\"><span class=\"token function\">ng</span> g ng-zorro-antd:<span class=\"token punctuation\">[</span>template<span class=\"token punctuation\">]</span> --name<span class=\"token operator\">=</span>NAME <span class=\"token punctuation\">[</span>options<span class=\"token punctuation\">]</span>\n</code></pre>\n<p>例如通过以下代码可以快速生成一个登陆框组件</p>\n<pre><code class=\"lang-bash\"><span class=\"token function\">ng</span> g ng-zorro-antd:form-normal-login -p app --styleext<span class=\"token operator\">=</span><span class=\"token string\">'less'</span> --name<span class=\"token operator\">=</span>login\n</code></pre>\n<h3 id=\"生成组件参数\"><span>生成组件参数</span><a onclick=\"window.location.hash = '生成组件参数'\" class=\"anchor\">#</a></h3><p><strong><em>--name</em></strong></p>\n<p>组件名称(必选)</p>\n<p><strong><em>--styleext</em></strong></p>\n<p>样式文件扩展名（默认 css）</p>\n<p><strong><em>--prefix</em></strong>, <strong><em>-p</em></strong></p>\n<p>组件选择器前缀</p>\n<p><strong><em>--inlineStyle</em></strong>, <strong><em>-s</em></strong></p>\n<p>使用行内样式</p>\n<p><strong><em>--inlineTemplate</em></strong>, <strong><em>-t</em></strong></p>\n<p>使用行内模版</p>\n<p><strong><em>--path</em></strong></p>\n<p>指定组件创建目录（相当于执行时所在的目录）</p>\n<p><strong><em>--spec</em></strong></p>\n<p>是否生成 <code>.spec</code> 测试文件</p>\n<p><strong><em>--skipImport</em></strong></p>\n<p>是否跳过模块引入（及导入所属模块）</p>\n<p><strong><em>--selector</em></strong></p>\n<p>选择器名称（默认根据 <code>name</code> 自动生成）</p>\n<p><strong><em>--export</em></strong></p>\n<p>是否将组件声明在模块的 <code>exports</code></p>\n<p><strong><em>--module</em></strong>, <strong><em>-m</em></strong></p>\n<p>指定要声明的模块名</p>\n</section>\n  </article>"

/***/ }),

/***/ "./site/src/app/docs/schematics-zh.ts":
/*!********************************************!*\
  !*** ./site/src/app/docs/schematics-zh.ts ***!
  \********************************************/
/*! exports provided: NzDocSchematicsZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDocSchematicsZhComponent", function() { return NzDocSchematicsZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NzDocSchematicsZhComponent = /** @class */ (function () {
    function NzDocSchematicsZhComponent() {
    }
    NzDocSchematicsZhComponent.prototype.goLink = function (link) {
        window.location.hash = link;
    };
    NzDocSchematicsZhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-doc-schematics-zh',
            template: __webpack_require__(/*! ./schematics-zh.html */ "./site/src/app/docs/schematics-zh.html"),
            preserveWhitespaces: false
        })
    ], NzDocSchematicsZhComponent);
    return NzDocSchematicsZhComponent;
}());



/***/ })

}]);
//# sourceMappingURL=docs-index-module.js.map