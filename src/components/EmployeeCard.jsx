
import {
  Mail,
  Phone,
  BriefcaseBusiness,
  Building2,
  Wallet,
  UserRound,
} from "lucide-react";

function EmployeeCard({
  employeeImage,
  employeeName,
  employeeId,
  department,
  designation,
  salary,
  email,
  phone,
  experience,
  status,
}) {
  const isActive = status?.toLowerCase() === "active";

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Gradient Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-5">
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10" />

        <div className="relative flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-white/70 bg-white/20">
            {employeeImage ? (
              <img
                src={employeeImage}
                alt={employeeName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
            ) : null}

            <div
              style={{ display: employeeImage ? "none" : "flex" }}
              className="h-full w-full items-center justify-center text-white"
            >
              <UserRound size={32} />
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-white">
              {employeeName}
            </h2>
            <p className="mt-1 text-sm text-blue-100">
              {employeeId}
            </p>
            <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs text-white">
              {designation}
            </span>
          </div>
        </div>
      </div>

      {/* Salary */}
      <div className="mx-5 -mt-0 rounded-xl border border-slate-100 bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Monthly Salary
            </p>
            <p className="mt-1 text-2xl font-extrabold text-indigo-700">
              Rs. {Number(salary || 0).toLocaleString("en-LK")}
            </p>
          </div>

          <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
            <Wallet size={24} />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-5 p-5">

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <Building2 size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Department</p>
            <p className="font-semibold text-slate-800">
              {department}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
            <BriefcaseBusiness size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Experience</p>
            <p className="font-semibold text-slate-800">
              {experience}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <a
            href={`mailto:${email}`}
            className="mb-4 flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600"
          >
            <Mail size={18} className="shrink-0 text-slate-400" />
            <span className="break-all">{email}</span>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600"
          >
            <Phone size={18} className="shrink-0 text-slate-400" />
            {phone}
          </a>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-medium text-slate-500">
            Employment Status
          </span>

          <span
            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
              isActive
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            ● {status}
          </span>
        </div>

      </div>
    </div>
  );
}

export default EmployeeCard;