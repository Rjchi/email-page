import {
  CheckCircleIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";

const applications = [
  {
    applicant: {
      name: "Ricardo Cooper",
      email: "ricardo.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];

const CareersPositionsList = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:py-29 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
        Open Positions
      </h2>
      <p className="mx-full max-w-2xl mt-10 mb-12 text-lg text-gray-900">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing sagittis vel nulla nec.
      </p>
      <div className="flex mb-10">
        <label
          htmlFor="location"
          className="py-4 mr-4 block text-sm font-medium text-gray-700"
        >
          Filter by department
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-800 focus:outline-none focus:ring-purple-800 sm:text-sm"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {applications.map((application) => (
            <li key={application.applicant.email} className="py-8">
              <a href={application.href} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={application.applicant.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-indigo-600">
                          {application.applicant.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <EnvelopeIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {application.applicant.email}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on{" "}
                            <time dateTime={application.date}>
                              {application.dateFull}
                            </time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            {application.stage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareersPositionsList;
