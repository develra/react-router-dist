import * as React from "react";
import type { Location, ParamParseKey, Params, Path, PathMatch, PathPattern, Router as RemixRouter, To } from "@remix-run/router";
import { Action as NavigationType } from "@remix-run/router";
import type { NavigateOptions, RouteContextObject, RouteMatch, RouteObject, RelativeRoutingType } from "./context";
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
export declare function useHref(to: To, { relative }?: {
    relative?: RelativeRoutingType;
}): string;
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */
export declare function useInRouterContext(): boolean;
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
export declare function useLocation(): Location;
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */
export declare function useNavigationType(): NavigationType;
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */
export declare function useMatch<ParamKey extends ParamParseKey<Path>, Path extends string>(pattern: PathPattern<Path> | Path): PathMatch<ParamKey> | null;
/**
 * The interface for the navigate() function returned from useNavigate().
 */
export interface NavigateFunction {
    (to: To, options?: NavigateOptions): void;
    (delta: number): void;
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
export declare function useNavigate(): NavigateFunction;
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */
export declare function useOutletContext<Context = unknown>(): Context;
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */
export declare function useOutlet(context?: unknown): React.ReactElement | null;
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
export declare function useParams<ParamsOrKey extends string | Record<string, string | undefined> = string>(): Readonly<[
    ParamsOrKey
] extends [string] ? Params<ParamsOrKey> : Partial<ParamsOrKey>>;
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */
export declare function useResolvedPath(to: To, { relative }?: {
    relative?: RelativeRoutingType;
}): Path;
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */
export declare function useRoutes(routes: RouteObject[], locationArg?: Partial<Location> | string): React.ReactElement | null;
declare type RenderErrorBoundaryProps = React.PropsWithChildren<{
    location: Location;
    error: any;
    component: React.ReactNode;
    routeContext: RouteContextObject;
}>;
declare type RenderErrorBoundaryState = {
    location: Location;
    error: any;
};
export declare class RenderErrorBoundary extends React.Component<RenderErrorBoundaryProps, RenderErrorBoundaryState> {
    constructor(props: RenderErrorBoundaryProps);
    static getDerivedStateFromError(error: any): {
        error: any;
    };
    static getDerivedStateFromProps(props: RenderErrorBoundaryProps, state: RenderErrorBoundaryState): {
        error: any;
        location: Location;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
}
export declare function _renderMatches(matches: RouteMatch[] | null, parentMatches?: RouteMatch[], dataRouterState?: RemixRouter["state"]): React.ReactElement | null;
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
export declare function useNavigation(): import("@remix-run/router").Navigation;
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
export declare function useRevalidator(): {
    revalidate: () => void;
    state: import("@remix-run/router").RevalidationState;
};
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
export declare function useMatches(): {
    id: string;
    pathname: string;
    params: Params<string>;
    data: unknown;
    handle: unknown;
}[];
/**
 * Returns the loader data for the nearest ancestor Route loader
 */
export declare function useLoaderData(): unknown;
/**
 * Returns the loaderData for the given routeId
 */
export declare function useRouteLoaderData(routeId: string): unknown;
/**
 * Returns the action data for the nearest ancestor Route action
 */
export declare function useActionData(): unknown;
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * errorElement to display a proper error message.
 */
export declare function useRouteError(): unknown;
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */
export declare function useAsyncValue(): unknown;
/**
 * Returns the error from the nearest ancestor <Await /> value
 */
export declare function useAsyncError(): unknown;
export {};
