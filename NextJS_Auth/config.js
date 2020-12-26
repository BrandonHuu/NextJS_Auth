module.exports = {
    mongoose:{
        url: '<// MONGODB CONNECTION URL //>',
        options : {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    Auth:{
        Cookie_Name: 'Auth_Dev',
        JWT_Secret: '<//JWT Secret //>'
    }
}