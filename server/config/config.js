//Puerto
process.env.PORT = process.env.PORT || 3000;


//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Base de Datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;

}
process.env.URLDB = urlDB;

//Vencimiento de token
// 60 segundos
// 60 minutos
// 24 horas 
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;



//Seed de autenticación
process.env.SEED = process.env.SEED || 'seed-desarrollo';


//Google Client Id

process.env.CLIENT_ID = process.env.CLIENT_ID || '983706859791-hvphbcv9a7blj7p6c35kagoqgrpqqbs6.apps.googleusercontent.com';