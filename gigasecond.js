function gigasecond(gs){
 
  const gigasecond = 10**9;
  const milliseconds = gigasecond * 1000;
  
  let timeStamp = gs.getTime();
    timeStamp += milliseconds;

    let futureDate = new Date(timeStamp);
    return futureDate;
}

const gs = new Date(Date.UTC(2011, 3, 25));
console.log(gs);
console.log(gigasecond(gs));