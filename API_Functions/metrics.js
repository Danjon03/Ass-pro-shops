async function getMetrics()
{
    const url = 'http://localhost:3000/api/getMetrics'
    const customHeaders = {
        "Content-Type": "application/json",
    }

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: customHeaders
        });
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Allow the caller to handle errors
    }
}

async function addMetricRecord(query)
{
    const url = 'http://localhost:3000/api/addMetricRecord'
    const data = query;
    //future change :: const data = query;

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


async function addMetricTemplate(query)
{
    const url = 'http://localhost:3000/api/addMetricTemplate'
    const data = query;
    //future change :: const data = query;

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

async function getMetricTemplates()
{
    const url = 'http://localhost:3000/api/getMetricTemplates'
    const customHeaders = {
        "Content-Type": "application/json",
    }

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: customHeaders
        });
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Allow the caller to handle errors
    }
}

async function test()
{
    console.log(await getMetricTemplates());
}

test();

