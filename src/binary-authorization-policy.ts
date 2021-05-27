// https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#description BinaryAuthorizationPolicy#description}
  */
  readonly description?: string;
  /**
  * Controls the evaluation of a Google-maintained global admission policy
for common system-level images. Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}
  */
  readonly globalPolicyEvaluationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#project BinaryAuthorizationPolicy#project}
  */
  readonly project?: string;
  /**
  * admission_whitelist_patterns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}
  */
  readonly admissionWhitelistPatterns?: BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
  /**
  * cluster_admission_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}
  */
  readonly clusterAdmissionRules?: BinaryAuthorizationPolicyClusterAdmissionRules[];
  /**
  * default_admission_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}
  */
  readonly defaultAdmissionRule: BinaryAuthorizationPolicyDefaultAdmissionRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#timeouts BinaryAuthorizationPolicy#timeouts}
  */
  readonly timeouts?: BinaryAuthorizationPolicyTimeouts;
}
export interface BinaryAuthorizationPolicyAdmissionWhitelistPatterns {
  /**
  * An image name pattern to whitelist, in the form
'registry/path/to/image'. This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#name_pattern BinaryAuthorizationPolicy#name_pattern}
  */
  readonly namePattern: string;
}

function binaryAuthorizationPolicyAdmissionWhitelistPatternsToTerraform(struct?: BinaryAuthorizationPolicyAdmissionWhitelistPatterns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name_pattern: cdktf.stringToTerraform(struct!.namePattern),
  }
}

export interface BinaryAuthorizationPolicyClusterAdmissionRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#cluster BinaryAuthorizationPolicy#cluster}
  */
  readonly cluster: string;
  /**
  * The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}
  */
  readonly evaluationMode: string;
  /**
  * The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format 'projects/*\/attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}
  */
  readonly requireAttestationsBy?: string[];
}

function binaryAuthorizationPolicyClusterAdmissionRulesToTerraform(struct?: BinaryAuthorizationPolicyClusterAdmissionRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
    require_attestations_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requireAttestationsBy),
  }
}

export interface BinaryAuthorizationPolicyDefaultAdmissionRule {
  /**
  * The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}
  */
  readonly evaluationMode: string;
  /**
  * The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format 'projects/*\/attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}
  */
  readonly requireAttestationsBy?: string[];
}

function binaryAuthorizationPolicyDefaultAdmissionRuleToTerraform(struct?: BinaryAuthorizationPolicyDefaultAdmissionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
    require_attestations_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requireAttestationsBy),
  }
}

export interface BinaryAuthorizationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#create BinaryAuthorizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#delete BinaryAuthorizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html#update BinaryAuthorizationPolicy#update}
  */
  readonly update?: string;
}

function binaryAuthorizationPolicyTimeoutsToTerraform(struct?: BinaryAuthorizationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html google_binary_authorization_policy}
*/
export class BinaryAuthorizationPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_policy.html google_binary_authorization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BinaryAuthorizationPolicyConfig
  */
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
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // global_policy_evaluation_mode - computed: true, optional: true, required: false
  private _globalPolicyEvaluationMode?: string;
  public get globalPolicyEvaluationMode() {
    return this.getStringAttribute('global_policy_evaluation_mode');
  }
  public set globalPolicyEvaluationMode(value: string) {
    this._globalPolicyEvaluationMode = value;
  }
  public resetGlobalPolicyEvaluationMode() {
    this._globalPolicyEvaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyEvaluationModeInput() {
    return this._globalPolicyEvaluationMode
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // admission_whitelist_patterns - computed: false, optional: true, required: false
  private _admissionWhitelistPatterns?: BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
  public get admissionWhitelistPatterns() {
    return this.interpolationForAttribute('admission_whitelist_patterns') as any;
  }
  public set admissionWhitelistPatterns(value: BinaryAuthorizationPolicyAdmissionWhitelistPatterns[] ) {
    this._admissionWhitelistPatterns = value;
  }
  public resetAdmissionWhitelistPatterns() {
    this._admissionWhitelistPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWhitelistPatternsInput() {
    return this._admissionWhitelistPatterns
  }

  // cluster_admission_rules - computed: false, optional: true, required: false
  private _clusterAdmissionRules?: BinaryAuthorizationPolicyClusterAdmissionRules[];
  public get clusterAdmissionRules() {
    return this.interpolationForAttribute('cluster_admission_rules') as any;
  }
  public set clusterAdmissionRules(value: BinaryAuthorizationPolicyClusterAdmissionRules[] ) {
    this._clusterAdmissionRules = value;
  }
  public resetClusterAdmissionRules() {
    this._clusterAdmissionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdmissionRulesInput() {
    return this._clusterAdmissionRules
  }

  // default_admission_rule - computed: false, optional: false, required: true
  private _defaultAdmissionRule: BinaryAuthorizationPolicyDefaultAdmissionRule[];
  public get defaultAdmissionRule() {
    return this.interpolationForAttribute('default_admission_rule') as any;
  }
  public set defaultAdmissionRule(value: BinaryAuthorizationPolicyDefaultAdmissionRule[]) {
    this._defaultAdmissionRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAdmissionRuleInput() {
    return this._defaultAdmissionRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BinaryAuthorizationPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BinaryAuthorizationPolicyTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      global_policy_evaluation_mode: cdktf.stringToTerraform(this._globalPolicyEvaluationMode),
      project: cdktf.stringToTerraform(this._project),
      admission_whitelist_patterns: cdktf.listMapper(binaryAuthorizationPolicyAdmissionWhitelistPatternsToTerraform)(this._admissionWhitelistPatterns),
      cluster_admission_rules: cdktf.listMapper(binaryAuthorizationPolicyClusterAdmissionRulesToTerraform)(this._clusterAdmissionRules),
      default_admission_rule: cdktf.listMapper(binaryAuthorizationPolicyDefaultAdmissionRuleToTerraform)(this._defaultAdmissionRule),
      timeouts: binaryAuthorizationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
