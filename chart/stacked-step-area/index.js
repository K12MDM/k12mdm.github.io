ej.base.enableRipple(window.ripple)
/**
 * Sample for Stacked Step Area Series
 */

    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Double',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
        },
        primaryYAxis: {
            title: 'Production (Billion as kWh)',
            valueType: 'Double',
            labelFormat: '{value}B',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        series: [
            {
                type: 'StackingStepArea',
                dataSource: [{ x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
                { x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 },
                { x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 509 }],
                name: 'Renewable',
                xName: 'x',
                yName: 'y',
                fill: '#56CCF2',
                opacity: 0.5
            },
            {
                type: 'StackingStepArea',
                dataSource: [{ x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
                { x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 },
                { x: 2008, y: 300 }, { x: 2009, y: 173 }, { x: 2010, y: 220 }, { x: 2011, y: 309 }],
                name: 'Non-Renewable',
                xName: 'x',
                yName: 'y',
                fill: '#2F80ED',
                opacity: 0.5
            },
        ],
        title: 'Electricity- Production',
        width: ej.base.Browser.isDevice ? '100%' : '60%',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
    });
    chart.appendTo('#stacked-step-container');
