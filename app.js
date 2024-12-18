/**
 * variable to store API endpoint
 */
var url = "https://jsonplaceholder.typicode.com/users";

/**
 * asynchronous functon which calls api using fetch()
 */
async function callingAPI(){
    const response = await fetch(url);
    const jsonData = await response.json();
    display(jsonData);

}
/**
 * function to traverse array received from API and dsiplaying it in a tableon the website
 * @param {Array} data array of objects received from API calling
 */
function display(data){
    data.forEach(element => {
        const tbody = document.getElementById("tbody");
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        td1.innerHTML = element.id;
        td2.innerHTML = element.name;
        td3.innerHTML = element.username;
        td4.innerHTML = element.email;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.append(tr);        
    });
} 
