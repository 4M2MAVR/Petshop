import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet'
 
export const home = (req: Request, res: Response) => {
    // res.send('home');
    let list = Pet.getAll()
    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            backgrond: 'allanimals.jpg'
        },
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')
    res.render("pages/page", {
        menu: createMenuObject('dogs'),
        banner: {
            title: 'Cachorros',
            backgrond: 'banner_dog.jpg'
        },
        list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')
    res.render("pages/page", {
        menu: createMenuObject('cats'),
        banner: {
            title: 'Gatos',
            backgrond: 'banner_cat.jpg'
        },
        list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    res.render("pages/page", {
        menu: createMenuObject('fishes'),
        banner: {
            title: 'Peixes',
            backgrond: 'banner_fish.jpg'
        },
        list
    });
};