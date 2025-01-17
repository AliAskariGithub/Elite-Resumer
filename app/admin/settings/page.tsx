import { fetchAllUsers } from '@/action/user';
import { getSession } from '@/lib/getSession';
import { User } from '@/models/User';
import { redirect } from 'next/navigation';
import React from 'react'

const Settings = async() => {
  const session = await getSession();
    const user = session?.user;
    if (!user) redirect("/login");

    const allUsers = await fetchAllUsers()

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold mb-4'>users</h1>
      <table className='w-full rounded shadow'>
        <thead>
          <tr className='bg-white text-left'>
            <th className='p-2'>Full Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Update</th>
          </tr>
        </thead>

        <tbody>
            {allUsers?.map((user) => (
              <tr key={user._id}>
                  <td className='p-2'>{user.firstName} {user.lastName}</td>
                  <td className='p-2'>{user.email}</td>
                  <td className='p-2'>
                    <form action={async () => {
                      "use server";
                      await User.findByIdAndDelete(user._id);
                    }}> 
                      <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-xs'>Delete</button>
                    </form>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Settings
