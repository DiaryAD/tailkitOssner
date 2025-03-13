import { useState, useEffect } from "react";

// Headless UI 2.x for React, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import {
  Dialog,
  DialogPanel,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const options = [
  {
    id: 1,
    label: "New file",
    command: "new-file",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='hi-outline hi-document-plus inline-block size-6'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'/></svg>",
    shortcut: "N",
  },
  {
    id: 2,
    label: "New folder",
    command: "new-folder",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='hi-outline hi-folder-plus inline-block size-6'><path stroke-linecap='round' stroke-linejoin='round' d='M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z'/></svg>",
    shortcut: "F",
  },
  {
    id: 3,
    label: "New project",
    command: "new-project",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='hi-outline hi-squares-plus inline-block size-6'><path stroke-linecap='round' stroke-linejoin='round' d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z'/></svg>",
    shortcut: "P",
  },
  {
    id: 4,
    label: "Archive project",
    command: "archive-project",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='hi-outline hi-archive-box inline-block size-6'><path stroke-linecap='round' stroke-linejoin='round' d='m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'/></svg>",
    shortcut: "A",
  },
  {
    id: 5,
    label: "Format code",
    command: "format-code",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='hi-outline hi-code-bracket-square inline-block size-6'><path stroke-linecap='round' stroke-linejoin='round' d='M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'/></svg>",
    shortcut: "Y",
  },
];

export default function CommandPalettesBoxedWithCommands() {
  /////////////////////////////////////////
  //
  // Combobox
  //
  /////////////////////////////////////////

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  const onOptionSelected = (option) => {
    // Update selected Option
    setSelectedOption(option);

    // If the selected option is not null
    if (option !== null) {
      // Close Command Palette
      closeCommandPalette();

      // Add your custom functionality or navigation when an option is selected
      // ...
    }
  };

  /////////////////////////////////////////
  //
  // Dialog Helpers
  //
  /////////////////////////////////////////

  const [isOpen, setIsOpen] = useState(false);

  const closeCommandPalette = () => {
    setIsOpen(false);
  };

  const openCommandPalette = () => {
    setQuery("");
    setIsOpen(true);
  };

  /////////////////////////////////////////
  //
  // Shortcuts functionality
  //
  /////////////////////////////////////////

  let shortcutTimeout;

  const isMac = /mac/i.test(
    navigator.userAgentData
      ? navigator.userAgentData.platform
      : navigator.platform,
  );
  const modifierKey = isMac ? "⌘" : "Ctrl";

  const addShortcut = (event) => {
    if ((isMac ? event.metaKey : event.ctrlKey) && event.keyCode === 75) {
      event.preventDefault();

      clearTimeout(shortcutTimeout);

      shortcutTimeout = setTimeout(() => {
        setIsOpen(true);
      }, 40);
    }
  };

  useEffect(() => {
    // Add event listeners
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", addShortcut);
    }

    // Remove event listeners
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", addShortcut);
      }
    };
  }, [addShortcut]);

  return (
    <>
      {/* Command Palettes: Boxed with Commands */}
      <div>
        {/* Placeholder */}
        <div className="flex items-center justify-center">
          {/* Toggle Button */}
          <button
            onClick={openCommandPalette}
            type="button"
            className="group inline-flex min-w-56 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-[#E4E4E4] px-4 py-2 ..."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hi-mini hi-magnifying-glass inline-block size-5 opacity-60 group-hover:text-teal-600 group-hover:opacity-100 dark:group-hover:text-teal-400"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
            <>
              <span className="grow text-left opacity-60 group-hover:opacity-100">
                Search..
              </span>
              <span className="flex-none text-xs font-semibold opacity-75">
                <span className="opacity-75">{modifierKey}</span>
                <span> K</span>
              </span>
            </>
          </button>
          {/* END Toggle Button */}
        </div>
        {/* END Placeholder */}

        {/* Dialog */}
        <Transition appear show={isOpen}>
          <Dialog
            as="div"
            className="relative z-90"
            onClose={closeCommandPalette}
          >
            {/* Command Palette */}
            <TransitionChild
              enter="ease-out duration-150"
              enterFrom="opacity-50 scale-95 translate-y-5"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-50 scale-95 translate-y-5"
            >
              <div className="fixed inset-0 overflow-y-auto p-4 md:py-8 lg:p-8 lg:px-8 lg:py-16">
                <DialogPanel className="mx-auto w-full max-w-lg">
                  <Combobox
                    as="div"
                    value={selectedOption}
                    onChange={onOptionSelected}
                    className="flex w-full flex-col rounded-xl shadow-xl dark:text-gray-100 dark:shadow-black/25"
                  >
                    {/* Search Input */}
                    <div className="relative rounded-t-xl bg-[#E4E4E4] px-3 pt-3 dark:bg-gray-900">
                      <div className="flex w-full items-center rounded-lg bg-gray-100 px-3 dark:bg-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="hi-outline hi-command-line inline-block size-6 opacity-50"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <ComboboxInput
                          autoFocus
                          onChange={(event) => setQuery(event.target.value)}
                          className="w-full border-none bg-transparent py-3 placeholder:text-gray-500 focus:ring-0 focus:outline-hidden dark:placeholder:text-gray-400"
                          placeholder="Search commands.."
                        />
                      </div>
                    </div>
                    {/* END Search Input */}

                    {/* Combobox Options */}
                    {filteredOptions.length === 0 && query !== "" ? (
                      <div className="rounded-b-xl bg-[#E4E4E4] p-3 dark:bg-gray-900">
                        <div className="space-y-3 py-1.5 text-center text-sm text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="hi-outline hi-x-circle inline-block size-8 opacity-50"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <p>No commands found</p>
                        </div>
                      </div>
                    ) : (
                      <ComboboxOptions
                        modal={false}
                        className="max-h-72 overflow-auto rounded-b-xl bg-[#E4E4E4] p-3 dark:bg-gray-900"
                        static
                      >
                        {filteredOptions.map((option) => (
                          <ComboboxOption
                            key={option.id}
                            className={({ focus }) =>
                              `group flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 text-sm ${
                                focus
                                  ? "bg-teal-600 text-white dark:bg-gray-700/50 dark:text-white"
                                  : "text-gray-600 dark:text-gray-300"
                              }`
                            }
                            value={option}
                          >
                            <div className="flex grow items-center gap-3 py-2">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: option.icon,
                                }}
                                className="size-6 opacity-60"
                              ></div>
                              <div className="font-medium">{option.label}</div>
                            </div>
                            <div className="flex-none text-xs font-semibold opacity-75">
                              <span className="opacity-75">{modifierKey}</span>{" "}
                              +<span>{" " + option.shortcut}</span>
                            </div>
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    )}
                    {/* END Combobox Options */}
                  </Combobox>
                </DialogPanel>
              </div>
            </TransitionChild>
            {/* END Command Palette */}
          </Dialog>
        </Transition>
        {/* END Dialog */}
      </div>
      {/* END Command Palettes: Boxed with Commands */}
    </>
  );
}
