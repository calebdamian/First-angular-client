//modelo de datos
//nos guía en el objeto que queremos obtener
export interface IUser {
    //la interfaz describe los datos, es decir los atributos del objeto
    _id?: string; //el ? determina que es opcional
    name: string;
    username: string,
    password: string;
    email: string;
    imageURL: string;
    createdAt?: Date; //generado por Mongo
}