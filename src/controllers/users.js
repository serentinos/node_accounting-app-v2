'use strict';

const userService = require('../services/users');

const getAll = async(req, res) => {
  try {
    const users = await userService.getAll();

    res.send(users);
  } catch (error) {
    res.sendStatus(503);
  }
};

const getById = async(req, res) => {
  const { userId } = req.params;

  if (isNaN(Number(userId))) {
    res.status(400).send({ message: 'Invalid ID' });

    return;
  }

  try {
    const foundUser = await userService.getById(userId);

    if (!foundUser) {
      res.status(404).send({ message: 'User was not found' });

      return;
    }

    res.send(foundUser);
  } catch (error) {
    res.sendStatus(503);
  }
};

const create = async(req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send({ message: 'Username was not provided.' });

    return;
  }

  try {
    const newUser = await userService.create(name);

    res.status(201).send(newUser);
  } catch (error) {
    res.sendStatus(503);
  }
};

const remove = async(req, res) => {
  const { userId } = req.params;

  try {
    const isUserFound = await userService.getById(userId);

    if (!isUserFound) {
      res.status(404).send({ message: 'User not found' });

      return;
    }

    await userService.remove(userId);

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(503);
  }
};

const edit = async(req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  if (!userId || !name) {
    res.status(400).send({ message: `Field 'name' cannot be empty` });

    return;
  }

  try {
    const isUserFound = userService.getById(userId);

    if (!isUserFound) {
      res.status(404).send({ message: 'Cannot find user with this ID' });

      return;
    }

    await userService.edit(userId, req.body);

    const editedUser = await userService.getById(userId);

    res.send(editedUser);
  } catch (error) {
    res.sendStatus(503);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  edit,
};
