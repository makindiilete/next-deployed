import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  /*
   * Before navigating users to the requested pages specified in the config, check if the user is authenticated,
   * else, bounce him back to the login page.
   * 'request.url' is the baseUrl of our site
   * '/login' is the login page we are bouncing the user back to
   * */
  const token = request.cookies.get("token"); // Get the token from cookies

  // If there's no token in the cookies, redirect to the login page.
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Otherwise, do nothing and let the request proceed.
  return NextResponse.next();
}

/*
 * Here we define the routes on which we want this middleware to trigger
 * */

export const config = {
  /*
   * *: Trigger one zero or more parameters
   * +: Trigger on one or more parameters
   * ?: Trigger on zero or one parameter
   * */

  // matcher: ["/users"], //Trigger the middleware on the /users route
  // matcher: ["/users/:id*"], //Trigger the middleware on the /users route with zero or more params i.e. /users, /users/1 etc
  // matcher: ["/users/:id+"], //Trigger the middleware on the /users route with one or more params i.e. /users/1, /users/1/new
  matcher: ["/users"],
};
