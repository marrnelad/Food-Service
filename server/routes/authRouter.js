import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config/config'

import { celebrate, Joi, errors } from 'celebrate';

const authRouter = new express.Router();

const SignUpSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(30),
    phone: Joi.string(),
    isAdmin: Joi.boolean(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
    email: Joi.string().email().required()
});

const SignInSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

authRouter.post('/signup', celebrate({
        body: SignUpSchema
    }), (req, res, next) => passport.authenticate('localSignUp', (err,user) => {
        if (err) {
            return res.status(400).json({
                // errorMessage: 'Oops, something goes wrong.'
                success: false
            });
        }
        let token = jwt.sign({
            uuid: user.uuid,
            name: user.name
        }, config.jwtSecret);
        return res.status(200).json({
            success: true,
            token
        });
    })(req, res, next)
);

authRouter.post('/signin', celebrate({
        body: SignInSchema
    }), (req, res, next) => passport.authenticate('localSignIn', (err, user) => {
        if (err) {
            return res.status(400).json({
                success: false
            });
        }
        let token = jwt.sign({
            uuid: user.uuid,
            name: user.name,
            email: user.email,
            phone: user.phone,
        }, config.jwtSecret);
        return res.status(200).json({
            success: true,
            token
        });
    })(req, res, next)
);

authRouter.use(errors());

export default authRouter;