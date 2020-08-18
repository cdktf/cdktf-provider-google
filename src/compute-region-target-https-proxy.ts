// https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionTargetHttpsProxyConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** A list of RegionSslCertificate resources that are used to authenticate
connections between users and the load balancer. Currently, exactly
one SSL certificate must be specified. */
  readonly sslCertificates: string[];
  /** A reference to the RegionUrlMap resource that defines the mapping from URL
to the RegionBackendService. */
  readonly urlMap: string;
  /** timeouts block */
  readonly timeouts?: ComputeRegionTargetHttpsProxyTimeouts;
}
export interface ComputeRegionTargetHttpsProxyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRegionTargetHttpsProxy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionTargetHttpsProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_target_https_proxy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._sslCertificates = config.sslCertificates;
    this._urlMap = config.urlMap;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // proxy_id - computed: true, optional: false, required: true
  public get proxyId() {
    return this.getNumberAttribute('proxy_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // ssl_certificates - computed: false, optional: false, required: true
  private _sslCertificates: string[];
  public get sslCertificates() {
    return this._sslCertificates;
  }
  public set sslCertificates(value: string[]) {
    this._sslCertificates = value;
  }

  // url_map - computed: false, optional: false, required: true
  private _urlMap: string;
  public get urlMap() {
    return this._urlMap;
  }
  public set urlMap(value: string) {
    this._urlMap = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionTargetHttpsProxyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRegionTargetHttpsProxyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      region: this._region,
      ssl_certificates: this._sslCertificates,
      url_map: this._urlMap,
      timeouts: this._timeouts,
    };
  }
}
