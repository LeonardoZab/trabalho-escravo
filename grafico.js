let ctx = document.getElementById('grafico_barras')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']

const data = {
    labels,
    datasets: [{
        data: [5, 13, 11, 18, 18, 20, 13, 7, 24, 40, 42, 34, 36],
        label: 'Histórico das Notificações de Violência',
        backgroundColor: 'darkblue',
        borderColor: '#fff',
        borderWidth: 3
    }],
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'white',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
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