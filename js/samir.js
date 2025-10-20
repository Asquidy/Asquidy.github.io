function toggleMe2(a){
    var e=document.getElementById(a);
    if(!e)return true;
    if(e.style.display=="none"){
                    e.style.display="block"
    }
    else{
                    e.style.display="none"
    }
    return true;
}

function ShowHiddenText(a) {
    document.getElementById(a).style.display = "block";
}

function toggleMe(obj){
        var div1 = document.getElementById(obj)
        if (div1.style.display == 'none') {
                div1.style.display = 'block'
        } else {
                div1.style.display = 'none'
        }
}

// Theme Toggle Functions
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function getStoredTheme() {
    try {
        return localStorage.getItem('theme');
    } catch (e) {
        return null;
    }
}

function setStoredTheme(theme) {
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        // localStorage not available
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleCheckbox(theme);
}

function updateToggleCheckbox(theme) {
    var checkbox = document.getElementById('theme-toggle-checkbox');
    if (checkbox) {
        checkbox.checked = (theme === 'dark');
        var label = checkbox.closest('label');
        if (label) {
            label.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }
}

function toggleTheme() {
    var checkbox = document.getElementById('theme-toggle-checkbox');
    if (!checkbox) return;
    
    var newTheme = checkbox.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    setStoredTheme(newTheme);
}

function initializeTheme() {
    var storedTheme = getStoredTheme();
    var theme = storedTheme || 'light';
    applyTheme(theme);
    
    // Add event listener to checkbox
    var checkbox = document.getElementById('theme-toggle-checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', toggleTheme);
    }
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
    initializeTheme();
}