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
