// Color palette interface
interface ThemeColors {
    primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    background: {
        default: string;
        paper: string;
        variant: string;
        card: string;
        input: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        price: string;
    };
    action: {
        active: string;
        hover: string;
        selected: string;
        disabled: string;
    };
    status: {
        success: string;
        error: string;
        warning: string;
        info: string;
    };
    grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    common: {
        white: string;
        black: string;
    };
}

// Color tokens for the rental app
export const colors: ThemeColors = {
    primary: {
        main: '#4A60A1',     // Main brand color - used for primary buttons and CTAs
        light: '#6B7CB4',    // Lighter variant - used for hover states
        dark: '#364877',     // Darker variant - used for pressed states
        contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#FF9666',     // Secondary color - used for highlighted features
        light: '#FFB08C',    // Lighter variant
        dark: '#E67D4D',     // Darker variant
        contrastText: '#FFFFFF'
    },
    background: {
        default: '#F5F5F5',  // Main background color
        paper: '#FFFFFF',    // Card and elevated surface color
        variant: '#F8FAFC',  // Alternative background for sections
        card: '#FFFFFF',     // Property cards background
        input: '#F9FAFB'     // Input field background
    },
    text: {
        primary: '#1B1D1F',    // Main text color
        secondary: '#6B7280',  // Secondary text, subtitles
        disabled: '#9CA3AF',   // Disabled text
        hint: '#94A3B8',       // Placeholder text
        price: '#16A34A'       // Price text color
    },
    action: {
        active: '#4A60A1',     // Active state color
        hover: '#6B7CB4',      // Hover state color
        selected: '#E5E9F2',   // Selected state background
        disabled: '#E5E7EB'    // Disabled state color
    },
    status: {
        success: '#22C55E',    // Success messages
        error: '#EF4444',      // Error messages
        warning: '#F59E0B',    // Warning messages
        info: '#3B82F6'        // Information messages
    },
    grey: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
    },
    common: {
        white: '#FFFFFF',
        black: '#000000'
    }
};

// Type-safe color getter
export const getColor = (path: keyof ThemeColors) => colors[path];

// Commonly used color combinations
export const propertyCard = {
    background: colors.background.card,
    title: colors.text.primary,
    subtitle: colors.text.secondary,
    price: colors.text.price,
    features: colors.text.secondary
};

// Navigation colors
export const navigation = {
    active: colors.primary.main,
    inactive: colors.grey[400],
    background: colors.background.paper
};

// Form colors
export const form = {
    input: {
        background: colors.background.input,
        text: colors.text.primary,
        placeholder: colors.text.hint,
        border: colors.grey[200],
        borderFocus: colors.primary.main
    },
    button: {
        primary: colors.primary.main,
        secondary: colors.secondary.main,
        disabled: colors.action.disabled
    }
};

export default colors;