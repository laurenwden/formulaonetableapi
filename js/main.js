async function getJSON() {
        year = document.getElementById('year').value
    lap = document.getElementsByName('lap')[0].value
    await fetch(`https://ergast.com/api/f1/${year}/${lap}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData => {
            for (let i = 0; i < 7; i++) {
                let position_number = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
                document.getElementById(`position${i.toString()}`).innerHTML = position_number
            }
            for (let i = 0; i < 7; i++) {
                let last = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
                document.getElementsByClassName(`last${i.toString()}`).innerHTML = last
                let first = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
                document.getElementById(`first${i.toString()}`).innerHTML = first + ' ' + last
            }
            for (let i = 0; i < 7; i++) {
                let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
                document.getElementById(`nationality${i.toString()}`).innerHTML = nationality
            }
            for (let i = 0; i < 7; i++) {
                let sponsor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
                document.getElementById(`sponsor${i.toString()}`).innerHTML = sponsor
            }
            for (let i = 0; i < 7; i++) {
                let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
                document.getElementById(`points${i.toString()}`).innerHTML = points
            }
        })

}