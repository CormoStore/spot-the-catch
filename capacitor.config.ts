import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2af1f2f75f9942858741fa7c0c162bba',
  appName: 'FishSpot',
  webDir: 'dist',
  server: {
    url: 'https://2af1f2f7-5f99-4285-8741-fa7c0c162bba.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
