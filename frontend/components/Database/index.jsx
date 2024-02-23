import React from 'react';

const data = [
    {
      "playerName": "Tom Brady",
      "team": "Tampa Bay Buccaneers",
      "position": "Quarterback",
      "jerseyNumber": 12,
      "age": 43,
      "college": "Michigan",
      "yearsPro": 21
    },
    {
      "playerName": "Aaron Donald",
      "team": "Los Angeles Rams",
      "position": "Defensive Tackle",
      "jerseyNumber": 99,
      "age": 30,
      "college": "Pittsburgh",
      "yearsPro": 8
    },
    {
      "playerName": "Davante Adams",
      "team": "Green Bay Packers",
      "position": "Wide Receiver",
      "jerseyNumber": 17,
      "age": 28,
      "college": "Fresno State",
      "yearsPro": 8
    },
    {
      "playerName": "Derrick Henry",
      "team": "Tennessee Titans",
      "position": "Running Back",
      "jerseyNumber": 22,
      "age": 27,
      "college": "Alabama",
      "yearsPro": 5
    },
    {
      "playerName": "Travis Kelce",
      "team": "Kansas City Chiefs",
      "position": "Tight End",
      "jerseyNumber": 87,
      "age": 31,
      "college": "Cincinnati",
      "yearsPro": 9
    },
    {
      "playerName": "Stephon Gilmore",
      "team": "New England Patriots",
      "position": "Cornerback",
      "jerseyNumber": 24,
      "age": 31,
      "college": "South Carolina",
      "yearsPro": 9
    },
    {
      "playerName": "Alvin Kamara",
      "team": "New Orleans Saints",
      "position": "Running Back",
      "jerseyNumber": 41,
      "age": 26,
      "college": "Tennessee",
      "yearsPro": 5
    },
    {
      "playerName": "T.J. Watt",
      "team": "Pittsburgh Steelers",
      "position": "Linebacker",
      "jerseyNumber": 90,
      "age": 26,
      "college": "Wisconsin",
      "yearsPro": 4
    },
    {
      "playerName": "DeAndre Hopkins",
      "team": "Arizona Cardinals",
      "position": "Wide Receiver",
      "jerseyNumber": 10,
      "age": 29,
      "college": "Clemson",
      "yearsPro": 8
    },
    {
      "playerName": "Christian McCaffrey",
      "team": "Carolina Panthers",
      "position": "Running Back",
      "jerseyNumber": 22,
      "age": 25,
      "college": "Stanford",
      "yearsPro": 5
    },
    {
      "playerName": "Jalen Ramsey",
      "team": "Los Angeles Rams",
      "position": "Cornerback",
      "jerseyNumber": 5,
      "age": 26,
      "college": "Florida State",
      "yearsPro": 5
    },
    {
      "playerName": "Bobby Wagner",
      "team": "Seattle Seahawks",
      "position": "Linebacker",
      "jerseyNumber": 54,
      "age": 31,
      "college": "Utah State",
      "yearsPro": 10
    },
    {
      "playerName": "Stefon Diggs",
      "team": "Buffalo Bills",
      "position": "Wide Receiver",
      "jerseyNumber": 14,
      "age": 27,
      "college": "Maryland",
      "yearsPro": 6
    },
    {
      "playerName": "Cameron Jordan",
      "team": "New Orleans Saints",
      "position": "Defensive End",
      "jerseyNumber": 94,
      "age": 31,
      "college": "California",
      "yearsPro": 10
    },
    {
      "playerName": "Derrick Brooks",
      "team": "Tampa Bay Buccaneers",
      "position": "Linebacker",
      "jerseyNumber": 55,
      "age": 48,
      "college": "Florida State",
      "yearsPro": 14
    },
    {
      "playerName": "Calvin Ridley",
      "team": "Atlanta Falcons",
      "position": "Wide Receiver",
      "jerseyNumber": 18,
      "age": 26,
      "college": "Alabama",
      "yearsPro": 3
    },
    {
      "playerName": "Tyreek Hill",
      "team": "Kansas City Chiefs",
      "position": "Wide Receiver",
      "jerseyNumber": 10,
      "age": 27,
      "college": "West Alabama",
      "yearsPro": 6
    },
    {
      "playerName": "Denzel Ward",
      "team": "Cleveland Browns",
      "position": "Cornerback",
      "jerseyNumber": 21,
      "age": 24,
      "college": "Ohio State",
      "yearsPro": 3
    },
    {
      "playerName": "Zach Ertz",
      "team": "Philadelphia Eagles",
      "position": "Tight End",
      "jerseyNumber": 86,
      "age": 30,
      "college": "Stanford",
      "yearsPro": 8
    },
    {
      "playerName": "Chris Godwin",
      "team": "Tampa Bay Buccaneers",
      "position": "Wide Receiver",
      "jerseyNumber": 14,
      "age": 25,
      "college": "Penn State",
      "yearsPro": 4
    },
    {
      "playerName": "Darius Leonard",
      "team": "Indianapolis Colts",
      "position": "Linebacker",
      "jerseyNumber": 53,
      "age": 25,
      "college": "South Carolina State",
      "yearsPro": 3
    },
    {
      "playerName": "Darious Williams",
      "team": "Los Angeles Rams",
      "position": "Cornerback",
      "jerseyNumber": 31,
      "age": 27,
      "college": "UAB",
      "yearsPro": 2
    },
    {
      "playerName": "DeForest Buckner",
      "team": "Indianapolis Colts",
      "position": "Defensive Tackle",
      "jerseyNumber": 99,
      "age": 26,
      "college": "Oregon",
      "yearsPro": 5
    },
    {
      "playerName": "Julio Jones",
      "team": "Tennessee Titans",
      "position": "Wide Receiver",
      "jerseyNumber": 2,
      "age": 32,
      "college": "Alabama",
      "yearsPro": 11
    },
    {
      "playerName": "Dak Prescott",
      "team": "Dallas Cowboys",
      "position": "Quarterback",
      "jerseyNumber": 4,
      "age": 28,
      "college": "Mississippi State",
      "yearsPro": 6
    },
    {
      "playerName": "Marlon Humphrey",
      "team": "Baltimore Ravens",
      "position": "Cornerback",
      "jerseyNumber": 44,
      "age": 25,
      "college": "Alabama",
      "yearsPro": 4
    },
    {
      "playerName": "Anthony Harris",
      "team": "Philadelphia Eagles",
      "position": "Safety",
      "jerseyNumber": 28,
      "age": 30,
      "college": "Virginia",
      "yearsPro": 6
    },
    {
      "playerName": "Xavien Howard",
      "team": "Miami Dolphins",
      "position": "Cornerback",
      "jerseyNumber": 25,
      "age": 27,
      "college": "Baylor",
      "yearsPro": 6
    },
    {
      "playerName": "Josh Allen",
      "team": "Buffalo Bills",
      "position": "Quarterback",
      "jerseyNumber": 17,
      "age": 25,
      "college": "Wyoming",
      "yearsPro": 4
    },
    {
      "playerName": "Derwin James",
      "team": "Los Angeles Chargers",
      "position": "Safety",
      "jerseyNumber": 33,
      "age": 24,
      "college": "Florida State",
      "yearsPro": 3
    },
    {
      "playerName": "Lavonte David",
      "team": "Tampa Bay Buccaneers",
      "position": "Linebacker",
      "jerseyNumber": 54,
      "age": 31,
      "college": "Nebraska",
      "yearsPro": 10
    },
    {
      "playerName": "Tyrann Mathieu",
      "team": "Kansas City Chiefs",
      "position": "Safety",
      "jerseyNumber": 32,
      "age": 29,
      "college": "LSU",
      "yearsPro": 9
    },
    {
      "playerName": "Yannick Ngakoue",
      "team": "Las Vegas Raiders",
      "position": "Defensive End",
      "jerseyNumber": 91,
      "age": 26,
      "college": "Maryland",
      "yearsPro": 6
    },
    {
      "playerName": "Michael Thomas",
      "team": "New Orleans Saints",
      "position": "Wide Receiver",
      "jerseyNumber": 13,
      "age": 28,
      "college": "Ohio State",
      "yearsPro": 5
    },
    {
      "playerName": "Jaire Alexander",
      "team": "Green Bay Packers",
      "position": "Cornerback",
      "jerseyNumber": 23,
      "age": 24,
      "college": "Louisville",
      "yearsPro": 3
    },
    {
      "playerName": "Deebo Samuel",
      "team": "San Francisco 49ers",
      "position": "Wide Receiver",
      "jerseyNumber": 19,
      "age": 25,
      "college": "South Carolina",
      "yearsPro": 2
    },
    {
      "playerName": "Von Miller",
      "team": "Denver Broncos",
      "position": "Outside Linebacker",
      "jerseyNumber": 58,
      "age": 32,
      "college": "Texas A&M",
      "yearsPro": 10
    },
    {
      "playerName": "Baker Mayfield",
      "team": "Cleveland Browns",
      "position": "Quarterback",
      "jerseyNumber": 6,
      "age": 26,
      "college": "Oklahoma",
      "yearsPro": 3
    },
    {
      "playerName": "Jeremy Chinn",
      "team": "Carolina Panthers",
      "position": "Safety",
      "jerseyNumber": 21,
      "age": 23,
      "college": "Southern Illinois",
      "yearsPro": 1
    },
    {
      "playerName": "Chase Young",
      "team": "Washington Football Team",
      "position": "Defensive End",
      "jerseyNumber": 99,
      "age": 22,
      "college": "Ohio State",
      "yearsPro": 1
    },
    {
      "playerName": "Justin Jefferson",
      "team": "Minnesota Vikings",
      "position": "Wide Receiver",
      "jerseyNumber": 18,
      "age": 22,
      "college": "LSU",
      "yearsPro": 1
    },
    {
      "playerName": "JK Dobbins",
      "team": "Baltimore Ravens",
      "position": "Running Back",
      "jerseyNumber": 27,
      "age": 22,
      "college": "Ohio State",
      "yearsPro": 1
    },
    {
      "playerName": "Brandon Aiyuk",
      "team": "San Francisco 49ers",
      "position": "Wide Receiver",
      "jerseyNumber": 11,
      "age": 22,
      "college": "Arizona State",
      "yearsPro": 1
    },
    {
      "playerName": "CeeDee Lamb",
      "team": "Dallas Cowboys",
      "position": "Wide Receiver",
      "jerseyNumber": 88,
      "age": 22,
      "college": "Oklahoma",
      "yearsPro": 1
    },
    {
      "playerName": "Jerry Jeudy",
      "team": "Denver Broncos",
      "position": "Wide Receiver",
      "jerseyNumber": 10,
      "age": 22,
      "college": "Alabama",
      "yearsPro": 1
    },
    {
      "playerName": "Tua Tagovailoa",
      "team": "Miami Dolphins",
      "position": "Quarterback",
      "jerseyNumber": 1,
      "age": 23,
      "college": "Alabama",
      "yearsPro": 2
    },
    {
      "playerName": "Joe Burrow",
      "team": "Cincinnati Bengals",
      "position": "Quarterback",
      "jerseyNumber": 9,
      "age": 24,
      "college": "LSU",
      "yearsPro": 2
    },
    {
      "playerName": "Justin Herbert",
      "team": "Los Angeles Chargers",
      "position": "Quarterback",
      "jerseyNumber": 10,
      "age": 22,
      "college": "Oregon",
      "yearsPro": 1
    },
    {
      "playerName": "Chase Claypool",
      "team": "Pittsburgh Steelers",
      "position": "Wide Receiver",
      "jerseyNumber": 11,
      "age": 22,
      "college": "Notre Dame",
      "yearsPro": 1
    },
    {
      "playerName": "James Robinson",
      "team": "Jacksonville Jaguars",
      "position": "Running Back",
      "jerseyNumber": 25,
      "age": 22,
      "college": "Illinois State",
      "yearsPro": 1
    },
    {
      "playerName": "Myles Garrett",
      "team": "Cleveland Browns",
      "position": "Defensive End",
      "jerseyNumber": 95,
      "age": 25,
      "college": "Texas A&M",
      "yearsPro": 4
    },
    {
      "playerName": "Davion Taylor",
      "team": "Philadelphia Eagles",
      "position": "Linebacker",
      "jerseyNumber": 52,
      "age": 23,
      "college": "Colorado",
      "yearsPro": 1
    }
  ]

export default function DatabasePage(){
    return (
        <div style={{height:'100%'}} className='d-flex flex-column mt-7'>
            <div className='d-flex justify-content-between'>
                <h2>My NFL Database</h2>

                <button className='btn btn-outline-info'>Edit API Page</button>

            </div>
        
         <div className="my-7 rounded-3" style={{ width:'100%',height:'100vh', overflow: 'auto'}}>
                  <table className="" style={{width:'100%', fontSize: '0.5rem'}} >
  <thead>
  
  </thead>
  <tbody>

     <tr>
       {Object.keys(data[0]).map((key) => (
        <td className='preview-table-row'>{key}</td>
      ))}
    </tr>

 {data.map((row, index) => (
  <tr key={index} className='preview-table-row'>
    {Object.values(row).map((value, index) => (
      <td key={index} className='preview-table-col'>{value}</td>
    ))}
  </tr>
))}

  </tbody>
</table>
</div>
</div>
    )
}