import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('file-upload')
export class FileUploadController {
    
    // @Post()
    // @UseInterceptors(FilesInterceptor('file', 3))
    // uploadFile(
    //     @UploadedFiles(
    //         new ParseFilePipe({
    //             validators:[
    //                 new MaxFileSizeValidator({
    //                     maxSize: 10000000
    //                 }),
    //                 new FileTypeValidator({
    //                     fileType: 'image/png'
    //                 })
    //             ]
    //         })
    //         )
    //         File: Express.Multer.File,
    // ){
    //    return File
    // }

}
