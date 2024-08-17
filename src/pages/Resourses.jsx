export function Resources() {
  return (
    <>
      <div className=" w-[80vw] mx-auto mb-10 mt-10 flex flex-col justify-center h-[55vh]">
        <div className="text-start text-lg md:text-2xl xl:text-4xl font-bold pb-4 mx-auto">
          Resources
        </div>
        <ol className="flex flex-col  md:w-[70vw] justify-center list-decimal gap-4 mx-auto text-sm md:text-lg xl:text-2xl">
          <li>
          IRC 115 – Guidelines for Structural Evaluation and Strengthening of Flexible Road Pavements Using Falling Weight Deflectometer (FWD) Technique
          </li>
          <li>
          IRC 117– Guidelines for the Structural Evaluation of Rigid Pavement by Falling Weight Deflectometer.

          </li>
          <li>
          IRC 117– Guidelines for the Structural Evaluation of Rigid Pavement by Falling Weight Deflectometer.

          </li>
          <li>
          {/* IRC 117– Guidelines for the Structural Evaluation of Rigid Pavement by Falling Weight Deflectometer. */}
          IRC 82 – Code of Practice for Maintenance of Bituminous Road Surfaces.

          </li>
          <li>MoRD Specifications for Low Volume Roads</li>
          {/* <li>AASHTO Guide for Design of Pavement Structures, AASHTO, 1993</li> */}
        </ol>
      </div>

      <div className="mx-auto flex justify-evenly">
        <div className="w-[40vw] mt-3 flex flex-col text-center">
            <p className="text-[16px] md:text-2xl xl:text-4xl font-bold md:pb-3 xl:pb-10 mx-auto">Web Development Team</p>
            <p className="md:text-lg xl:text-2xl text-sm">Kartikay Saxena, Alekh Srivastava, Ayush Raj, Devansh Rai, Vinay Khedkar</p>
        </div>
        <div className="w-[40vw] mt-3 flex flex-col text-center">
            <p className="text-[16px] md:text-2xl xl:text-4xl font-bold md:pb-3 xl:pb-10 mx-auto">Organizing Volunteers</p>
            <p className="md:text-lg xl:text-2xl text-sm">Ajit Kumar, Hitesh Kumar, Deepansh Yadav, Koushal Kumar, Rajkamal, Ashish Kumar, Ashutosh Raj</p>
        </div>
      </div>
    </>
  );
}
