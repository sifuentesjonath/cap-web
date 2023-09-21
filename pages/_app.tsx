import React, { useEffect, useState, useLayoutEffect } from 'react';
// Firebase apps and auth
import FirebaseApp from '@/auth/app';
import 'firebase/auth';
import 'firebase/messaging';

import { DefaultSeo } from 'next-seo';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { IdProvider } from '@radix-ui/react-id';
import { useRouter } from 'next/router';
import { setAuthHeader } from '@/service/customAxios';

//type import
import { PageWithLayout } from '@types';

//css import
import '../scss/app.scss';
import '../scss/map.scss';
import 'react-toastify/dist/ReactToastify.css';

//config import
import SEO from '../next-seo.config.js';
import { PersistGate } from 'redux-persist/integration/react';

// redux import
import { wrapper } from '@redux/store';
import { useSelector, useStore } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { ReduxAuthState, selectAuth, resetAuthState } from '@redux/auth';
import { AuthContextProvider } from '@/contexts/AuthContextProvider';

//component import
import SiteLayout from '@components/layout/SiteLayout';
import CondooZendesk from '@components/block/CondooZendesk';
import ErrorBoundary from '@components/error/ErrorBoundary';
import StyledLoader from '@components/element/StyledLoader';
import { resetZendeskState } from '@redux/zendesk';
import { useProfileData } from '@/service/useApi/Profile';
import { isAuthState } from '@redux/auth';
import PageHead from '@components/layout/Header/PageHead';
import CookieConsent from '@components/consent/Cookie';
import openAdviseToast from '@components/element/StyledToastAdvise';

const firebaseApp = new FirebaseApp();

interface IAppProps {
  Component: PageWithLayout;
  pageProps: any;
}

const LayoutContainer: React.FC<IAppProps> = props => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const authState: ReduxAuthState = useAppSelector(selectAuth);
  // const [profile, setProfile] = useState<UserProfileType>(null);
  const [token, setToken] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const dispatch = useAppDispatch();

  const { data: profile } = useProfileData({ enabled: isUser });

  const { isLoading } = useQuery<string>(
    'firebaseAuthToken',
    () =>
      new Promise(resolve => {
        firebaseApp.getFirebaseApp().auth().onAuthStateChanged(async user => {
          if (user) {
            const token = user.getIdToken();
            resolve(token);
          } else {
            resolve('');
          }
        });
      }),
    {
      staleTime: 3500000,
      onSuccess: data => {
        if (!data) return;
        setAuthHeader(data);
        setToken(data);
        setIsUser(true);
      },
    }
  );

  const LoggedUser = useSelector((state: any) => state.auth.Email);

  const resetReduxStates = () => {
    dispatch(resetAuthState());
    dispatch(resetZendeskState());
  }

  useEffect(() => {
    firebaseApp.setMessagingObServer((payload) => {
      openAdviseToast('advise', 'New notification!');
    })
  }, [])

  // useEffect(() => {
  //   const restrictAccess = async () => {
  //     const isInBlackList = (route: string) => router.pathname.includes(route);
  //     const commonBlackList = ['/login', '/signup', '/sent', '/reset'];
  //     const noLoggedUserList = ['/app', '/setup'];
  //     const setupOnlyRouteBlackList = [...commonBlackList, '/app'];
  //     const loggedUserRouteBlackList = [...commonBlackList, '/setup'];
  //     queryClient.invalidateQueries();

  //     if (!LoggedUser) {
  //       const inBlackList = noLoggedUserList.find(isInBlackList);
  //       if (inBlackList) {
  //         await router.replace('/login');
  //         return;
  //       }
  //     }

  //     if (!profile) return;
  //     const isSetupCompleted = profile?.Step === '10' ? true : false;
  //     if (LoggedUser && !isSetupCompleted) {
  //       const firstArg = router.pathname.split('/')[1] === 'app' ? '/app' : router.pathname;
  //       const inBlackList = setupOnlyRouteBlackList.includes(firstArg);
  //       if (inBlackList) {
  //         await router.replace(`/setup?step=${profile?.Step}`);
  //         return;
  //       }
  //     }

  //     if (LoggedUser && isSetupCompleted) {
  //       // avoid redirecting to app if user is doing setup wizard
  //       if (router.pathname.includes('setup')) return;

  //       const inBlackList = loggedUserRouteBlackList.includes(router.pathname);
  //       if (inBlackList) {
  //         await router.replace(`/app`);
  //         return;
  //       }
  //     }

  //   }

  //   const checkUserIsLogged = async () => {
  //     const isReduxAuth = isAuthState(authState)
  //     // const currentUser = firebase.auth().currentUser;

  //     const isCurrentUserNull = currentUser == null;
  //     const isUserLoggedOutAndReduxPersist = isCurrentUserNull && isReduxAuth;

  //     if (isUserLoggedOutAndReduxPersist) {
  //       resetReduxStates()
  //     }
  //   }

  //   let currentUser;
  //   firebaseApp.getFirebaseApp().auth().onAuthStateChanged(() => {
  //     currentUser = firebaseApp.getFirebaseApp().auth().currentUser;
  //     if (!currentUser) checkUserIsLogged();
  //   });

  //   restrictAccess();
  // }, [authState, router.route, token, router.pathname, queryClient, profile]);

  const { Component, pageProps } = props;
  const Layout = Component.layout || SiteLayout;

  if (isLoading)
    return (
      <Layout>
        <StyledLoader />
      </Layout>
    );
  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent />
      <CondooZendesk />
    </Layout>
  );
};

function MyApp(props: IAppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const store = useStore();

  return (
    //@ts-ignore
    <PersistGate persistor={store.__persistor} loading={null}>
      <IdProvider>
        <ErrorBoundary>
          <DefaultSeo {...SEO} />
          <PageHead />
          <ToastContainer />
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <Hydrate state={props.pageProps.dehydratedState}>
                <LayoutContainer {...props} />
                <ReactQueryDevtools initialIsOpen={false} />
              </Hydrate>
            </AuthContextProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </IdProvider>
    </PersistGate>
  );
}

export {
  firebaseApp
};

export default wrapper.withRedux(MyApp);
