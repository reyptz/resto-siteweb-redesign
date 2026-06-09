import React from "react";
export type IconType =
  | "globe"
  | "server"
  | "tv"
  | "phone"
  | "tower"
  | "map-pin"
  | "clock"
  | "calendar"
  | "mail"
  | "chevron-right"
  | "chevron-down"
  | "arrow-right"
  | "arrow-left"
  | "download"
  | "search"
  | "check"
  | "x"
  | "tool"
  | "shield"
  | "handshake"
  | "wrench"
  | "document"
  | "clipboard"
  | "info"
  | "sparkles";
interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconType;
  size?: number;
}
export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...props,
  };
  switch (name) {
    case "globe":
      return (
        <svg {...commonProps}>
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <line x1="2" y1="12" x2="22" y2="12" />{" "}
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />{" "}
        </svg>
      );
    case "server":
      return (
        <svg {...commonProps}>
          {" "}
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />{" "}
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />{" "}
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={3} />{" "}
          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={3} />{" "}
          <line x1="10" y1="6" x2="14" y2="6" />{" "}
          <line x1="10" y1="18" x2="14" y2="18" />{" "}
        </svg>
      );
    case "tv":
      return (
        <svg {...commonProps}>
          {" "}
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />{" "}
          <polyline points="17 2 12 7 7 2" />{" "}
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />{" "}
        </svg>
      );
    case "tower":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M12 2L4 22M12 2l8 20M4 22h16M7.5 13.5h9M9 9h6M12 2v20" />{" "}
          <circle cx="12" cy="2" r="1" fill="currentColor" />{" "}
        </svg>
      );
    case "map-pin":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
          <circle cx="12" cy="10" r="3" />{" "}
        </svg>
      );
    case "clock":
      return (
        <svg {...commonProps}>
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <polyline points="12 6 12 12 16 14" />{" "}
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          {" "}
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
          <line x1="16" y1="2" x2="16" y2="6" />{" "}
          <line x1="8" y1="2" x2="8" y2="6" />{" "}
          <line x1="3" y1="10" x2="21" y2="10" />{" "}
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
          <polyline points="22,6 12,13 2,6" />{" "}
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...commonProps}>
          {" "}
          <polyline points="9 18 15 12 9 6" />{" "}
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...commonProps}>
          {" "}
          <polyline points="6 9 12 15 18 9" />{" "}
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...commonProps}>
          {" "}
          <line x1="5" y1="12" x2="19" y2="12" />{" "}
          <polyline points="12 5 19 12 12 19" />{" "}
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...commonProps}>
          {" "}
          <line x1="19" y1="12" x2="5" y2="12" />{" "}
          <polyline points="12 5 5 12 12 19" />{" "}
        </svg>
      );
    case "download":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />{" "}
          <polyline points="7 10 12 15 17 10" />{" "}
          <line x1="12" y1="15" x2="12" y2="3" />{" "}
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          {" "}
          <circle cx="11" cy="11" r="8" />{" "}
          <line x1="21" y1="21" x2="16.65" y2="16.65" />{" "}
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          {" "}
          <polyline points="20 6 9 17 4 12" />{" "}
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          {" "}
          <line x1="18" y1="6" x2="6" y2="18" />{" "}
          <line x1="6" y1="6" x2="18" y2="18" />{" "}
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />{" "}
        </svg>
      );
    case "handshake":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
          <circle cx="8.5" cy="7" r="4" /> <path d="M20 8v6M23 11h-6" />{" "}
        </svg>
      );
    case "wrench":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />{" "}
        </svg>
      );
    case "document":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />{" "}
          <polyline points="14 2 14 8 20 8" />{" "}
          <line x1="16" y1="13" x2="8" y2="13" />{" "}
          <line x1="16" y1="17" x2="8" y2="17" />{" "}
          <polyline points="10 9 9 9 8 9" />{" "}
        </svg>
      );
    case "clipboard":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />{" "}
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />{" "}
        </svg>
      );
    case "info":
      return (
        <svg {...commonProps}>
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <line x1="12" y1="16" x2="12" y2="12" />{" "}
          <line x1="12" y1="8" x2="12.01" y2="8" />{" "}
        </svg>
      );
    case "sparkles":
      return (
        <svg {...commonProps}>
          {" "}
          <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />{" "}
        </svg>
      );
    default:
      return null;
  }
}
