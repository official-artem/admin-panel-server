import * as userService from '../services/user.service.js';

export const get = async (req, res) => {
  const users = await userService.getAll();

  res.send(users);
}

export const getOne = async (req, res) => {
  const { id } = req.params;

  const users = await userService.getById(id);

  res.send(users);
};