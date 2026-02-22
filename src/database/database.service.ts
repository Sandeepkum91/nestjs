import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
    private isConnected = false;

    onModuleInit(){
        this.isConnected = true;
        console.log('database is connected');
    }
    onApplicationShutdown(signal?: string){
        this.isConnected = false;
        console.log(`Database disconnected due to app shutdown`);
    }

    getStatus(){
        return this.isConnected ? 'Connected' :'Disconnected'
    }
    

}
