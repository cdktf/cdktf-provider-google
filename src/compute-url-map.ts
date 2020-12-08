// https://www.terraform.io/docs/providers/google/r/compute_url_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeUrlMapConfig extends cdktf.TerraformMetaArguments {
  /** The backend service or backend bucket to use when none of the given rules match. */
  readonly defaultService?: string;
  /** An optional description of this resource. Provide this property when you create
the resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** default_route_action block */
  readonly defaultRouteAction?: ComputeUrlMapDefaultRouteAction[];
  /** default_url_redirect block */
  readonly defaultUrlRedirect?: ComputeUrlMapDefaultUrlRedirect[];
  /** header_action block */
  readonly headerAction?: ComputeUrlMapHeaderAction[];
  /** host_rule block */
  readonly hostRule?: ComputeUrlMapHostRule[];
  /** path_matcher block */
  readonly pathMatcher?: ComputeUrlMapPathMatcher[];
  /** test block */
  readonly test?: ComputeUrlMapTest[];
  /** timeouts block */
  readonly timeouts?: ComputeUrlMapTimeouts;
}
export interface ComputeUrlMapDefaultRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regular expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
  readonly disabled?: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}

function computeUrlMapDefaultRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay[];
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: cdktf.listMapper(computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform)(struct!.fixedDelay),
  }
}

export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay[];
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abort: cdktf.listMapper(computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform)(struct!.abort),
    delay: cdktf.listMapper(computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform)(struct!.delay),
  }
}

export interface ComputeUrlMapDefaultRouteActionRequestMirrorPolicy {
  /** The full or partial URL to the BackendService resource being mirrored to. */
  readonly backendService: string;
}

function computeUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export interface ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}

function computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapDefaultRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1. */
  readonly numRetries?: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

* 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
  or if the backend service does not respond at all, example: disconnects, reset, read timeout,
* connection failure, and refused streams.
* gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* connect-failure: Loadbalancer will retry on failures connecting to backend services,
  for example due to connection timeouts.
* retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  Currently the only retriable error supported is 409.
* refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
  This reset type indicates that it is safe to retry.
* cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
* deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
* resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
* unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout[];
}

function computeUrlMapDefaultRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: cdktf.listMapper(computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform)(struct!.perTryTimeout),
  }
}

export interface ComputeUrlMapDefaultRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}

function computeUrlMapDefaultRouteActionTimeoutToTerraform(struct?: ComputeUrlMapDefaultRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapDefaultRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.

The value must be between 1 and 255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.

The value must be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapDefaultRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapDefaultRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response prior to sending the
response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapDefaultRouteActionWeightedBackendServices {
  /** The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight. */
  readonly backendService?: string;
  /** Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .

The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.

The value must be between 0 and 1000 */
  readonly weight?: number;
  /** header_action block */
  readonly headerAction?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction[];
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform)(struct!.headerAction),
  }
}

export interface ComputeUrlMapDefaultRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: ComputeUrlMapDefaultRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: ComputeUrlMapDefaultRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: ComputeUrlMapDefaultRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: ComputeUrlMapDefaultRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: ComputeUrlMapDefaultRouteActionWeightedBackendServices[];
}

function computeUrlMapDefaultRouteActionToTerraform(struct?: ComputeUrlMapDefaultRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cors_policy: cdktf.listMapper(computeUrlMapDefaultRouteActionCorsPolicyToTerraform)(struct!.corsPolicy),
    fault_injection_policy: cdktf.listMapper(computeUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform)(struct!.faultInjectionPolicy),
    request_mirror_policy: cdktf.listMapper(computeUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform)(struct!.requestMirrorPolicy),
    retry_policy: cdktf.listMapper(computeUrlMapDefaultRouteActionRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(computeUrlMapDefaultRouteActionTimeoutToTerraform)(struct!.timeout),
    url_rewrite: cdktf.listMapper(computeUrlMapDefaultRouteActionUrlRewriteToTerraform)(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export interface ComputeUrlMapDefaultUrlRedirect {
  /** The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained. The default is set to false.
 This field is required to ensure an empty block is not set. The normal default value is false. */
  readonly stripQuery: boolean;
}

function computeUrlMapDefaultUrlRedirectToTerraform(struct?: ComputeUrlMapDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export interface ComputeUrlMapHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapHeaderActionToTerraform(struct?: ComputeUrlMapHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapHostRule {
  /** An optional description of this resource. Provide this property when you create
the resource. */
  readonly description?: string;
  /** The list of host patterns to match. They must be valid hostnames, except * will
match any string of ([a-z0-9-.]*). In that case, * must be the first character
and must be followed in the pattern by either - or .. */
  readonly hosts: string[];
  /** The name of the PathMatcher to use to match the path portion of the URL if the
hostRule matches the URL's host portion. */
  readonly pathMatcher: string;
}

function computeUrlMapHostRuleToTerraform(struct?: ComputeUrlMapHostRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
    path_matcher: cdktf.stringToTerraform(struct!.pathMatcher),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regular expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
  readonly disabled?: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}

function computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay[];
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform)(struct!.fixedDelay),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay[];
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abort: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToTerraform)(struct!.abort),
    delay: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToTerraform)(struct!.delay),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy {
  /** The full or partial URL to the BackendService resource being mirrored to. */
  readonly backendService: string;
}

function computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1. */
  readonly numRetries?: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

* 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
  or if the backend service does not respond at all, example: disconnects, reset, read timeout,
* connection failure, and refused streams.
* gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* connect-failure: Loadbalancer will retry on failures connecting to backend services,
  for example due to connection timeouts.
* retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  Currently the only retriable error supported is 409.
* refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
  This reset type indicates that it is safe to retry.
* cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
* deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
* resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
* unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout[];
}

function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform)(struct!.perTryTimeout),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.

The value must be between 1 and 255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.

The value must be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response prior to sending the
response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices {
  /** The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight. */
  readonly backendService?: string;
  /** Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .

The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.

The value must be between 0 and 1000 */
  readonly weight?: number;
  /** header_action block */
  readonly headerAction?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction[];
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform)(struct!.headerAction),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: ComputeUrlMapPathMatcherDefaultRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[];
}

function computeUrlMapPathMatcherDefaultRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cors_policy: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToTerraform)(struct!.corsPolicy),
    fault_injection_policy: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToTerraform)(struct!.faultInjectionPolicy),
    request_mirror_policy: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToTerraform)(struct!.requestMirrorPolicy),
    retry_policy: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionTimeoutToTerraform)(struct!.timeout),
    url_rewrite: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToTerraform)(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export interface ComputeUrlMapPathMatcherDefaultUrlRedirect {
  /** The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained.
 This field is required to ensure an empty block is not set. The normal default value is false. */
  readonly stripQuery: boolean;
}

function computeUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export interface ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regular expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled. */
  readonly disabled: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}

function computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive. */
  readonly httpStatus: number;
  /** The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive. */
  readonly percentage: number;
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive. */
  readonly percentage: number;
  /** fixed_delay block */
  readonly fixedDelay: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay[];
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform)(struct!.fixedDelay),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay[];
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abort: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform)(struct!.abort),
    delay: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform)(struct!.delay),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /** The BackendService resource being mirrored to. */
  readonly backendService: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. */
  readonly numRetries?: number;
  /** Specifies one or more conditions when this retry rule applies. Valid values are:

* 5xx: Loadbalancer will attempt a retry if the backend service responds with
any 5xx response code, or if the backend service does not respond at all,
example: disconnects, reset, read timeout, connection failure, and refused
streams.
* gateway-error: Similar to 5xx, but only applies to response codes
502, 503 or 504.
* connect-failure: Loadbalancer will retry on failures
connecting to backend services, for example due to connection timeouts.
* retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
* refused-stream: Loadbalancer will retry if the backend service resets the stream with a
REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
* cancelled: Loadbalancer will retry if the gRPC status code in the response
header is set to cancelled
* deadline-exceeded: Loadbalancer will retry if the
gRPC status code in the response header is set to deadline-exceeded
* resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
header is set to resource-exhausted
* unavailable: Loadbalancer will retry if
the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout[];
}

function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform)(struct!.perTryTimeout),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices {
  /** The default BackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight. */
  readonly backendService: string;
  /** Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000 */
  readonly weight: number;
  /** header_action block */
  readonly headerAction?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction[];
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform)(struct!.headerAction),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[];
}

function computeUrlMapPathMatcherPathRuleRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cors_policy: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform)(struct!.corsPolicy),
    fault_injection_policy: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform)(struct!.faultInjectionPolicy),
    request_mirror_policy: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform)(struct!.requestMirrorPolicy),
    retry_policy: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform)(struct!.timeout),
    url_rewrite: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform)(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleUrlRedirect {
  /** The host that will be used in the redirect response instead of the one
that was supplied in the request. The value must be between 1 and 255
characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https.
If set to false, the URL scheme of the redirected request will remain the
same as that of the request. This must only be set for UrlMaps used in
TargetHttpProxys. Setting this true for TargetHttpsProxy is not
permitted. The default is set to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one
that was supplied in the request. pathRedirect cannot be supplied
together with prefixRedirect. Supply one alone or neither. If neither is
supplied, the path of the original request will be used for the redirect.
The value must be between 1 and 1024 characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the
HttpRouteRuleMatch, retaining the remaining portion of the URL before
redirecting the request. prefixRedirect cannot be supplied together with
pathRedirect. Supply one alone or neither. If neither is supplied, the
path of the original request will be used for the redirect. The value
must be between 1 and 1024 characters. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is
removed prior to redirecting the request. If set to false, the query
portion of the original URL is retained.
 This field is required to ensure an empty block is not set. The normal default value is false. */
  readonly stripQuery: boolean;
}

function computeUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export interface ComputeUrlMapPathMatcherPathRule {
  /** The list of path patterns to match. Each must start with / and the only place a
* is allowed is at the end following a /. The string fed to the path matcher
does not include any text after the first ? or #, and those chars are not
allowed here. */
  readonly paths: string[];
  /** The backend service or backend bucket to use if any of the given paths match. */
  readonly service?: string;
  /** route_action block */
  readonly routeAction?: ComputeUrlMapPathMatcherPathRuleRouteAction[];
  /** url_redirect block */
  readonly urlRedirect?: ComputeUrlMapPathMatcherPathRuleUrlRedirect[];
}

function computeUrlMapPathMatcherPathRuleToTerraform(struct?: ComputeUrlMapPathMatcherPathRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
    service: cdktf.stringToTerraform(struct!.service),
    route_action: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionToTerraform)(struct!.routeAction),
    url_redirect: cdktf.listMapper(computeUrlMapPathMatcherPathRuleUrlRedirectToTerraform)(struct!.urlRedirect),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /** The end of the range (exclusive). */
  readonly rangeEnd: number;
  /** The start of the range (inclusive). */
  readonly rangeStart: number;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches {
  /** The value should exactly match contents of exactMatch. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set. */
  readonly exactMatch?: string;
  /** The name of the HTTP header to match. For matching against the HTTP request's
authority, use a headerMatch with the header name ":authority". For matching a
request's method, use the headerName ":method". */
  readonly headerName: string;
  /** If set to false, the headerMatch is considered a match if the match criteria
above are met. If set to true, the headerMatch is considered a match if the
match criteria above are NOT met. Defaults to false. */
  readonly invertMatch?: boolean;
  /** The value of the header must start with the contents of prefixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set. */
  readonly prefixMatch?: string;
  /** A header with the contents of headerName must exist. The match takes place
whether or not the request's header has a value or not. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set. */
  readonly presentMatch?: boolean;
  /** The value of the header must match the regular expression specified in
regexMatch. For regular expression grammar, please see:
en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
specified in the HTTP request, use a headerMatch with headerName set to PORT and
a regular expression that satisfies the RFC2616 Host header's port specifier.
Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
rangeMatch must be set. */
  readonly regexMatch?: string;
  /** The value of the header must end with the contents of suffixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set. */
  readonly suffixMatch?: string;
  /** range_match block */
  readonly rangeMatch?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch[];
}

function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
    range_match: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform)(struct!.rangeMatch),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /** Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long. */
  readonly name: string;
  /** The value of the label must match the specified value. value can have a maximum
length of 1024 characters. */
  readonly value: string;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters {
  /** Specifies how individual filterLabel matches within the list of filterLabels
contribute towards the overall metadataFilter match. Supported values are:
  - MATCH_ANY: At least one of the filterLabels must have a matching label in the
provided metadata.
  - MATCH_ALL: All filterLabels must have matching labels in
the provided metadata. Possible values: ["MATCH_ALL", "MATCH_ANY"] */
  readonly filterMatchCriteria: string;
  /** filter_labels block */
  readonly filterLabels: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[];
}

function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter_match_criteria: cdktf.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform)(struct!.filterLabels),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  /** The queryParameterMatch matches if the value of the parameter exactly matches
the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
must be set. */
  readonly exactMatch?: string;
  /** The name of the query parameter to match. The query parameter must exist in the
request, in the absence of which the request match fails. */
  readonly name: string;
  /** Specifies that the queryParameterMatch matches if the request contains the query
parameter, irrespective of whether the parameter has a value or not. Only one of
presentMatch, exactMatch and regexMatch must be set. */
  readonly presentMatch?: boolean;
  /** The queryParameterMatch matches if the value of the parameter matches the
regular expression specified by regexMatch. For the regular expression grammar,
please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
exactMatch and regexMatch must be set. */
  readonly regexMatch?: string;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRules {
  /** For satisfying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified. */
  readonly fullPathMatch?: string;
  /** Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false. */
  readonly ignoreCase?: boolean;
  /** For satisfying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified. */
  readonly prefixMatch?: string;
  /** For satisfying the matchRule condition, the path of the request must satisfy the
regular expression specified in regexMatch after removing any query parameters
and anchor supplied with the original URL. For regular expression grammar please
see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
fullPathMatch or regexMatch must be specified. */
  readonly regexMatch?: string;
  /** header_matches block */
  readonly headerMatches?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[];
  /** metadata_filters block */
  readonly metadataFilters?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[];
  /** query_parameter_matches block */
  readonly queryParameterMatches?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[];
}

function computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    full_path_match: cdktf.stringToTerraform(struct!.fullPathMatch),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    header_matches: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform)(struct!.headerMatches),
    metadata_filters: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform)(struct!.metadataFilters),
    query_parameter_matches: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform)(struct!.queryParameterMatches),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regular expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled.
which indicates that the CORS policy is in effect. Defaults to false. */
  readonly disabled?: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}

function computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive. */
  readonly percentage?: number;
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform)(struct!.fixedDelay),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abort: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform)(struct!.abort),
    delay: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform)(struct!.delay),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /** The BackendService resource being mirrored to. */
  readonly backendService: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. */
  readonly numRetries: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

* 5xx: Loadbalancer will attempt a retry if the backend service responds with
  any 5xx response code, or if the backend service does not respond at all,
  example: disconnects, reset, read timeout, connection failure, and refused
  streams.
* gateway-error: Similar to 5xx, but only applies to response codes
  502, 503 or 504.
* connect-failure: Loadbalancer will retry on failures
  connecting to backend services, for example due to connection timeouts.
* retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  Currently the only retriable error supported is 409.
* refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
* cancelled: Loadbalancer will retry if the gRPC status code in the response
  header is set to cancelled
* deadline-exceeded: Loadbalancer will retry if the
  gRPC status code in the response header is set to deadline-exceeded
* resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  header is set to resource-exhausted
* unavailable: Loadbalancer will retry if the gRPC status code in
  the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform)(struct!.perTryTimeout),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
  /** The default BackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight. */
  readonly backendService: string;
  /** Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000 */
  readonly weight: number;
  /** header_action block */
  readonly headerAction?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform)(struct!.headerAction),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cors_policy: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform)(struct!.corsPolicy),
    fault_injection_policy: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform)(struct!.faultInjectionPolicy),
    request_mirror_policy: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform)(struct!.requestMirrorPolicy),
    retry_policy: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform)(struct!.timeout),
    url_rewrite: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform)(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesUrlRedirect {
  /** The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https. If set
to false, the URL scheme of the redirected request will remain the same as that
of the request. This must only be set for UrlMaps used in TargetHttpProxys.
Setting this true for TargetHttpsProxy is not permitted. Defaults to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was
supplied in the request. Only one of pathRedirect or prefixRedirect must be
specified. The value must be between 1 and 1024 characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained. Defaults to false. */
  readonly stripQuery?: boolean;
}

function computeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export interface ComputeUrlMapPathMatcherRouteRules {
  /** For routeRules within a given pathMatcher, priority determines the order
in which load balancer will interpret routeRules. RouteRules are evaluated
in order of priority, from the lowest to highest number. The priority of
a rule decreases as its number increases (1, 2, 3, N+1). The first rule
that matches the request is applied.

You cannot configure two or more routeRules with the same priority.
Priority for each rule must be set to a number between 0 and
2147483647 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules
in the future without affecting the rest of the rules. For example,
1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
future without any impact on existing rules. */
  readonly priority: number;
  /** The backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set. */
  readonly service?: string;
  /** header_action block */
  readonly headerAction?: ComputeUrlMapPathMatcherRouteRulesHeaderAction[];
  /** match_rules block */
  readonly matchRules?: ComputeUrlMapPathMatcherRouteRulesMatchRules[];
  /** route_action block */
  readonly routeAction?: ComputeUrlMapPathMatcherRouteRulesRouteAction[];
  /** url_redirect block */
  readonly urlRedirect?: ComputeUrlMapPathMatcherRouteRulesUrlRedirect[];
}

function computeUrlMapPathMatcherRouteRulesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    service: cdktf.stringToTerraform(struct!.service),
    header_action: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform)(struct!.headerAction),
    match_rules: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform)(struct!.matchRules),
    route_action: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionToTerraform)(struct!.routeAction),
    url_redirect: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform)(struct!.urlRedirect),
  }
}

export interface ComputeUrlMapPathMatcher {
  /** The backend service or backend bucket to use when none of the given paths match. */
  readonly defaultService?: string;
  /** An optional description of this resource. Provide this property when you create
the resource. */
  readonly description?: string;
  /** The name to which this PathMatcher is referred by the HostRule. */
  readonly name: string;
  /** default_route_action block */
  readonly defaultRouteAction?: ComputeUrlMapPathMatcherDefaultRouteAction[];
  /** default_url_redirect block */
  readonly defaultUrlRedirect?: ComputeUrlMapPathMatcherDefaultUrlRedirect[];
  /** header_action block */
  readonly headerAction?: ComputeUrlMapPathMatcherHeaderAction[];
  /** path_rule block */
  readonly pathRule?: ComputeUrlMapPathMatcherPathRule[];
  /** route_rules block */
  readonly routeRules?: ComputeUrlMapPathMatcherRouteRules[];
}

function computeUrlMapPathMatcherToTerraform(struct?: ComputeUrlMapPathMatcher): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_service: cdktf.stringToTerraform(struct!.defaultService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    default_route_action: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionToTerraform)(struct!.defaultRouteAction),
    default_url_redirect: cdktf.listMapper(computeUrlMapPathMatcherDefaultUrlRedirectToTerraform)(struct!.defaultUrlRedirect),
    header_action: cdktf.listMapper(computeUrlMapPathMatcherHeaderActionToTerraform)(struct!.headerAction),
    path_rule: cdktf.listMapper(computeUrlMapPathMatcherPathRuleToTerraform)(struct!.pathRule),
    route_rules: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesToTerraform)(struct!.routeRules),
  }
}

export interface ComputeUrlMapTest {
  /** Description of this test case. */
  readonly description?: string;
  /** Host portion of the URL. */
  readonly host: string;
  /** Path portion of the URL. */
  readonly path: string;
  /** The backend service or backend bucket link that should be matched by this test. */
  readonly service: string;
}

function computeUrlMapTestToTerraform(struct?: ComputeUrlMapTest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface ComputeUrlMapTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeUrlMapTimeoutsToTerraform(struct?: ComputeUrlMapTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeUrlMap extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeUrlMapConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_url_map',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultService = config.defaultService;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._defaultRouteAction = config.defaultRouteAction;
    this._defaultUrlRedirect = config.defaultUrlRedirect;
    this._headerAction = config.headerAction;
    this._hostRule = config.hostRule;
    this._pathMatcher = config.pathMatcher;
    this._test = config.test;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string;
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string ) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getNumberAttribute('map_id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction?: ComputeUrlMapDefaultRouteAction[];
  public get defaultRouteAction() {
    return this.interpolationForAttribute('default_route_action') as any;
  }
  public set defaultRouteAction(value: ComputeUrlMapDefaultRouteAction[] ) {
    this._defaultRouteAction = value;
  }
  public resetDefaultRouteAction() {
    this._defaultRouteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteActionInput() {
    return this._defaultRouteAction
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect?: ComputeUrlMapDefaultUrlRedirect[];
  public get defaultUrlRedirect() {
    return this.interpolationForAttribute('default_url_redirect') as any;
  }
  public set defaultUrlRedirect(value: ComputeUrlMapDefaultUrlRedirect[] ) {
    this._defaultUrlRedirect = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction?: ComputeUrlMapHeaderAction[];
  public get headerAction() {
    return this.interpolationForAttribute('header_action') as any;
  }
  public set headerAction(value: ComputeUrlMapHeaderAction[] ) {
    this._headerAction = value;
  }
  public resetHeaderAction() {
    this._headerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction
  }

  // host_rule - computed: false, optional: true, required: false
  private _hostRule?: ComputeUrlMapHostRule[];
  public get hostRule() {
    return this.interpolationForAttribute('host_rule') as any;
  }
  public set hostRule(value: ComputeUrlMapHostRule[] ) {
    this._hostRule = value;
  }
  public resetHostRule() {
    this._hostRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRuleInput() {
    return this._hostRule
  }

  // path_matcher - computed: false, optional: true, required: false
  private _pathMatcher?: ComputeUrlMapPathMatcher[];
  public get pathMatcher() {
    return this.interpolationForAttribute('path_matcher') as any;
  }
  public set pathMatcher(value: ComputeUrlMapPathMatcher[] ) {
    this._pathMatcher = value;
  }
  public resetPathMatcher() {
    this._pathMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher
  }

  // test - computed: false, optional: true, required: false
  private _test?: ComputeUrlMapTest[];
  public get test() {
    return this.interpolationForAttribute('test') as any;
  }
  public set test(value: ComputeUrlMapTest[] ) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeUrlMapTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeUrlMapTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_service: cdktf.stringToTerraform(this._defaultService),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      default_route_action: cdktf.listMapper(computeUrlMapDefaultRouteActionToTerraform)(this._defaultRouteAction),
      default_url_redirect: cdktf.listMapper(computeUrlMapDefaultUrlRedirectToTerraform)(this._defaultUrlRedirect),
      header_action: cdktf.listMapper(computeUrlMapHeaderActionToTerraform)(this._headerAction),
      host_rule: cdktf.listMapper(computeUrlMapHostRuleToTerraform)(this._hostRule),
      path_matcher: cdktf.listMapper(computeUrlMapPathMatcherToTerraform)(this._pathMatcher),
      test: cdktf.listMapper(computeUrlMapTestToTerraform)(this._test),
      timeouts: computeUrlMapTimeoutsToTerraform(this._timeouts),
    };
  }
}
