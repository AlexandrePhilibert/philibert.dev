/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontSize: {
                sm: '0.8rem',
                base: ['14px', '1.5rem'],
                xl: ['1.25rem', '1.75rem'],
                '2xl': '1.5rem',
                '3xl': '1.75rem',
                '4xl': '2rem',
                '5xl': '3rem'
            },
            colors: {
                'oslo-gray': {
                    50: '#f5f6f6',
                    100: '#e5e8e8',
                    200: '#ced3d3',
                    300: '#abb3b5',
                    400: '#808b8e',
                    500: '#667174',
                    600: '#576063',
                    700: '#4b5153',
                    800: '#424748',
                    900: '#3a3e3f',
                    950: '#242728'
                },
                'cerulean-blue': {
                    50: '#f3f5fc',
                    100: '#e5ebf9',
                    200: '#c6d4f1',
                    300: '#93b0e6',
                    400: '#5988d7',
                    500: '#3061b5',
                    600: '#2450a5',
                    700: '#1e4086',
                    800: '#1d386f',
                    900: '#1d315d',
                    950: '#131f3e'
                },
                scooter: {
                    50: '#eefdfd',
                    100: '#d3f8fa',
                    200: '#aceff5',
                    300: '#73e3ed',
                    400: '#23c5d7',
                    500: '#16b0c4',
                    600: '#168ea4',
                    700: '#187286',
                    800: '#1d5d6d',
                    900: '#1c4d5d',
                    950: '#0d333f'
                },
                mariner: {
                    50: '#f1f7fd',
                    100: '#dfeefa',
                    200: '#c7e1f6',
                    300: '#a0cef0',
                    400: '#73b3e7',
                    500: '#5297df',
                    600: '#3d7cd3',
                    700: '#366cc9',
                    800: '#30549d',
                    900: '#2b497d',
                    950: '#1e2e4d'
                }
            }
        }
    },
    plugins: []
};
