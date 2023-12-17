export class Person {
  id: number | undefined;
  name: string = "";
  country: string = "";
  dob: string = "";
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.country) this.country = initializer.country;
    if (initializer.dob) this.dob = initializer.dob;
  }
}
