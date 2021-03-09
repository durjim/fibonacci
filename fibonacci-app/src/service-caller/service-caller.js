const url = "http://localhost/fibonacci-server/service-caller.php"

export const GetFibonacciValue = async(n) => {
    const post = new FormData()
    post.append("n", n)

    let respuesta
    try {
        respuesta = await fetch(
            url,
            {
                method: "POST",
                body: post
            }
        )        
        return respuesta.json()
    }
    catch(error) {        
        return error
    } 
}