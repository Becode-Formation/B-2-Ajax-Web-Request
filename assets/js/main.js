let quote = document.getElementById("quote") //Récupérer l'endroit où mettre la quote
let author = document.getElementById("author") // Récupérer l'endroit où mettre l'auteur
let aPhoto = document.getElementById("author_photo") //Récupérer la photo de l'auteur

// Get the api
// let getData = async () => {
//     let response = await fetch('https://thatsthespir.it/api')
//     let data = await response.json()
//     return data
// }

// // Recupérer les données et les mettres dans le html
// getData()
//     .then(data => {
//         quote.innerHTML = data.quote 
//         author.innerHTML = data.author
//         //Photo
//         aPhoto.src = data.photo
//         aPhoto.alt = data.author    
//         console.log(data)        
//     })
//     .catch(error =>{
//         alert('There is an error, sorry')
//         console.log(error)
//     } )

    let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    let data = JSON.parse(this.responseText);
                    quote.innerHTML = data.quote 
                    author.innerHTML = data.author
                    //Photo
                    aPhoto.src = data.photo
                    aPhoto.alt = data.author    
        } else if(this.status != 200){
            alert("Erreur " + xhr.status + " : " + xhr.statusText);
        }
                }

    xhr.onerror = function(){
        alert("Désolé, il y a un problème")
    }
    //call send
    xhr.send();