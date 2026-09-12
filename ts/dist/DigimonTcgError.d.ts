import { Context } from './Context';
declare class DigimonTcgError extends Error {
    isDigimonTcgError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { DigimonTcgError };
