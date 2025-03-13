import { useState } from "react";
import { Transition } from "@headlessui/react";
import CommandPalette from "./CommandPalette";

export default function LightSidebarWithMiniSidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  // Eigene States für jede Kategorie
  const [accountInfoOpen, setAccountInfoOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);
  const [billingOpen, setBillingOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-80 flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Sidebar */}
        <aside
          id="page-sidebar"
          aria-label="Main Sidebar Navigation"
          className={`fixed top-[35px] bottom-0 left-0 z-20 flex h-full w-full flex-col border-r border-gray-200 bg-[#F8F8F8] pl-14 transition-transform duration-500 ease-out lg:w-72 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 ${
            desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
          } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Sidebar Mini */}
          <div className="absolute top-0 bottom-0 left-0 z-10 flex w-14 flex-col border-r border-gray-200 bg-gray-100 dark:border-transparent dark:bg-gray-900/50">
            {/* Main Navigation */}
            <nav className="grow space-y-2 px-2 py-4">
              {/* Beispiel-Icons */}
              <a
                href="#"
                className="flex h-10 w-full items-center justify-center rounded-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:active:bg-gray-700/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="bi bi-list inline-block size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-full items-center justify-center rounded-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:active:bg-gray-700/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="bi bi-copy inline-block size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"
                  />
                </svg>
              </a>
              {/* ... weitere Icons */}
            </nav>
            {/* END Main Navigation */}

            {/* User Navigation */}
            <nav className="flex-none space-y-2 px-2 py-4">
              <a
                href="#"
                className="flex h-10 w-full items-center justify-center rounded-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:active:bg-gray-700/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="lucide lucide-settings inline-block size-6"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>

              <a
                href="#"
                className="flex h-10 w-full items-center justify-center rounded-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:active:bg-gray-700/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="bi bi-person-circle inline-block size-5"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
            </nav>
            {/* END User Navigation */}
          </div>
          {/* END Sidebar Mini */}

          {/* Sidebar Content */}
          <div className="h-screen overflow-y-auto">
            {/* Sidebar Header */}
            <div className="flex h-16 w-full flex-none items-center justify-between px-4 shadow-xs lg:justify-center dark:bg-gray-600/25">
              <h2 className="grow text-sm font-semibold">Welcome Admin</h2>
              {/* Close Sidebar on Mobile */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-[#F8F8F8] px-3 py-2 text-sm leading-5 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                >
                  <svg
                    className="hi-mini hi-x-mark -mx-0.5 inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
              {/* END Close Sidebar on Mobile */}
            </div>
            {/* END Sidebar Header */}

            {/* Sidebar Navigation */}
            <div className="overflow-y-auto">
              <div className="w-full p-4">
                <nav className="space-y-2">
                  {/* 1) Account Info */}
                  <button
                    onClick={() => setAccountInfoOpen(!accountInfoOpen)}
                    type="button"
                    className="group flex w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2.5 text-left text-sm font-medium text-gray-800 hover:bg-[#F2F2F2] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white"
                  >
                    {/* Pfeil */}
                    <span
                      className={`flex-none transition-transform duration-200 ${
                        accountInfoOpen ? "" : "-rotate-90"
                      }`}
                    >
                      <svg
                        className="hi-mini hi-chevron-down inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {/* Text */}
                    <span className="grow py-2">Account Info</span>
                  </button>
                  <Transition
                    show={accountInfoOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    {/* Damit nichts überlappt: z-10, mt-1 etc. */}
                    <div className="relative z-10 ml-7 mt-1 space-y-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Profile Data</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Personal Details</span>
                      </a>
                    </div>
                  </Transition>

                  {/* 2) Security */}
                  <button
                    onClick={() => setSecurityOpen(!securityOpen)}
                    type="button"
                    className="group flex w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2.5 text-left text-sm font-medium text-gray-800 hover:bg-[#F2F2F2] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white"
                  >
                    <span
                      className={`flex-none transition-transform duration-200 ${
                        securityOpen ? "" : "-rotate-90"
                      }`}
                    >
                      <svg
                        className="hi-mini hi-chevron-down inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="grow py-2">Security</span>
                  </button>
                  <Transition
                    show={securityOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="relative z-10 ml-7 mt-1 space-y-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Change Password</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Two-Factor Auth</span>
                      </a>
                    </div>
                  </Transition>

                  {/* 3) Billing */}
                  <button
                    onClick={() => setBillingOpen(!billingOpen)}
                    type="button"
                    className="group flex w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2.5 text-left text-sm font-medium text-gray-800 hover:bg-[#F2F2F2] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white"
                  >
                    <span
                      className={`flex-none transition-transform duration-200 ${
                        billingOpen ? "" : "-rotate-90"
                      }`}
                    >
                      <svg
                        className="hi-mini hi-chevron-down inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="grow py-2">Billing</span>
                  </button>
                  <Transition
                    show={billingOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="relative z-10 ml-7 mt-1 space-y-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Invoices</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Payment Methods</span>
                      </a>
                    </div>
                  </Transition>

                  {/* 4) Preferences */}
                  <button
                    onClick={() => setPreferencesOpen(!preferencesOpen)}
                    type="button"
                    className="group flex w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2.5 text-left text-sm font-medium text-gray-800 hover:bg-[#F2F2F2] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white"
                  >
                    <span
                      className={`flex-none transition-transform duration-200 ${
                        preferencesOpen ? "" : "-rotate-90"
                      }`}
                    >
                      <svg
                        className="hi-mini hi-chevron-down inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="grow py-2">Preferences</span>
                  </button>
                  <Transition
                    show={preferencesOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="relative z-10 ml-7 mt-1 space-y-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Theme</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Language</span>
                      </a>
                    </div>
                  </Transition>

                  {/* 5) Notifications */}
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    type="button"
                    className="group flex w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2.5 text-left text-sm font-medium text-gray-800 hover:bg-[#F2F2F2] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white"
                  >
                    <span
                      className={`flex-none transition-transform duration-200 ${
                        notificationsOpen ? "" : "-rotate-90"
                      }`}
                    >
                      <svg
                        className="hi-mini hi-chevron-down inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="grow py-2">Notifications</span>
                  </button>
                  <Transition
                    show={notificationsOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="relative z-10 ml-7 mt-1 space-y-1">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Email Alerts</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="grow py-2">Push Notifications</span>
                      </a>
                    </div>
                  </Transition>
                </nav>
              </div>
            </div>
            {/* END Sidebar Navigation */}
          </div>
          {/* END Sidebar Content */}
        </aside>
        {/* END Sidebar */}

        <header
          id="page-header"
          className="fixed top-0 right-0 left-0 z-30 flex h-[35px] items-center bg-[#F8F8F8] shadow-sm dark:bg-gray-800"
        >
          <div className="mx-auto flex w-full max-w-10xl items-center justify-between px-4 lg:px-8">
            {/* Left Section */}
            <div className="flex items-center gap-2"></div>
            {/* END Left Section */}

            {/* CommandPalette Container */}
            <div className="flex flex-auto justify-center">
              <div className="w-full max-w-md">
                <CommandPalette />
              </div>
            </div>
            {/* END CommandPalette Container */}

            {/* Right Section */}
            <div className="flex items-center lg:hidden">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="bi bi-search inline-block size-5"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <span className="hidden sm:inline">Company</span>
              </a>
            </div>
            {/* END Right Section */}
          </div>
        </header>

        {/* Page Content */}
        <main
          id="page-content"
          className={`flex max-w-full flex-auto flex-col pt-[35px] ${
            desktopSidebarOpen ? "lg:ml-72" : ""
          }`}
        >
          <div className="mx-auto w-full max-w-10xl p-4 lg:p-8">
            {/* Hier dein Hauptinhalt */}
          </div>
        </main>
        {/* END Page Content */}

        {/* Page Footer */}
        <footer
          id="page-footer"
          className="flex flex-none items-center bg-white dark:bg-gray-800/50"
        >
          <div className="mx-auto flex w-full max-w-10xl flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8">
            <div className="pt-4 pb-1 md:pb-4">
              <a
                href="https://tailkit.com"
                target="_blank"
                className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Tailkit
              </a>{" "}
              ©
            </div>
            <div className="inline-flex items-center justify-center pt-1 pb-4 md:pt-4"></div>
          </div>
        </footer>
        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </>
  );
}
