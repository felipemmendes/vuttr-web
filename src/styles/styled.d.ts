import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      bgOutOfFocus: string;

      textPrimary: string;
      textSecondary: string;
      textTertiary: string;

      linkPrimary: string;
      linkPrimaryHover: string;

      cardBorder: string;

      btnPrimary: string;
      btnPrimaryText: string;
      btnPrimaryHover: string;
      btnPrimaryActive: string;

      btnSecondary: string;
      btnSecondaryText: string;
      btnSecondaryHover: string;
      btnSecondaryActive: string;

      btnPrimaryDanger: string;
      btnPrimaryDangerText: string;
      btnPrimaryDangerHover: string;
      btnPrimaryDangerActive: string;

      inputBg: string;
      inputBgFocus: string;
      inputBorder: string;
      inputBorderFocus: string;
      inputPlaceholder: string;
      inputIcon: string;
      inputRequired: string;
      inputErrorBg: string;
      inputErrorBorder: string;
      inputErrorText: string;

      spinnerPrimary: string;

      notificationSuccessBg: string;
      notificationSuccessText: string;
      notificationSuccessBtn: string;

      notificationErrorBg: string;
      notificationErrorText: string;
      notificationErrorBtn: string;

      notificationConfirmBtn: string;
    };
  }
}
