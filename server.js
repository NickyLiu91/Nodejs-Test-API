import app from './app';
app.use(express.json());

const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`server on port ${port}`);
});
