const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { Objeto } = require('../schemas/objeto');

let router = Router();

router.get('/',
    [/*Validaciones check*/],
    async (req, res) => {
        try {
            //Resultados de Validacion
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }

            let objetos = await Objeto.find();
            res.status(200).json(objetos);
        } catch (err) {
            res.status(400).json(err);
        }
    })

router.get('/:id',
    [/*Validaciones check*/],
    async (req, res) => {
        try {
            //Resultados de Validacion
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }

            let id = req.params.id;
            let objeto = await Objeto.findById(id);
            res.status(200).json(objeto);
        } catch (err) {
            res.status(400).json(err);
        }
    })

router.post('/',
    [/*Validaciones check*/],
    async (req, res) => {
        try {
            //Resultados de Validacion
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }

            let body = req.body;
            let objeto = new Objeto({ nombre: body.nombre, age: body.age });
            await objeto.save();
            res.status(201).json({ msg: 'Recurso creado correctamente' });
        } catch (err) {
            res.status(400).json(err);
        }
    })

router.put('/:id',
    [/*Validaciones check*/],
    async (req, res) => {
        try {
            //Resultados de Validacion
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }

            let id = req.params.id;
            let age = req.body.age;
            let obj = await Objeto.findByIdAndUpdate(id, { age: age }, { new: true });

            res.status(200).json(obj);
        } catch (err) {
            res.status(400).json(err);
        }
    })

router.delete('/:id',
    [/*Validaciones check*/],
    async (req, res) => {
        try {
            //Resultados de Validacion
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }

            let id = req.params.id;
            let objeto = await Objeto.findByIdAndDelete(id);
            res.status(200).json('Usuario: ' + id + ', eliminado correctamente');
        } catch (err) {
            res.status(400).json(err);
        }
    })

router.patch('/',
    [/*Validaciones check*/],
    (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        res.json({ message: 'Patch test' })
    })

module.exports = router