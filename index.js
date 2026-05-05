// capitalize
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// truncate
function truncate(str, len) {
    return str.length > len ? str.slice(0, len) + "..." : str;
}

// slugify
function slugify(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
}