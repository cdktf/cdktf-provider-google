// https://www.terraform.io/docs/providers/google/r/monitoring_uptime_check_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitoringUptimeCheckConfigConfig extends TerraformMetaArguments {
  /** A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced. */
  readonly displayName: string;
  readonly isInternal?: boolean;
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
  /** internal_checkers block */
  readonly internalCheckers?: MonitoringUptimeCheckConfigInternalCheckers[];
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
export interface MonitoringUptimeCheckConfigHttpCheckAuthInfo {
  /** The password to authenticate. */
  readonly password: string;
  /** The username to authenticate. */
  readonly username: string;
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
export interface MonitoringUptimeCheckConfigInternalCheckers {
  readonly displayName?: string;
  readonly gcpZone?: string;
  readonly name?: string;
  readonly network?: string;
  readonly peerProjectId?: string;
}
export interface MonitoringUptimeCheckConfigMonitoredResource {
  /** Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
  readonly labels: { [key: string]: string };
  /** The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
  readonly type: string;
}
export interface MonitoringUptimeCheckConfigResourceGroup {
  /** The group of resources being monitored. Should be the 'name' of a group */
  readonly groupId?: string;
  /** The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"] */
  readonly resourceType?: string;
}
export interface MonitoringUptimeCheckConfigTcpCheck {
  /** The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) to construct the full URL. */
  readonly port: number;
}
export interface MonitoringUptimeCheckConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringUptimeCheckConfig extends TerraformResource {

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
    this._isInternal = config.isInternal;
    this._period = config.period;
    this._project = config.project;
    this._selectedRegions = config.selectedRegions;
    this._timeout = config.timeout;
    this._contentMatchers = config.contentMatchers;
    this._httpCheck = config.httpCheck;
    this._internalCheckers = config.internalCheckers;
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
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_internal - computed: true, optional: true, required: false
  private _isInternal?: boolean;
  public get isInternal() {
    return this._isInternal ?? this.getBooleanAttribute('is_internal');
  }
  public set isInternal(value: boolean | undefined) {
    this._isInternal = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: false, optional: true, required: false
  private _period?: string;
  public get period() {
    return this._period;
  }
  public set period(value: string | undefined) {
    this._period = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // selected_regions - computed: false, optional: true, required: false
  private _selectedRegions?: string[];
  public get selectedRegions() {
    return this._selectedRegions;
  }
  public set selectedRegions(value: string[] | undefined) {
    this._selectedRegions = value;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout: string;
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: string) {
    this._timeout = value;
  }

  // uptime_check_id - computed: true, optional: false, required: true
  public get uptimeCheckId() {
    return this.getStringAttribute('uptime_check_id');
  }

  // content_matchers - computed: false, optional: true, required: false
  private _contentMatchers?: MonitoringUptimeCheckConfigContentMatchers[];
  public get contentMatchers() {
    return this._contentMatchers;
  }
  public set contentMatchers(value: MonitoringUptimeCheckConfigContentMatchers[] | undefined) {
    this._contentMatchers = value;
  }

  // http_check - computed: false, optional: true, required: false
  private _httpCheck?: MonitoringUptimeCheckConfigHttpCheck[];
  public get httpCheck() {
    return this._httpCheck;
  }
  public set httpCheck(value: MonitoringUptimeCheckConfigHttpCheck[] | undefined) {
    this._httpCheck = value;
  }

  // internal_checkers - computed: false, optional: true, required: false
  private _internalCheckers?: MonitoringUptimeCheckConfigInternalCheckers[];
  public get internalCheckers() {
    return this._internalCheckers;
  }
  public set internalCheckers(value: MonitoringUptimeCheckConfigInternalCheckers[] | undefined) {
    this._internalCheckers = value;
  }

  // monitored_resource - computed: false, optional: true, required: false
  private _monitoredResource?: MonitoringUptimeCheckConfigMonitoredResource[];
  public get monitoredResource() {
    return this._monitoredResource;
  }
  public set monitoredResource(value: MonitoringUptimeCheckConfigMonitoredResource[] | undefined) {
    this._monitoredResource = value;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: MonitoringUptimeCheckConfigResourceGroup[];
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public set resourceGroup(value: MonitoringUptimeCheckConfigResourceGroup[] | undefined) {
    this._resourceGroup = value;
  }

  // tcp_check - computed: false, optional: true, required: false
  private _tcpCheck?: MonitoringUptimeCheckConfigTcpCheck[];
  public get tcpCheck() {
    return this._tcpCheck;
  }
  public set tcpCheck(value: MonitoringUptimeCheckConfigTcpCheck[] | undefined) {
    this._tcpCheck = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringUptimeCheckConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringUptimeCheckConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      is_internal: this._isInternal,
      period: this._period,
      project: this._project,
      selected_regions: this._selectedRegions,
      timeout: this._timeout,
      content_matchers: this._contentMatchers,
      http_check: this._httpCheck,
      internal_checkers: this._internalCheckers,
      monitored_resource: this._monitoredResource,
      resource_group: this._resourceGroup,
      tcp_check: this._tcpCheck,
      timeouts: this._timeouts,
    };
  }
}
