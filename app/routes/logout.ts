// app/routes/logout.ts
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { destroySession, getSession } from '~/utils/session.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};
