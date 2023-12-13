import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userController.get)

router.get('/:id', userController.getOne)

export { router };