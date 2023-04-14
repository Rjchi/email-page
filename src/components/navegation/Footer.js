import { connect } from "react-redux";
import { Link } from "react-router-dom";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Contacto", href: "/contacto" },
  ],
  company: [
    { name: "Casos", href: "/casos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Carreras", href: "/carreras" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Ebook", href: "/ebook" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              // src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
              src="data:image/png;base64,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"
              width={70}
              height={60}
              alt="Logo"
              className=""
            />
            <p className="text-base text-gray-500">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Visit Us
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Contact</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                      </Link>
                      {/* <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a> */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Services</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Prototype, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
