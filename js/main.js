async function makeShort(){
          const URI = document.getElementById('uri').value;
          const showURI = document.getElementById('shortUri')
          const URL= `https://api.shrtco.de/v2/shorten?url=${URI}`
          const Res= fetch(URL)
          swal("Please Wait it may take time")
          const response= await Res
          const json= await response.json()
          console.log(json);
          if (json["ok"] === false){
                    swal( "Error" ,  "Failed to process or Invalid URL" ,  "error" )
                    showURI.innerHTML = "Failed to process or Invalid URL"
          }
          else{
                    showURI.innerHTML = json["result"]["short_link"]
                    navigator.clipboard.writeText(json["result"]["short_link"]);
                    swal("Copied", "URL copied", "success")
          }
}