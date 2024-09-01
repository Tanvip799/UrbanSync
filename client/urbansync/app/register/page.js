'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (role) {
      setStep(2);
    } else {
      setError('Please select a role');
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role, firstName, lastName, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        router.push('/login');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setError(''); // Clear any error message
  };

  const roleOptions = [
    { value: 'employee', label: 'Employee' },
    { value: 'project Manager', label: 'Project Manager' },
    { value: 'contractor', label: 'Contractor' },
    { value: 'pro', label: 'PRO' },
    { value: 'department_head', label: 'Department Head' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-4" htmlFor="role">
                Choose your domain
              </label>
              {/* Input box that displays the selected role */}
              <input
                type="text"
                className="w-full text-black px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Selected role will appear here"
                value={roleOptions.find((option) => option.value === role)?.label || ''}
                readOnly
              />

              {/* Role selection buttons */}
              <div className="py-3 grid grid-cols-2 gap-3">
                {roleOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleRoleSelection(option.value)}
                    className={`cursor-pointer px-4 py-2 border rounded-md text-center transition duration-300 ${
                      role === option.value
                        ? 'bg-blue-950 text-white'
                        : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-blue-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-md transition duration-300 mt-6"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {/* Fields for first name and last name in one line */}
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-2" htmlFor="first_name">
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2" htmlFor="last_name">
                  Last Name
                </label>
                <input
                  id="last_name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-blue-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Register
            </button>
          </>
        )}

        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
