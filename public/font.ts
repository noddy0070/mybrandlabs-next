import localFont from 'next/font/local';
export const helvetica = localFont({
    src: [
        { path: '../public/font/plusJakarta/PlusJakartaSans-ExtraLight.ttf', weight: '200', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-ExtraLightItalic.ttf', weight: '200', style: 'italic' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-Light.ttf', weight: '300', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-LightItalic.ttf', weight: '300', style: 'italic' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-Italic.ttf', weight: '400', style: 'italic' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-MediumItalic.ttf', weight: '500', style: 'italic' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-Bold.ttf', weight: '700', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-BoldItalic.ttf', weight: '700', style: 'italic' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-ExtraBold.ttf', weight: '800', style: 'normal' },
        { path: '../public/font/plusJakarta/PlusJakartaSans-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
      ],
  display: 'swap',
});
