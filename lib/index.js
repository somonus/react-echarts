'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

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

var _componentsCharts = require('./components/Charts');

var _componentsCharts2 = _interopRequireDefault(_componentsCharts);

var _componentsChart = require('./components/Chart');

var _componentsChart2 = _interopRequireDefault(_componentsChart);

exports.Chart = _componentsChart2['default'];

_componentsCharts2['default'].Line = _componentsLine2['default'];
_componentsCharts2['default'].Pie = _componentsPie2['default'];
_componentsCharts2['default'].Bar = _componentsBar2['default'];
_componentsCharts2['default'].Cloud = _componentsCloud2['default'];
_componentsCharts2['default'].Map = _componentsMap2['default'];

exports['default'] = _componentsCharts2['default'];