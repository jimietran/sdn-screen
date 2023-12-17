import { Screen } from "./Screen";

interface ScreenFormProps {
  screen: Screen;
}

function ScreenResult({ screen: screenResult }: ScreenFormProps) {
  return (
    <div className="cols-sm">
      <div className="card">
        <section className="section dark">
          {
            <>
              <h2 className="strong hit_clear">
                {screenResult.nameMatch ||
                screenResult.countryMatch ||
                screenResult.dobMatch ? (
                  <>Hit</>
                ) : (
                  <>Clear</>
                )}
              </h2>
              <p>Name: {screenResult.nameMatch ? <>✅</> : <>❌</>}</p>
              <p>Country: {screenResult.countryMatch ? <>✅</> : <>❌</>}</p>
              <p>Date of Birth: {screenResult.dobMatch ? <>✅</> : <>❌</>}</p>
            </>
          }
        </section>
      </div>
    </div>
  );
}

export default ScreenResult;
