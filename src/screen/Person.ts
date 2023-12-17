export class Person {
  name: string = "";
  country: string = "";
  dob: string = "";

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.name) this.name = initializer.name;
    if (initializer.country) this.country = initializer.country;
    if (initializer.dob) this.dob = initializer.dob;
  }
}
