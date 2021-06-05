import { Component, Prop, h } from '@stencil/core'
import Chart from 'chart.js/auto'
import {
  ChartConfiguration,
} from 'chart.js'

@Component({
  tag: 'trends-chart',
  styleUrl: 'trends-chart.css',
  shadow: true,
})
export class TrendsChart {

  private canvas: HTMLCanvasElement = <canvas width="400px" height="400px"></canvas>
  // private chart: Chart

  @Prop({ mutable: true })
  config: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }

  render() {
    return <canvas width="400px" height="400px" ref={el => this.canvas = el as HTMLCanvasElement}></canvas>
  }

  componentDidLoad() {
    new Chart(this.canvas, this.config)
  }

  componentDidUpdate() {
  }

  add<T>(first: T, second: T, ...nth: T[]) {
    const args = [first, second, ...nth]
    let numericalArgs: number[]
    if (args.every(arg => typeof arg === 'string')) {
      numericalArgs = args.map(arg => parseFloat(arg as unknown as string)) 
    }
    return numericalArgs.reduce((a,b) => a+b)
  }

}
