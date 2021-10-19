// https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkServicesEdgeCacheServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#description NetworkServicesEdgeCacheService#description}
  */
  readonly description?: string;
  /**
  * HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#disable_quic NetworkServicesEdgeCacheService#disable_quic}
  */
  readonly disableQuic?: boolean | cdktf.IResolvable;
  /**
  * Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#edge_security_policy NetworkServicesEdgeCacheService#edge_security_policy}
  */
  readonly edgeSecurityPolicy?: string;
  /**
  * URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.

Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#edge_ssl_certificates NetworkServicesEdgeCacheService#edge_ssl_certificates}
  */
  readonly edgeSslCertificates?: string[];
  /**
  * Set of label tags associated with the EdgeCache resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#labels NetworkServicesEdgeCacheService#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#name NetworkServicesEdgeCacheService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#project NetworkServicesEdgeCacheService#project}
  */
  readonly project?: string;
  /**
  * Require TLS (HTTPS) for all clients connecting to this service.

Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#require_tls NetworkServicesEdgeCacheService#require_tls}
  */
  readonly requireTls?: boolean | cdktf.IResolvable;
  /**
  * URL of the SslPolicy resource that will be associated with the EdgeCacheService.

If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#ssl_policy NetworkServicesEdgeCacheService#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#log_config NetworkServicesEdgeCacheService#log_config}
  */
  readonly logConfig?: NetworkServicesEdgeCacheServiceLogConfig;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#routing NetworkServicesEdgeCacheService#routing}
  */
  readonly routing: NetworkServicesEdgeCacheServiceRouting;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#timeouts NetworkServicesEdgeCacheService#timeouts}
  */
  readonly timeouts?: NetworkServicesEdgeCacheServiceTimeouts;
}
export interface NetworkServicesEdgeCacheServiceLogConfig {
  /**
  * Specifies whether to enable logging for traffic served by this service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#enable NetworkServicesEdgeCacheService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].

This field can only be specified if logging is enabled for this service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#sample_rate NetworkServicesEdgeCacheService#sample_rate}
  */
  readonly sampleRate?: number;
}

function networkServicesEdgeCacheServiceLogConfigToTerraform(struct?: NetworkServicesEdgeCacheServiceLogConfigOutputReference | NetworkServicesEdgeCacheServiceLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class NetworkServicesEdgeCacheServiceLogConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable | undefined; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable | undefined) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number | undefined; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number | undefined) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingHostRule {
  /**
  * A human-readable description of the hostRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#description NetworkServicesEdgeCacheService#description}
  */
  readonly description?: string;
  /**
  * The list of host patterns to match.

Host patterns must be valid hostnames with optional port numbers in the format host:port. * matches any string of ([a-z0-9-.]*).
The only accepted ports are :80 and :443.

Hosts are matched against the HTTP Host header, or for HTTP/2 and HTTP/3, the ":authority" header, from the incoming request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#hosts NetworkServicesEdgeCacheService#hosts}
  */
  readonly hosts: string[];
  /**
  * The name of the pathMatcher associated with this hostRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#path_matcher NetworkServicesEdgeCacheService#path_matcher}
  */
  readonly pathMatcher: string;
}

function networkServicesEdgeCacheServiceRoutingHostRuleToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingHostRule): any {
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

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd {
  /**
  * The name of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_name NetworkServicesEdgeCacheService#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_value NetworkServicesEdgeCacheService#header_value}
  */
  readonly headerValue: string;
  /**
  * Whether to replace all existing headers with the same name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#replace NetworkServicesEdgeCacheService#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd): any {
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

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove {
  /**
  * The name of the header to remove.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_name NetworkServicesEdgeCacheService#header_name}
  */
  readonly headerName: string;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd {
  /**
  * The name of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_name NetworkServicesEdgeCacheService#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_value NetworkServicesEdgeCacheService#header_value}
  */
  readonly headerValue: string;
  /**
  * Whether to replace all existing headers with the same name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#replace NetworkServicesEdgeCacheService#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd): any {
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

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove {
  /**
  * Headers to remove from the response prior to sending it back to the client.

Response headers are only sent to the client, and do not have an effect on the cache serving the response.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_name NetworkServicesEdgeCacheService#header_name}
  */
  readonly headerName: string;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction {
  /**
  * request_header_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#request_header_to_add NetworkServicesEdgeCacheService#request_header_to_add}
  */
  readonly requestHeaderToAdd?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[];
  /**
  * request_header_to_remove block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#request_header_to_remove NetworkServicesEdgeCacheService#request_header_to_remove}
  */
  readonly requestHeaderToRemove?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[];
  /**
  * response_header_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#response_header_to_add NetworkServicesEdgeCacheService#response_header_to_add}
  */
  readonly responseHeaderToAdd?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[];
  /**
  * response_header_to_remove block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#response_header_to_remove NetworkServicesEdgeCacheService#response_header_to_remove}
  */
  readonly responseHeaderToRemove?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[];
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_to_add: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddToTerraform)(struct!.requestHeaderToAdd),
    request_header_to_remove: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveToTerraform)(struct!.requestHeaderToRemove),
    response_header_to_add: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddToTerraform)(struct!.responseHeaderToAdd),
    response_header_to_remove: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveToTerraform)(struct!.responseHeaderToRemove),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request_header_to_add - computed: false, optional: true, required: false
  private _requestHeaderToAdd?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[] | undefined; 
  public get requestHeaderToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_header_to_add') as any;
  }
  public set requestHeaderToAdd(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[] | undefined) {
    this._requestHeaderToAdd = value;
  }
  public resetRequestHeaderToAdd() {
    this._requestHeaderToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderToAddInput() {
    return this._requestHeaderToAdd
  }

  // request_header_to_remove - computed: false, optional: true, required: false
  private _requestHeaderToRemove?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[] | undefined; 
  public get requestHeaderToRemove() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_header_to_remove') as any;
  }
  public set requestHeaderToRemove(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[] | undefined) {
    this._requestHeaderToRemove = value;
  }
  public resetRequestHeaderToRemove() {
    this._requestHeaderToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderToRemoveInput() {
    return this._requestHeaderToRemove
  }

  // response_header_to_add - computed: false, optional: true, required: false
  private _responseHeaderToAdd?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[] | undefined; 
  public get responseHeaderToAdd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_header_to_add') as any;
  }
  public set responseHeaderToAdd(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[] | undefined) {
    this._responseHeaderToAdd = value;
  }
  public resetResponseHeaderToAdd() {
    this._responseHeaderToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderToAddInput() {
    return this._responseHeaderToAdd
  }

  // response_header_to_remove - computed: false, optional: true, required: false
  private _responseHeaderToRemove?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[] | undefined; 
  public get responseHeaderToRemove() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_header_to_remove') as any;
  }
  public set responseHeaderToRemove(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[] | undefined) {
    this._responseHeaderToRemove = value;
  }
  public resetResponseHeaderToRemove() {
    this._responseHeaderToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderToRemoveInput() {
    return this._responseHeaderToRemove
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch {
  /**
  * The value of the header should exactly match contents of exactMatch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#exact_match NetworkServicesEdgeCacheService#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The header name to match on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_name NetworkServicesEdgeCacheService#header_name}
  */
  readonly headerName: string;
  /**
  * If set to false (default), the headerMatch is considered a match if the match criteria above are met.
If set to true, the headerMatch is considered a match if the match criteria above are NOT met.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#invert_match NetworkServicesEdgeCacheService#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must start with the contents of prefixMatch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#prefix_match NetworkServicesEdgeCacheService#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * A header with the contents of headerName must exist. The match takes place whether or not the request's header has a value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#present_match NetworkServicesEdgeCacheService#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must end with the contents of suffixMatch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#suffix_match NetworkServicesEdgeCacheService#suffix_match}
  */
  readonly suffixMatch?: string;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch): any {
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
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
  }
}

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  /**
  * The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#exact_match NetworkServicesEdgeCacheService#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the query parameter to match. The query parameter must exist in the request, in the absence of which the request match fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#name NetworkServicesEdgeCacheService#name}
  */
  readonly name: string;
  /**
  * Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#present_match NetworkServicesEdgeCacheService#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
  }
}

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule {
  /**
  * For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#full_path_match NetworkServicesEdgeCacheService#full_path_match}
  */
  readonly fullPathMatch?: string;
  /**
  * Specifies that prefixMatch and fullPathMatch matches are case sensitive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#ignore_case NetworkServicesEdgeCacheService#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * For satisfying the matchRule condition, the path of the request
must match the wildcard pattern specified in pathTemplateMatch
after removing any query parameters and anchor that may be part
of the original URL.

pathTemplateMatch must be between 1 and 255 characters
(inclusive).  The pattern specified by pathTemplateMatch may
have at most 5 wildcard operators and at most 5 variable
captures in total.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#path_template_match NetworkServicesEdgeCacheService#path_template_match}
  */
  readonly pathTemplateMatch?: string;
  /**
  * For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#prefix_match NetworkServicesEdgeCacheService#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * header_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_match NetworkServicesEdgeCacheService#header_match}
  */
  readonly headerMatch?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch[];
  /**
  * query_parameter_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#query_parameter_match NetworkServicesEdgeCacheService#query_parameter_match}
  */
  readonly queryParameterMatch?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch[];
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_path_match: cdktf.stringToTerraform(struct!.fullPathMatch),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    path_template_match: cdktf.stringToTerraform(struct!.pathTemplateMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    header_match: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchToTerraform)(struct!.headerMatch),
    query_parameter_match: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchToTerraform)(struct!.queryParameterMatch),
  }
}

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy {
  /**
  * If true, requests to different hosts will be cached separately.

Note: this should only be enabled if hosts share the same origin and content Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#exclude_host NetworkServicesEdgeCacheService#exclude_host}
  */
  readonly excludeHost?: boolean | cdktf.IResolvable;
  /**
  * If true, exclude query string parameters from the cache key

If false (the default), include the query string parameters in
the cache key according to includeQueryParameters and
excludeQueryParameters. If neither includeQueryParameters nor
excludeQueryParameters is set, the entire query string will be
included.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#exclude_query_string NetworkServicesEdgeCacheService#exclude_query_string}
  */
  readonly excludeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude from cache keys. All other parameters will be included.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#excluded_query_parameters NetworkServicesEdgeCacheService#excluded_query_parameters}
  */
  readonly excludedQueryParameters?: string[];
  /**
  * If true, http and https requests will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#include_protocol NetworkServicesEdgeCacheService#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktf.IResolvable;
  /**
  * Names of HTTP request headers to include in cache keys. The value of the header field will be used as part of the cache key.

- Header names must be valid HTTP RFC 7230 header field values.
- Header field names are case insensitive
- To include the HTTP method, use ":method"

Note that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#included_header_names NetworkServicesEdgeCacheService#included_header_names}
  */
  readonly includedHeaderNames?: string[];
  /**
  * Names of query string parameters to include in cache keys. All other parameters will be excluded.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#included_query_parameters NetworkServicesEdgeCacheService#included_query_parameters}
  */
  readonly includedQueryParameters?: string[];
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_host: cdktf.booleanToTerraform(struct!.excludeHost),
    exclude_query_string: cdktf.booleanToTerraform(struct!.excludeQueryString),
    excluded_query_parameters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedQueryParameters),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    included_header_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedHeaderNames),
    included_query_parameters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedQueryParameters),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exclude_host - computed: true, optional: true, required: false
  private _excludeHost?: boolean | cdktf.IResolvable | undefined; 
  public get excludeHost() {
    return this.getBooleanAttribute('exclude_host') as any;
  }
  public set excludeHost(value: boolean | cdktf.IResolvable | undefined) {
    this._excludeHost = value;
  }
  public resetExcludeHost() {
    this._excludeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHostInput() {
    return this._excludeHost
  }

  // exclude_query_string - computed: false, optional: true, required: false
  private _excludeQueryString?: boolean | cdktf.IResolvable | undefined; 
  public get excludeQueryString() {
    return this.getBooleanAttribute('exclude_query_string') as any;
  }
  public set excludeQueryString(value: boolean | cdktf.IResolvable | undefined) {
    this._excludeQueryString = value;
  }
  public resetExcludeQueryString() {
    this._excludeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeQueryStringInput() {
    return this._excludeQueryString
  }

  // excluded_query_parameters - computed: false, optional: true, required: false
  private _excludedQueryParameters?: string[] | undefined; 
  public get excludedQueryParameters() {
    return this.getListAttribute('excluded_query_parameters');
  }
  public set excludedQueryParameters(value: string[] | undefined) {
    this._excludedQueryParameters = value;
  }
  public resetExcludedQueryParameters() {
    this._excludedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryParametersInput() {
    return this._excludedQueryParameters
  }

  // include_protocol - computed: true, optional: true, required: false
  private _includeProtocol?: boolean | cdktf.IResolvable | undefined; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol') as any;
  }
  public set includeProtocol(value: boolean | cdktf.IResolvable | undefined) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol
  }

  // included_header_names - computed: false, optional: true, required: false
  private _includedHeaderNames?: string[] | undefined; 
  public get includedHeaderNames() {
    return this.getListAttribute('included_header_names');
  }
  public set includedHeaderNames(value: string[] | undefined) {
    this._includedHeaderNames = value;
  }
  public resetIncludedHeaderNames() {
    this._includedHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeaderNamesInput() {
    return this._includedHeaderNames
  }

  // included_query_parameters - computed: false, optional: true, required: false
  private _includedQueryParameters?: string[] | undefined; 
  public get includedQueryParameters() {
    return this.getListAttribute('included_query_parameters');
  }
  public set includedQueryParameters(value: string[] | undefined) {
    this._includedQueryParameters = value;
  }
  public resetIncludedQueryParameters() {
    this._includedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedQueryParametersInput() {
    return this._includedQueryParameters
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy {
  /**
  * Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses.

For all cache modes, Cache-Control headers will be passed to the client. Use clientTtl to override what is sent to the client. Possible values: ["CACHE_ALL_STATIC", "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "BYPASS_CACHE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#cache_mode NetworkServicesEdgeCacheService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response.

- The TTL must be > 0 and <= 86400s (1 day)
- The clientTtl cannot be larger than the defaultTtl (if set)
- Fractions of a second are not allowed.
- Omit this field to use the defaultTtl, or the max-age set by the origin, as the client-facing TTL.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#client_ttl NetworkServicesEdgeCacheService#client_ttl}
  */
  readonly clientTtl?: string;
  /**
  * Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Defaults to 3600s (1 hour).

- The TTL must be >= 0 and <= 2592000s (1 month)
- Setting a TTL of "0" means "always revalidate" (equivalent to must-revalidate)
- The value of defaultTTL cannot be set to a value greater than that of maxTTL.
- Fractions of a second are not allowed.
- When the cacheMode is set to FORCE_CACHE_ALL, the defaultTTL will overwrite the TTL set in all responses.

Note that infrequently accessed objects may be evicted from the cache before the defined TTL. Objects that expire will be revalidated with the origin.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#default_ttl NetworkServicesEdgeCacheService#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.

Defaults to 86400s (1 day).

Cache directives that attempt to set a max-age or s-maxage higher than this, or an Expires header more than maxTtl seconds in the future will be capped at the value of maxTTL, as if it were the value of an s-maxage Cache-Control directive.

- The TTL must be >= 0 and <= 2592000s (1 month)
- Setting a TTL of "0" means "always revalidate"
- The value of maxTtl must be equal to or greater than defaultTtl.
- Fractions of a second are not allowed.
- When the cache mode is set to "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", or "BYPASS_CACHE", you must omit this field.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#max_ttl NetworkServicesEdgeCacheService#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. This can reduce the load on your origin and improve end-user experience by reducing response latency.

By default, the CDNPolicy will apply the following default TTLs to these status codes:

- HTTP 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
- HTTP 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
- HTTP 405 (Method Not Found), 414 (URI Too Long), 501 (Not Implemented): 60s

These defaults can be overridden in negativeCachingPolicy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#negative_caching NetworkServicesEdgeCacheService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.

- Omitting the policy and leaving negativeCaching enabled will use the default TTLs for each status code, defined in negativeCaching.
- TTLs must be >= 0 (where 0 is "always revalidate") and <= 86400s (1 day)

Note that when specifying an explicit negativeCachingPolicy, you should take care to specify a cache TTL for all response codes that you wish to cache. The CDNPolicy will not apply any default negative caching when a policy exists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#negative_caching_policy NetworkServicesEdgeCacheService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#signed_request_keyset NetworkServicesEdgeCacheService#signed_request_keyset}
  */
  readonly signedRequestKeyset?: string;
  /**
  * Whether to enforce signed requests. The default value is DISABLED, which means all content is public, and does not authorize access.

You must also set a signedRequestKeyset to enable signed requests.

When set to REQUIRE_SIGNATURES, all matching requests will have their signature validated. Requests that were not signed with the corresponding private key, or that are otherwise invalid (expired, do not match the signature, IP address, or header) will be rejected with a HTTP 403 and (if enabled) logged. Possible values: ["DISABLED", "REQUIRE_SIGNATURES"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#signed_request_mode NetworkServicesEdgeCacheService#signed_request_mode}
  */
  readonly signedRequestMode?: string;
  /**
  * cache_key_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#cache_key_policy NetworkServicesEdgeCacheService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_mode: cdktf.stringToTerraform(struct!.cacheMode),
    client_ttl: cdktf.stringToTerraform(struct!.clientTtl),
    default_ttl: cdktf.stringToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.stringToTerraform(struct!.maxTtl),
    negative_caching: cdktf.booleanToTerraform(struct!.negativeCaching),
    negative_caching_policy: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.negativeCachingPolicy),
    signed_request_keyset: cdktf.stringToTerraform(struct!.signedRequestKeyset),
    signed_request_mode: cdktf.stringToTerraform(struct!.signedRequestMode),
    cache_key_policy: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cache_mode - computed: true, optional: true, required: false
  private _cacheMode?: string | undefined; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string | undefined) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode
  }

  // client_ttl - computed: false, optional: true, required: false
  private _clientTtl?: string | undefined; 
  public get clientTtl() {
    return this.getStringAttribute('client_ttl');
  }
  public set clientTtl(value: string | undefined) {
    this._clientTtl = value;
  }
  public resetClientTtl() {
    this._clientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: string | undefined; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string | undefined) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: string | undefined; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string | undefined) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl
  }

  // negative_caching - computed: false, optional: true, required: false
  private _negativeCaching?: boolean | cdktf.IResolvable | undefined; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching') as any;
  }
  public set negativeCaching(value: boolean | cdktf.IResolvable | undefined) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get negativeCachingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('negative_caching_policy') as any;
  }
  public set negativeCachingPolicy(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._negativeCachingPolicy = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy
  }

  // signed_request_keyset - computed: true, optional: true, required: false
  private _signedRequestKeyset?: string | undefined; 
  public get signedRequestKeyset() {
    return this.getStringAttribute('signed_request_keyset');
  }
  public set signedRequestKeyset(value: string | undefined) {
    this._signedRequestKeyset = value;
  }
  public resetSignedRequestKeyset() {
    this._signedRequestKeyset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedRequestKeysetInput() {
    return this._signedRequestKeyset
  }

  // signed_request_mode - computed: true, optional: true, required: false
  private _signedRequestMode?: string | undefined; 
  public get signedRequestMode() {
    return this.getStringAttribute('signed_request_mode');
  }
  public set signedRequestMode(value: string | undefined) {
    this._signedRequestMode = value;
  }
  public resetSignedRequestMode() {
    this._signedRequestMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedRequestModeInput() {
    return this._signedRequestMode
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy | undefined; 
  private __cacheKeyPolicyOutput = new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference(this as any, "cache_key_policy", true);
  public get cacheKeyPolicy() {
    return this.__cacheKeyPolicyOutput;
  }
  public putCacheKeyPolicy(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy | undefined) {
    this._cacheKeyPolicy = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

This translates to the Access-Control-Allow-Credentials response header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#allow_credentials NetworkServicesEdgeCacheService#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers response header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#allow_headers NetworkServicesEdgeCacheService#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods response header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#allow_methods NetworkServicesEdgeCacheService#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.

This translates to the Access-Control-Allow-Origin response header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#allow_origins NetworkServicesEdgeCacheService#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#disabled NetworkServicesEdgeCacheService#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers response header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#expose_headers NetworkServicesEdgeCacheService#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long results of a preflight request can be cached by a client in seconds. Note that many browser clients enforce a maximum TTL of 600s (10 minutes).

- Setting the value to -1 forces a pre-flight check for all requests (not recommended)
- A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.
- This translates to the Access-Control-Max-Age header.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#max_age NetworkServicesEdgeCacheService#max_age}
  */
  readonly maxAge: string;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
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

  // max_age - computed: false, optional: false, required: true
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#host_rewrite NetworkServicesEdgeCacheService#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#path_prefix_rewrite NetworkServicesEdgeCacheService#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
  /**
  * Prior to forwarding the request to the selected origin, if the
request matched a pathTemplateMatch, the matching portion of the
request's path is replaced re-written using the pattern specified
by pathTemplateRewrite.

pathTemplateRewrite must be between 1 and 255 characters
(inclusive), must start with a '/', and must only use variables
captured by the route's pathTemplate matchers.

pathTemplateRewrite may only be used when all of a route's
MatchRules specify pathTemplate.

Only one of pathPrefixRewrite and pathTemplateRewrite may be
specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#path_template_rewrite NetworkServicesEdgeCacheService#path_template_rewrite}
  */
  readonly pathTemplateRewrite?: string;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
    path_template_rewrite: cdktf.stringToTerraform(struct!.pathTemplateRewrite),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
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

  // path_template_rewrite - computed: false, optional: true, required: false
  private _pathTemplateRewrite?: string | undefined; 
  public get pathTemplateRewrite() {
    return this.getStringAttribute('path_template_rewrite');
  }
  public set pathTemplateRewrite(value: string | undefined) {
    this._pathTemplateRewrite = value;
  }
  public resetPathTemplateRewrite() {
    this._pathTemplateRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateRewriteInput() {
    return this._pathTemplateRewrite
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction {
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#cdn_policy NetworkServicesEdgeCacheService#cdn_policy}
  */
  readonly cdnPolicy?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#cors_policy NetworkServicesEdgeCacheService#cors_policy}
  */
  readonly corsPolicy?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#url_rewrite NetworkServicesEdgeCacheService#url_rewrite}
  */
  readonly urlRewrite?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdn_policy: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyToTerraform(struct!.cdnPolicy),
    cors_policy: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    url_rewrite: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy | undefined; 
  private __cdnPolicyOutput = new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference(this as any, "cdn_policy", true);
  public get cdnPolicy() {
    return this.__cdnPolicyOutput;
  }
  public putCdnPolicy(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy | undefined) {
    this._cdnPolicy = value;
  }
  public resetCdnPolicy() {
    this._cdnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnPolicyInput() {
    return this._cdnPolicy
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy | undefined; 
  private __corsPolicyOutput = new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference(this as any, "cors_policy", true);
  public get corsPolicy() {
    return this.__corsPolicyOutput;
  }
  public putCorsPolicy(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy | undefined) {
    this._corsPolicy = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite | undefined; 
  private __urlRewriteOutput = new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference(this as any, "url_rewrite", true);
  public get urlRewrite() {
    return this.__urlRewriteOutput;
  }
  public putUrlRewrite(value: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite | undefined) {
    this._urlRewrite = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite
  }
}
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was supplied in the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#host_redirect NetworkServicesEdgeCacheService#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request.

This can only be set if there is at least one (1) edgeSslCertificate set on the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#https_redirect NetworkServicesEdgeCacheService#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

The path value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#path_redirect NetworkServicesEdgeCacheService#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request.

prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#prefix_redirect NetworkServicesEdgeCacheService#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction.

The supported values are:

- 'MOVED_PERMANENTLY_DEFAULT', which is the default value and corresponds to 301.
- 'FOUND', which corresponds to 302.
- 'SEE_OTHER' which corresponds to 303.
- 'TEMPORARY_REDIRECT', which corresponds to 307. in this case, the request method will be retained.
- 'PERMANENT_REDIRECT', which corresponds to 308. in this case, the request method will be retained. Possible values: ["MOVED_PERMANENTLY_DEFAULT", "FOUND", "SEE_OTHER", "TEMPORARY_REDIRECT", "PERMANENT_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#redirect_response_code NetworkServicesEdgeCacheService#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#strip_query NetworkServicesEdgeCacheService#strip_query}
  */
  readonly stripQuery?: boolean | cdktf.IResolvable;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference | NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect): any {
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

export class NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference extends cdktf.ComplexObject {
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

  // https_redirect - computed: true, optional: true, required: false
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

  // redirect_response_code - computed: true, optional: true, required: false
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

  // strip_query - computed: true, optional: true, required: false
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
export interface NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule {
  /**
  * A human-readable description of the routeRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#description NetworkServicesEdgeCacheService#description}
  */
  readonly description?: string;
  /**
  * The Origin resource that requests to this route should fetch from when a matching response is not in cache. Origins can be defined as short names ("my-origin") or fully-qualified resource URLs - e.g. "networkservices.googleapis.com/projects/my-project/global/edgecacheorigins/my-origin"

Only one of origin or urlRedirect can be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#origin NetworkServicesEdgeCacheService#origin}
  */
  readonly origin?: string;
  /**
  * The priority of this route rule, where 1 is the highest priority.

You cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 1 and 999 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers
to which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#priority NetworkServicesEdgeCacheService#priority}
  */
  readonly priority: string;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#header_action NetworkServicesEdgeCacheService#header_action}
  */
  readonly headerAction?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction;
  /**
  * match_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#match_rule NetworkServicesEdgeCacheService#match_rule}
  */
  readonly matchRule: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule[];
  /**
  * route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#route_action NetworkServicesEdgeCacheService#route_action}
  */
  readonly routeAction?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction;
  /**
  * url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#url_redirect NetworkServicesEdgeCacheService#url_redirect}
  */
  readonly urlRedirect?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect;
}

function networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    origin: cdktf.stringToTerraform(struct!.origin),
    priority: cdktf.stringToTerraform(struct!.priority),
    header_action: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionToTerraform(struct!.headerAction),
    match_rule: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleToTerraform)(struct!.matchRule),
    route_action: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionToTerraform(struct!.routeAction),
    url_redirect: networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectToTerraform(struct!.urlRedirect),
  }
}

export interface NetworkServicesEdgeCacheServiceRoutingPathMatcher {
  /**
  * A human-readable description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#description NetworkServicesEdgeCacheService#description}
  */
  readonly description?: string;
  /**
  * The name to which this PathMatcher is referred by the HostRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#name NetworkServicesEdgeCacheService#name}
  */
  readonly name: string;
  /**
  * route_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#route_rule NetworkServicesEdgeCacheService#route_rule}
  */
  readonly routeRule: NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule[];
}

function networkServicesEdgeCacheServiceRoutingPathMatcherToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingPathMatcher): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    route_rule: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleToTerraform)(struct!.routeRule),
  }
}

export interface NetworkServicesEdgeCacheServiceRouting {
  /**
  * host_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#host_rule NetworkServicesEdgeCacheService#host_rule}
  */
  readonly hostRule: NetworkServicesEdgeCacheServiceRoutingHostRule[];
  /**
  * path_matcher block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#path_matcher NetworkServicesEdgeCacheService#path_matcher}
  */
  readonly pathMatcher: NetworkServicesEdgeCacheServiceRoutingPathMatcher[];
}

function networkServicesEdgeCacheServiceRoutingToTerraform(struct?: NetworkServicesEdgeCacheServiceRoutingOutputReference | NetworkServicesEdgeCacheServiceRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rule: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingHostRuleToTerraform)(struct!.hostRule),
    path_matcher: cdktf.listMapper(networkServicesEdgeCacheServiceRoutingPathMatcherToTerraform)(struct!.pathMatcher),
  }
}

export class NetworkServicesEdgeCacheServiceRoutingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_rule - computed: false, optional: false, required: true
  private _hostRule?: NetworkServicesEdgeCacheServiceRoutingHostRule[]; 
  public get hostRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_rule') as any;
  }
  public set hostRule(value: NetworkServicesEdgeCacheServiceRoutingHostRule[]) {
    this._hostRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRuleInput() {
    return this._hostRule
  }

  // path_matcher - computed: false, optional: false, required: true
  private _pathMatcher?: NetworkServicesEdgeCacheServiceRoutingPathMatcher[]; 
  public get pathMatcher() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('path_matcher') as any;
  }
  public set pathMatcher(value: NetworkServicesEdgeCacheServiceRoutingPathMatcher[]) {
    this._pathMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher
  }
}
export interface NetworkServicesEdgeCacheServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#create NetworkServicesEdgeCacheService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#delete NetworkServicesEdgeCacheService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html#update NetworkServicesEdgeCacheService#update}
  */
  readonly update?: string;
}

function networkServicesEdgeCacheServiceTimeoutsToTerraform(struct?: NetworkServicesEdgeCacheServiceTimeoutsOutputReference | NetworkServicesEdgeCacheServiceTimeouts): any {
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

export class NetworkServicesEdgeCacheServiceTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html google_network_services_edge_cache_service}
*/
export class NetworkServicesEdgeCacheService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_network_services_edge_cache_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service.html google_network_services_edge_cache_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesEdgeCacheServiceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesEdgeCacheServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_edge_cache_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._disableQuic = config.disableQuic;
    this._edgeSecurityPolicy = config.edgeSecurityPolicy;
    this._edgeSslCertificates = config.edgeSslCertificates;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._requireTls = config.requireTls;
    this._sslPolicy = config.sslPolicy;
    this._logConfig = config.logConfig;
    this._routing = config.routing;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable_quic - computed: true, optional: true, required: false
  private _disableQuic?: boolean | cdktf.IResolvable | undefined; 
  public get disableQuic() {
    return this.getBooleanAttribute('disable_quic') as any;
  }
  public set disableQuic(value: boolean | cdktf.IResolvable | undefined) {
    this._disableQuic = value;
  }
  public resetDisableQuic() {
    this._disableQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableQuicInput() {
    return this._disableQuic
  }

  // edge_security_policy - computed: false, optional: true, required: false
  private _edgeSecurityPolicy?: string | undefined; 
  public get edgeSecurityPolicy() {
    return this.getStringAttribute('edge_security_policy');
  }
  public set edgeSecurityPolicy(value: string | undefined) {
    this._edgeSecurityPolicy = value;
  }
  public resetEdgeSecurityPolicy() {
    this._edgeSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSecurityPolicyInput() {
    return this._edgeSecurityPolicy
  }

  // edge_ssl_certificates - computed: false, optional: true, required: false
  private _edgeSslCertificates?: string[] | undefined; 
  public get edgeSslCertificates() {
    return this.getListAttribute('edge_ssl_certificates');
  }
  public set edgeSslCertificates(value: string[] | undefined) {
    this._edgeSslCertificates = value;
  }
  public resetEdgeSslCertificates() {
    this._edgeSslCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSslCertificatesInput() {
    return this._edgeSslCertificates
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

  // require_tls - computed: true, optional: true, required: false
  private _requireTls?: boolean | cdktf.IResolvable | undefined; 
  public get requireTls() {
    return this.getBooleanAttribute('require_tls') as any;
  }
  public set requireTls(value: boolean | cdktf.IResolvable | undefined) {
    this._requireTls = value;
  }
  public resetRequireTls() {
    this._requireTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsInput() {
    return this._requireTls
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy?: string | undefined; 
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string | undefined) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: NetworkServicesEdgeCacheServiceLogConfig | undefined; 
  private __logConfigOutput = new NetworkServicesEdgeCacheServiceLogConfigOutputReference(this as any, "log_config", true);
  public get logConfig() {
    return this.__logConfigOutput;
  }
  public putLogConfig(value: NetworkServicesEdgeCacheServiceLogConfig | undefined) {
    this._logConfig = value;
  }
  public resetLogConfig() {
    this._logConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig
  }

  // routing - computed: false, optional: false, required: true
  private _routing?: NetworkServicesEdgeCacheServiceRouting; 
  private __routingOutput = new NetworkServicesEdgeCacheServiceRoutingOutputReference(this as any, "routing", true);
  public get routing() {
    return this.__routingOutput;
  }
  public putRouting(value: NetworkServicesEdgeCacheServiceRouting) {
    this._routing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkServicesEdgeCacheServiceTimeouts | undefined; 
  private __timeoutsOutput = new NetworkServicesEdgeCacheServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NetworkServicesEdgeCacheServiceTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      disable_quic: cdktf.booleanToTerraform(this._disableQuic),
      edge_security_policy: cdktf.stringToTerraform(this._edgeSecurityPolicy),
      edge_ssl_certificates: cdktf.listMapper(cdktf.stringToTerraform)(this._edgeSslCertificates),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      require_tls: cdktf.booleanToTerraform(this._requireTls),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      log_config: networkServicesEdgeCacheServiceLogConfigToTerraform(this._logConfig),
      routing: networkServicesEdgeCacheServiceRoutingToTerraform(this._routing),
      timeouts: networkServicesEdgeCacheServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
