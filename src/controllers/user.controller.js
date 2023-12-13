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

export const create = async (req, res) => {
  const { 
    name,
    surname,
    phone,
    country,
    height,
    weight
  } = req.body;

  const newUser = await userService.create(
    name,
    surname,
    phone,
    country,
    height,
    weight
  );

  res.send(newUser);
};


export const update = async (req, res) => {
  const { id } = req.params
  const prevUser = req.body;

  const updatedUser = await userService.update(id, prevUser);

  res.send(updatedUser)
}

