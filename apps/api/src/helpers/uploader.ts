import { Request } from 'express';
import multer from 'multer';
import path from 'path';

type DestinationCallback = (error : Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, fileName: string) => void;

export const uploader = (filePrefix : string, folderName? : string) => {
      const defaultDir = path.join(__dirname, "../../public")

      const storage = multer.diskStorage({
            destination: (
                  req: Request, 
                  file: Express.Multer.File, 
                  cb: DestinationCallback) => {
                  const destination = folderName? defaultDir + folderName : defaultDir
                  cb(null, destination)
            }  ,
            filename: (
                  req: Request,
                  file: Express.Multer.File,
                  cb: FilenameCallback) => {
                        const originalNameParts = file.originalname.split(".") //image1.png ['image1', 'png']
                        const fileExtension = originalNameParts[originalNameParts.length - 1]
                        const newFilename = filePrefix + Date.now() + "." + fileExtension
                        cb(null, newFilename)
                  }
      })

      return multer({storage: storage})
}