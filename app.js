const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req, res) => {
    res.send('ciao ciao');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
app.use(express.static('public'));

//importo il router in una variabile
const postsRouter = require('./routers/posts.js');

//vado ad utilizzare postsRouter per creare effettivamente le rotte
app.use("/posts" , postsRouter);