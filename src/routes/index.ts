import { Express } from "express";

const router = require('express').Router();

import authroute from './auth.routes';
import bookroute from './book.routes';
import mechanismroute from './mechanism.routes';

router.use('/auth', authroute);
router.use('/books', bookroute);
router.use('/mechanisms', mechanismroute);

export default router;