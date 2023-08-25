let ctx = document.getElementById('grafico_linha')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'

// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']

const data = {
    labels,
    datasets: [{
        data: [30, 224, 132, 383, 280, 576, 1379, 1829, 944, 1205, 1062, 1934,812,327,564,245,556,140,121,38,80,72,159,57,76,122,37],
        label: 'Pessoas em condição análoga à de escravo',
        fill: false,
        backgroundColor: 'cornflowerblue',
        borderColor: '#00f',
        borderWidth: 3,
        tension: 0.2
    }],
}

const config = {
    type: 'line',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'yellow',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
      },
}

const graph = new Chart(ctx, config)

const menu = document.querySelector('.menu')
const side_bar = document.querySelector('.side-bar')
const c = document.querySelector('.c')

menu.addEventListener('click',()=>{
    side_bar.style.left = '0'
    side_bar.style.top = '10vh'
})
c.addEventListener('click',()=>{
    side_bar.style.left = '-200vw'
})