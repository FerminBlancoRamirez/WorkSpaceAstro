export async function GET() {
    const fecha = new Date().toLocaleString()
    return new Response(
        JSON.stringify({laFecha: fecha, msg:"Aqui tienes tu fecha"}),
        {headers:{"Content-Type": "application/json"}}
    )
}