// https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringUptimeCheckConfigConfig extends cdktf.TerraformMetaArguments {
  /** A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced. */
  readonly displayName: string;
  /** How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s. */
  readonly period?: string;
  readonly project?: string;
  /** The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions. */
  readonly selectedRegions?: string[];
  /** The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Accepted formats https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration */
  readonly timeout: string;
  /** content_matchers block */
  readonly contentMatchers?: MonitoringUptimeCheckConfigContentMatchers[];
  /** http_check block */
  readonly httpCheck?: MonitoringUptimeCheckConfigHttpCheck[];
  /** monitored_resource block */
  readonly monitoredResource?: MonitoringUptimeCheckConfigMonitoredResource[];
  /** resource_group block */
  readonly resourceGroup?: MonitoringUptimeCheckConfigResourceGroup[];
  /** tcp_check block */
  readonly tcpCheck?: MonitoringUptimeCheckConfigTcpCheck[];
  /** timeouts block */
  readonly timeouts?: MonitoringUptimeCheckConfigTimeouts;
}
export interface MonitoringUptimeCheckConfigContentMatchers {
  /** String or regex content to match (max 1024 bytes) */
  readonly content: string;
  /** The type of content matcher that will be applied to the server output, compared to the content string when the check is run. Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NON_MATCHES_REGEX"] */
  readonly matcher?: string;
}

function monitoringUptimeCheckConfigContentMatchersToTerraform(struct?: MonitoringUptimeCheckConfigContentMatchers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    matcher: cdktf.stringToTerraform(struct!.matcher),
  }
}

export interface MonitoringUptimeCheckConfigHttpCheckAuthInfo {
  /** The password to authenticate. */
  readonly password: string;
  /** The username to authenticate. */
  readonly username: string;
}

function monitoringUptimeCheckConfigHttpCheckAuthInfoToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheckAuthInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface MonitoringUptimeCheckConfigHttpCheck {
  /** The request body associated with the HTTP POST request. If contentType is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the requestMethod is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=". */
  readonly body?: string;
  /** The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED"] */
  readonly contentType?: string;
  /** The list of headers to send as part of the uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100. */
  readonly headers?: { [key: string]: string };
  /** Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******. */
  readonly maskHeaders?: boolean;
  /** The path to the page to run the check against. Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. Optional (defaults to "/"). */
  readonly path?: string;
  /** The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL). */
  readonly port?: number;
  /** The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then requestMethod defaults to GET. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"] */
  readonly requestMethod?: string;
  /** If true, use HTTPS instead of HTTP to run the check. */
  readonly useSsl?: boolean;
  /** Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitoredResource is set to uptime_url. If useSsl is false, setting validateSsl to true has no effect. */
  readonly validateSsl?: boolean;
  /** auth_info block */
  readonly authInfo?: MonitoringUptimeCheckConfigHttpCheckAuthInfo[];
}

function monitoringUptimeCheckConfigHttpCheckToTerraform(struct?: MonitoringUptimeCheckConfigHttpCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    auth_info: cdktf.listMapper(monitoringUptimeCheckConfigHttpCheckAuthInfoToTerraform)(struct!.authInfo),
  }
}

export interface MonitoringUptimeCheckConfigMonitoredResource {
  /** Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
  readonly labels: { [key: string]: string };
  /** The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
  readonly type: string;
}

function monitoringUptimeCheckConfigMonitoredResourceToTerraform(struct?: MonitoringUptimeCheckConfigMonitoredResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface MonitoringUptimeCheckConfigResourceGroup {
  /** The group of resources being monitored. Should be the 'name' of a group */
  readonly groupId?: string;
  /** The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"] */
  readonly resourceType?: string;
}

function monitoringUptimeCheckConfigResourceGroupToTerraform(struct?: MonitoringUptimeCheckConfigResourceGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export interface MonitoringUptimeCheckConfigTcpCheck {
  /** The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) to construct the full URL. */
  readonly port: number;
}

function monitoringUptimeCheckConfigTcpCheckToTerraform(struct?: MonitoringUptimeCheckConfigTcpCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface MonitoringUptimeCheckConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function monitoringUptimeCheckConfigTimeoutsToTerraform(struct?: MonitoringUptimeCheckConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitoringUptimeCheckConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _displayName: string;
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
  private _period?: string;
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string ) {
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

  // selected_regions - computed: false, optional: true, required: false
  private _selectedRegions?: string[];
  public get selectedRegions() {
    return this.getListAttribute('selected_regions');
  }
  public set selectedRegions(value: string[] ) {
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
  private _timeout: string;
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
  private _contentMatchers?: MonitoringUptimeCheckConfigContentMatchers[];
  public get contentMatchers() {
    return this.interpolationForAttribute('content_matchers') as any;
  }
  public set contentMatchers(value: MonitoringUptimeCheckConfigContentMatchers[] ) {
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
  private _httpCheck?: MonitoringUptimeCheckConfigHttpCheck[];
  public get httpCheck() {
    return this.interpolationForAttribute('http_check') as any;
  }
  public set httpCheck(value: MonitoringUptimeCheckConfigHttpCheck[] ) {
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
  private _monitoredResource?: MonitoringUptimeCheckConfigMonitoredResource[];
  public get monitoredResource() {
    return this.interpolationForAttribute('monitored_resource') as any;
  }
  public set monitoredResource(value: MonitoringUptimeCheckConfigMonitoredResource[] ) {
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
  private _resourceGroup?: MonitoringUptimeCheckConfigResourceGroup[];
  public get resourceGroup() {
    return this.interpolationForAttribute('resource_group') as any;
  }
  public set resourceGroup(value: MonitoringUptimeCheckConfigResourceGroup[] ) {
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
  private _tcpCheck?: MonitoringUptimeCheckConfigTcpCheck[];
  public get tcpCheck() {
    return this.interpolationForAttribute('tcp_check') as any;
  }
  public set tcpCheck(value: MonitoringUptimeCheckConfigTcpCheck[] ) {
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
  private _timeouts?: MonitoringUptimeCheckConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitoringUptimeCheckConfigTimeouts ) {
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
      http_check: cdktf.listMapper(monitoringUptimeCheckConfigHttpCheckToTerraform)(this._httpCheck),
      monitored_resource: cdktf.listMapper(monitoringUptimeCheckConfigMonitoredResourceToTerraform)(this._monitoredResource),
      resource_group: cdktf.listMapper(monitoringUptimeCheckConfigResourceGroupToTerraform)(this._resourceGroup),
      tcp_check: cdktf.listMapper(monitoringUptimeCheckConfigTcpCheckToTerraform)(this._tcpCheck),
      timeouts: monitoringUptimeCheckConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
