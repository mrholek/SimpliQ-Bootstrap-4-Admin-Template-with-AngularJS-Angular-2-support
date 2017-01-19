import { Component, OnInit }  from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router ) { }

  public brandPrimary:string =  '#20a8d8';
  public brandSuccess:string =  '#bdea74';
  public brandInfo:string =   '#63c2de';
  public brandWarning:string =  '#f8cb00';
  public brandDanger:string =   '#f86c6b';

  //convert Hex to RGBA
  public convertHex(hex:string,opacity:number){
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return rgba;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  // mainChart
  public random(min:number, max:number) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  public mainChartData:Array<any> = [{
    type: 'line',
    data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2],
    label: 'Current'
  }, {
    data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2],
    label: 'Current'
  }];

  public mainChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  public mainChartOptions:any = {
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
  public mainChartColours:Array<any> = [{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    hoverBackgroundColor: 'transparent',
    hoverBorderColor: 'transparent',
  },
  {
    backgroundColor: '#C7CBD5',
    borderColor: '#C7CBD5',
    hoverBackgroundColor: '#36A9E1',
    hoverBorderColor: '#36A9E1'
  }];

  public mainChartLegend:boolean = false;
  public mainChartType:string = 'bar';

  // Card Chart 12

  public cardChart12Data:Array<any> = [{
    data: [75, 59, 94, 104, 151, 155, 240],
    label: 'Current'
  }];

  public cardChart12Labels:Array<any> = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

  public cardChart12Options:any = {
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
  public cardChart12Colours:Array<any> = [{
    backgroundColor: 'transparent',
    borderColor: '#C7CBD5',
    pointBackgroundColor: '#fff',
    borderWidth: 3,
  }];

  public cardChart12Legend:boolean = false;
  public cardChart12Type:string = 'line';


  // Card Chart 13

  public cardChart13Data:Array<any> = [
    {
      data: [0,0,1,2,21,9,12,10,31,13,65,10,12,6,4,3,0],
      label: 'Current'
    },
    {
      data: [0,0,1,2,7,5,6,8,24,7,12,5,6,3,2,2,0],
      label: 'Previous'
    },
    {
      data: [0,0,1,0,2,0,1,0,2,3,0,2,3,2,1,0,0],
      label: 'BEP'
    }
  ];

  public cardChart13Labels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];

  public cardChart13Options:any = {
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
  public cardChart13Colours:Array<any> = [
    {
      backgroundColor: this.convertHex(this.brandInfo,10),
      borderColor: this.brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1

    }, {
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1
    },{
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];

  public cardChart13Legend:boolean = false;
  public cardChart13Type:string = 'line';


  // Card Chart 14

  public cardChart14Data:Array<any> = [{
    data: [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600],
    label: 'Current'
  }];

  public cardChart14Labels:Array<any> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  public cardChart14Options:any = {
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
  public cardChart14Colours:Array<any> = [{
    backgroundColor: 'transparent',
    borderColor: '#fff',
    pointBackgroundColor: this.brandPrimary,
    borderWidth: 2,
  }];

  public cardChart14Legend:boolean = false;
  public cardChart14Type:string = 'line';


  // Card Chart 15

  public cardChart15Data:Array<any> = [{
    data: [35, 14, 10, 8, 6, 6, 5, 4, 3, 9],
    label: 'Current'
  }];

  public cardChart15Labels:Array<any> = ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'];

  public cardChart15Options:any = {
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
  public cardChart15Colours:Array<any> = [{
    backgroundColor: this.brandSuccess,
    borderWidth: 0,
  }];

  public cardChart15Legend:boolean = false;
  public cardChart15Type:string = 'bar';


  // social box charts

  public socialChartData1:Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public socialChartData2:Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public socialChartData3:Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public socialChartData4:Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public socialChartLabels:Array<any> = ['January','February','March','April','May','June','July'];
  public socialChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false,
      }],
      yAxes: [{
        display:false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
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
  public socialChartColours:Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public socialChartLegend:boolean = false;
  public socialChartType:string = 'line';

  // sparkline charts

  public sparklineChartData1:Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Clients'
    }
  ];
  public sparklineChartData2:Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Clients'
    }
  ];

  public sparklineChartLabels:Array<any> = ['January','February','March','April','May','June','July'];
  public sparklineChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false,
      }],
      yAxes: [{
        display:false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
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
  public sparklineChartDefault:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: '#d1d4d7',
    }
  ];
  public sparklineChartPrimary:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandPrimary,
    }
  ];
  public sparklineChartInfo:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandInfo,
    }
  ];
  public sparklineChartDanger:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
    }
  ];
  public sparklineChartWarning:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandWarning,
    }
  ];
  public sparklineChartSuccess:Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
    }
  ];


  public sparklineChartLegend:boolean = false;
  public sparklineChartType:string = 'line';


  ngOnInit(): void { }
}
