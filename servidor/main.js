import Express from 'express';
import cors from 'cors';
import db from './database/db.js';

import blogRoutes from './routes/routesBlogs.js';
import userRoutes from './routes/routesUser.js';

const app = Express();
app.use(cors());
app.use(Express.json());
app.use('/blogs', blogRoutes);
app.use('/users', userRoutes);

try {
    db.authenticate()
    console.log('conexion exitosa a la bd');
} catch (error) {
    console.log(`el error de conexion fue ${error}`);
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})