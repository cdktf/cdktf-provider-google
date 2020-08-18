// https://www.terraform.io/docs/providers/google/r/compute_target_https_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeTargetHttpsProxyConfig extends TerraformMetaArguments {
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
  /** Specifies the QUIC override policy for this resource. This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, uses the QUIC policy with no user overrides, which is
equivalent to DISABLE. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"] */
  readonly quicOverride?: string;
  /** A list of SslCertificate resources that are used to authenticate
connections between users and the load balancer. At least one SSL
certificate must be specified. */
  readonly sslCertificates: string[];
  /** A reference to the SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured. */
  readonly sslPolicy?: string;
  /** A reference to the UrlMap resource that defines the mapping from URL
to the BackendService. */
  readonly urlMap: string;
  /** timeouts block */
  readonly timeouts?: ComputeTargetHttpsProxyTimeouts;
}
export interface ComputeTargetHttpsProxyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeTargetHttpsProxy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeTargetHttpsProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_https_proxy',
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
    this._quicOverride = config.quicOverride;
    this._sslCertificates = config.sslCertificates;
    this._sslPolicy = config.sslPolicy;
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

  // quic_override - computed: false, optional: true, required: false
  private _quicOverride?: string;
  public get quicOverride() {
    return this._quicOverride;
  }
  public set quicOverride(value: string | undefined) {
    this._quicOverride = value;
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

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy?: string;
  public get sslPolicy() {
    return this._sslPolicy;
  }
  public set sslPolicy(value: string | undefined) {
    this._sslPolicy = value;
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
  private _timeouts?: ComputeTargetHttpsProxyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeTargetHttpsProxyTimeouts | undefined) {
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
      quic_override: this._quicOverride,
      ssl_certificates: this._sslCertificates,
      ssl_policy: this._sslPolicy,
      url_map: this._urlMap,
      timeouts: this._timeouts,
    };
  }
}
