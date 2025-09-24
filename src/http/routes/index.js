
export const routes = async(app) => {
    app.get('/', () => console.log('Ola Mundo!'))
    // app.get('/produtos/:id', (request, response) => {
    //     console.log(request)
    //      return response.status(200).send({message: 'Requisição efetuada com sucesso'})

    // })

}