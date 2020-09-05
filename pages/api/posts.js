// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 import * as axios from "axios";

export default (req, res) => {
     if (req.method === 'POST') {
       axios.post("http://jsonplaceholder.typicode.com/posts",
         req.body,
         {headers: {"Content-Type": "application/json", "x-token-access": "random"}})
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
