'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _componentsSeries = require('./components/Series');

var _componentsSeries2 = _interopRequireDefault(_componentsSeries);

var _componentsLine = require('./components/Line');

var _componentsLine2 = _interopRequireDefault(_componentsLine);

var _componentsPie = require('./components/Pie');

var _componentsPie2 = _interopRequireDefault(_componentsPie);

var _componentsBar = require('./components/Bar');

var _componentsBar2 = _interopRequireDefault(_componentsBar);

var _componentsCloud = require('./components/Cloud');

var _componentsCloud2 = _interopRequireDefault(_componentsCloud);

var _componentsMap = require('./components/Map');

var _componentsMap2 = _interopRequireDefault(_componentsMap);

var _componentsGraph = require('./components/Graph');

var _componentsGraph2 = _interopRequireDefault(_componentsGraph);

var _componentsChart = require('./components/Chart');

var _componentsChart2 = _interopRequireDefault(_componentsChart);

_componentsChart2['default'].Series = _componentsSeries2['default'];
_componentsChart2['default'].Line = _componentsLine2['default'];
_componentsChart2['default'].Pie = _componentsPie2['default'];
_componentsChart2['default'].Bar = _componentsBar2['default'];
_componentsChart2['default'].Cloud = _componentsCloud2['default'];
_componentsChart2['default'].Map = _componentsMap2['default'];
_componentsChart2['default'].Graph = _componentsGraph2['default'];

exports['default'] = _componentsChart2['default'];
module.exports = exports['default'];