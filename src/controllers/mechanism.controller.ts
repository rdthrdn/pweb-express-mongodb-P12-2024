import { type NextFunction } from "express";
import { type Request, type Response } from "express";

import { mechanism } from "../services/mechanism.service";

export const mechanismcontroller = {
    async borrow(req: Request, res: Response, next: NextFunction) {
        try {
            const book = await mechanism.borrow(req.params.id);
            res.status(200).send({
                status: "success",
                message: "Book borrowed successfully",
                data: book,
            });
        } catch (error) {
            res.status(404).send({
                status: "error",
                message: (error as Error).message,
            });
        }
    },

    async returnBook(req: Request, res: Response, next: NextFunction) {
        try {
            const book = await mechanism.returnBook(req.params.id);
            res.status(200).send({
                status: "success",
                message: "Book returned successfully",
                data: book,
            });
        } catch (error) {
            res.status(404).send({
                status: "error",
                message: (error as Error).message,
            });
        }
    },

    async healthCheck(req: Request, res: Response, next: NextFunction) {
        const currentDate = new Date().toISOString().split('T')[0];
        try {
            res.status(200).send({
                status: "success",
                message: "Mechanism service is running",
                data: {
                    date: currentDate,
                },
                
            });
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Health check encountered an error",
                data: {
                    date: currentDate,
                    error: error,
                },
            });
        }
        
    }
};