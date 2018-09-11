const si = require('systeminformation');

const result = async () => {
    await si.cpu(function (data) {
        console.log('CPU-information : ');
        console.log(data);
    })

    await si.mem(function (data) {
        console.log('mem-information : ');
        console.log(data);
    })

    await si.cpuTemperature(function (data) {
        console.log('temp-information : ');
        console.log(data);
    })

    await si.getAllData(function (data) {
        console.log('all-information : ');
        console.log(data);
    })
}

result();