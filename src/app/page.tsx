import { deleteUser } from "@/_helpers/actions";
import { getAllUsers } from "@/_helpers/model";
import Link from "next/link";
export default async function Home() {
  const users = await getAllUsers();
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8 sm:p-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-indigo-400">User List</h1>
        <Link
          href="/users/add"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
        >
          Add User
        </Link>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-gray-800 rounded-lg shadow-lg">
          <thead className="bg-indigo-600">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-100">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-100">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-100">
                Surname
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-100">
                Age
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-100">
                Salary
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-100">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
              >
                <td className="px-4 py-3 text-sm">{user.id}</td>
                <td className="px-4 py-3 text-sm">{user.name}</td>
                <td className="px-4 py-3 text-sm">{user.surname}</td>
                <td className="px-4 py-3 text-sm">{user.age}</td>
                <td className="px-4 py-3 text-sm">{user.salary}</td>
                <td className="px-4 py-3 text-sm text-center space-x-2">
                  <Link
                    href={`/users/edit/${user.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </Link>
                  <form className="inline" action={deleteUser.bind(null,user.id)}>
                    <button
                      type="submit"
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
