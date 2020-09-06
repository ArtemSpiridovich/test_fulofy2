// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as axios from "axios";

const instance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {"Content-Type": "application/json", "x-token-access": "random"}
})

export default (req, res) => {
     if (req.method === 'POST') {
       instance.post('posts',
         req.body)
         .then((result) => {
           res.statusCode = 200
           res.json(result.data)
         })
         .catch((error) => {
           res.statusCode = 500;
           res.json(error)
         })
     }
 }
