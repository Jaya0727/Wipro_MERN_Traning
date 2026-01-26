import WithAuth from
const Admin = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🔐 Admin Page</h1>
      <p>Only authorized users can access this page.</p>

      <ul>
        <li>Manage Users</li>
        <li>View Reports</li>
        <li>System Settings</li>
      </ul>
    </div>
  );
};

export default Admin;