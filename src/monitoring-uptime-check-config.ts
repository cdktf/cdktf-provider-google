// https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringUptimeCheckConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#display_name MonitoringUptimeCheckConfig#display_name}
  */
  readonly displayName: string;
  /**
  * How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#period MonitoringUptimeCheckConfig#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#project MonitoringUptimeCheckConfig#project}
  */
  readonly project?: string;
  /**
  * The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#selected_regions MonitoringUptimeCheckConfig#selected_regions}
  */
  readonly selectedRegions?: string[];
  /**
  * The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Accepted formats https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#timeout MonitoringUptimeCheckConfig#timeout}
  */
  readonly timeout: string;
  /**
  * content_matchers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#content_matchers MonitoringUptimeCheckConfig#content_matchers}
  */
  readonly contentMatchers?: MonitoringUptimeCheckConfigContentMatchers[];
  /**
  * http_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#http_check MonitoringUptimeCheckConfig#http_check}
  */
  readonly httpCheck?: MonitoringUptimeCheckConfigHttpCheck;
  /**
  * monitored_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#monitored_resource MonitoringUptimeCheckConfig#monitored_resource}
  */
  readonly monitoredResource?: MonitoringUptimeCheckConfigMonitoredResource;
  /**
  * resource_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#resource_group MonitoringUptimeCheckConfig#resource_group}
  */
  readonly resourceGroup?: MonitoringUptimeCheckConfigResourceGroup;
  /**
  * tcp_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#tcp_check MonitoringUptimeCheckConfig#tcp_check}
  */
  readonly tcpCheck?: MonitoringUptimeCheckConfigTcpCheck;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#timeouts MonitoringUptimeCheckConfig#timeouts}
  */
  readonly timeouts?: MonitoringUptimeCheckConfigTimeouts;
}
export interface MonitoringUptimeCheckConfigContentMatchers {
  /**
  * String or regex content to match (max 1024 bytes)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#content MonitoringUptimeCheckConfig#content}
  */
  readonly content: string;
  /**
  * The type of content matcher that will be applied to the server output, compared to the content string when the check is run. Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#matcher MonitoringUptimeCheckConfig#matcher}
  */
  readonly matcher?: string;
}

function monitoringUptimeCheckConfigContentMatchersToTerraform(struct?: MonitoringUptimeCheckConfigContentMatchers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    matcher: cdktf.stringToTerraform(struct!.matcher),
  }
}

export interface MonitoringUptimeCheckConfigHttpCheckAuthInfo {
  /**
  * The password to authenticate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#password MonitoringUptimeCheckConfig#password}
  */
  readonly password: string;
  /**
  * The username to authenticate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#username MonitoringUptimeCheckConfig#username}
  */
  readonly username: string;
}

function monitoringUptimeCheckConfigHttpCheckAuthInfoToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference | MonitoringUptimeCheckConfigHttpCheckAuthInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._password
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
    return this._username
  }
}
export interface MonitoringUptimeCheckConfigHttpCheck {
  /**
  * The request body associated with the HTTP POST request. If contentType is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the requestMethod is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#body MonitoringUptimeCheckConfig#body}
  */
  readonly body?: string;
  /**
  * The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#content_type MonitoringUptimeCheckConfig#content_type}
  */
  readonly contentType?: string;
  /**
  * The list of headers to send as part of the uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#headers MonitoringUptimeCheckConfig#headers}
  */
  readonly headers?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#mask_headers MonitoringUptimeCheckConfig#mask_headers}
  */
  readonly maskHeaders?: boolean | cdktf.IResolvable;
  /**
  * The path to the page to run the check against. Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. Optional (defaults to "/").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#path MonitoringUptimeCheckConfig#path}
  */
  readonly path?: string;
  /**
  * The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#port MonitoringUptimeCheckConfig#port}
  */
  readonly port?: number;
  /**
  * The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then requestMethod defaults to GET. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#request_method MonitoringUptimeCheckConfig#request_method}
  */
  readonly requestMethod?: string;
  /**
  * If true, use HTTPS instead of HTTP to run the check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#use_ssl MonitoringUptimeCheckConfig#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitoredResource is set to uptime_url. If useSsl is false, setting validateSsl to true has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#validate_ssl MonitoringUptimeCheckConfig#validate_ssl}
  */
  readonly validateSsl?: boolean | cdktf.IResolvable;
  /**
  * auth_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#auth_info MonitoringUptimeCheckConfig#auth_info}
  */
  readonly authInfo?: MonitoringUptimeCheckConfigHttpCheckAuthInfo;
}

function monitoringUptimeCheckConfigHttpCheckToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheckOutputReference | MonitoringUptimeCheckConfigHttpCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headers),
    mask_headers: cdktf.booleanToTerraform(struct!.maskHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    validate_ssl: cdktf.booleanToTerraform(struct!.validateSsl),
    auth_info: monitoringUptimeCheckConfigHttpCheckAuthInfoToTerraform(struct!.authInfo),
  }
}

export class MonitoringUptimeCheckConfigHttpCheckOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string | undefined; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // mask_headers - computed: false, optional: true, required: false
  private _maskHeaders?: boolean | cdktf.IResolvable | undefined; 
  public get maskHeaders() {
    return this.getBooleanAttribute('mask_headers') as any;
  }
  public set maskHeaders(value: boolean | cdktf.IResolvable | undefined) {
    this._maskHeaders = value;
  }
  public resetMaskHeaders() {
    this._maskHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskHeadersInput() {
    return this._maskHeaders
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: true, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string | undefined; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string | undefined) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable | undefined; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl') as any;
  }
  public set useSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl
  }

  // validate_ssl - computed: false, optional: true, required: false
  private _validateSsl?: boolean | cdktf.IResolvable | undefined; 
  public get validateSsl() {
    return this.getBooleanAttribute('validate_ssl') as any;
  }
  public set validateSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._validateSsl = value;
  }
  public resetValidateSsl() {
    this._validateSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSslInput() {
    return this._validateSsl
  }

  // auth_info - computed: false, optional: true, required: false
  private _authInfo?: MonitoringUptimeCheckConfigHttpCheckAuthInfo | undefined; 
  private __authInfoOutput = new MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(this as any, "auth_info", true);
  public get authInfo() {
    return this.__authInfoOutput;
  }
  public putAuthInfo(value: MonitoringUptimeCheckConfigHttpCheckAuthInfo | undefined) {
    this._authInfo = value;
  }
  public resetAuthInfo() {
    this._authInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInfoInput() {
    return this._authInfo
  }
}
export interface MonitoringUptimeCheckConfigMonitoredResource {
  /**
  * Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#labels MonitoringUptimeCheckConfig#labels}
  */
  readonly labels: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#type MonitoringUptimeCheckConfig#type}
  */
  readonly type: string;
}

function monitoringUptimeCheckConfigMonitoredResourceToTerraform(struct?: MonitoringUptimeCheckConfigMonitoredResourceOutputReference | MonitoringUptimeCheckConfigMonitoredResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MonitoringUptimeCheckConfigMonitoredResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
    return this._type
  }
}
export interface MonitoringUptimeCheckConfigResourceGroup {
  /**
  * The group of resources being monitored. Should be the 'name' of a group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#group_id MonitoringUptimeCheckConfig#group_id}
  */
  readonly groupId?: string;
  /**
  * The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#resource_type MonitoringUptimeCheckConfig#resource_type}
  */
  readonly resourceType?: string;
}

function monitoringUptimeCheckConfigResourceGroupToTerraform(struct?: MonitoringUptimeCheckConfigResourceGroupOutputReference | MonitoringUptimeCheckConfigResourceGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export class MonitoringUptimeCheckConfigResourceGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string | undefined; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string | undefined) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string | undefined; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string | undefined) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }
}
export interface MonitoringUptimeCheckConfigTcpCheck {
  /**
  * The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) to construct the full URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#port MonitoringUptimeCheckConfig#port}
  */
  readonly port: number;
}

function monitoringUptimeCheckConfigTcpCheckToTerraform(struct?: MonitoringUptimeCheckConfigTcpCheckOutputReference | MonitoringUptimeCheckConfigTcpCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class MonitoringUptimeCheckConfigTcpCheckOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._port
  }
}
export interface MonitoringUptimeCheckConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#create MonitoringUptimeCheckConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#delete MonitoringUptimeCheckConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html#update MonitoringUptimeCheckConfig#update}
  */
  readonly update?: string;
}

function monitoringUptimeCheckConfigTimeoutsToTerraform(struct?: MonitoringUptimeCheckConfigTimeoutsOutputReference | MonitoringUptimeCheckConfigTimeouts): any {
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

export class MonitoringUptimeCheckConfigTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html google_monitoring_uptime_check_config}
*/
export class MonitoringUptimeCheckConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_uptime_check_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html google_monitoring_uptime_check_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringUptimeCheckConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringUptimeCheckConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_uptime_check_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._period = config.period;
    this._project = config.project;
    this._selectedRegions = config.selectedRegions;
    this._timeout = config.timeout;
    this._contentMatchers = config.contentMatchers;
    this._httpCheck = config.httpCheck;
    this._monitoredResource = config.monitoredResource;
    this._resourceGroup = config.resourceGroup;
    this._tcpCheck = config.tcpCheck;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: false, optional: true, required: false
  private _period?: string | undefined; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string | undefined) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
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

  // selected_regions - computed: false, optional: true, required: false
  private _selectedRegions?: string[] | undefined; 
  public get selectedRegions() {
    return this.getListAttribute('selected_regions');
  }
  public set selectedRegions(value: string[] | undefined) {
    this._selectedRegions = value;
  }
  public resetSelectedRegions() {
    this._selectedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRegionsInput() {
    return this._selectedRegions
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
    return this._timeout
  }

  // uptime_check_id - computed: true, optional: false, required: false
  public get uptimeCheckId() {
    return this.getStringAttribute('uptime_check_id');
  }

  // content_matchers - computed: false, optional: true, required: false
  private _contentMatchers?: MonitoringUptimeCheckConfigContentMatchers[] | undefined; 
  public get contentMatchers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('content_matchers') as any;
  }
  public set contentMatchers(value: MonitoringUptimeCheckConfigContentMatchers[] | undefined) {
    this._contentMatchers = value;
  }
  public resetContentMatchers() {
    this._contentMatchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMatchersInput() {
    return this._contentMatchers
  }

  // http_check - computed: false, optional: true, required: false
  private _httpCheck?: MonitoringUptimeCheckConfigHttpCheck | undefined; 
  private __httpCheckOutput = new MonitoringUptimeCheckConfigHttpCheckOutputReference(this as any, "http_check", true);
  public get httpCheck() {
    return this.__httpCheckOutput;
  }
  public putHttpCheck(value: MonitoringUptimeCheckConfigHttpCheck | undefined) {
    this._httpCheck = value;
  }
  public resetHttpCheck() {
    this._httpCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCheckInput() {
    return this._httpCheck
  }

  // monitored_resource - computed: false, optional: true, required: false
  private _monitoredResource?: MonitoringUptimeCheckConfigMonitoredResource | undefined; 
  private __monitoredResourceOutput = new MonitoringUptimeCheckConfigMonitoredResourceOutputReference(this as any, "monitored_resource", true);
  public get monitoredResource() {
    return this.__monitoredResourceOutput;
  }
  public putMonitoredResource(value: MonitoringUptimeCheckConfigMonitoredResource | undefined) {
    this._monitoredResource = value;
  }
  public resetMonitoredResource() {
    this._monitoredResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceInput() {
    return this._monitoredResource
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: MonitoringUptimeCheckConfigResourceGroup | undefined; 
  private __resourceGroupOutput = new MonitoringUptimeCheckConfigResourceGroupOutputReference(this as any, "resource_group", true);
  public get resourceGroup() {
    return this.__resourceGroupOutput;
  }
  public putResourceGroup(value: MonitoringUptimeCheckConfigResourceGroup | undefined) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup
  }

  // tcp_check - computed: false, optional: true, required: false
  private _tcpCheck?: MonitoringUptimeCheckConfigTcpCheck | undefined; 
  private __tcpCheckOutput = new MonitoringUptimeCheckConfigTcpCheckOutputReference(this as any, "tcp_check", true);
  public get tcpCheck() {
    return this.__tcpCheckOutput;
  }
  public putTcpCheck(value: MonitoringUptimeCheckConfigTcpCheck | undefined) {
    this._tcpCheck = value;
  }
  public resetTcpCheck() {
    this._tcpCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCheckInput() {
    return this._tcpCheck
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringUptimeCheckConfigTimeouts | undefined; 
  private __timeoutsOutput = new MonitoringUptimeCheckConfigTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitoringUptimeCheckConfigTimeouts | undefined) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      period: cdktf.stringToTerraform(this._period),
      project: cdktf.stringToTerraform(this._project),
      selected_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._selectedRegions),
      timeout: cdktf.stringToTerraform(this._timeout),
      content_matchers: cdktf.listMapper(monitoringUptimeCheckConfigContentMatchersToTerraform)(this._contentMatchers),
      http_check: monitoringUptimeCheckConfigHttpCheckToTerraform(this._httpCheck),
      monitored_resource: monitoringUptimeCheckConfigMonitoredResourceToTerraform(this._monitoredResource),
      resource_group: monitoringUptimeCheckConfigResourceGroupToTerraform(this._resourceGroup),
      tcp_check: monitoringUptimeCheckConfigTcpCheckToTerraform(this._tcpCheck),
      timeouts: monitoringUptimeCheckConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
