const url = `https://api.npoint.io/d6bd0efc05639084eb17/playerList`;
const info = document.getElementById("player-info");
const searchBar = document.getElementById("search");
let output= "";
let playerList = [];


searchBar.addEventListener('keypress', (e) =>{
    console.log(e.target.value);
    const searchString = e.target.value;
    const filteredPlayerList = playerList.filter((player) => {
        return (
            player.PFName.includes(searchString) || player.TName.includes(searchString)
        );
    }) 
    console.log(filteredPlayerList);
    getPlayerInfo(filteredPlayerList);
})




getPlayerInfo = (data) =>{
    let output="";
    try{
        console.log(data);
        let sortData = data.sort((a,b)=> {return a.Value - b.Value })
        
        sortData.map((index) =>{
            output+=
            `
              
                
              <section class="player-card">
                    <div class="card">
                        <header>
                        <a class="profile">
                            <img src="player-images/${index.Id}.jpg" alt="Profile Image">
                        </a>
                        </header>

                        <article>
                        <h1>Name:${index.PFName}</h1>
                        <h2>Sklill:${index.SkillDesc}</h2>
                        <h2>Math Date:${index.UpComingMatchesList[0].MDate.toString()}</h2>
                        
                        <div class="info">
                            <div>
                            <span>${index.Value}</span>
                            <span>Value</span>
                            </div>
                            
                            <div>
                            <span>${index.UpComingMatchesList[0].CCode}</span>
                            <span>CCode</span>
                            </div>
                            
                            <div>
                            <span>${index.UpComingMatchesList[0].VsCCode}</span>
                            <span>VsCCode</span>
                            </div>
                        </div>
                        </article>
                    </div>
    
  
                </section>
           
            `
        })

         
        info.innerHTML=output;
    }
    
    catch(error){
        alert(error);
        console.log(error);
    }
}

async function playerData(url){
    const response =  await fetch(url);
    playerList = await response.json()
    // console.log(result)
    // console.log(result.playerList[0].UpComingMatchesList)

    getPlayerInfo(playerList);
}

playerData(url);





{/* <article>
                <img src="/player-images/${index.Id}.jpg" alt="Sample photo">
                <div class="text">
                  <h3>Name:${index.PFName}</h3>
                  <p>Sklill:${index.SkillDesc}</p>
                    <h3>Value:${index.Value}</h3>
                    ${index.Id}
                    <h3>${index.UpComingMatchesList[0].CCode}</h3>
                    <h3>${index.UpComingMatchesList[0].MDate.toString()}</h3>
                    <h3>${index.UpComingMatchesList[0].VsCCode}</h3>       
                </div>
              </article> */}