import express, { Request, Response, json } from 'express'

const app = express()
const port = 3000

app.set('view engine', 'pug')

app.use(json())

app.listen(port , () => {
    console.log(`Listening on port ${port}!!!`)
})

app.get('/', (req: Request, res: Response) => {
    res.render('home')
})