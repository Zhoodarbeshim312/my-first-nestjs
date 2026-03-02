import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postHello(): string;
    patchHello(): string;
    deleteHello(): string;
}
