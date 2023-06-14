export default function (errorCode: any) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid e-mail address';
    case 'auth/email-already-exists':
      return 'Email-already-exists';
    case 'auth/user-not-found':
      return 'User-not-found';
    case 'auth/weak-password':
      return 'Weak password';
    case 'auth/wrong-password':
      return 'Wrong password';

    default:
      return 'Login failed';
  }
}
