import { HttpException } from "@nestjs/common"
import { extname } from "path";

 export const create= (req, file, callback)=>{
    if(!file.originalName.match(/\.(jpeg|jpg|png|gif)$/)){
      return callback(new HttpException('sorry', 404),false);
    }
    callback(null,true);
};

export const editFileName =(req, file, callback)=>{
    const name = file.originalName.split('.')[0];
    const fileExtName = extname(file.originalName);
    const randomName = Array(4)
    .fill(null)
    .map(()=> Math.round(Math.random() *16).toString(16))
    .join('');
    callback(null, `${name}-${randomName} ${fileExtName}`)
}