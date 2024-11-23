import { addUser } from "@/helpers/actions";

export default function AddUser() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-400 text-center mb-6">Add User</h1>
          <form className="space-y-6" action={addUser}>
            {/* Name Field */}
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
                placeholder="First Name"
                className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Surname Field */}
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
                placeholder="Last Name"
                className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Age Field */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Age
              </label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="Age"
                className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Salary Field */}
            <div>
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Salary
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                placeholder="Salary"
                className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-medium rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }





















