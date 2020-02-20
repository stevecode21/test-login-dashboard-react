const bcrypt = require('bcryptjs');
const helpers = {}

helpers.encryptPassword = async (password) =>{
    //Generar un hash 10 veces
    const salt = await bcrypt.genSalt(10);
    //Cuando se termine de cifrar la contraseña una vez recibida, se generará el hash y lo guardará en la constante hash
    const hash = await bcrypt.hash(password, salt);
    //Retornamos el hash
    return hash;
};
//Este comparará cuando el usuario se vaya a loguear
helpers.matchPassword = async (password, savedPassword) =>{
    try {
        return await bcrypt.compare(password, savedPassword);
      } catch (e) {
        console.log(e);
      }
};

module.exports = helpers;
