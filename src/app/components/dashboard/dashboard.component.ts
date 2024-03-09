import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public chart: any;
  data = [
    { year: 2020, count: 20 },
    { year: 2021, count: 20 },
    { year: 2022, count: 20 },
    { year: 2023, count: 20 },
    { year: 2024, count: 20 },

  ]

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.data.map((row: any) => row.year),
        datasets: [
          {
            label: 'Aquisições',
            data: this.data.map((row: any) => row.count),
          }
        ]
      },
    },
    )
  }

}
