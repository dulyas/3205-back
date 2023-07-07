import { getDataService } from '@/services/data-service';
import { NextFunction, Request, Response } from 'express';


export const getDataController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, num } = req.query

        if (!email) throw new Error('email cant be empty')
        if (!String(email).match(/.+@.+\..+/i)) throw new Error('not valid email')
        if (num !== undefined && isNaN(+String(num).replaceAll('-', ''))) throw new Error('not valid number')

        const data = await getDataService(String(email).trim(), String(num).replaceAll('-', '').trim()) 

        setTimeout(() => {
            res.json(data)
        }, 5000)

    } catch (error: unknown) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message ?? error : error,
        })
    }
}