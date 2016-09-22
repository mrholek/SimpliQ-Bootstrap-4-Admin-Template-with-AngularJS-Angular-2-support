// 'use strict'
//
// var originalLineController = Chart.controllers.bar;
// Chart.controllers.bar = Chart.controllers.bar.extend({
//     draw: function() {
//         originalLineController.prototype.draw.apply(this, arguments);
//         /* own drawing code here */
//         var ctx = this.chart.chart.ctx;
//
//         var rectangleDraw = this.chart.chart.config.data.datasets[0].bars[0].draw;
//         var self = this;
//         var radius = this.chart.chart.config.data.datasets[0].bars[0].width * this.options.curvature * 0.5;
//
//         // override the rectangle draw with ours
//         this.chart.chart.config.data.datasets.forEach(function (dataset) {
//             dataset.bars.forEach(function (bar) {
//                 bar.draw = function () {
//                     // draw the original bar a little down (so that our curve brings it to its original position)
//                     var y = bar.y;
//                     // the min is required so animation does not start from below the axes
//                     bar.y = Math.min(bar.y + radius, self.scale.endPoint - 1);
//                     // adjust the bar radius depending on how much of a curve we can draw
//                     var barRadius = (bar.y - y);
//                     rectangleDraw.apply(bar, arguments);
//
//                     // draw a rounded rectangle on top
//                     Chart.helpers.drawRoundedRectangle(self.chart.ctx, bar.x - bar.width / 2, bar.y - barRadius + 1, bar.width, bar.height, barRadius);
//                     ctx.fill();
//
//                     // restore the y value
//                     bar.y = y;
//                 }
//             })
//         })
//     }
// });
//
//
// // this.chart.chart.config.data.datasets.
