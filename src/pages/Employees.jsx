
import { useState } from "react";
import { Search, Users, UserCheck, Wallet } from "lucide-react";
import EmployeeCard from "../components/EmployeeCard";

const employees = [
  {
    employeeName: "John David",
    employeeId: "EMP001",
    department: "IT",
    designation: "Frontend Developer",
    salary: 150000,
    email: "john@gmail.com",
    phone: "0771234567",
    experience: "3 Years",
    status: "Active",
  },
  {
    employeeName: "Sarah Williams",
    employeeId: "EMP002",
    department: "HR",
    designation: "HR Manager",
    salary: 180000,
    email: "sarah@gmail.com",
    phone: "0772345678",
    experience: "5 Years",
    status: "Active",
  },
  {
    employeeName: "Michael Brown",
    employeeId: "EMP003",
    department: "Finance",
    designation: "Accountant",
    salary: 125000,
    email: "michael@gmail.com",
    phone: "0773456789",
    experience: "4 Years",
    status: "Active",
  },
  {
    employeeName: "Emily Wilson",
    employeeId: "EMP004",
    department: "Marketing",
    designation: "Marketing Executive",
    salary: 110000,
    email: "emily@gmail.com",
    phone: "0774567890",
    experience: "2 Years",
    status: "Inactive",
  },
  {
    employeeName: "Daniel Smith",
    employeeId: "EMP005",
    department: "IT",
    designation: "Backend Developer",
    salary: 165000,
    email: "daniel@gmail.com",
    phone: "0775678901",
    experience: "4 Years",
    status: "Active",
  },
  {
    employeeName: "Olivia Taylor",
    employeeId: "EMP006",
    department: "HR",
    designation: "HR Executive",
    salary: 95000,
    email: "olivia@gmail.com",
    phone: "0776789012",
    experience: "2 Years",
    status: "Active",
  },
  {
    employeeName: "James Anderson",
    employeeId: "EMP007",
    department: "Finance",
    designation: "Financial Analyst",
    salary: 140000,
    email: "james@gmail.com",
    phone: "0777890123",
    experience: "3 Years",
    status: "Inactive",
  },
  {
    employeeName: "Sophia Martin",
    employeeId: "EMP008",
    department: "Marketing",
    designation: "Content Strategist",
    salary: 120000,
    email: "sophia@gmail.com",
    phone: "0778901234",
    experience: "3 Years",
    status: "Active",
  },
];

function Employees() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");

  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = [
      employee.employeeName,
      employee.employeeId,
      employee.designation,
    ].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    );

    const matchesDepartment =
      department === "All" || employee.department === department;

    const matchesStatus =
      status === "All" || employee.status === status;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const activeCount = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const totalPayroll = employees.reduce(
    (total, employee) => total + Number(employee.salary),
    0
  );

  const stats = [
    {
      label: "Total Employees",
      value: employees.length,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active Employees",
      value: activeCount,
      icon: UserCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Monthly Payroll",
      value: `Rs. ${totalPayroll.toLocaleString("en-LK")}`,
      icon: Wallet,
      color: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <header className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Workforce Dashboard
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Employee Management
          </h1>

          <p className="mt-3 text-slate-500">
            Manage your team, departments, salaries, and employee details.
          </p>
        </header>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className={`rounded-xl p-4 ${stat.color}`}>
                  <Icon size={27} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-1 break-words text-2xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Search and filters */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All Departments" : item}
                </option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </section>

        {/* Cards heading */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Our Employees
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              View and manage employee information
            </p>
          </div>

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
            {filteredEmployees.length} Employees
          </span>
        </div>

        {/* Employee cards */}
        {filteredEmployees.length > 0 ? (
          <section className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.employeeId}
                {...employee}
              />
            ))}
          </section>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Users
              size={42}
              className="mx-auto mb-4 text-slate-300"
            />
            <h3 className="text-lg font-bold text-slate-800">
              No employees found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filter options.
            </p>
          </div>
        )}

        <footer className="mt-10 border-t border-slate-200 py-5 text-center text-sm text-slate-400">
          Employee Management Dashboard
        </footer>
      </div>
    </main>
  );
}

export default Employees;