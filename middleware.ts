import { auth } from "@/auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("The route is ", req.nextUrl.pathname);
    console.log("IS LOGGED IN ", isLoggedIn);
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}