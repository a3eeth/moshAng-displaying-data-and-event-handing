import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizer'
})
export class CapitalizerPipe implements PipeTransform {

  transform(value: string, ): any {
    // if (!value) {
    //   return null;
    // }
    // let words = value.split(' ');
    // for(let i = 0; i < words.length; i++) {
    //   let word = words[i];
    //   if (i > 0 && this.isPreposition(word)) {
    //     words[i] = word.toLowerCase();
    //   }
    //   else {
    //     words[i] = this.toTitleCase(word);
    //   }
    //   return words.join(' ');
    // }
    // private toTitleCase(word: string): string {
    //   return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    // }
    // private isPreposition(word: string): boolean {
    //   let prepositions = ['of', 'the'];
    //   return prepositions.includes(word.toLowerCase());
    // }
    // too loud and needs to be refactored 
    if (!value) {
      return null;
    }
    let prepositions = ['of', 'the'];
    let words = value.split(' ');
    for(var i = 0; i < words.length; i++) {
      if(i > 0 && prepositions.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }
    return words.join(' ');
  }
}
