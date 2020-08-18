// https://www.terraform.io/docs/providers/google/r/compute_url_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeUrlMapConfig extends TerraformMetaArguments {
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
  /** Specifies the regualar expression patterns that match allowed origins. For regular expression grammar
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
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay[];
}
export interface ComputeUrlMapDefaultRouteActionRequestMirrorPolicy {
  /** The full or partial URL to the BackendService resource being mirrored to. */
  readonly backendService: string;
}
export interface ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface ComputeUrlMapDefaultRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1. */
  readonly numRetries?: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
or if the backend service does not respond at all, example: disconnects, reset, read timeout,
connection failure, and refused streams.
gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
connect-failure: Loadbalancer will retry on failures connecting to backend services,
for example due to connection timeouts.
retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
This reset type indicates that it is safe to retry.
cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout[];
}
export interface ComputeUrlMapDefaultRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
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
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
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
export interface ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For regular expression grammar
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
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay[];
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy {
  /** The full or partial URL to the BackendService resource being mirrored to. */
  readonly backendService: string;
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1. */
  readonly numRetries?: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
or if the backend service does not respond at all, example: disconnects, reset, read timeout,
connection failure, and refused streams.
gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
connect-failure: Loadbalancer will retry on failures connecting to backend services,
for example due to connection timeouts.
retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
This reset type indicates that it is safe to retry.
cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout[];
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
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
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
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
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For
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
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive. */
  readonly httpStatus: number;
  /** The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive. */
  readonly percentage: number;
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
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive. */
  readonly percentage: number;
  /** fixed_delay block */
  readonly fixedDelay: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay[];
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /** The BackendService resource being mirrored to. */
  readonly backendService: string;
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
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. */
  readonly numRetries?: number;
  /** Specifies one or more conditions when this retry rule applies. Valid values are:
- 5xx: Loadbalancer will attempt a retry if the backend service responds with
any 5xx response code, or if the backend service does not respond at all,
example: disconnects, reset, read timeout, connection failure, and refused
streams.
- gateway-error: Similar to 5xx, but only applies to response codes
502, 503 or 504.
- connect-failure: Loadbalancer will retry on failures
connecting to backend services, for example due to connection timeouts.
- retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
- refused-stream: Loadbalancer will retry if the backend service resets the stream with a
REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
- cancelled: Loadbalancer will retry if the gRPC status code in the response
header is set to cancelled
- deadline-exceeded: Loadbalancer will retry if the
gRPC status code in the response header is set to deadline-exceeded
- resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
header is set to resource-exhausted
- unavailable: Loadbalancer will retry if
the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout[];
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
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /** The end of the range (exclusive). */
  readonly rangeEnd: number;
  /** The start of the range (inclusive). */
  readonly rangeStart: number;
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
  /** The value of the header must match the regualar expression specified in
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
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /** Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long. */
  readonly name: string;
  /** The value of the label must match the specified value. value can have a maximum
length of 1024 characters. */
  readonly value: string;
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
export interface ComputeUrlMapPathMatcherRouteRulesMatchRules {
  /** For satifying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified. */
  readonly fullPathMatch?: string;
  /** Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false. */
  readonly ignoreCase?: boolean;
  /** For satifying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified. */
  readonly prefixMatch?: string;
  /** For satifying the matchRule condition, the path of the request must satisfy the
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
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For
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
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive. */
  readonly percentage?: number;
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
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay[];
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /** The BackendService resource being mirrored to. */
  readonly backendService: string;
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
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. */
  readonly numRetries: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:
- 5xx: Loadbalancer will attempt a retry if the backend service responds with
  any 5xx response code, or if the backend service does not respond at all,
  example: disconnects, reset, read timeout, connection failure, and refused
  streams.
- gateway-error: Similar to 5xx, but only applies to response codes
  502, 503 or 504.
- connect-failure: Loadbalancer will retry on failures
  connecting to backend services, for example due to connection timeouts.
- retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  Currently the only retriable error supported is 409.
- refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
- cancelled: Loadbalancer will retry if the gRPC status code in the response
  header is set to cancelled
- deadline-exceeded: Loadbalancer will retry if the
  gRPC status code in the response header is set to deadline-exceeded
- resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  header is set to resource-exhausted
- unavailable: Loadbalancer will retry if the gRPC status code in
  the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout[];
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
export interface ComputeUrlMapTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeUrlMap extends TerraformResource {

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

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string;
  public get defaultService() {
    return this._defaultService;
  }
  public set defaultService(value: string | undefined) {
    this._defaultService = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // map_id - computed: true, optional: false, required: true
  public get mapId() {
    return this.getNumberAttribute('map_id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction?: ComputeUrlMapDefaultRouteAction[];
  public get defaultRouteAction() {
    return this._defaultRouteAction;
  }
  public set defaultRouteAction(value: ComputeUrlMapDefaultRouteAction[] | undefined) {
    this._defaultRouteAction = value;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect?: ComputeUrlMapDefaultUrlRedirect[];
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public set defaultUrlRedirect(value: ComputeUrlMapDefaultUrlRedirect[] | undefined) {
    this._defaultUrlRedirect = value;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction?: ComputeUrlMapHeaderAction[];
  public get headerAction() {
    return this._headerAction;
  }
  public set headerAction(value: ComputeUrlMapHeaderAction[] | undefined) {
    this._headerAction = value;
  }

  // host_rule - computed: false, optional: true, required: false
  private _hostRule?: ComputeUrlMapHostRule[];
  public get hostRule() {
    return this._hostRule;
  }
  public set hostRule(value: ComputeUrlMapHostRule[] | undefined) {
    this._hostRule = value;
  }

  // path_matcher - computed: false, optional: true, required: false
  private _pathMatcher?: ComputeUrlMapPathMatcher[];
  public get pathMatcher() {
    return this._pathMatcher;
  }
  public set pathMatcher(value: ComputeUrlMapPathMatcher[] | undefined) {
    this._pathMatcher = value;
  }

  // test - computed: false, optional: true, required: false
  private _test?: ComputeUrlMapTest[];
  public get test() {
    return this._test;
  }
  public set test(value: ComputeUrlMapTest[] | undefined) {
    this._test = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeUrlMapTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeUrlMapTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_service: this._defaultService,
      description: this._description,
      name: this._name,
      project: this._project,
      default_route_action: this._defaultRouteAction,
      default_url_redirect: this._defaultUrlRedirect,
      header_action: this._headerAction,
      host_rule: this._hostRule,
      path_matcher: this._pathMatcher,
      test: this._test,
      timeouts: this._timeouts,
    };
  }
}
