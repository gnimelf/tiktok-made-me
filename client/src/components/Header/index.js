import React from "react";

export default function Header () {
    return (
        <header>
        {/* logo */}
        <img id="logo" src="circle_logo.png"/>
        {/* Blue wave */}
        <svg id="shape0" width="100%" height="1474.56pt">
            <path
                transform="translate(-26.0070562941524, -6.47999962218574)"
                fill="#02f1ee"
                fillOpacity="0.854901960784314"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="0.72"
                strokeLinecap="square"
                strokeLinejoin="bevel"
                d="M0.534202 0C-2.28098 9.31132 -3.26244 114.585 253.254 150.12C383.925 168.01 577.383 135.885 725.847 160.92C899.736 186.659 962.296 239.068 1108.61 208.44C1319.84 176.38 1506.74 14.1725 1526.57 7.56"
            />
        </svg>
        {/* Red wave */}
        <svg id="shape1" width="100%" height="1474.56pt">
            <path
                transform="matrix(0.999999969189725 0.000705676136402657 2.4492935228313e-16 0.999999969189725 -91.8658046810187 -82.6625549407509)"
                fill="#ff004f"
                fillOpacity="0.619607843137255"
                fillRule="evenodd"
                strokeOpacity="0"
                stroke="#000000"
                strokeWidth="0"
                strokeLinecap="square"
                strokeLinejoin="bevel"
                d="M4.60187 0C2.45529 11.1089 -23.1978 120.698 74.5858 199.25C115.081 231.781 186.653 266.411 314.095 290.415C464.929 321.224 635.941 112.224 796.026 154.461C983.526 197.886 1023.82 401.343 1192.39 353.981C1322.22 323.148 1494.42 244.498 1582.27 157.146C1648.52 91.2597 1647.07 8.16633 1654.27 5.91126"
            />
        </svg>
        {/* White wave */}
        <svg id="shape2" width="100%" height="1474.56pt">
            <path
                transform="translate(-26.0182139414758, -7.55999955921669)"
                fill="#ffffff"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="0.72"
                strokeLinecap="square"
                strokeLinejoin="bevel"
                d="M0.556517 0C-2.25867 9.31132 -4.04725 115.665 252.469 151.2C321.301 161.312 458.478 155.09 466.309 153.54C487.612 146.195 617.647 58.9774 722.629 76.68C826.957 92.1227 910.118 203.298 931.61 207.261C961.324 215.592 1034.9 227.532 1109.81 208.98C1321.04 176.92 1506.76 14.1725 1526.6 7.56"
            />
        </svg>
    </header>
    )
}