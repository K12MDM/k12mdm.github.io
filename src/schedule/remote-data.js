this.default = function () {
    var dataManger = new ej.data.DataManager({
        url: 'http://localhost:62728/api/Schedule',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        eventSettings: { dataSource: dataManger },
        readonly: true
    });
    scheduleObj.appendTo('#Schedule');
};