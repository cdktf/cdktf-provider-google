// https://www.terraform.io/docs/providers/google/r/compute_ssl_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSslPolicyConfig extends TerraformMetaArguments {
  /** Profile specifies the set of SSL features that can be used by the
load balancer when negotiating SSL with clients. This can be one of
'COMPATIBLE', 'MODERN', 'RESTRICTED', or 'CUSTOM'. If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile. */
  readonly customFeatures?: string[];
  /** An optional description of this resource. */
  readonly description?: string;
  /** The minimum version of SSL protocol that can be used by the clients
to establish a connection with the load balancer. Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"] */
  readonly minTlsVersion?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** Profile specifies the set of SSL features that can be used by the
load balancer when negotiating SSL with clients. If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"] */
  readonly profile?: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeSslPolicyTimeouts;
}
export interface ComputeSslPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeSslPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSslPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_ssl_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customFeatures = config.customFeatures;
    this._description = config.description;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._profile = config.profile;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // custom_features - computed: false, optional: true, required: false
  private _customFeatures?: string[];
  public get customFeatures() {
    return this._customFeatures;
  }
  public set customFeatures(value: string[] | undefined) {
    this._customFeatures = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enabled_features - computed: true, optional: false, required: true
  public get enabledFeatures() {
    return this.getListAttribute('enabled_features');
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string;
  public get minTlsVersion() {
    return this._minTlsVersion;
  }
  public set minTlsVersion(value: string | undefined) {
    this._minTlsVersion = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string;
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSslPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeSslPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_features: this._customFeatures,
      description: this._description,
      min_tls_version: this._minTlsVersion,
      name: this._name,
      profile: this._profile,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
