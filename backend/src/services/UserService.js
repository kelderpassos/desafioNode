const userModel = require('../models/UserModel');

module.exports = {
  create: async (infos) => {
    try {
      return userModel.create(infos);    
    } catch (error) {
      throw new Error('User cannot be created');
    }
  },

  readAll: async () => {
    try {
      return userModel.readAll();   
    } catch (error) {
      throw new Error('List of users couldn\'t be retrieved');
    }
  },

  readOne: async (id) =>
    userModel.readOne(id),

  update: async (id, infos) => {
    try {
      return userModel.update(id, infos);      
    } catch (error) {
      throw new Error('User couldn\'t be updated');
    }
  },
  
  delete: async (id) => {
    try {
      return userModel.delete(id);
    } catch (error) {
      throw new Error('User couldn\'t be deleted');
    }
  }
};
