// https://www.terraform.io/docs/providers/google/r/compute_target_ssl_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeTargetSslProxyConfig extends TerraformMetaArguments {
  /** A reference to the BackendService resource. */
  readonly backendService: string;
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
  /** Specifies the type of proxy header to append before sending data to
the backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"] */
  readonly proxyHeader?: string;
  /** A list of SslCertificate resources that are used to authenticate
connections between users and the load balancer. Currently, exactly
one SSL certificate must be specified. */
  readonly sslCertificates: string[];
  /** A reference to the SslPolicy resource that will be associated with
the TargetSslProxy resource. If not set, the TargetSslProxy
resource will not have any SSL policy configured. */
  readonly sslPolicy?: string;
  /** timeouts block */
  readonly timeouts?: ComputeTargetSslProxyTimeouts;
}
export interface ComputeTargetSslProxyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeTargetSslProxy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeTargetSslProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_ssl_proxy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendService = config.backendService;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._proxyHeader = config.proxyHeader;
    this._sslCertificates = config.sslCertificates;
    this._sslPolicy = config.sslPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_service - computed: false, optional: false, required: true
  private _backendService: string;
  public get backendService() {
    return this._backendService;
  }
  public set backendService(value: string) {
    this._backendService = value;
  }

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

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string;
  public get proxyHeader() {
    return this._proxyHeader;
  }
  public set proxyHeader(value: string | undefined) {
    this._proxyHeader = value;
  }

  // proxy_id - computed: true, optional: false, required: true
  public get proxyId() {
    return this.getNumberAttribute('proxy_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeTargetSslProxyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeTargetSslProxyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_service: this._backendService,
      description: this._description,
      name: this._name,
      project: this._project,
      proxy_header: this._proxyHeader,
      ssl_certificates: this._sslCertificates,
      ssl_policy: this._sslPolicy,
      timeouts: this._timeouts,
    };
  }
}
