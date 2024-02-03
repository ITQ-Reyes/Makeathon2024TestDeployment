export interface IJwtResponse {  
    dataUser: {
        // accessToken(accessToken: any, expiresIn: string): unknown;
        id: number,
        name: string,
        email: string, //check if this is needed
        password: string,
        accessToken: string,
        expiresIn: string  
    },
}