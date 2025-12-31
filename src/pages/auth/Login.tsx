export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded">
      <h2 className="text-2xl mb-4">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 rounded bg-gray-700 mb-4" />
        <button type="submit" className="w-full bg-blue-600 py-2 rounded">Login</button>
      </form>
    </div>
  );
}