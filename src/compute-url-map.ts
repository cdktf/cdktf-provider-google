// https://www.terraform.io/docs/providers/google/r/compute_url_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeUrlMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The backend service or backend bucket to use when none of the given rules match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#default_service ComputeUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource. Provide this property when you create
the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#project ComputeUrlMap#project}
  */
  readonly project?: string;
  /**
  * default_route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#default_route_action ComputeUrlMap#default_route_action}
  */
  readonly defaultRouteAction?: ComputeUrlMapDefaultRouteAction;
  /**
  * default_url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#default_url_redirect ComputeUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: ComputeUrlMapDefaultUrlRedirect;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapHeaderAction;
  /**
  * host_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_rule ComputeUrlMap#host_rule}
  */
  readonly hostRule?: ComputeUrlMapHostRule[];
  /**
  * path_matcher block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_matcher ComputeUrlMap#path_matcher}
  */
  readonly pathMatcher?: ComputeUrlMapPathMatcher[];
  /**
  * test block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#test ComputeUrlMap#test}
  */
  readonly test?: ComputeUrlMapTest[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#timeouts ComputeUrlMap#timeouts}
  */
  readonly timeouts?: ComputeUrlMapTimeouts;
}
export interface ComputeUrlMapDefaultRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#disabled ComputeUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

function computeUrlMapDefaultRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference | ComputeUrlMapDefaultRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials') as any;
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[] | undefined; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[] | undefined) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[] | undefined; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[] | undefined) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[] | undefined; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[] | undefined) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[] | undefined; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[] | undefined) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable | undefined; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable | undefined) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[] | undefined; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[] | undefined) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number | undefined; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number | undefined) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number | undefined; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number | undefined) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string | undefined; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined; 
  private __fixedDelayOutput = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this as any, "fixed_delay", true);
  public get fixedDelay() {
    return this.__fixedDelayOutput;
  }
  public putFixedDelay(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    this._fixedDelay = value;
  }
  public resetFixedDelay() {
    this._fixedDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicy {
  /**
  * abort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay;
}

function computeUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // abort - computed: false, optional: true, required: false
  private _abort?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort | undefined; 
  private __abortOutput = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference(this as any, "abort", true);
  public get abort() {
    return this.__abortOutput;
  }
  public putAbort(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort | undefined) {
    this._abort = value;
  }
  public resetAbort() {
    this._abort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay | undefined; 
  private __delayOutput = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference(this as any, "delay", true);
  public get delay() {
    return this.__delayOutput;
  }
  public putDelay(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }
}
export interface ComputeUrlMapDefaultRouteActionRequestMirrorPolicy {
  /**
  * The full or partial URL to the BackendService resource being mirrored to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

function computeUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export class ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService
  }
}
export interface ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

function computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string | undefined; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapDefaultRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specfies one or more conditions when this retry rule applies. Valid values are:

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
* unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout;
}

function computeUrlMapDefaultRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference | ComputeUrlMapDefaultRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}

export class ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number | undefined; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number | undefined) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[] | undefined; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[] | undefined) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout | undefined; 
  private __perTryTimeoutOutput = new ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference(this as any, "per_try_timeout", true);
  public get perTryTimeout() {
    return this.__perTryTimeoutOutput;
  }
  public putPerTryTimeout(value: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout | undefined) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout
  }
}
export interface ComputeUrlMapDefaultRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

function computeUrlMapDefaultRouteActionTimeoutToTerraform(struct?: ComputeUrlMapDefaultRouteActionTimeoutOutputReference | ComputeUrlMapDefaultRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapDefaultRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string | undefined; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapDefaultRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.

The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.

The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapDefaultRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference | ComputeUrlMapDefaultRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export class ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string | undefined; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string | undefined) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string | undefined; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string | undefined) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite
  }
}
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServices {
  /**
  * The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService?: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .

The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.

The value must be between 0 and 1000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weight ComputeUrlMap#weight}
  */
  readonly weight?: number;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction;
}

function computeUrlMapDefaultRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}

export interface ComputeUrlMapDefaultRouteAction {
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapDefaultRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapDefaultRouteActionRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapDefaultRouteActionTimeout;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapDefaultRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapDefaultRouteActionWeightedBackendServices[];
}

function computeUrlMapDefaultRouteActionToTerraform(struct?: ComputeUrlMapDefaultRouteActionOutputReference | ComputeUrlMapDefaultRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: computeUrlMapDefaultRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: computeUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapDefaultRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapDefaultRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapDefaultRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export class ComputeUrlMapDefaultRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy?: ComputeUrlMapDefaultRouteActionCorsPolicy | undefined; 
  private __corsPolicyOutput = new ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference(this as any, "cors_policy", true);
  public get corsPolicy() {
    return this.__corsPolicyOutput;
  }
  public putCorsPolicy(value: ComputeUrlMapDefaultRouteActionCorsPolicy | undefined) {
    this._corsPolicy = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy | undefined; 
  private __faultInjectionPolicyOutput = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference(this as any, "fault_injection_policy", true);
  public get faultInjectionPolicy() {
    return this.__faultInjectionPolicyOutput;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy | undefined) {
    this._faultInjectionPolicy = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy | undefined; 
  private __requestMirrorPolicyOutput = new ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference(this as any, "request_mirror_policy", true);
  public get requestMirrorPolicy() {
    return this.__requestMirrorPolicyOutput;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy | undefined) {
    this._requestMirrorPolicy = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: ComputeUrlMapDefaultRouteActionRetryPolicy | undefined; 
  private __retryPolicyOutput = new ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: ComputeUrlMapDefaultRouteActionRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: ComputeUrlMapDefaultRouteActionTimeout | undefined; 
  private __timeoutOutput = new ComputeUrlMapDefaultRouteActionTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: ComputeUrlMapDefaultRouteActionTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite?: ComputeUrlMapDefaultRouteActionUrlRewrite | undefined; 
  private __urlRewriteOutput = new ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference(this as any, "url_rewrite", true);
  public get urlRewrite() {
    return this.__urlRewriteOutput;
  }
  public putUrlRewrite(value: ComputeUrlMapDefaultRouteActionUrlRewrite | undefined) {
    this._urlRewrite = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices?: ComputeUrlMapDefaultRouteActionWeightedBackendServices[] | undefined; 
  public get weightedBackendServices() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_backend_services') as any;
  }
  public set weightedBackendServices(value: ComputeUrlMapDefaultRouteActionWeightedBackendServices[] | undefined) {
    this._weightedBackendServices = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices
  }
}
export interface ComputeUrlMapDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained. The default is set to false.
 This field is required to ensure an empty block is not set. The normal default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

function computeUrlMapDefaultUrlRedirectToTerraform(struct?: ComputeUrlMapDefaultUrlRedirectOutputReference | ComputeUrlMapDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeUrlMapDefaultUrlRedirectOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string | undefined; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string | undefined) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable | undefined; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect') as any;
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable | undefined) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string | undefined; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string | undefined) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string | undefined; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string | undefined) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string | undefined; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string | undefined) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query') as any;
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery
  }
}
export interface ComputeUrlMapHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapHeaderActionToTerraform(struct?: ComputeUrlMapHeaderActionOutputReference | ComputeUrlMapHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapHostRule {
  /**
  * An optional description of this resource. Provide this property when you create
the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The list of host patterns to match. They must be valid hostnames, except * will
match any string of ([a-z0-9-.]*). In that case, * must be the first character
and must be followed in the pattern by either - or ..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#hosts ComputeUrlMap#hosts}
  */
  readonly hosts: string[];
  /**
  * The name of the PathMatcher to use to match the path portion of the URL if the
hostRule matches the URL's host portion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_matcher ComputeUrlMap#path_matcher}
  */
  readonly pathMatcher: string;
}

function computeUrlMapHostRuleToTerraform(struct?: ComputeUrlMapHostRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
    path_matcher: cdktf.stringToTerraform(struct!.pathMatcher),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#disabled ComputeUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

function computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials') as any;
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[] | undefined; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[] | undefined) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[] | undefined; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[] | undefined) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[] | undefined; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[] | undefined) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[] | undefined; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[] | undefined) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable | undefined; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable | undefined) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[] | undefined; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[] | undefined) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number | undefined; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number | undefined) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number | undefined; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number | undefined) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string | undefined; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined; 
  private __fixedDelayOutput = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this as any, "fixed_delay", true);
  public get fixedDelay() {
    return this.__fixedDelayOutput;
  }
  public putFixedDelay(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    this._fixedDelay = value;
  }
  public resetFixedDelay() {
    this._fixedDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /**
  * abort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay;
}

function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // abort - computed: false, optional: true, required: false
  private _abort?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort | undefined; 
  private __abortOutput = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference(this as any, "abort", true);
  public get abort() {
    return this.__abortOutput;
  }
  public putAbort(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort | undefined) {
    this._abort = value;
  }
  public resetAbort() {
    this._abort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay | undefined; 
  private __delayOutput = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference(this as any, "delay", true);
  public get delay() {
    return this.__delayOutput;
  }
  public putDelay(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy {
  /**
  * The full or partial URL to the BackendService resource being mirrored to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

function computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string | undefined; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specfies one or more conditions when this retry rule applies. Valid values are:

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
* unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout;
}

function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number | undefined; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number | undefined) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[] | undefined; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[] | undefined) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout | undefined; 
  private __perTryTimeoutOutput = new ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference(this as any, "per_try_timeout", true);
  public get perTryTimeout() {
    return this.__perTryTimeoutOutput;
  }
  public putPerTryTimeout(value: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout | undefined) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string | undefined; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.

The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.

The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string | undefined; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string | undefined) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string | undefined; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string | undefined) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response prior to sending the
response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices {
  /**
  * The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService?: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .

The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.

The value must be between 0 and 1000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weight ComputeUrlMap#weight}
  */
  readonly weight?: number;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction;
}

function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}

export interface ComputeUrlMapPathMatcherDefaultRouteAction {
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapPathMatcherDefaultRouteActionTimeout;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[];
}

function computeUrlMapPathMatcherDefaultRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionOutputReference | ComputeUrlMapPathMatcherDefaultRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapPathMatcherDefaultRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy | undefined; 
  private __corsPolicyOutput = new ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference(this as any, "cors_policy", true);
  public get corsPolicy() {
    return this.__corsPolicyOutput;
  }
  public putCorsPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy | undefined) {
    this._corsPolicy = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy | undefined; 
  private __faultInjectionPolicyOutput = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference(this as any, "fault_injection_policy", true);
  public get faultInjectionPolicy() {
    return this.__faultInjectionPolicyOutput;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy | undefined) {
    this._faultInjectionPolicy = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy | undefined; 
  private __requestMirrorPolicyOutput = new ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference(this as any, "request_mirror_policy", true);
  public get requestMirrorPolicy() {
    return this.__requestMirrorPolicyOutput;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy | undefined) {
    this._requestMirrorPolicy = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy | undefined; 
  private __retryPolicyOutput = new ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: ComputeUrlMapPathMatcherDefaultRouteActionTimeout | undefined; 
  private __timeoutOutput = new ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: ComputeUrlMapPathMatcherDefaultRouteActionTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite | undefined; 
  private __urlRewriteOutput = new ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference(this as any, "url_rewrite", true);
  public get urlRewrite() {
    return this.__urlRewriteOutput;
  }
  public putUrlRewrite(value: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite | undefined) {
    this._urlRewrite = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[] | undefined; 
  public get weightedBackendServices() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_backend_services') as any;
  }
  public set weightedBackendServices(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[] | undefined) {
    this._weightedBackendServices = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices
  }
}
export interface ComputeUrlMapPathMatcherDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained.
 This field is required to ensure an empty block is not set. The normal default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference | ComputeUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string | undefined; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string | undefined) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable | undefined; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect') as any;
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable | undefined) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string | undefined; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string | undefined) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string | undefined; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string | undefined) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string | undefined; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string | undefined) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query') as any;
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery
  }
}
export interface ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionOutputReference | ComputeUrlMapPathMatcherHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapPathMatcherHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#disabled ComputeUrlMap#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

function computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials') as any;
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[] | undefined; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[] | undefined) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[] | undefined; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[] | undefined) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[] | undefined; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[] | undefined) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[] | undefined; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[] | undefined) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[] | undefined; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[] | undefined) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number | undefined; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number | undefined) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage: number;
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_status - computed: false, optional: false, required: true
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage: number;
  /**
  * fixed_delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }

  // fixed_delay - computed: false, optional: false, required: true
  private _fixedDelay?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay; 
  private __fixedDelayOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this as any, "fixed_delay", true);
  public get fixedDelay() {
    return this.__fixedDelayOutput;
  }
  public putFixedDelay(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /**
  * abort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // abort - computed: false, optional: true, required: false
  private _abort?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined; 
  private __abortOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference(this as any, "abort", true);
  public get abort() {
    return this.__abortOutput;
  }
  public putAbort(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined) {
    this._abort = value;
  }
  public resetAbort() {
    this._abort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined; 
  private __delayOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference(this as any, "delay", true);
  public get delay() {
    return this.__delayOutput;
  }
  public putDelay(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /**
  * The BackendService resource being mirrored to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies one or more conditions when this retry rule applies. Valid values are:

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
the gRPC status code in the response header is set to unavailable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout;
}

function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number | undefined; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number | undefined) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[] | undefined; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[] | undefined) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined; 
  private __perTryTimeoutOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference(this as any, "per_try_timeout", true);
  public get perTryTimeout() {
    return this.__perTryTimeoutOutput;
  }
  public putPerTryTimeout(value: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string | undefined; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string | undefined) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string | undefined; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string | undefined) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices {
  /**
  * The default BackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weight ComputeUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction;
}

function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}

export interface ComputeUrlMapPathMatcherPathRuleRouteAction {
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[];
}

function computeUrlMapPathMatcherPathRuleRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionOutputReference | ComputeUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined; 
  private __corsPolicyOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference(this as any, "cors_policy", true);
  public get corsPolicy() {
    return this.__corsPolicyOutput;
  }
  public putCorsPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined) {
    this._corsPolicy = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined; 
  private __faultInjectionPolicyOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference(this as any, "fault_injection_policy", true);
  public get faultInjectionPolicy() {
    return this.__faultInjectionPolicyOutput;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined) {
    this._faultInjectionPolicy = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined; 
  private __requestMirrorPolicyOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference(this as any, "request_mirror_policy", true);
  public get requestMirrorPolicy() {
    return this.__requestMirrorPolicyOutput;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined) {
    this._requestMirrorPolicy = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined; 
  private __retryPolicyOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout | undefined; 
  private __timeoutOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined; 
  private __urlRewriteOutput = new ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference(this as any, "url_rewrite", true);
  public get urlRewrite() {
    return this.__urlRewriteOutput;
  }
  public putUrlRewrite(value: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined) {
    this._urlRewrite = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | undefined; 
  public get weightedBackendServices() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_backend_services') as any;
  }
  public set weightedBackendServices(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | undefined) {
    this._weightedBackendServices = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices
  }
}
export interface ComputeUrlMapPathMatcherPathRuleUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one
that was supplied in the request. The value must be between 1 and 255
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
If set to false, the URL scheme of the redirected request will remain the
same as that of the request. This must only be set for UrlMaps used in
TargetHttpProxys. Setting this true for TargetHttpsProxy is not
permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one
that was supplied in the request. pathRedirect cannot be supplied
together with prefixRedirect. Supply one alone or neither. If neither is
supplied, the path of the original request will be used for the redirect.
The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the
HttpRouteRuleMatch, retaining the remaining portion of the URL before
redirecting the request. prefixRedirect cannot be supplied together with
pathRedirect. Supply one alone or neither. If neither is supplied, the
path of the original request will be used for the redirect. The value
must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is
removed prior to redirecting the request. If set to false, the query
portion of the original URL is retained.
 This field is required to ensure an empty block is not set. The normal default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleUrlRedirectOutputReference | ComputeUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeUrlMapPathMatcherPathRuleUrlRedirectOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string | undefined; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string | undefined) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable | undefined; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect') as any;
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable | undefined) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string | undefined; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string | undefined) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string | undefined; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string | undefined) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string | undefined; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string | undefined) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query') as any;
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery
  }
}
export interface ComputeUrlMapPathMatcherPathRule {
  /**
  * The list of path patterns to match. Each must start with / and the only place a
\* is allowed is at the end following a /. The string fed to the path matcher
does not include any text after the first ? or #, and those chars are not
allowed here.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#paths ComputeUrlMap#paths}
  */
  readonly paths: string[];
  /**
  * The backend service or backend bucket to use if any of the given paths match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#service ComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#route_action ComputeUrlMap#route_action}
  */
  readonly routeAction?: ComputeUrlMapPathMatcherPathRuleRouteAction;
  /**
  * url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#url_redirect ComputeUrlMap#url_redirect}
  */
  readonly urlRedirect?: ComputeUrlMapPathMatcherPathRuleUrlRedirect;
}

function computeUrlMapPathMatcherPathRuleToTerraform(struct?: ComputeUrlMapPathMatcherPathRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
    service: cdktf.stringToTerraform(struct!.service),
    route_action: computeUrlMapPathMatcherPathRuleRouteActionToTerraform(struct!.routeAction),
    url_redirect: computeUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct!.urlRedirect),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference | ComputeUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /**
  * The end of the range (exclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#range_end ComputeUrlMap#range_end}
  */
  readonly rangeEnd: number;
  /**
  * The start of the range (inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#range_start ComputeUrlMap#range_start}
  */
  readonly rangeStart: number;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference | ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches {
  /**
  * The value should exactly match contents of exactMatch. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#exact_match ComputeUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the HTTP header to match. For matching against the HTTP request's
authority, use a headerMatch with the header name ":authority". For matching a
request's method, use the headerName ":method".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * If set to false, the headerMatch is considered a match if the match criteria
above are met. If set to true, the headerMatch is considered a match if the
match criteria above are NOT met. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#invert_match ComputeUrlMap#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must start with the contents of prefixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#prefix_match ComputeUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * A header with the contents of headerName must exist. The match takes place
whether or not the request's header has a value or not. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#present_match ComputeUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must match the regular expression specified in
regexMatch. For regular expression grammar, please see:
en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
specified in the HTTP request, use a headerMatch with headerName set to PORT and
a regular expression that satisfies the RFC2616 Host header's port specifier.
Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
rangeMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#regex_match ComputeUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * The value of the header must end with the contents of suffixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#suffix_match ComputeUrlMap#suffix_match}
  */
  readonly suffixMatch?: string;
  /**
  * range_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#range_match ComputeUrlMap#range_match}
  */
  readonly rangeMatch?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
    range_match: computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct!.rangeMatch),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /**
  * Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * The value of the label must match the specified value. value can have a maximum
length of 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#value ComputeUrlMap#value}
  */
  readonly value: string;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters {
  /**
  * Specifies how individual filterLabel matches within the list of filterLabels
contribute towards the overall metadataFilter match. Supported values are:
  - MATCH_ANY: At least one of the filterLabels must have a matching label in the
provided metadata.
  - MATCH_ALL: All filterLabels must have matching labels in
the provided metadata. Possible values: ["MATCH_ALL", "MATCH_ANY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#filter_match_criteria ComputeUrlMap#filter_match_criteria}
  */
  readonly filterMatchCriteria: string;
  /**
  * filter_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#filter_labels ComputeUrlMap#filter_labels}
  */
  readonly filterLabels: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[];
}

function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_match_criteria: cdktf.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform)(struct!.filterLabels),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  /**
  * The queryParameterMatch matches if the value of the parameter exactly matches
the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#exact_match ComputeUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the query parameter to match. The query parameter must exist in the
request, in the absence of which the request match fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * Specifies that the queryParameterMatch matches if the request contains the query
parameter, irrespective of whether the parameter has a value or not. Only one of
presentMatch, exactMatch and regexMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#present_match ComputeUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The queryParameterMatch matches if the value of the parameter matches the
regular expression specified by regexMatch. For the regular expression grammar,
please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
exactMatch and regexMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#regex_match ComputeUrlMap#regex_match}
  */
  readonly regexMatch?: string;
}

function computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesMatchRules {
  /**
  * For satisfying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#full_path_match ComputeUrlMap#full_path_match}
  */
  readonly fullPathMatch?: string;
  /**
  * Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#ignore_case ComputeUrlMap#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * For satisfying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#prefix_match ComputeUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * For satisfying the matchRule condition, the path of the request must satisfy the
regular expression specified in regexMatch after removing any query parameters
and anchor supplied with the original URL. For regular expression grammar please
see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
fullPathMatch or regexMatch must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#regex_match ComputeUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * header_matches block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_matches ComputeUrlMap#header_matches}
  */
  readonly headerMatches?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[];
  /**
  * metadata_filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#metadata_filters ComputeUrlMap#metadata_filters}
  */
  readonly metadataFilters?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[];
  /**
  * query_parameter_matches block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#query_parameter_matches ComputeUrlMap#query_parameter_matches}
  */
  readonly queryParameterMatches?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[];
}

function computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  /**
  * In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
which indicates that the CORS policy is in effect. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#disabled ComputeUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

function computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials') as any;
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[] | undefined; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[] | undefined) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[] | undefined; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[] | undefined) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[] | undefined; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[] | undefined) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[] | undefined; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[] | undefined) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable | undefined; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable | undefined) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[] | undefined; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[] | undefined) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number | undefined; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number | undefined) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number | undefined; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number | undefined) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay;
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined; 
  private __fixedDelayOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this as any, "fixed_delay", true);
  public get fixedDelay() {
    return this.__fixedDelayOutput;
  }
  public putFixedDelay(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    this._fixedDelay = value;
  }
  public resetFixedDelay() {
    this._fixedDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /**
  * abort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay;
}

function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // abort - computed: false, optional: true, required: false
  private _abort?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined; 
  private __abortOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference(this as any, "abort", true);
  public get abort() {
    return this.__abortOutput;
  }
  public putAbort(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined) {
    this._abort = value;
  }
  public resetAbort() {
    this._abort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined; 
  private __delayOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference(this as any, "delay", true);
  public get delay() {
    return this.__delayOutput;
  }
  public putDelay(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /**
  * The BackendService resource being mirrored to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries: number;
  /**
  * Specfies one or more conditions when this retry rule applies. Valid values are:

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
  the response header is set to unavailable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout;
}

function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.retryConditions),
    per_try_timeout: computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // num_retries - computed: false, optional: false, required: true
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[] | undefined; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[] | undefined) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined; 
  private __perTryTimeoutOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference(this as any, "per_try_timeout", true);
  public get perTryTimeout() {
    return this.__perTryTimeoutOutput;
  }
  public putPerTryTimeout(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

function computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string | undefined; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string | undefined) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string | undefined; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string | undefined) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform)(struct!.responseHeadersToAdd),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[] | undefined; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[] | undefined) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[] | undefined; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[] | undefined) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined; 
  public get requestHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers_to_add') as any;
  }
  public set requestHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | undefined) {
    this._requestHeadersToAdd = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined; 
  public get responseHeadersToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_headers_to_add') as any;
  }
  public set responseHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | undefined) {
    this._responseHeadersToAdd = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
  /**
  * The default BackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weight ComputeUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}

function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}

export interface ComputeUrlMapPathMatcherRouteRulesRouteAction {
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[];
}

function computeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform)(struct!.weightedBackendServices),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined; 
  private __corsPolicyOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference(this as any, "cors_policy", true);
  public get corsPolicy() {
    return this.__corsPolicyOutput;
  }
  public putCorsPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined) {
    this._corsPolicy = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined; 
  private __faultInjectionPolicyOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference(this as any, "fault_injection_policy", true);
  public get faultInjectionPolicy() {
    return this.__faultInjectionPolicyOutput;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined) {
    this._faultInjectionPolicy = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined; 
  private __requestMirrorPolicyOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference(this as any, "request_mirror_policy", true);
  public get requestMirrorPolicy() {
    return this.__requestMirrorPolicyOutput;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined) {
    this._requestMirrorPolicy = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined; 
  private __retryPolicyOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined; 
  private __timeoutOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined; 
  private __urlRewriteOutput = new ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference(this as any, "url_rewrite", true);
  public get urlRewrite() {
    return this.__urlRewriteOutput;
  }
  public putUrlRewrite(value: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined) {
    this._urlRewrite = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | undefined; 
  public get weightedBackendServices() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_backend_services') as any;
  }
  public set weightedBackendServices(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | undefined) {
    this._weightedBackendServices = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set
to false, the URL scheme of the redirected request will remain the same as that
of the request. This must only be set for UrlMaps used in TargetHttpProxys.
Setting this true for TargetHttpsProxy is not permitted. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
supplied in the request. Only one of pathRedirect or prefixRedirect must be
specified. The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery?: boolean | cdktf.IResolvable;
}

function computeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | ComputeUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string | undefined; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string | undefined) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable | undefined; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect') as any;
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable | undefined) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string | undefined; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string | undefined) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string | undefined; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string | undefined) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string | undefined; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string | undefined) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode
  }

  // strip_query - computed: false, optional: true, required: false
  private _stripQuery?: boolean | cdktf.IResolvable | undefined; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query') as any;
  }
  public set stripQuery(value: boolean | cdktf.IResolvable | undefined) {
    this._stripQuery = value;
  }
  public resetStripQuery() {
    this._stripQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery
  }
}
export interface ComputeUrlMapPathMatcherRouteRules {
  /**
  * For routeRules within a given pathMatcher, priority determines the order
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
future without any impact on existing rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#priority ComputeUrlMap#priority}
  */
  readonly priority: number;
  /**
  * The backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#service ComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherRouteRulesHeaderAction;
  /**
  * match_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#match_rules ComputeUrlMap#match_rules}
  */
  readonly matchRules?: ComputeUrlMapPathMatcherRouteRulesMatchRules[];
  /**
  * route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#route_action ComputeUrlMap#route_action}
  */
  readonly routeAction?: ComputeUrlMapPathMatcherRouteRulesRouteAction;
  /**
  * url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#url_redirect ComputeUrlMap#url_redirect}
  */
  readonly urlRedirect?: ComputeUrlMapPathMatcherRouteRulesUrlRedirect;
}

function computeUrlMapPathMatcherRouteRulesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    service: cdktf.stringToTerraform(struct!.service),
    header_action: computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct!.headerAction),
    match_rules: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform)(struct!.matchRules),
    route_action: computeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct!.routeAction),
    url_redirect: computeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct!.urlRedirect),
  }
}

export interface ComputeUrlMapPathMatcher {
  /**
  * The backend service or backend bucket to use when none of the given paths match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#default_service ComputeUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource. Provide this property when you create
the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The name to which this PathMatcher is referred by the HostRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * default_route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#default_route_action ComputeUrlMap#default_route_action}
  */
  readonly defaultRouteAction?: ComputeUrlMapPathMatcherDefaultRouteAction;
  /**
  * default_url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#default_url_redirect ComputeUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: ComputeUrlMapPathMatcherDefaultUrlRedirect;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherHeaderAction;
  /**
  * path_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path_rule ComputeUrlMap#path_rule}
  */
  readonly pathRule?: ComputeUrlMapPathMatcherPathRule[];
  /**
  * route_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#route_rules ComputeUrlMap#route_rules}
  */
  readonly routeRules?: ComputeUrlMapPathMatcherRouteRules[];
}

function computeUrlMapPathMatcherToTerraform(struct?: ComputeUrlMapPathMatcher): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_service: cdktf.stringToTerraform(struct!.defaultService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    default_route_action: computeUrlMapPathMatcherDefaultRouteActionToTerraform(struct!.defaultRouteAction),
    default_url_redirect: computeUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct!.defaultUrlRedirect),
    header_action: computeUrlMapPathMatcherHeaderActionToTerraform(struct!.headerAction),
    path_rule: cdktf.listMapper(computeUrlMapPathMatcherPathRuleToTerraform)(struct!.pathRule),
    route_rules: cdktf.listMapper(computeUrlMapPathMatcherRouteRulesToTerraform)(struct!.routeRules),
  }
}

export interface ComputeUrlMapTest {
  /**
  * Description of this test case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * Host portion of the URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#host ComputeUrlMap#host}
  */
  readonly host: string;
  /**
  * Path portion of the URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#path ComputeUrlMap#path}
  */
  readonly path: string;
  /**
  * The backend service or backend bucket link that should be matched by this test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#service ComputeUrlMap#service}
  */
  readonly service: string;
}

function computeUrlMapTestToTerraform(struct?: ComputeUrlMapTest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface ComputeUrlMapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#create ComputeUrlMap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#delete ComputeUrlMap#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html#update ComputeUrlMap#update}
  */
  readonly update?: string;
}

function computeUrlMapTimeoutsToTerraform(struct?: ComputeUrlMapTimeoutsOutputReference | ComputeUrlMapTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeUrlMapTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html google_compute_url_map}
*/
export class ComputeUrlMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_url_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_url_map.html google_compute_url_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeUrlMapConfig
  */
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
  private _defaultService?: string | undefined; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string | undefined) {
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _name?: string; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _defaultRouteAction?: ComputeUrlMapDefaultRouteAction | undefined; 
  private __defaultRouteActionOutput = new ComputeUrlMapDefaultRouteActionOutputReference(this as any, "default_route_action", true);
  public get defaultRouteAction() {
    return this.__defaultRouteActionOutput;
  }
  public putDefaultRouteAction(value: ComputeUrlMapDefaultRouteAction | undefined) {
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
  private _defaultUrlRedirect?: ComputeUrlMapDefaultUrlRedirect | undefined; 
  private __defaultUrlRedirectOutput = new ComputeUrlMapDefaultUrlRedirectOutputReference(this as any, "default_url_redirect", true);
  public get defaultUrlRedirect() {
    return this.__defaultUrlRedirectOutput;
  }
  public putDefaultUrlRedirect(value: ComputeUrlMapDefaultUrlRedirect | undefined) {
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
  private _headerAction?: ComputeUrlMapHeaderAction | undefined; 
  private __headerActionOutput = new ComputeUrlMapHeaderActionOutputReference(this as any, "header_action", true);
  public get headerAction() {
    return this.__headerActionOutput;
  }
  public putHeaderAction(value: ComputeUrlMapHeaderAction | undefined) {
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
  private _hostRule?: ComputeUrlMapHostRule[] | undefined; 
  public get hostRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_rule') as any;
  }
  public set hostRule(value: ComputeUrlMapHostRule[] | undefined) {
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
  private _pathMatcher?: ComputeUrlMapPathMatcher[] | undefined; 
  public get pathMatcher() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('path_matcher') as any;
  }
  public set pathMatcher(value: ComputeUrlMapPathMatcher[] | undefined) {
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
  private _test?: ComputeUrlMapTest[] | undefined; 
  public get test() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('test') as any;
  }
  public set test(value: ComputeUrlMapTest[] | undefined) {
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
  private _timeouts?: ComputeUrlMapTimeouts | undefined; 
  private __timeoutsOutput = new ComputeUrlMapTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeUrlMapTimeouts | undefined) {
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
      default_route_action: computeUrlMapDefaultRouteActionToTerraform(this._defaultRouteAction),
      default_url_redirect: computeUrlMapDefaultUrlRedirectToTerraform(this._defaultUrlRedirect),
      header_action: computeUrlMapHeaderActionToTerraform(this._headerAction),
      host_rule: cdktf.listMapper(computeUrlMapHostRuleToTerraform)(this._hostRule),
      path_matcher: cdktf.listMapper(computeUrlMapPathMatcherToTerraform)(this._pathMatcher),
      test: cdktf.listMapper(computeUrlMapTestToTerraform)(this._test),
      timeouts: computeUrlMapTimeoutsToTerraform(this._timeouts),
    };
  }
}
