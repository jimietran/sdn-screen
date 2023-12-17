import { useState } from "react";
import ScreenForm from "./ScreenForm";
import { Person } from "./Person";
import { screenAPI } from "./screenAPI";
import ScreenResult from "./ScreenResult";

function ScreenPage() {
  const [screenResult, setScreenResult] = useState({
    nameMatch: false,
    countryMatch: false,
    dobMatch: false,
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const initialPerson = new Person({ name: "", country: "", dob: "" });
  const screenPerson = async (person: Person) => {
    const caseValues = {
      cases: [
        {
          name: person.name,
          address: {
            country: person.country,
          },
          dob: person.dob + "-01-01",
        },
      ],
    };

    const response = await screenAPI(caseValues).catch((e) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    });

    const search = (key: any, person: Person) => {
      const nameMatch =
        Object.values(key).find((obj: any) => {
          return obj.fullName?.includes(person.name);
        }) != undefined;

      const countryMatch =
        Object.values(key).find((obj: any) => {
          return obj.addresses?.find((address: any) => {
            return address?.country == person.country;
          });
        }) != undefined;

      const dobMatch =
        Object.values(key).find((obj: any) => {
          return obj.dob?.includes(person?.dob);
        }) != undefined;
      return { nameMatch, countryMatch, dobMatch };
    };

    const matches = search(response, person);

    setScreenResult(matches);
    setHasSearched(true);
  };

  return (
    <>
      <ScreenForm onScreen={screenPerson} person={initialPerson} />
      {hasSearched && <ScreenResult screen={screenResult} />}
    </>
  );
}

export default ScreenPage;
