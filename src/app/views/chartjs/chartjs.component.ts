import { Component } from '@angular/core';
import { ChartService } from '../../services/chartService/chart.service';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  constructor(private service: ChartService) {
  }
  // lineChart
  public lineChartData: Array<any> = [
    { data: [90, 95, 100, 95, 98, 100, 90, 90, 95, 100, 95, 98, 100, 90, 90, 95, 100, 95, 98, 100, 90], label: 'Doc IA' },
    { data: [97, 90, 94, 92, 95, 98, 99, 96, 93, 91, 100, 97, 90, 94, 92, 95, 98, 99, 96, 93, 91, 199], label: 'Face Detection' },
    { data: [91, 100, 92, 97, 96, 95, 99, 90, 98, 93, 94, 91, 100, 92, 97, 96, 95, 99, 90, 98, 93, 94, 98], label: 'Face Verification' },
  ];
  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0
        }
      }]
    }
  };
  public lineChart2Data: Array<any> = [
    { data: [59, 82, 52, 68, 50, 74, 96, 66, 73, 64, 56, 63, 57, 99, 94, 100, 51, 55, 72, 58, 60], label: 'Doc IA' },
    { data: [90, 75, 67, 69, 88, 62, 65, 91, 87, 85, 79, 76, 53, 98, 77, 89, 54, 95, 70, 83, 92], label: 'Face Detection' },
    { data: [87, 62, 68, 90, 74, 86, 96, 67, 64, 98, 70, 52, 92, 97, 61, 53, 72, 78, 73, 81, 71], label: 'Face Verification' },
  ];
  public lineChart2Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
  public lineChart2Options: any = {
    animation: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0
        }
      }]
    }
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40], label: 'Doc IA' },
    { data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90], label: 'Face Detection' },
    { data: [18, 38, 20, 29, 76, 37, 70, 18, 38, 20, 29, 76, 37, 70, 18, 38, 20, 29, 76, 37, 70], label: 'Face Verification' },
  ];

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType = 'radar';

  // Pie
  public pieChartLabels: string[] = ['Doc IA', 'Face Detection', 'Face Verification'];
  public pieChartData: number[] = [40, 30, 30];
  public pieChartType = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
