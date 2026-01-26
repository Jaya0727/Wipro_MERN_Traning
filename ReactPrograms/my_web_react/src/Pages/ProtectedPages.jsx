
import WithAuth from "../hoc/WithAuth";
import Admin from './Admin'
import Employee from './Employee'
import Courses from './Courses'

export const ProtectedEmployeePage  = WithAuth(Employee);
export const ProtectedAdminPage  = WithAuth(Admin);
export const ProtectedCoursesPage  = WithAuth(Courses);