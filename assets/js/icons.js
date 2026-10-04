function icon(name, size = 20) {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    arrow: '<path d="M5 12h14"/><path d="m14 7 5 5-5 5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z"/><path d="M8 7h8M8 11h6"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>'
  };

  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
}

function loopy(small = false) {
  const className = small ? 'loopy small' : 'loopy';
  return `<svg class="${className}" viewBox="0 0 100 100" role="img" aria-label="Loopy, your cute path-finding mascot">
    <circle cx="50" cy="51" r="42" fill="#f6d968" stroke="#071a30" stroke-width="3.5"/>
    <ellipse cx="34" cy="42" rx="11" ry="15" fill="white" stroke="#071a30" stroke-width="3" transform="rotate(-7 34 42)"/>
    <ellipse cx="67" cy="40" rx="12" ry="16" fill="white" stroke="#071a30" stroke-width="3" transform="rotate(8 67 40)"/>
    <circle cx="38" cy="45" r="5" fill="#071a30"/>
    <circle cx="62" cy="44" r="5" fill="#071a30"/>
    <circle cx="39.5" cy="43" r="1.5" fill="white"/>
    <circle cx="63.5" cy="42" r="1.5" fill="white"/>
    <ellipse cx="20" cy="60" rx="7" ry="4" fill="#efa7a7" opacity=".72"/>
    <ellipse cx="81" cy="60" rx="7" ry="4" fill="#efa7a7" opacity=".72"/>
    <path d="M30 64c6 18 31 22 42-2-13 7-29 8-42 2Z" fill="white" stroke="#071a30" stroke-width="3" stroke-linejoin="round"/>
    <path d="M45 76c7-4 13-3 17 1" fill="none" stroke="#efa7a7" stroke-width="4" stroke-linecap="round"/>
    <path d="M49 55c-3 2-3 5 1 6" fill="none" stroke="#071a30" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M15 25c-7-5-7-11-3-15M83 21c7-6 7-11 4-16" fill="none" stroke="#071a30" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}
