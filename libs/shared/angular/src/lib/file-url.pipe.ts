import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileUrl'
})
export class FileUrlPipe implements PipeTransform {

  transform(value: string): string {
    return `https://firebasestorage.googleapis.com/v0/b/anvlop-cms.appspot.com/o/${value.replace(/\//g,'%2F')}?alt=media`;
  }

}
