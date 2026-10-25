/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export type TechIconName =
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'golang'
  | 'rust'
  | 'csharp'
  | 'java'
  | 'kotlin'
  | 'swift'
  | 'dart'
  | 'cpp'
  | 'sql'
  | 'php'
  | 'react'
  | 'nextjs'
  | 'flutter'
  | 'nodejs'
  | 'unity'
  | 'docker'
  | 'kubernetes'
  | 'aws'
  | 'postgresql'
  | 'redis'
  | 'pytorch'
  | 'langchain'
  | 'playwright'
  | 'selenium'
  | 'cypress'
  | 'jmeter'
  | 'testrail'
  | 'jira'
  | 'confluence'
  | 'miro'
  | 'figma'
  | 'lucidchart'
  | 'asana'
  | 'monday'
  | 'trello'
  | 'powerbi'
  | 'mixpanel'
  | 'zoho'
  | 'excel'
  | 'word'
  | 'powerpoint'
  | 'premiere';

interface TechIconProps {
  name: TechIconName | string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = 'w-6 h-6', size }: TechIconProps) {
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  const style = size ? { width: size, height: size } : undefined;

  switch (normName) {
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#3178C6" />
          <path d="M40 44H88V56H68V100H54V56H40V44Z" fill="white" />
          <path d="M72 85C72 75 79 70 89 70C96 70 102 73 105 76L100 85C97 83 93 81 89 81C85 81 82 83 82 86C82 96 106 91 106 104C106 114 97 120 86 120C78 120 70 116 66 111L72 101C76 104 81 108 87 108C91 108 95 106 95 102C95 93 72 97 72 85Z" fill="white" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#F7DF1E" />
          <path d="M38 100V60H50V100C50 108 44 112 36 112C28 112 24 108 22 104L32 98C33 100 35 102 38 102C40 102 41 101 41 99V100H38Z" fill="#17243A" />
          <path d="M66 85C66 74 74 68 85 68C93 68 99 71 102 75L93 83C90 80 87 79 84 79C80 79 78 81 78 84C78 94 103 89 103 104C103 115 94 121 82 121C74 121 65 117 60 111L69 101C73 105 78 109 84 109C88 109 91 107 91 103C91 93 66 97 66 85Z" fill="#17243A" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <path
            d="M63.5 14C38.2 14 39.8 25 39.8 25L40 36.4H64.2V39.9H29.5C18.6 39.9 14 47 14 63.8C14 80.5 23.5 82.5 29.5 82.5H37.8V71C37.8 57.3 49.3 57.3 49.3 57.3H73.7C84.7 57.3 84.7 46.2 84.7 46.2V25.2C84.7 14.2 73.8 14 63.5 14ZM53 22C55.8 22 58 24.2 58 27C58 29.8 55.8 32 53 32C50.2 32 48 29.8 48 27C48 24.2 50.2 22 53 22Z"
            fill="#3776AB"
          />
          <path
            d="M64.5 114C89.8 114 88.2 103 88.2 103L88 91.6H63.8V88.1H98.5C109.4 88.1 114 81 114 64.2C114 47.5 104.5 45.5 98.5 45.5H90.2V57C90.2 70.7 78.7 70.7 78.7 70.7H54.3C43.3 70.7 43.3 81.8 43.3 81.8V102.8C43.3 113.8 54.2 114 64.5 114ZM75 106C72.2 106 70 103.8 70 101C70 98.2 72.2 96 75 96C77.8 96 80 98.2 80 101C80 103.8 77.8 106 75 106Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'golang':
    case 'go':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#00ADD8" />
          <path d="M26 64C26 49 37 38 52 38C64 38 72 44 76 52L64 58C62 53 58 49 52 49C43 49 37 55 37 64C37 73 43 79 52 79C58 79 62 76 65 72H50V62H77V78C72 85 63 90 51 90C36 90 26 79 26 64Z" fill="white" />
          <path d="M102 64C102 79 91 90 77 90C73 90 69 89 65 87L71 78C73 79 75 80 77 80C85 80 91 73 91 64C91 55 85 48 77 48C75 48 73 49 71 50L65 41C69 39 73 38 77 38C91 38 102 49 102 64Z" fill="white" />
        </svg>
      );

    case 'rust':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#CE412B" />
          <circle cx="64" cy="64" r="44" stroke="white" strokeWidth="6" strokeDasharray="10 4" />
          <circle cx="64" cy="64" r="32" fill="#17243A" />
          <path d="M52 48H68C76 48 80 52 80 58C80 64 76 67 70 68L82 80H70L60 70H58V80H52V48ZM58 54V64H67C71 64 74 62 74 59C74 56 71 54 67 54H58Z" fill="white" />
        </svg>
      );

    case 'csharp':
    case 'c':
    case 'dotnet':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#9B4993" />
          <path d="M58 46C46 46 38 54 38 64C38 74 46 82 58 82C66 82 72 78 76 72L67 66C65 70 62 72 58 72C52 72 48 68 48 64C48 60 52 56 58 56C62 56 65 58 67 62L76 56C72 50 66 46 58 46Z" fill="white" />
          <path d="M82 54H88V60H94V64H88V70H94V74H88V80H84V74H78V70H84V64H78V60H84V54H82ZM84 64V70H88V64H84Z" fill="#36C5F0" />
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#EA2D2E" />
          <path d="M64 24C64 24 54 36 62 48C68 57 74 61 74 69C74 77 64 82 58 82" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <path d="M50 32C50 32 42 42 48 52C54 60 58 65 58 72" stroke="#FFD43B" strokeWidth="5" strokeLinecap="round" />
          <path d="M34 88C44 94 84 94 94 88C94 96 74 104 64 104C54 104 34 96 34 88Z" fill="white" />
          <path d="M42 98C52 102 76 102 86 98" stroke="#FFD43B" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'kotlin':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#7F52FF" />
          <path d="M28 28H100L64 64L100 100H28V28Z" fill="url(#kotlin-grad)" />
          <defs>
            <linearGradient id="kotlin-grad" x1="28" y1="28" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C757BC" />
              <stop offset="0.5" stopColor="#E0684B" />
              <stop offset="1" stopColor="#E2A13C" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'swift':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#F05138" />
          <path d="M32 94C42 96 68 88 84 70C76 72 64 70 58 64C74 64 88 52 92 42C90 44 80 48 74 46C92 34 94 22 94 22C84 32 72 38 60 38C42 38 32 50 32 64C32 76 34 84 32 94Z" fill="white" />
        </svg>
      );

    case 'dart':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#0175C2" />
          <path d="M34 34L76 28L98 50L60 98L34 76V34Z" fill="#00B4AB" />
          <path d="M60 98L98 50L98 94L76 104L60 98Z" fill="#01579B" />
          <path d="M34 76L60 98L44 104L28 88L34 76Z" fill="#29B6F6" />
        </svg>
      );

    case 'flutter':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#02569B" />
          <path d="M42 66L66 42H94L56 80L42 66Z" fill="#47C5FB" />
          <path d="M66 94L94 66H66L52 80L66 94Z" fill="#02569B" />
          <path d="M66 94L80 108H52L38 94H66Z" fill="#01579B" />
          <path d="M42 30H70L24 76L10 62L42 30Z" fill="#47C5FB" />
        </svg>
      );

    case 'react':
    case 'reactjs':
    case 'reactnative':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#17243A" />
          <ellipse cx="64" cy="64" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" />
          <ellipse cx="64" cy="64" rx="42" ry="16" transform="rotate(60 64 64)" stroke="#61DAFB" strokeWidth="4" />
          <ellipse cx="64" cy="64" rx="42" ry="16" transform="rotate(120 64 64)" stroke="#61DAFB" strokeWidth="4" />
          <circle cx="64" cy="64" r="8" fill="#61DAFB" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#000000" />
          <circle cx="64" cy="64" r="46" fill="#000000" stroke="#333333" strokeWidth="3" />
          <path d="M44 40H54V88H44V40Z" fill="white" />
          <path d="M52 40L88 88H80L48 44V40H52Z" fill="url(#next-grad)" />
          <path d="M76 40H86V66H76V40Z" fill="white" />
          <defs>
            <linearGradient id="next-grad" x1="52" y1="40" x2="88" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#215732" />
          <path d="M64 26L96 44V80L64 98L32 80V44L64 26Z" fill="#5FA04E" />
          <path d="M64 42L82 52V72L64 82L46 72V52L64 42Z" fill="#333333" />
          <path d="M64 48L76 55V69L64 76L52 69V55L64 48Z" fill="#5FA04E" />
        </svg>
      );

    case 'unity':
    case 'unity3d':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#000000" />
          <path d="M64 26L34 44V80L64 98L94 80V44L64 26Z" stroke="white" strokeWidth="6" strokeLinejoin="round" />
          <path d="M64 26V62M34 80L64 62M94 80L64 62" stroke="white" strokeWidth="6" strokeLinejoin="round" />
          <circle cx="64" cy="62" r="7" fill="#36C5F0" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#2496ED" />
          <rect x="36" y="52" width="10" height="10" rx="1.5" fill="white" />
          <rect x="50" y="52" width="10" height="10" rx="1.5" fill="white" />
          <rect x="64" y="52" width="10" height="10" rx="1.5" fill="white" />
          <rect x="50" y="38" width="10" height="10" rx="1.5" fill="white" />
          <rect x="64" y="38" width="10" height="10" rx="1.5" fill="white" />
          <rect x="64" y="24" width="10" height="10" rx="1.5" fill="white" />
          <path d="M22 68C26 84 46 94 72 94C102 94 114 80 114 68C104 68 96 74 88 74C80 74 72 68 64 68C56 68 48 72 40 72C32 72 26 68 22 68Z" fill="white" />
        </svg>
      );

    case 'kubernetes':
    case 'k8s':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#326CE5" />
          <path d="M64 26L96 44V80L64 98L32 80V44L64 26Z" stroke="white" strokeWidth="5" />
          <circle cx="64" cy="62" r="14" stroke="white" strokeWidth="5" />
          <line x1="64" y1="48" x2="64" y2="28" stroke="white" strokeWidth="4" />
          <line x1="76" y1="56" x2="94" y2="46" stroke="white" strokeWidth="4" />
          <line x1="76" y1="68" x2="94" y2="78" stroke="white" strokeWidth="4" />
          <line x1="64" y1="76" x2="64" y2="96" stroke="white" strokeWidth="4" />
          <line x1="52" y1="68" x2="34" y2="78" stroke="white" strokeWidth="4" />
          <line x1="52" y1="56" x2="34" y2="46" stroke="white" strokeWidth="4" />
        </svg>
      );

    case 'aws':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#232F3E" />
          <path d="M36 58C36 50 42 46 50 46C58 46 64 50 64 58V74H56V70C54 73 50 76 44 76C38 76 34 72 34 66C34 59 40 56 48 56H56V55C56 50 52 48 48 48C44 48 40 50 38 52L36 58ZM56 62H48C43 62 40 64 40 67C40 70 43 72 46 72C52 72 56 68 56 62Z" fill="white" />
          <path d="M68 46H74L80 70L86 46H92L98 70L104 46H110L102 76H96L90 52L84 76H78L68 46Z" fill="white" />
          <path d="M28 88C52 102 88 102 106 88" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" />
          <path d="M104 84L112 90L106 98" fill="#FF9900" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
    case 'sql':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#336791" />
          <path d="M64 30C46 30 38 42 38 60C38 78 48 94 64 94C80 94 90 78 90 60C90 42 82 30 64 30Z" fill="white" fillOpacity="0.2" />
          <path d="M50 44C50 44 64 40 78 44C84 46 86 52 86 60C86 74 76 84 64 84C52 84 42 74 42 60C42 54 44 48 50 44Z" stroke="white" strokeWidth="5" />
          <circle cx="56" cy="54" r="3.5" fill="white" />
          <circle cx="72" cy="54" r="3.5" fill="white" />
          <path d="M64 58V72" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'redis':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#DC382D" />
          <path d="M64 34L94 48L64 62L34 48L64 34Z" fill="white" />
          <path d="M34 58L64 72L94 58V66L64 80L34 66V58Z" fill="white" fillOpacity="0.8" />
          <path d="M34 76L64 90L94 76V84L64 98L34 84V76Z" fill="white" fillOpacity="0.6" />
        </svg>
      );

    case 'pytorch':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#17243A" />
          <path d="M64 30C45 30 36 44 36 64C36 84 48 96 64 96C80 96 92 84 92 64C92 46 84 38 78 34" stroke="#EE4C2C" strokeWidth="6" strokeLinecap="round" />
          <circle cx="80" cy="36" r="6" fill="#EE4C2C" />
          <circle cx="64" cy="54" r="7" fill="#EE4C2C" />
        </svg>
      );

    case 'langchain':
    case 'rag':
    case 'ai':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#1C3C3C" />
          <circle cx="44" cy="48" r="14" stroke="#2DD4BF" strokeWidth="5" />
          <circle cx="84" cy="48" r="14" stroke="#2DD4BF" strokeWidth="5" />
          <circle cx="64" cy="84" r="14" stroke="#38BDF8" strokeWidth="5" />
          <line x1="56" y1="54" x2="72" y2="54" stroke="#2DD4BF" strokeWidth="4" />
          <line x1="48" y1="60" x2="60" y2="74" stroke="#38BDF8" strokeWidth="4" />
          <line x1="80" y1="60" x2="68" y2="74" stroke="#38BDF8" strokeWidth="4" />
        </svg>
      );

    case 'playwright':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#2EAD33" />
          <path d="M38 46C38 34 50 26 62 34L88 52C98 58 98 72 88 78L62 96C50 104 38 96 38 84V46Z" fill="#17243A" />
          <circle cx="58" cy="54" r="6" fill="#45BA4B" />
          <circle cx="76" cy="66" r="6" fill="#C93D80" />
        </svg>
      );

    case 'selenium':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#00A859" />
          <rect x="32" y="32" width="64" height="64" rx="12" stroke="white" strokeWidth="6" />
          <text x="44" y="74" fill="white" fontFamily="monospace" fontSize="32" fontWeight="bold">Se</text>
        </svg>
      );

    case 'cypress':
    case 'cy':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#1B1E2B" />
          <path
            d="M84 44C80 40 73 38 64 38C46 38 34 50 34 64C34 78 46 90 64 90C73 90 80 87 85 82L76 74C73 77 69 79 64 79C53 79 46 72 46 64C46 56 53 49 64 49C69 49 73 51 76 54L84 44Z"
            fill="#00BF88"
          />
          <path
            d="M92 48V78C92 89 84 96 72 96C66 96 61 94 57 91L61 82C64 84 68 86 72 86C78 86 82 82 82 76V48H92Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'jmeter':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#D22128" />
          <path d="M42 86C36 78 34 68 38 56C42 42 54 32 68 28C68 36 64 48 56 56C50 62 44 74 42 86Z" fill="white" />
          <path d="M58 84L82 50L88 56L64 90H58V84Z" fill="#FFD43B" />
          <circle cx="82" cy="78" r="16" stroke="white" strokeWidth="5" />
          <line x1="82" y1="78" x2="90" y2="72" stroke="white" strokeWidth="3" />
        </svg>
      );

    case 'testrail':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#205081" />
          <rect x="32" y="36" width="28" height="24" rx="4" fill="#4CAF50" />
          <rect x="68" y="36" width="28" height="24" rx="4" fill="#2196F3" />
          <rect x="32" y="68" width="28" height="24" rx="4" fill="#FF9800" />
          <rect x="68" y="68" width="28" height="24" rx="4" fill="#9C27B0" />
        </svg>
      );

    case 'jira':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#0052CC" />
          <path d="M64 30C52 42 52 60 64 72L76 60C68 52 68 40 76 32L64 30Z" fill="#2684FF" />
          <path d="M64 56C52 68 52 86 64 98L76 86C68 78 68 66 76 58L64 56Z" fill="white" />
          <path d="M48 44C36 56 36 74 48 86L60 74C52 66 52 54 60 46L48 44Z" fill="#0052CC" opacity="0.6" />
        </svg>
      );

    case 'confluence':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#172B4D" />
          <path d="M42 78C36 72 38 62 46 58L68 46C76 42 86 46 88 54C90 62 82 70 74 74L52 86C44 90 34 86 42 78Z" fill="#0052CC" />
          <path d="M86 50C92 56 90 66 82 70L60 82C52 86 42 82 40 74C38 66 46 58 54 54L76 42C84 38 94 42 86 50Z" fill="#2684FF" />
        </svg>
      );

    case 'miro':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#FFD02F" />
          <path d="M34 84L46 44H34V84Z" fill="#050038" />
          <path d="M54 90L68 38H56L44 90H54Z" fill="#050038" />
          <path d="M74 90L88 38H76L64 90H74Z" fill="#050038" />
          <path d="M94 76V44H82L86 76H94Z" fill="#050038" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#1E1E1E" />
          <path d="M46 36C52.6 36 58 41.4 58 48C58 54.6 52.6 60 46 60H34V48C34 41.4 39.4 36 46 36Z" fill="#F24E1E" />
          <path d="M82 36C88.6 36 94 41.4 94 48C94 54.6 88.6 60 82 60H70V36H82Z" fill="#FF7262" />
          <path d="M82 60C88.6 60 94 65.4 94 72C94 78.6 88.6 84 82 84C75.4 84 70 78.6 70 72C70 65.4 75.4 60 82 60Z" fill="#1ABCFE" />
          <path d="M46 60C52.6 60 58 65.4 58 72C58 78.6 52.6 84 46 84H34V60H46Z" fill="#A259FF" />
          <path d="M46 84C52.6 84 58 89.4 58 96C58 102.6 52.6 108 46 108C39.4 108 34 102.6 34 96V84H46Z" fill="#0ACF83" />
        </svg>
      );

    case 'lucidchart':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#282C34" />
          <circle cx="44" cy="46" r="12" fill="#F86422" />
          <circle cx="84" cy="46" r="12" fill="#F86422" />
          <rect x="44" y="74" width="40" height="24" rx="6" fill="#F86422" />
          <path d="M44 46H84M64 46V74" stroke="white" strokeWidth="4" />
        </svg>
      );

    case 'asana':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#FC636B" />
          <circle cx="64" cy="46" r="16" fill="white" />
          <circle cx="42" cy="80" r="14" fill="white" />
          <circle cx="86" cy="80" r="14" fill="white" />
        </svg>
      );

    case 'monday':
    case 'mondaycom':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#1F2733" />
          <circle cx="40" cy="64" r="12" fill="#FF3D57" />
          <rect x="58" y="44" width="16" height="40" rx="8" fill="#FFCC00" />
          <rect x="80" y="32" width="16" height="52" rx="8" fill="#00CA72" />
        </svg>
      );

    case 'trello':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#0079BF" />
          <rect x="36" y="36" width="22" height="48" rx="4" fill="white" />
          <rect x="70" y="36" width="22" height="32" rx="4" fill="white" />
        </svg>
      );

    case 'powerbi':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#F2C811" />
          <rect x="36" y="64" width="14" height="28" rx="3" fill="#17243A" />
          <rect x="56" y="48" width="14" height="44" rx="3" fill="#17243A" />
          <rect x="76" y="32" width="14" height="60" rx="3" fill="#17243A" />
        </svg>
      );

    case 'mixpanel':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#7856FF" />
          <circle cx="42" cy="74" r="12" fill="white" />
          <circle cx="68" cy="48" r="12" fill="white" />
          <circle cx="92" cy="78" r="10" fill="white" />
          <path d="M42 74L68 48L92 78" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'zoho':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#17243A" />
          <rect x="30" y="34" width="28" height="28" rx="6" fill="#EA4335" />
          <rect x="70" y="34" width="28" height="28" rx="6" fill="#34A853" />
          <rect x="30" y="68" width="28" height="28" rx="6" fill="#4285F4" />
          <rect x="70" y="68" width="28" height="28" rx="6" fill="#FBBC05" />
        </svg>
      );

    case 'excel':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#107C41" />
          <path d="M72 40H94V88H72V40Z" fill="white" fillOpacity="0.3" />
          <rect x="34" y="46" width="36" height="36" rx="6" fill="#185ABD" />
          <path d="M44 54L60 74M60 54L44 74" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'word':
    case 'docs':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#185ABD" />
          <path d="M72 40H94V88H72V40Z" fill="white" fillOpacity="0.3" />
          <rect x="34" y="46" width="36" height="36" rx="6" fill="#107C41" />
          <path d="M42 54L48 74L52 62L56 74L62 54" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case 'powerpoint':
    case 'ppt':
    case 'slides':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#D24726" />
          <path d="M72 40H94V88H72V40Z" fill="white" fillOpacity="0.3" />
          <rect x="34" y="46" width="36" height="36" rx="6" fill="#C43E1C" />
          <path d="M44 54H54C58 54 60 56 60 60C60 64 58 66 54 66H48V74H44V54ZM48 58V62H54C55 62 56 61 56 60C56 59 55 58 54 58H48Z" fill="white" />
        </svg>
      );

    case 'premiere':
    case 'aftereffects':
    case 'video':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#00005B" />
          <text x="36" y="82" fill="#EA77FF" fontFamily="system-ui, sans-serif" fontSize="48" fontWeight="bold">Pr</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 128 128" className={className} style={style} fill="none">
          <rect width="128" height="128" rx="24" fill="#356DFF" />
          <circle cx="64" cy="64" r="28" stroke="white" strokeWidth="6" />
          <path d="M52 64L60 72L76 56" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
