/* eslint-disable no-console */
import { useRouter } from 'next/router';
import CookieToken from 'src/repositories/CookieTokenRepository';

function useSignout() {
  const router = useRouter();

  const handleSignout = () => {
    CookieToken.remove();
    console.log(CookieToken.get());
    router.replace('/signin');
  };

  return handleSignout;
}
export default useSignout;
