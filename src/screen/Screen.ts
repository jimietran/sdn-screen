export class Screen {
  nameMatch: boolean = false;
  countryMatch: boolean = false;
  dobMatch: boolean = false;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.nameMatch) this.nameMatch = initializer.nameMatch;
    if (initializer.countryMatch) this.countryMatch = initializer.countryMatch;
    if (initializer.dobMatch) this.dobMatch = initializer.dobMatch;
  }
}
