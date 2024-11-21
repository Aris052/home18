import { updateUser } from "@/_helpers/actions"
import { getUserById } from "@/_helpers/model"

export default async function EditUser({ params }: { params: { id: string } }) {
	const userId = Number(params.id)
	const user = await getUserById(userId)

	if (!user) {
		return <p>User not found</p>
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900">
			<div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
				<h1 className="text-3xl font-bold text-indigo-400 text-center mb-6">
					Edit User
				</h1>
				<form className="space-y-6" action={updateUser}>
					<input type="hidden" name="id" value={user.id} />
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-300 mb-1"
						>
							First Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							defaultValue={user.name}
							className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<label
							htmlFor="surname"
							className="block text-sm font-medium text-gray-300 mb-1"
						>
							Last Name
						</label>
						<input
							type="text"
							name="surname"
							id="surname"
							defaultValue={user.surname}
							className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<label
							htmlFor="age"
							className="block text-sm font-medium text-gray-300 mb-1"
						>
							Age
						</label>
						<input
							type="number"
							name="age"
							id="age"
							defaultValue={user.age}
							className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<label
							htmlFor="salary"
							className="block text-sm font-medium text-gray-300 mb-1"
						>
							Salary
						</label>
						<input
							type="number"
							name="salary"
							id="salary"
							defaultValue={user.salary}
							className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full bg-indigo-500 text-white font-medium rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
