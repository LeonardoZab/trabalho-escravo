
let ctx = document.getElementById('grafico_pizza')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['Pardas', 'Brancas', 'Amarela', 'Preta', 'Indigena']

const data = {
    labels,
    datasets: [{
        data: [2280, 648, 686, 374, 30],
        label: 'Etnias',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(221, 224, 8)',
          'rgb(194, 91, 155)',

        ],
        borderWidth: 3
    }],
}

const config = {
    type: 'pie',
    data,

}
