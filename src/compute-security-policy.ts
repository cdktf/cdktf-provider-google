// https://www.terraform.io/docs/providers/google/r/compute_security_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSecurityPolicyConfig extends TerraformMetaArguments {
  /** An optional description of this security policy. Max size is 2048. */
  readonly description?: string;
  /** The name of the security policy. */
  readonly name: string;
  /** The project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** rule block */
  readonly rule?: ComputeSecurityPolicyRule[];
  /** timeouts block */
  readonly timeouts?: ComputeSecurityPolicyTimeouts;
}
export interface ComputeSecurityPolicyRuleMatchConfig {
  /** Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior). */
  readonly srcIpRanges: string[];
}
export interface ComputeSecurityPolicyRuleMatchExpr {
  /** Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported. */
  readonly expression: string;
}
export interface ComputeSecurityPolicyRuleMatch {
  /** Predefined rule expression. If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config. */
  readonly versionedExpr?: string;
  /** config block */
  readonly config?: ComputeSecurityPolicyRuleMatchConfig[];
  /** expr block */
  readonly expr?: ComputeSecurityPolicyRuleMatchExpr[];
}
export interface ComputeSecurityPolicyRule {
  /** Action to take when match matches the request. Valid values:   "allow" : allow access to target, "deny(status)" : deny access to target, returns the HTTP response code specified (valid values are 403, 404 and 502) */
  readonly action: string;
  /** An optional description of this rule. Max size is 64. */
  readonly description?: string;
  /** When set to true, the action specified above is not enforced. Stackdriver logs for requests that trigger a preview action are annotated as such. */
  readonly preview?: boolean;
  /** An unique positive integer indicating the priority of evaluation for a rule. Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order. */
  readonly priority: number;
  /** match block */
  readonly match: ComputeSecurityPolicyRuleMatch[];
}
export interface ComputeSecurityPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeSecurityPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_security_policy',
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
    this._rule = config.rule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: ComputeSecurityPolicyRule[];
  public get rule() {
    return this._rule;
  }
  public set rule(value: ComputeSecurityPolicyRule[] | undefined) {
    this._rule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSecurityPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeSecurityPolicyTimeouts | undefined) {
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
      rule: this._rule,
      timeouts: this._timeouts,
    };
  }
}
