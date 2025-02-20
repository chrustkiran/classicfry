
import { basePath } from "../next.config";
import path from "path";


export default function myImageLoader({src,width}) {
    console.log("helllo from custom")
  if( basePath && path.isAbsolute(src) ){
    return `${basePath}${src}?width=${width}`;
  }
  return `${src}?width=${width}`;
}