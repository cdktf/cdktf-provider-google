// https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BinaryAuthorizationPolicyConfig extends TerraformMetaArguments {
  /** A descriptive comment. */
  readonly description?: string;
  /** Controls the evaluation of a Google-maintained global admission policy
for common system-level images. Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"] */
  readonly globalPolicyEvaluationMode?: string;
  readonly project?: string;
  /** admission_whitelist_patterns block */
  readonly admissionWhitelistPatterns?: BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
  /** cluster_admission_rules block */
  readonly clusterAdmissionRules?: BinaryAuthorizationPolicyClusterAdmissionRules[];
  /** default_admission_rule block */
  readonly defaultAdmissionRule: BinaryAuthorizationPolicyDefaultAdmissionRule[];
  /** timeouts block */
  readonly timeouts?: BinaryAuthorizationPolicyTimeouts;
}
export interface BinaryAuthorizationPolicyAdmissionWhitelistPatterns {
  /** An image name pattern to whitelist, in the form
'registry/path/to/image'. This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part. */
  readonly namePattern: string;
}
export interface BinaryAuthorizationPolicyClusterAdmissionRules {
  readonly cluster: string;
  /** The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"] */
  readonly enforcementMode: string;
  /** How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"] */
  readonly evaluationMode: string;
  /** The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format 'projects/*\/attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty. */
  readonly requireAttestationsBy?: string[];
}
export interface BinaryAuthorizationPolicyDefaultAdmissionRule {
  /** The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"] */
  readonly enforcementMode: string;
  /** How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"] */
  readonly evaluationMode: string;
  /** The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format 'projects/*\/attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty. */
  readonly requireAttestationsBy?: string[];
}
export interface BinaryAuthorizationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BinaryAuthorizationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BinaryAuthorizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._globalPolicyEvaluationMode = config.globalPolicyEvaluationMode;
    this._project = config.project;
    this._admissionWhitelistPatterns = config.admissionWhitelistPatterns;
    this._clusterAdmissionRules = config.clusterAdmissionRules;
    this._defaultAdmissionRule = config.defaultAdmissionRule;
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

  // global_policy_evaluation_mode - computed: true, optional: true, required: false
  private _globalPolicyEvaluationMode?: string;
  public get globalPolicyEvaluationMode() {
    return this._globalPolicyEvaluationMode ?? this.getStringAttribute('global_policy_evaluation_mode');
  }
  public set globalPolicyEvaluationMode(value: string | undefined) {
    this._globalPolicyEvaluationMode = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // admission_whitelist_patterns - computed: false, optional: true, required: false
  private _admissionWhitelistPatterns?: BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
  public get admissionWhitelistPatterns() {
    return this._admissionWhitelistPatterns;
  }
  public set admissionWhitelistPatterns(value: BinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | undefined) {
    this._admissionWhitelistPatterns = value;
  }

  // cluster_admission_rules - computed: false, optional: true, required: false
  private _clusterAdmissionRules?: BinaryAuthorizationPolicyClusterAdmissionRules[];
  public get clusterAdmissionRules() {
    return this._clusterAdmissionRules;
  }
  public set clusterAdmissionRules(value: BinaryAuthorizationPolicyClusterAdmissionRules[] | undefined) {
    this._clusterAdmissionRules = value;
  }

  // default_admission_rule - computed: false, optional: false, required: true
  private _defaultAdmissionRule: BinaryAuthorizationPolicyDefaultAdmissionRule[];
  public get defaultAdmissionRule() {
    return this._defaultAdmissionRule;
  }
  public set defaultAdmissionRule(value: BinaryAuthorizationPolicyDefaultAdmissionRule[]) {
    this._defaultAdmissionRule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BinaryAuthorizationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BinaryAuthorizationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      global_policy_evaluation_mode: this._globalPolicyEvaluationMode,
      project: this._project,
      admission_whitelist_patterns: this._admissionWhitelistPatterns,
      cluster_admission_rules: this._clusterAdmissionRules,
      default_admission_rule: this._defaultAdmissionRule,
      timeouts: this._timeouts,
    };
  }
}
