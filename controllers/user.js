const { User } = require('./../db/models');

const dataDummy = {
  nama: 'Hamid',
  email: 'hamid@gmail.com',
  password: 'abcd',
  role: 'admin',
  phone: '097832749283'
}

class UserController {
  static async registerUser() {
    try {
      const hasil = await User.create(dataDummy);
      console.log('Berhasil Resgiter', hasil);
    } catch (error) {
      console.log('Gagal', error)
    }
  }  
}

module.exports = UserController;