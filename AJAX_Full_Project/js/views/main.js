$(function(){

  toastr.info('Bootstrap 4 on steroids', 'Welcome to SimpliQ Admin', {
    closeButton: true,
    progressBar: true,
  });

  $('input[name="daterange"]').daterangepicker({
    opens: 'left',
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  });

  //convert Hex to RGBA
  function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
  }

  //Main Chart

  var data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    datasets: [{
      type: 'line',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      hoverBackgroundColor: 'transparent',
      hoverBorderColor: 'transparent',
      data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2]
    }, {
      type: 'bar',
      barBorderRadius: 10,
      backgroundColor: '#C7CBD5',
      borderColor: 'red',
      hoverBackgroundColor: '#36A9E1',
      hoverBorderColor: '#f5f5f5',
      data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2]
    }]
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        categoryPercentage: .5,
        barPercentage: 1,
        position: 'top',
        gridLines: {
          color: '#C7CBD5',
          zeroLineColor: '#C7CBD5',
          drawTicks: true,
          borderDash: [8, 5],
          offsetGridLines: false,
          tickMarkLength: 10,
          callback: function(value) {
            console.log(value)
            // return value.charAt(0) + value.charAt(1) + value.charAt(2);
          }
        },
        ticks: {
          callback: function(value) {
            return value.charAt(0) + value.charAt(1) + value.charAt(2);
          }
        }
      }],
      yAxes: [{
        display:false,
        gridLines: {
          drawBorder: false,
          drawOnChartArea: false,
          borderDash: [8, 5],
          offsetGridLines: false
        },
        ticks: {
          beginAtZero: true,
          max: 8,
          maxTicksLimit: 5,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  var ctx = $('#main-chart');
  var mainChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  //Card Chart 12

  var data = {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      backgroundColor: 'transparent',
      borderColor: '#C7CBD5',
      pointBackgroundColor: '#fff',
      borderWidth: 3,
      data: [75, 59, 94, 104, 151, 155, 240]
    }]
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          zeroLineWidth: 0.00001,
          color: '#fff'
        }
      }],
      yAxes: [{
        gridLines: {
          zeroLineWidth: 0.00001,
          color: '#fff'
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  var ctx = $('#cardChart12');
  var mainChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  //Card Chart 13

  var data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    datasets: [
      {
        data: [0,0,1,2,21,9,12,10,31,13,65,10,12,6,4,3,0],
        label: 'Current',
        backgroundColor: convertHex($.brandInfo,10),
        borderColor: $.brandInfo,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1
      },
      {
        data: [0,0,1,2,7,5,6,8,24,7,12,5,6,3,2,2,0],
        label: 'Previous',
        backgroundColor: 'transparent',
        borderColor: $.brandSuccess,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1
      },
      {
        data: [0,0,1,0,2,0,1,0,2,3,0,2,3,2,1,0,0],
        label: 'BEP',
        backgroundColor: 'transparent',
        borderColor: $.brandDanger,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
      }]
    };

    var options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function(value) {
              return value.charAt(0);
            }
          }
        }],
        yAxes: [{
          gridLines: {
            color: '#C7CBD5'
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      },
      legend: {
        display: false
      }
    };
    var ctx = $('#cardChart13');
    var mainChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });


    //Card Chart 14

    var data = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        backgroundColor: 'transparent',
        borderColor: '#fff',
        pointBackgroundColor: $.brandPrimary,
        borderWidth: 2,
        data: [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600]
      }]
    };

    var options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontColor: '#fff',
            maxTicksLimit: 3,
            maxRotation: 0,
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(255,255,255,.2)',
            zeroLineColor: 'rgba(255,255,255,.2)'
          },
          ticks: {
            maxTicksLimit: 10,
            stepSize: Math.ceil(45000 / 10),
            max: 45000,
            fontColor: '#fff',
            callback: function(value) {
              return '$' + value;
            }
          }
        }]
      },
      elements: {
        point: {
          radius: 4,
          borderWidth: 2,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      },
      legend: {
        display: false
      }
    };
    var ctx = $('#cardChart14');
    var mainChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });


    //Card Chart 15

    var data = {
      labels: ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'],
      datasets: [{
        backgroundColor: $.brandSuccess,
        borderWidth: 0,
        data: [35, 14, 10, 8, 6, 6, 5, 4, 3, 9],
      }]
    };

    var options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            maxRotation: 0,
          },
          barPercentage: 0.6,
        }],
        yAxes: [{
          display:false,
          ticks: {
            beginAtZero: true,
          }
        }]
      },
      legend: {
        display: false
      }
    };
    var ctx = $('#cardChart15');
    var mainChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });



    var options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display:false,
          points:false,
        }],
        yAxes: [{
          display:false,
        }]
      },
      elements: { point: { radius: 0 } }
    };
    var data = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
          borderWidth: 2,
          data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
        },
      ]
    };
    var ctx = $('.chart-7');
    var Chart7 = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    var ctx = $('.chart-7-2');
    var Chart72 = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    var ctx = $('.chart-7-3');
    var Chart73 = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    var ctx = $('.chart-7-4');
    var Chart74 = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    var options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display:false,
          barPercentage: 0.6,
        }],
        yAxes: [{
          display:false,
          ticks: {
            beginAtZero: true,
          }
        }]
      },
    };
    var data = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
      datasets: [
        {
          backgroundColor: 'rgba(0,0,0,.2)',
          data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
        },
      ]
    };
    var ctx = $('.chart-8');
    var Chart8 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var ctx = $('.chart-8-2');
    var Chart82 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var ctx = $('.chart-8-3');
    var Chart83 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var ctx = $('.chart-8-4');
    var Chart84 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var options = {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 10,
            maxRotation: 0,
          },
          barPercentage: 0.6,
        }],
        yAxes: [{
          display:false,
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    };
    var data = {
      labels: ['M','T','W','T','F','S','S'],
      datasets: [
        {
          backgroundColor: $.grayLight,
          data: [17, 34, 22, 11, 3, 15, 12]
        },
      ]
    };
    var ctx = $('.chart-9');
    var Chart9 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var ctx = $('.chart-9-2');
    var Chart92 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var ctx = $('.chart-9-3');
    var Chart93 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    var ctx = $('.chart-9-4');
    var Chart94 = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });



    //Sparkline Charts
    var labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    var options = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          display:false,
        }],
        yAxes: [{
          display:false,
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      },
    };

    var data1 = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: $.brandPrimary,
          borderWidth: 2,
          data: [35, 23, 56, 22, 97, 23, 64]
        }
      ]
    };
    var ctx = $('#sparkline-chart-1');
    var sparklineChart1 = new Chart(ctx, {
      type: 'line',
      data: data1,
      options: options
    });

    var data2 = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: $.brandDanger,
          borderWidth: 2,
          data: [78, 81, 80, 45, 34, 12, 40]
        }
      ]
    };
    var ctx = $('#sparkline-chart-2');
    var sparklineChart2 = new Chart(ctx, {
      type: 'line',
      data: data2,
      options: options
    });

    var data3 = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: $.brandWarning,
          borderWidth: 2,
          data: [35, 23, 56, 22, 97, 23, 64]
        }
      ]
    };
    var ctx = $('#sparkline-chart-3');
    var sparklineChart3 = new Chart(ctx, {
      type: 'line',
      data: data3,
      options: options
    });

    var data4 = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: $.brandSuccess,
          borderWidth: 2,
          data: [78, 81, 80, 45, 34, 12, 40]
        }
      ]
    };
    var ctx = $('#sparkline-chart-4');
    var sparklineChart4 = new Chart(ctx, {
      type: 'line',
      data: data4,
      options: options
    });

    var data5 = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: '#d1d4d7',
          borderWidth: 2,
          data: [35, 23, 56, 22, 97, 23, 64]
        }
      ]
    };
    var ctx = $('#sparkline-chart-5');
    var sparklineChart5 = new Chart(ctx, {
      type: 'line',
      data: data5,
      options: options
    });

    var data6 = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: $.brandInfo,
          borderWidth: 2,
          data: [78, 81, 80, 45, 34, 12, 40]
        }
      ]
    };
    var ctx = $('#sparkline-chart-6');
    var sparklineChart6= new Chart(ctx, {
      type: 'line',
      data: data6,
      options: options
    });


    //Gauge JS
    var options = {
      lines: 12, // The number of lines to draw
      angle: 0.5, // The length of each line
      lineWidth: 0.08, // The line thickness
      pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.035, // The rotation offset
        color: '#000000' // Fill color
      },
      limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
      colorStart: $.brandInfo,   // Colors
      colorStart: $.brandInfo,    // just experiment with them
      strokeColor: '#d1d4d7',   // to see which ones work best for you
      generateGradient: true
    };
    var target1 = document.getElementById('gauge-1'); // your canvas element
    var gauge1 = new Donut(target1).setOptions(options); // create sexy gauge!
    gauge1.maxValue = 100; // set max gauge value
    gauge1.animationSpeed = 32; // set animation speed (32 is default value)
    gauge1.set(48); // set actual value

    var target2 = document.getElementById('gauge-2');
    var gauge2 = new Donut(target2).setOptions(options);
    gauge2.maxValue = 100;
    gauge2.animationSpeed = 32;
    gauge2.set(61);

    var target3 = document.getElementById('gauge-3');
    var gauge3 = new Donut(target3).setOptions(options);
    gauge3.maxValue = 100;
    gauge3.animationSpeed = 32;
    gauge3.set(33);

    var target4 = document.getElementById('gauge-4');
    var gauge4 = new Donut(target4).setOptions(options);
    gauge4.maxValue = 100;
    gauge4.animationSpeed = 32;
    gauge4.set(23);

    var target5 = document.getElementById('gauge-5');
    var gauge5 = new Donut(target5).setOptions(options);
    gauge5.maxValue = 100;
    gauge5.animationSpeed = 32;
    gauge5.set(78);

    var target6 = document.getElementById('gauge-6');
    var gauge6 = new Donut(target6).setOptions(options);
    gauge6.maxValue = 100;
    gauge6.animationSpeed = 32;
    gauge6.set(11);

  });
