import React from 'react';

export default function Schedule ()  {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center bg-slate-700 text-white rounded-2xl p-3">Schedule</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white border border-gray-300 px-4 py-2">Day</th>
            <th className="bg-blue-600 text-white border border-gray-300 px-4 py-2">Main Topics</th>
            <th className="bg-blue-600 text-white border border-gray-300 px-4 py-2">Faculty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" border border-gray-300 px-4 py-2 text-white bg-blue-600">Day 1</td>
            <td className="bg-gray-100 border border-gray-300 px-4 py-2">
              Structural and functional evaluation of pavement.<br />
              Distresses in flexible pavement.<br />
              Pavement evaluation survey and data collection.
            </td>
            <td className="bg-gray-200 border border-gray-300 px-4 py-2">Dr. SV</td>
          </tr>
          <tr>
            <td className=" border border-gray-300 text-white px-4 py-2 bg-blue-600">Day 2</td>
            <td className="bg-gray-100 border border-gray-300 px-4 py-2">
              Structural evaluation of flexible pavements using falling weight deflectometer technique.<br />
              Hands on Session for backcalculation of modulus for flexible pavements using falling weight deflectometer technique.
            </td>
            <td className="bg-gray-200 border border-gray-300 px-4 py-2">Dr. SV</td>
          </tr>
          <tr>
            <td className="bg-blue-600 border text-white border-gray-300 px-4 py-2">Day 3</td>
            <td className="bg-gray-100 border border-gray-300 px-4 py-2">
              Structural evaluation of pavements using light weight deflectometer technique.<br />
              Pavement evaluation using Benkelman beam deflection technique.
            </td>
            <td className="bg-gray-200 border border-gray-300 px-4 py-2">Dr. SD</td>
          </tr>
          <tr>
            <td className="bg-blue-600 border text-white border-gray-300 px-4 py-2">Day 4</td>
            <td className="bg-gray-100 border border-gray-300 px-4 py-2">
              Distresses in rigid pavement.<br />
              Structural evaluation of rigid pavements using falling weight deflectometer technique.
            </td>
            <td className="bg-gray-200 border border-gray-300 px-4 py-2">Dr. SD</td>
          </tr>
          <tr>
            <td className="bg-blue-600 border text-white border-gray-300 px-4 py-2">Day 5</td>
            <td className="bg-gray-100 border border-gray-300 px-4 py-2">
              Dynamic cone penetrometer (DCP), Ultra sonic pulse velocity test (UPV), Rebound hammer test (RH)<br />
              Assessment
            </td>
            <td className="bg-gray-200 border border-gray-300 px-4 py-2">Dr. SV &amp; Dr. KR</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// export default Schedule;







// // import Schedule_img from "/assets/Schedule.jpg";
// // export function Schedule() {
// //   return (
// //     <div className=" my-10">
// //       <div className="flex justify-center text-center text-xl md:text-2xl xl:text-4xl font-bold pb-10 mx-auto">Schedule</div>

// //       <div className="flex gap-8 justify-center items-center my-2">
// //         <div className="h-full hidden sm:block">
// //           <img src={Schedule_img} alt="" />
// //         </div>
// //         <div className="w-[75vw] md:w-[50vw]">
// //           <ol className="text-lg md:text-xl flex flex-col gap-4">
// //             <li className="flex flex-col gap-2">
// //               <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-1</span>
// //               <p>
// //                 Importance of material properties in pavement design. Standard requirements for material testing laboratories. Introduction to quality control. Visit to laboratories.
// //                 Classification of soils, Particle size distribution, Consistency limit tests, Proctor compaction test, Assessment of subgrade strength.

// //               </p>
// //             </li>
// //             <li className="flex flex-col gap-2">
// //               <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-2</span>
// //               <p>
// //                 Cont. Testing of soil
// //                 <br />
// //                 Necessities of soil properties for pavement design will be covered. Measurement of soil properties for pavement design as per IRC SP 72.
// //                 <br />
// //                 Testing of Bituminous/Cement Concrete Mixes
// //                 <br />
// //                 Resilient Modulus, Indirect tensile strength, Volumetrics, Compressive strength tests.
// //               </p>
// //             </li>
// //             <li className="flex flex-col gap-2">
// //               <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-3</span>
// //               <p>
// //                 Cont. Testing of Bituminous/Cement Concrete Mixes
// //                 <br />

// //                 Quality Control Tests for Road Materials
// //                 <br />
// //                 Aggregate
// //                 <br />
// //                 Aggregate gradation, Specific gravity and water absorption of aggregate, Shape properties, Aggregate impact value test, LA abrasion test.

// //               </p>
// //             </li>
// //             <li className="flex flex-col gap-2">
// //               <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-4</span>
// //               <p>
// //                 Quality Control Tests for Road Materials <br />

// //                 Testing of Pavement Composition Layers <br />
// //                 Measurement of gradation, compaction density/volumetric analysis
// //                 {/* <ul className="list-disc" >
// //                   <li >Subgrade</li>
// //                   <li >Sub-base material</li>
// //                   <li >Base course material</li>
// //                   <li >Surfacing material</li>
// //                 </ul> */}
// //                 (i) Subgrade, (ii) Sub-base material, (iii) Base course material, (iv) Surfacing material.
// //                 <br />
// //                 Bitumen <br />
// //                 VG grading tests include Penetration test, Viscosity test, Softening test, Ductility tests.

// //               </p>
// //             </li>
// //             <li className="flex flex-col gap-2">
// //               <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-5</span>
// //               <p>
// //                 Quality Control Tests of Road Materials <br />
// //                 Cont. Bitumen tests <br />

// //                 Bituminous/Cement Concrete Mixes <br />
// //                 Extraction test, Compressive strength test, Rebound hammer test, Ultra sonic pulse velocity test.

// //               </p>
// //             </li>
// //           </ol>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from 'react';

// const ScheduleData = [
//   {
//     day: 'Day 1',
//     topics: [
//       'Structural and functional evaluation of pavement.',
//       'Distresses in flexible pavement.',
//       'Pavement evaluation survey and data collection.',
//       'Structural evaluation of flexible pavements using falling weight deflectometer technique.',
//     ],
//     faculty: 'Dr. SV',
//   },
//   {
//     day: 'Day 2',
//     topics: [
//       'Hands on Session for backcalculation of modulus for flexible pavements using falling weight deflectometer technique.',
//     ],
//     faculty: 'Dr. SV',
//   },
//   {
//     day: 'Day 3',
//     topics: [
//       'Structural evaluation of pavements using light weight deflectometer technique.',
//       'Pavement evaluation using Benkelman beam deflection technique.',
//     ],
//     faculty: 'Dr. SD',
//   },
//   {
//     day: 'Day 4',
//     topics: [
//       'Distresses in rigid pavement.',
//       'Structural evaluation of rigid pavements using falling weight deflectometer technique.',
//     ],
//     faculty: 'Dr. SD',
//   },
//   {
//     day: 'Day 5',
//     topics: [
//       'Dynamic cone penetrometer (DCP), Ultra sonic pulse velocity test (UPV), Rebound hammer test (RH).',
//       'Assessment',
//     ],
//     faculty: 'Dr. SV & Dr. KR',
//   },
// ];

// const Schedule = () => {
//   return (
//     <div>
//       <h1>Schedule</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Day</th>
//             <th>Main Topics</th>
//             <th>Faculty</th>
//           </tr>
//         </thead>
//         <tbody>
//           {ScheduleData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.day}</td>
//               <td>
//                 <ul>
//                   {item.topics.map((topic, i) => (
//                     <li key={i}>{topic}</li>
//                   ))}
//                 </ul>
//               </td>
//               <td>{item.faculty}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Schedule;