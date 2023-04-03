// Dashboard de vendas
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(salesByTeam); // Callback para ser executado quando a API do Google Charts for carregada
google.charts.setOnLoadCallback(salesByYear);
google.charts.setOnLoadCallback(salesAndCost);


const salesByMonth = new Map();
      for(let i = 0; i < 12; i++){
          salesByMonth.set(i, {teamA: undefined, teamB: undefined});
      }
      salesByMonth.get(0).teamA = 2;
      salesByMonth.get(0).teamB = 3;
      salesByMonth.get(1).teamA = 4;
      salesByMonth.get(1).teamB = 5;
      salesByMonth.get(2).teamA = 3;
      salesByMonth.get(2).teamB = 2;
      salesByMonth.get(3).teamA = 3;
      salesByMonth.get(3).teamB = 5;
      salesByMonth.get(4).teamA = 6;
      salesByMonth.get(4).teamB = 2;
      salesByMonth.get(5).teamA = 6;
      salesByMonth.get(5).teamB = 4;
      salesByMonth.get(6).teamA = 3;
      salesByMonth.get(6).teamB = 2;
      salesByMonth.get(7).teamA = 6;
      salesByMonth.get(7).teamB = 8;
      salesByMonth.get(8).teamA = 5;
      salesByMonth.get(8).teamB = 7;
      salesByMonth.get(9).teamA = 2;
      salesByMonth.get(9).teamB = 9;
      salesByMonth.get(10).teamA = 7;
      salesByMonth.get(10).teamB = 5;
      salesByMonth.get(11).teamA = 6;
      salesByMonth.get(11).teamB = 8;


// ! vendas por equipe
function salesByTeam() {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Months');
      data.addColumn('number', 'Team A sales');
      data.addColumn('number', 'Team B sales');

      data.addRows([
        [{v: new Date(2022, 0, 1), f: 'Jan 2022'}, salesByMonth.get(0).teamA, salesByMonth.get(0).teamB],
        [{v: new Date(2022, 1, 1), f: 'Feb 2022'}, salesByMonth.get(1).teamA, salesByMonth.get(1).teamB],
        [{v: new Date(2022, 2, 1), f: 'Mar 2022'}, salesByMonth.get(2).teamA, salesByMonth.get(2).teamB],
        [{v: new Date(2022, 3, 1), f: 'Apr 2022'}, salesByMonth.get(3).teamA, salesByMonth.get(3).teamB],
        [{v: new Date(2022, 4, 1), f: 'Mai 2022'}, salesByMonth.get(4).teamA, salesByMonth.get(4).teamB],
        [{v: new Date(2022, 5, 1), f: 'Jun 2022'}, salesByMonth.get(5).teamA, salesByMonth.get(5).teamB],
        [{v: new Date(2022, 6, 1), f: 'Jul 2022'}, salesByMonth.get(6).teamA, salesByMonth.get(6).teamB],
        [{v: new Date(2022, 7, 1), f: 'Aug 2022'}, salesByMonth.get(7).teamA, salesByMonth.get(7).teamB],
        [{v: new Date(2022, 8, 1), f: 'Sep 2022'}, salesByMonth.get(8).teamA, salesByMonth.get(8).teamB],
        [{v: new Date(2022, 9, 1), f: 'Oct 2022'}, salesByMonth.get(9).teamA, salesByMonth.get(9).teamB],
        [{v: new Date(2022, 10, 1), f: 'Nov 2022'}, salesByMonth.get(10).teamA, salesByMonth.get(10).teamB],
        [{v: new Date(2022, 11, 1), f: 'Dec 2022'}, salesByMonth.get(11).teamA, salesByMonth.get(11).teamB]
      ]);

      var options = {
        chart: {
          title: 'Monthly sales',
        },
        width: 1400,
        height: 300,

        hAxis: {
          title: 'Months',
          format: 'MM',
          viewWindow: {
            min: new Date(2022, 0, 1),
            max: new Date(2022, 11, 1)
          }
        },
        vAxis: {
          title: 'Monthly sales'
        },
      };

      var materialChart = new google.charts.Bar(document.getElementById('chart_div1'));
      materialChart.draw(data, options);
    }
    

// ! vendas por ano
function salesByYear() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', '2021 sales');
    data.addColumn('number', '2022 sales');

    data.addRows([
        [{ v: ' ' }, 40, 60]
    ]);

    var options = {
        chart: {
            title: 'Sales: 2021 x 2022',
        },
        width: 600,

        hAxis: {
            title: 'Years',
            format: 'yyyy',
        },
        vAxis: {
            title: 'Sales by year',
        },
    };

    var materialChart = new google.charts.Bar(document.getElementById('chart_div2'));
    materialChart.draw(data, google.charts.Bar.convertOptions(options));
}

// ! Vendas e custo mensal
function salesAndCost() {
  
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'date', role: 'domain' }, 'Sales 2022');
    data.addColumn('number', 'Sales 2022');
    data.addColumn({ type: 'date', role: 'domain' }, 'Cost 2022');
    data.addColumn('number', 'Coast 2022');

    data.addRows([      
        [new Date(2022, 0, 1), salesByMonth.get(0).teamA + salesByMonth.get(0).teamB, new Date(2022, 0, 1), generateRandomNumber()],
        [new Date(2022, 1, 1), salesByMonth.get(1).teamA + salesByMonth.get(1).teamB, new Date(2022, 1, 1), generateRandomNumber()],
        [new Date(2022, 2, 1), salesByMonth.get(2).teamA + salesByMonth.get(2).teamB, new Date(2022, 2, 1), generateRandomNumber()],
        [new Date(2022, 3, 1), salesByMonth.get(3).teamA + salesByMonth.get(3).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 4, 1), salesByMonth.get(4).teamA + salesByMonth.get(4).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 5, 1), salesByMonth.get(5).teamA + salesByMonth.get(5).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 6, 1), salesByMonth.get(6).teamA + salesByMonth.get(6).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 7, 1), salesByMonth.get(7).teamA + salesByMonth.get(7).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 8, 1), salesByMonth.get(8).teamA + salesByMonth.get(8).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 9, 1), salesByMonth.get(9).teamA + salesByMonth.get(9).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 10, 1), salesByMonth.get(10).teamA + salesByMonth.get(10).teamB, new Date(2022, 3, 1), generateRandomNumber()],
        [new Date(2022, 11, 1), salesByMonth.get(11).teamA + salesByMonth.get(11).teamB, new Date(2022, 3, 1), generateRandomNumber()]
    ]);

    var options = {
        title: 'Sales vs cost in 2022',
        width: 1100,
        height: 400,
        focusTarget: 'category',
        titleTextStyle: {
          color: '#666666',
          bold: false
      }
      
    }

    // Create and draw the visualization.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div3'));
    chart.draw(data, options);

}

function generateRandomNumber(){
  let random = Math.floor(Math.random() * 20) + 1;
  return random;
}