export type PasswordValidation = {
  hasLength: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
};

export function validatePassword(password: string): PasswordValidation {
  return {
    hasLength: password.length >= 8,
    hasUpper: /[A-ZА-Я]/.test(password),
    hasNumber: /\d/.test(password),
  };
}