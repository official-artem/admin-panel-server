import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userController.get)

router.get('/:id', userController.getOne)

router.post('/', userController.create)

router.put('/:id', userController.update)

export { router };