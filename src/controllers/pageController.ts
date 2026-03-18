import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
 
export const home = (req: Request, res: Response) => {
    // res.send('home');
    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            backgrond: 'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('dogs'),
        banner: {
            title: 'Cachorros',
            backgrond: 'banner_dog.jpg'
        }
    });
};

export const cats = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('cats'),
        banner: {
            title: 'Gatos',
            backgrond: 'banner_cat.jpg'
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('fishes'),
        banner: {
            title: 'Peixes',
            backgrond: 'banner_fish.jpg'
        }
    });
};