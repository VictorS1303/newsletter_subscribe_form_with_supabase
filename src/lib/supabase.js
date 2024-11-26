const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const headersList =
{
    "Content-Type": "application/json",
    "API_KEY": API_KEY,
    "Prefer": "return=representation",
}


// GET subscribers
export async function getSubscribers()
{
    const response = await fetch(API_URL,
    {
        method: "GET", 
        headers: headersList,
    })   

    const data = await response.json()
    return data
}

// POST subscribers
export async function postSubscribers(subscriberData)
{
    const response = await fetch(API_URL,
    {
        method: "POST", 
        headers: headersList,
        body: JSON.stringify(subscriberData)
    })

    const data = await response.json()
    return data
}