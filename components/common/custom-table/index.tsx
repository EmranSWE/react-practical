import React from 'react';

interface Props {
  title: string;
  data: [string, string | any][];
}

const CustomTable: React.FC<Props> = ({ title, data }) => {
  return (
    <table className="table-auto border-collapse w-full">
      <tbody>
        <tr>
          <td colSpan={2} className="px-4 py-2 text-left text_primary font-bold bg-gray-300">{title}</td>
        </tr>
        {data.map(([name, value]) => (
          <tr key={name} className="hover:bg-gray-100">
            <td className="border-b border-gray-200 px-4 py-2 text-left w-1/2">{name || ""}</td>
            <td className="border-b border-gray-200 px-4 py-2 text-left w-1/2">{value || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;