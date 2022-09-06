var objs = [
    {
        "num": "7",
        "hour": "7",
        "exteventinout": "1"
    },
    {
        "num": "24",
        "hour": "14",
        "exteventinout": "1"
    },
    {
        "num": "6",
        "hour": "13",
        "exteventinout": "1"
    },
    {
        "num": "5",
        "hour": "11",
        "exteventinout": "1"
    },
    {
        "num": "5",
        "hour": "6",
        "exteventinout": "1"
    },
    {
        "num": "29",
        "hour": "8",
        "exteventinout": "1"
    },
    {
        "num": "7",
        "hour": "10",
        "exteventinout": "1"
    },
    {
        "num": "16",
        "hour": "12",
        "exteventinout": "1"
    },
    {
        "num": "50",
        "hour": "9",
        "exteventinout": "1"
    },
    {
        "num": "1",
        "hour": "2",
        "exteventinout": "1"
    },
    {
        "num": "4",
        "hour": "5",
        "exteventinout": "1"
    }
];
function compare(a, b) {
    // if (a.hour < b.hour) {
    //     return -1;
    // }
    // if (a.hour > b.hour) {
    //     return 1;
    // }
    // return 0;
    return a.hour - b.hour;
}

objs.sort(compare);
//console.log(objs);
var hourList = [];
for(let i = 0; i < objs.length ; ++i){
    hourList.push(objs[i].hour + '点')
    // console.log(objs[i].hour);
}
console.log(hourList);