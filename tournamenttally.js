function tournamentTally(tally){
    let format = 'Team | MP | W | D | L | P';

    if (!tally) return format;

    let lines = tally.trim().split('\n');
    let outcome = [];
    let teams = {};

    for(let line of lines){
       let parts = line.split(';');

      outcome.push({
        home: parts[0],
        away: parts[1],
        result: parts[2],
       });
    }

    for (let matches of outcome){
       if(!teams[matches.home]){
            teams[matches.home] = {mp:0, w:0, d:0, l:0, p:0};
       }
       if(!teams[matches.away]){
            teams[matches.away] = {mp: 0, w:0, d:0, l:0, p:0};
       }

       switch (matches.result){
        case 'win':
            teams[matches.home].mp++;
            teams[matches.home].w++;
            teams[matches.home].p += 3;

            teams[matches.away].mp++;
            teams[matches.away].l++;
            break;
        case 'loss':
            teams[matches.home].mp++;
            teams[matches.home].l++;

            teams[matches.away].mp++;
            teams[matches.away].w++;
            teams[matches.away].p += 3;
            break;
        case 'draw':
            teams[matches.home].mp++;
            teams[matches.home].d++;
            teams[matches.home].p++;

            teams[matches.away].mp++;
            teams[matches.away].d++;
            teams[matches.away].p++;
            break;
       }
    }

    for (let final in teams){
        let name = final.padEnd(31);
        let mp = String(teams[final].mp).padStart(2);
        let w = String(teams[final].w).padStart(2);
        let d = String(teams[final].d).padStart(2);
        let l = String(teams[final].l).padStart(2);
        let p = String(teams[final].p).padStart(2);

        format += `\n${name}| ${mp} | ${w} | ${d} | ${l} | ${p}`;
    }

    return format;
}

let tally = 'Blithering Badgers;Allegoric Alaskans;loss'
console.log(tournamentTally(tally));