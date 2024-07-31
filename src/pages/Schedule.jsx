import Schedule_img from "/assets/Schedule.jpg";
export function Schedule() {
  return (
    <div className=" my-10">
      <div className="flex justify-center text-center text-xl md:text-2xl xl:text-4xl font-bold pb-10 mx-auto">Schedule</div>

      <div className="flex gap-8 justify-center items-center my-2">
        <div className="h-full hidden sm:block">
          <img src={Schedule_img} alt="" />
        </div>
        <div className="w-[75vw] md:w-[50vw]">
          <ol className="text-lg md:text-xl flex flex-col gap-4">
            <li className="flex flex-col gap-2">
              <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-1</span>
              <p>
                Importance of material properties in pavement design. Standard requirements for material testing laboratories. Introduction to quality control. Visit to laboratories.
                Classification of soils, Particle size distribution, Consistency limit tests, Proctor compaction test, Assessment of subgrade strength.

              </p>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-2</span>
              <p>
                Cont. Testing of soil
                <br />
                Necessities of soil properties for pavement design will be covered. Measurement of soil properties for pavement design as per IRC SP 72.
                <br />
                Testing of Bituminous/Cement Concrete Mixes
                <br />
                Resilient Modulus, Indirect tensile strength, Volumetrics, Compressive strength tests.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-3</span>
              <p>
                Cont. Testing of Bituminous/Cement Concrete Mixes
                <br />

                Quality Control Tests for Road Materials
                <br />
                Aggregate
                <br />
                Aggregate gradation, Specific gravity and water absorption of aggregate, Shape properties, Aggregate impact value test, LA abrasion test.

              </p>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-4</span>
              <p>
                Quality Control Tests for Road Materials <br />

                Testing of Pavement Composition Layers <br />
                Measurement of gradation, compaction density/volumetric analysis
                {/* <ul className="list-disc" >
                  <li >Subgrade</li>
                  <li >Sub-base material</li>
                  <li >Base course material</li>
                  <li >Surfacing material</li>
                </ul> */}
                (i) Subgrade, (ii) Sub-base material, (iii) Base course material, (iv) Surfacing material.
                <br />
                Bitumen <br />
                VG grading tests include Penetration test, Viscosity test, Softening test, Ductility tests.

              </p>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-5</span>
              <p>
                Quality Control Tests of Road Materials <br />
                Cont. Bitumen tests <br />

                Bituminous/Cement Concrete Mixes <br />
                Extraction test, Compressive strength test, Rebound hammer test, Ultra sonic pulse velocity test.

              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
