
// Posts a template to the database
function postTemplate(query)
{
    const url = 'http://localhost:3000/api/addTemplate'
    const data = query;
    const customHeaders = {
        "Content-Type": "application/json",
    }
    
    fetch(url, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
  }