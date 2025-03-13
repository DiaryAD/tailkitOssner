import { useState } from "react";
import { Transition } from "@headlessui/react";
import CommandPalette from "./CommandPalette";

export default function LightSidebarWithMiniSidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [profileSubmenuOpen, setProfileSubmenuOpen] = useState(false);

//TODO: fix the sidebar and content so it doesnt go out of the screen

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
        className={`fixed top-[35px] bottom-0 left-0 z-20 flex h-full w-full flex-col border-r border-gray-200 bg-white pl-14 transition-transform duration-500 ease-out lg:w-72 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 ${
          desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
        } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Mini */}
        <div className="absolute top-0 bottom-0 left-0 z-10 flex w-14 flex-col border-r border-gray-200 bg-gray-100 dark:border-transparent dark:bg-gray-900/50">
          {/* Main Navigation */}
          <nav className="grow space-y-2 px-2 py-4">
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
            <a
              href="#"
              className="flex h-10 w-full items-center justify-center rounded-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:active:bg-gray-700/5"
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
                className="bi bi-border-all inline-block size-5"
              >
                <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
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
                className="bi bi-github inline-block size-5"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
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
              <nav className="space-y-1">
                <a
                  href="#"
                  className="group flex items-center gap-2 rounded-lg border border-teal-100 bg-teal-50 px-2.5 text-sm font-medium text-gray-900 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                >
                  <span className="flex flex-none items-center text-teal-500 dark:text-gray-300">
                    <svg
                      className="hi-outline hi-home inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Dashboard</span>
                  <span className="inline-flex rounded-full border border-teal-200 bg-teal-100 px-1.5 py-0.5 text-xs leading-4 font-semibold text-teal-700 dark:border-teal-700 dark:bg-teal-700 dark:text-teal-50">
                    3
                  </span>
                </a>
                <div className="px-3 pt-5 pb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  Projects
                </div>
                <a
                  href="#"
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-teal-50 hover:text-gray-900 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                >
                  <span className="flex flex-none items-center text-gray-400 group-hover:text-teal-500 dark:text-gray-500 dark:group-hover:text-gray-300">
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
                  </span>
                  <span className="grow py-2">Manage</span>
                  <span className="inline-flex rounded-full border border-teal-200 bg-teal-100 px-1.5 py-0.5 text-xs leading-4 font-semibold text-teal-700 dark:border-teal-700 dark:bg-teal-700 dark:text-teal-50">
                    99+
                  </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-teal-50 hover:text-gray-900 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                >
                  <span className="flex flex-none items-center text-gray-400 group-hover:text-teal-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                    <svg
                      className="hi-outline hi-clipboard-document-list inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Tasks</span>
                  <span className="inline-flex rounded-full border border-teal-200 bg-teal-100 px-1.5 py-0.5 text-xs leading-4 font-semibold text-teal-700 dark:border-teal-700 dark:bg-teal-700 dark:text-teal-50">
                    9
                  </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-2.5 text-sm font-medium text-gray-800 hover:bg-teal-50 hover:text-gray-900 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                >
                  <span className="flex flex-none items-center text-gray-400 group-hover:text-teal-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                    <svg
                      className="hi-outline hi-plus inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Add New</span>
                </a>
                <div className="px-3 pt-5 pb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  Account
                </div>
                {/* Ausklappbares Profil-Element */}
                <button
                  onClick={() => setProfileSubmenuOpen(!profileSubmenuOpen)}
                  type="button"
                  className="group flex w-full items-center gap-2 rounded-lg border border-transparent px-2.5 text-left text-sm font-medium text-gray-800 hover:bg-teal-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white"
                >
                  <span className="flex flex-none items-center text-gray-400 group-hover:text-teal-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                    <svg
                      className="hi-outline hi-user-circle inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="grow py-2">Profile</span>
                  <span
                    className={`flex-none opacity-75 transition-transform duration-200 ${
                      profileSubmenuOpen ? "" : "-rotate-90"
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
                </button>
                <Transition
                  show={profileSubmenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="-translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="-translate-y-5 opacity-0"
                >
                  <div className="relative z-0 ml-7 space-y-1">
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <span className="grow py-2">Account</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <span className="grow py-2">Security</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <span className="grow py-2">Subscriptions</span>
                    </a>
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
                      <span className="grow py-2">Privacy</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-sm px-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <span className="grow py-2">Notifications</span>
                    </a>
                  </div>
                </Transition>
                {/* Ende des Profil-Submenus */}
              </nav>
            </div>
          </div>
          {/* END Sidebar Navigation */}
        </div>
        {/* END Sidebar Content */}
      </aside>
      {/* END Sidebar */}

      {/* Page Header */}
      <header
        id="page-header"
        className="fixed top-0 right-0 left-0 z-30 flex h-[35px] flex-none items-center bg-white shadow-sm dark:bg-gray-800"
      >
        <div className="mx-auto flex w-full max-w-10xl justify-between px-4 lg:px-8">
          {/* Left Section */}
          <div className="flex items-center gap-2"></div>
          {/* END Left Section */}

          {/* Center Section */}
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
          {/* END Center Section */}
        </div>
      </header>
      {/* END Page Header */}

      {/* Page Content */}
      <main
        id="page-content"
        className={`flex max-w-full flex-auto flex-col pt-[35px] ${
          desktopSidebarOpen ? "lg:ml-72" : ""
        }`}
      >
        <div className="mx-auto w-full max-w-10xl p-4 lg:p-8">
          <CommandPalette />
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