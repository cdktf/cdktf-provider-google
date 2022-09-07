// https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringUptimeCheckConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The checker type to use for the check. If the monitored resource type is servicedirectory_service, checkerType must be set to VPC_CHECKERS. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#checker_type MonitoringUptimeCheckConfig#checker_type}
  */
  readonly checkerType?: string;
  /**
  * A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#display_name MonitoringUptimeCheckConfig#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#id MonitoringUptimeCheckConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#period MonitoringUptimeCheckConfig#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#project MonitoringUptimeCheckConfig#project}
  */
  readonly project?: string;
  /**
  * The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#selected_regions MonitoringUptimeCheckConfig#selected_regions}
  */
  readonly selectedRegions?: string[];
  /**
  * The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Accepted formats https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#timeout MonitoringUptimeCheckConfig#timeout}
  */
  readonly timeout: string;
  /**
  * content_matchers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#content_matchers MonitoringUptimeCheckConfig#content_matchers}
  */
  readonly contentMatchers?: MonitoringUptimeCheckConfigContentMatchers[] | cdktf.IResolvable;
  /**
  * http_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#http_check MonitoringUptimeCheckConfig#http_check}
  */
  readonly httpCheck?: MonitoringUptimeCheckConfigHttpCheck;
  /**
  * monitored_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#monitored_resource MonitoringUptimeCheckConfig#monitored_resource}
  */
  readonly monitoredResource?: MonitoringUptimeCheckConfigMonitoredResource;
  /**
  * resource_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#resource_group MonitoringUptimeCheckConfig#resource_group}
  */
  readonly resourceGroup?: MonitoringUptimeCheckConfigResourceGroup;
  /**
  * tcp_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#tcp_check MonitoringUptimeCheckConfig#tcp_check}
  */
  readonly tcpCheck?: MonitoringUptimeCheckConfigTcpCheck;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#timeouts MonitoringUptimeCheckConfig#timeouts}
  */
  readonly timeouts?: MonitoringUptimeCheckConfigTimeouts;
}
export interface MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher {
  /**
  * Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#json_matcher MonitoringUptimeCheckConfig#json_matcher}
  */
  readonly jsonMatcher?: string;
  /**
  * JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#json_path MonitoringUptimeCheckConfig#json_path}
  */
  readonly jsonPath: string;
}

export function monitoringUptimeCheckConfigContentMatchersJsonPathMatcherToTerraform(struct?: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference | MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_matcher: cdktf.stringToTerraform(struct!.jsonMatcher),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}

export class MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonMatcher = this._jsonMatcher;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonMatcher = undefined;
      this._jsonPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonMatcher = value.jsonMatcher;
      this._jsonPath = value.jsonPath;
    }
  }

  // json_matcher - computed: false, optional: true, required: false
  private _jsonMatcher?: string; 
  public get jsonMatcher() {
    return this.getStringAttribute('json_matcher');
  }
  public set jsonMatcher(value: string) {
    this._jsonMatcher = value;
  }
  public resetJsonMatcher() {
    this._jsonMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonMatcherInput() {
    return this._jsonMatcher;
  }

  // json_path - computed: false, optional: false, required: true
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }
}
export interface MonitoringUptimeCheckConfigContentMatchers {
  /**
  * String or regex content to match (max 1024 bytes)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#content MonitoringUptimeCheckConfig#content}
  */
  readonly content: string;
  /**
  * The type of content matcher that will be applied to the server output, compared to the content string when the check is run. Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX", "MATCHES_JSON_PATH", "NOT_MATCHES_JSON_PATH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#matcher MonitoringUptimeCheckConfig#matcher}
  */
  readonly matcher?: string;
  /**
  * json_path_matcher block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#json_path_matcher MonitoringUptimeCheckConfig#json_path_matcher}
  */
  readonly jsonPathMatcher?: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher;
}

export function monitoringUptimeCheckConfigContentMatchersToTerraform(struct?: MonitoringUptimeCheckConfigContentMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    json_path_matcher: monitoringUptimeCheckConfigContentMatchersJsonPathMatcherToTerraform(struct!.jsonPathMatcher),
  }
}

export class MonitoringUptimeCheckConfigContentMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitoringUptimeCheckConfigContentMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._jsonPathMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPathMatcher = this._jsonPathMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigContentMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._matcher = undefined;
      this._jsonPathMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._matcher = value.matcher;
      this._jsonPathMatcher.internalValue = value.jsonPathMatcher;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // json_path_matcher - computed: false, optional: true, required: false
  private _jsonPathMatcher = new MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference(this, "json_path_matcher");
  public get jsonPathMatcher() {
    return this._jsonPathMatcher;
  }
  public putJsonPathMatcher(value: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher) {
    this._jsonPathMatcher.internalValue = value;
  }
  public resetJsonPathMatcher() {
    this._jsonPathMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathMatcherInput() {
    return this._jsonPathMatcher.internalValue;
  }
}

export class MonitoringUptimeCheckConfigContentMatchersList extends cdktf.ComplexList {
  public internalValue? : MonitoringUptimeCheckConfigContentMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitoringUptimeCheckConfigContentMatchersOutputReference {
    return new MonitoringUptimeCheckConfigContentMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes {
  /**
  * A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#status_class MonitoringUptimeCheckConfig#status_class}
  */
  readonly statusClass?: string;
  /**
  * A status code to accept.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#status_value MonitoringUptimeCheckConfig#status_value}
  */
  readonly statusValue?: number;
}

export function monitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_class: cdktf.stringToTerraform(struct!.statusClass),
    status_value: cdktf.numberToTerraform(struct!.statusValue),
  }
}

export class MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusClass = this._statusClass;
    }
    if (this._statusValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusValue = this._statusValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusClass = undefined;
      this._statusValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusClass = value.statusClass;
      this._statusValue = value.statusValue;
    }
  }

  // status_class - computed: false, optional: true, required: false
  private _statusClass?: string; 
  public get statusClass() {
    return this.getStringAttribute('status_class');
  }
  public set statusClass(value: string) {
    this._statusClass = value;
  }
  public resetStatusClass() {
    this._statusClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusClassInput() {
    return this._statusClass;
  }

  // status_value - computed: false, optional: true, required: false
  private _statusValue?: number; 
  public get statusValue() {
    return this.getNumberAttribute('status_value');
  }
  public set statusValue(value: number) {
    this._statusValue = value;
  }
  public resetStatusValue() {
    this._statusValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusValueInput() {
    return this._statusValue;
  }
}

export class MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList extends cdktf.ComplexList {
  public internalValue? : MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference {
    return new MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringUptimeCheckConfigHttpCheckAuthInfo {
  /**
  * The password to authenticate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#password MonitoringUptimeCheckConfig#password}
  */
  readonly password: string;
  /**
  * The username to authenticate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#username MonitoringUptimeCheckConfig#username}
  */
  readonly username: string;
}

export function monitoringUptimeCheckConfigHttpCheckAuthInfoToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference | MonitoringUptimeCheckConfigHttpCheckAuthInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigHttpCheckAuthInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigHttpCheckAuthInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MonitoringUptimeCheckConfigHttpCheck {
  /**
  * The request body associated with the HTTP POST request. If contentType is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the requestMethod is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#body MonitoringUptimeCheckConfig#body}
  */
  readonly body?: string;
  /**
  * The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#content_type MonitoringUptimeCheckConfig#content_type}
  */
  readonly contentType?: string;
  /**
  * The list of headers to send as part of the uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#headers MonitoringUptimeCheckConfig#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#mask_headers MonitoringUptimeCheckConfig#mask_headers}
  */
  readonly maskHeaders?: boolean | cdktf.IResolvable;
  /**
  * The path to the page to run the check against. Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. Optional (defaults to "/").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#path MonitoringUptimeCheckConfig#path}
  */
  readonly path?: string;
  /**
  * The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#port MonitoringUptimeCheckConfig#port}
  */
  readonly port?: number;
  /**
  * The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then requestMethod defaults to GET. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#request_method MonitoringUptimeCheckConfig#request_method}
  */
  readonly requestMethod?: string;
  /**
  * If true, use HTTPS instead of HTTP to run the check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#use_ssl MonitoringUptimeCheckConfig#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitoredResource is set to uptime_url. If useSsl is false, setting validateSsl to true has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#validate_ssl MonitoringUptimeCheckConfig#validate_ssl}
  */
  readonly validateSsl?: boolean | cdktf.IResolvable;
  /**
  * accepted_response_status_codes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#accepted_response_status_codes MonitoringUptimeCheckConfig#accepted_response_status_codes}
  */
  readonly acceptedResponseStatusCodes?: MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[] | cdktf.IResolvable;
  /**
  * auth_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#auth_info MonitoringUptimeCheckConfig#auth_info}
  */
  readonly authInfo?: MonitoringUptimeCheckConfigHttpCheckAuthInfo;
}

export function monitoringUptimeCheckConfigHttpCheckToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheckOutputReference | MonitoringUptimeCheckConfigHttpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    mask_headers: cdktf.booleanToTerraform(struct!.maskHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    validate_ssl: cdktf.booleanToTerraform(struct!.validateSsl),
    accepted_response_status_codes: cdktf.listMapper(monitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesToTerraform, true)(struct!.acceptedResponseStatusCodes),
    auth_info: monitoringUptimeCheckConfigHttpCheckAuthInfoToTerraform(struct!.authInfo),
  }
}

export class MonitoringUptimeCheckConfigHttpCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigHttpCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._maskHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskHeaders = this._maskHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._validateSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateSsl = this._validateSsl;
    }
    if (this._acceptedResponseStatusCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedResponseStatusCodes = this._acceptedResponseStatusCodes?.internalValue;
    }
    if (this._authInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authInfo = this._authInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigHttpCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._headers = undefined;
      this._maskHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._requestMethod = undefined;
      this._useSsl = undefined;
      this._validateSsl = undefined;
      this._acceptedResponseStatusCodes.internalValue = undefined;
      this._authInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._headers = value.headers;
      this._maskHeaders = value.maskHeaders;
      this._path = value.path;
      this._port = value.port;
      this._requestMethod = value.requestMethod;
      this._useSsl = value.useSsl;
      this._validateSsl = value.validateSsl;
      this._acceptedResponseStatusCodes.internalValue = value.acceptedResponseStatusCodes;
      this._authInfo.internalValue = value.authInfo;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // mask_headers - computed: false, optional: true, required: false
  private _maskHeaders?: boolean | cdktf.IResolvable; 
  public get maskHeaders() {
    return this.getBooleanAttribute('mask_headers');
  }
  public set maskHeaders(value: boolean | cdktf.IResolvable) {
    this._maskHeaders = value;
  }
  public resetMaskHeaders() {
    this._maskHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskHeadersInput() {
    return this._maskHeaders;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // validate_ssl - computed: false, optional: true, required: false
  private _validateSsl?: boolean | cdktf.IResolvable; 
  public get validateSsl() {
    return this.getBooleanAttribute('validate_ssl');
  }
  public set validateSsl(value: boolean | cdktf.IResolvable) {
    this._validateSsl = value;
  }
  public resetValidateSsl() {
    this._validateSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSslInput() {
    return this._validateSsl;
  }

  // accepted_response_status_codes - computed: false, optional: true, required: false
  private _acceptedResponseStatusCodes = new MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList(this, "accepted_response_status_codes", false);
  public get acceptedResponseStatusCodes() {
    return this._acceptedResponseStatusCodes;
  }
  public putAcceptedResponseStatusCodes(value: MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[] | cdktf.IResolvable) {
    this._acceptedResponseStatusCodes.internalValue = value;
  }
  public resetAcceptedResponseStatusCodes() {
    this._acceptedResponseStatusCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedResponseStatusCodesInput() {
    return this._acceptedResponseStatusCodes.internalValue;
  }

  // auth_info - computed: false, optional: true, required: false
  private _authInfo = new MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(this, "auth_info");
  public get authInfo() {
    return this._authInfo;
  }
  public putAuthInfo(value: MonitoringUptimeCheckConfigHttpCheckAuthInfo) {
    this._authInfo.internalValue = value;
  }
  public resetAuthInfo() {
    this._authInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInfoInput() {
    return this._authInfo.internalValue;
  }
}
export interface MonitoringUptimeCheckConfigMonitoredResource {
  /**
  * Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#labels MonitoringUptimeCheckConfig#labels}
  */
  readonly labels: { [key: string]: string };
  /**
  * The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#type MonitoringUptimeCheckConfig#type}
  */
  readonly type: string;
}

export function monitoringUptimeCheckConfigMonitoredResourceToTerraform(struct?: MonitoringUptimeCheckConfigMonitoredResourceOutputReference | MonitoringUptimeCheckConfigMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MonitoringUptimeCheckConfigMonitoredResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigMonitoredResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigMonitoredResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._type = value.type;
    }
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MonitoringUptimeCheckConfigResourceGroup {
  /**
  * The group of resources being monitored. Should be the 'name' of a group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#group_id MonitoringUptimeCheckConfig#group_id}
  */
  readonly groupId?: string;
  /**
  * The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#resource_type MonitoringUptimeCheckConfig#resource_type}
  */
  readonly resourceType?: string;
}

export function monitoringUptimeCheckConfigResourceGroupToTerraform(struct?: MonitoringUptimeCheckConfigResourceGroupOutputReference | MonitoringUptimeCheckConfigResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export class MonitoringUptimeCheckConfigResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigResourceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._resourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._resourceType = value.resourceType;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}
export interface MonitoringUptimeCheckConfigTcpCheck {
  /**
  * The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) to construct the full URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#port MonitoringUptimeCheckConfig#port}
  */
  readonly port: number;
}

export function monitoringUptimeCheckConfigTcpCheckToTerraform(struct?: MonitoringUptimeCheckConfigTcpCheckOutputReference | MonitoringUptimeCheckConfigTcpCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class MonitoringUptimeCheckConfigTcpCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigTcpCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigTcpCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MonitoringUptimeCheckConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#create MonitoringUptimeCheckConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#delete MonitoringUptimeCheckConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config#update MonitoringUptimeCheckConfig#update}
  */
  readonly update?: string;
}

export function monitoringUptimeCheckConfigTimeoutsToTerraform(struct?: MonitoringUptimeCheckConfigTimeoutsOutputReference | MonitoringUptimeCheckConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MonitoringUptimeCheckConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringUptimeCheckConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringUptimeCheckConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config google_monitoring_uptime_check_config}
*/
export class MonitoringUptimeCheckConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_uptime_check_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config google_monitoring_uptime_check_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringUptimeCheckConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringUptimeCheckConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_uptime_check_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkerType = config.checkerType;
    this._displayName = config.displayName;
    this._id = config.id;
    this._period = config.period;
    this._project = config.project;
    this._selectedRegions = config.selectedRegions;
    this._timeout = config.timeout;
    this._contentMatchers.internalValue = config.contentMatchers;
    this._httpCheck.internalValue = config.httpCheck;
    this._monitoredResource.internalValue = config.monitoredResource;
    this._resourceGroup.internalValue = config.resourceGroup;
    this._tcpCheck.internalValue = config.tcpCheck;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checker_type - computed: true, optional: true, required: false
  private _checkerType?: string; 
  public get checkerType() {
    return this.getStringAttribute('checker_type');
  }
  public set checkerType(value: string) {
    this._checkerType = value;
  }
  public resetCheckerType() {
    this._checkerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkerTypeInput() {
    return this._checkerType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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
    return this._project;
  }

  // selected_regions - computed: false, optional: true, required: false
  private _selectedRegions?: string[]; 
  public get selectedRegions() {
    return this.getListAttribute('selected_regions');
  }
  public set selectedRegions(value: string[]) {
    this._selectedRegions = value;
  }
  public resetSelectedRegions() {
    this._selectedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRegionsInput() {
    return this._selectedRegions;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // uptime_check_id - computed: true, optional: false, required: false
  public get uptimeCheckId() {
    return this.getStringAttribute('uptime_check_id');
  }

  // content_matchers - computed: false, optional: true, required: false
  private _contentMatchers = new MonitoringUptimeCheckConfigContentMatchersList(this, "content_matchers", false);
  public get contentMatchers() {
    return this._contentMatchers;
  }
  public putContentMatchers(value: MonitoringUptimeCheckConfigContentMatchers[] | cdktf.IResolvable) {
    this._contentMatchers.internalValue = value;
  }
  public resetContentMatchers() {
    this._contentMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMatchersInput() {
    return this._contentMatchers.internalValue;
  }

  // http_check - computed: false, optional: true, required: false
  private _httpCheck = new MonitoringUptimeCheckConfigHttpCheckOutputReference(this, "http_check");
  public get httpCheck() {
    return this._httpCheck;
  }
  public putHttpCheck(value: MonitoringUptimeCheckConfigHttpCheck) {
    this._httpCheck.internalValue = value;
  }
  public resetHttpCheck() {
    this._httpCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCheckInput() {
    return this._httpCheck.internalValue;
  }

  // monitored_resource - computed: false, optional: true, required: false
  private _monitoredResource = new MonitoringUptimeCheckConfigMonitoredResourceOutputReference(this, "monitored_resource");
  public get monitoredResource() {
    return this._monitoredResource;
  }
  public putMonitoredResource(value: MonitoringUptimeCheckConfigMonitoredResource) {
    this._monitoredResource.internalValue = value;
  }
  public resetMonitoredResource() {
    this._monitoredResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceInput() {
    return this._monitoredResource.internalValue;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup = new MonitoringUptimeCheckConfigResourceGroupOutputReference(this, "resource_group");
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public putResourceGroup(value: MonitoringUptimeCheckConfigResourceGroup) {
    this._resourceGroup.internalValue = value;
  }
  public resetResourceGroup() {
    this._resourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup.internalValue;
  }

  // tcp_check - computed: false, optional: true, required: false
  private _tcpCheck = new MonitoringUptimeCheckConfigTcpCheckOutputReference(this, "tcp_check");
  public get tcpCheck() {
    return this._tcpCheck;
  }
  public putTcpCheck(value: MonitoringUptimeCheckConfigTcpCheck) {
    this._tcpCheck.internalValue = value;
  }
  public resetTcpCheck() {
    this._tcpCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCheckInput() {
    return this._tcpCheck.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringUptimeCheckConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringUptimeCheckConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checker_type: cdktf.stringToTerraform(this._checkerType),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.stringToTerraform(this._period),
      project: cdktf.stringToTerraform(this._project),
      selected_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedRegions),
      timeout: cdktf.stringToTerraform(this._timeout),
      content_matchers: cdktf.listMapper(monitoringUptimeCheckConfigContentMatchersToTerraform, true)(this._contentMatchers.internalValue),
      http_check: monitoringUptimeCheckConfigHttpCheckToTerraform(this._httpCheck.internalValue),
      monitored_resource: monitoringUptimeCheckConfigMonitoredResourceToTerraform(this._monitoredResource.internalValue),
      resource_group: monitoringUptimeCheckConfigResourceGroupToTerraform(this._resourceGroup.internalValue),
      tcp_check: monitoringUptimeCheckConfigTcpCheckToTerraform(this._tcpCheck.internalValue),
      timeouts: monitoringUptimeCheckConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
