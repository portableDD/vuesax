// import { CheckIcon } from '@heroicons/react/20/solid'
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";

const steps = [
  {
    name: "Client Meeting",
    description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
    time: '25 mins ago',
    href: "#",
    icon: FaPlus,
    status: "complete",
    bgColor: '#7E72F2'
  },
  {
    name: "Email Newsletter",
    description: "Cupcake gummi bears soufflé caramels candy",
    time: '25 mins ago',
    href: "#",
    icon: MdOutlineInfo,
    status: "complete",
    bgColor: '#FF9F43'
  },
  {
    name: "Plan Webinar",
    description: "Candy ice cream cake. Halvah gummi bears",
    time: '25 mins ago',
    href: "#",
    icon: FaCheck,
    status: "complete",
    bgColor: '#28C76F'
  },
  {
    name: "Launch Website",
    description: "Candy ice cream cake. Halvah gummi bears Cupcake ",
    time: '25 mins ago',
    href: "#",
    icon: FaPlus,
    status: "complete",
    bgColor: '#EA5455'
  },
  {
    name: "Marketing",
    description: "Candy ice cream cake. Halvah gummi bears Cupcake",
    time: '25 mins ago',
    href: "#",
    icon: FaPlus,
    status: "complete",
    bgColor: '#7E72F2'
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pb-4" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-[#444D78]"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-indigo-800" style={{backgroundColor: step.bgColor}}>
                      <step.icon
                        aria-hidden="true"
                        className="text-base"
                      />
                    </span>
                  </span>
                  <span className="ml-4 flex flex-col">
                    <span className="font-semibold text-xs">{step.name}</span>
                    <span className="text-[10px] leading-[1.3]">
                      {step.description}
                    </span>
                    <span className="text-[10px]">
                      {step.time}
                    </span>
                  </span>
                </a>
              </>
            ) : step.status === "current" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                  />
                ) : null}
                <a
                  href={step.href}
                  aria-current="step"
                  className="group relative flex items-start"
                >
                  <span aria-hidden="true" className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span aria-hidden="true" className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
