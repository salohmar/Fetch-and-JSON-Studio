const asyncFunction = async () => {
const promiseResponse = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
const json = await promiseResponse.json()
            const div = document.getElementById("container");
            let astronautList = "";
            for (const astronautChoice of json) {
            astronautList += `
            <div class="astronaut">
            <div class="bio">
               <h3>Name ${astronautChoice.firstName} ${astronautChoice.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astronautChoice.hoursInSpace}</li>
                  <li>Active: ${astronautChoice.active}</li>
                  <li>Skills: ${astronautChoice.skills}</li>
               </ul>
            </div>
            <img class="avatar" src=${astronautChoice.picture}>
         </div>
         `;
            }
        div.innerHTML = astronautList
        };
        asyncFunction();