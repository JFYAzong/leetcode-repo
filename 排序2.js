var objs = [
    {
        "num": "13",
        "UserType": "1",
        "happentime": "2022-08-08"
    },
    {
        "num": "9",
        "UserType": "1",
        "happentime": "2022-08-03"
    },
    {
        "num": "16",
        "UserType": "1",
        "happentime": "2022-08-06"
    },
    {
        "num": "1",
        "UserType": "2",
        "happentime": "2022-08-05"
    },
    {
        "num": "11",
        "UserType": "1",
        "happentime": "2022-08-04"
    },
    {
        "num": "13",
        "UserType": "1",
        "happentime": "2022-08-07"
    },
    {
        "num": "7",
        "UserType": "1",
        "happentime": "2022-08-09"
    },
    {
        "num": "15",
        "UserType": "1",
        "happentime": "2022-08-05"
    }
];
function compare(a, b){
    if ( a.happentime < b.happentime ){
        return -1;
      }
      if ( a.happentime > b.happentime ){
        return 1;
      }
      return 0;
}
objs.sort(compare);
//console.log(objs);
