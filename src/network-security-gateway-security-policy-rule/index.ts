// https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityGatewaySecurityPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * CEL expression for matching on L7/application level criteria.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#application_matcher NetworkSecurityGatewaySecurityPolicyRule#application_matcher}
  */
  readonly applicationMatcher?: string;
  /**
  * Profile which tells what the primitive action should be. Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#basic_profile NetworkSecurityGatewaySecurityPolicyRule#basic_profile}
  */
  readonly basicProfile: string;
  /**
  * Free-text description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#description NetworkSecurityGatewaySecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Whether the rule is enforced.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#enabled NetworkSecurityGatewaySecurityPolicyRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name of the gatewat security policy this rule belongs to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#gateway_security_policy NetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}
  */
  readonly gatewaySecurityPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#id NetworkSecurityGatewaySecurityPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the gateway security policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#location NetworkSecurityGatewaySecurityPolicyRule#location}
  */
  readonly location: string;
  /**
  * Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule}
rule should match the pattern: (^a-z?$).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#name NetworkSecurityGatewaySecurityPolicyRule#name}
  */
  readonly name: string;
  /**
  * Priority of the rule. Lower number corresponds to higher precedence.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#priority NetworkSecurityGatewaySecurityPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#project NetworkSecurityGatewaySecurityPolicyRule#project}
  */
  readonly project?: string;
  /**
  * CEL expression for matching on session criteria.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#session_matcher NetworkSecurityGatewaySecurityPolicyRule#session_matcher}
  */
  readonly sessionMatcher: string;
  /**
  * Flag to enable TLS inspection of traffic matching on. Can only be true if the
parent GatewaySecurityPolicy references a TLSInspectionConfig.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#tls_inspection_enabled NetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}
  */
  readonly tlsInspectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#timeouts NetworkSecurityGatewaySecurityPolicyRule#timeouts}
  */
  readonly timeouts?: NetworkSecurityGatewaySecurityPolicyRuleTimeouts;
}
export interface NetworkSecurityGatewaySecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#create NetworkSecurityGatewaySecurityPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#delete NetworkSecurityGatewaySecurityPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule#update NetworkSecurityGatewaySecurityPolicyRule#update}
  */
  readonly update?: string;
}

export function networkSecurityGatewaySecurityPolicyRuleTimeoutsToTerraform(struct?: NetworkSecurityGatewaySecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityGatewaySecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityGatewaySecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule}
*/
export class NetworkSecurityGatewaySecurityPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_gateway_security_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityGatewaySecurityPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityGatewaySecurityPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_gateway_security_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.78.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationMatcher = config.applicationMatcher;
    this._basicProfile = config.basicProfile;
    this._description = config.description;
    this._enabled = config.enabled;
    this._gatewaySecurityPolicy = config.gatewaySecurityPolicy;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._sessionMatcher = config.sessionMatcher;
    this._tlsInspectionEnabled = config.tlsInspectionEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_matcher - computed: false, optional: true, required: false
  private _applicationMatcher?: string; 
  public get applicationMatcher() {
    return this.getStringAttribute('application_matcher');
  }
  public set applicationMatcher(value: string) {
    this._applicationMatcher = value;
  }
  public resetApplicationMatcher() {
    this._applicationMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMatcherInput() {
    return this._applicationMatcher;
  }

  // basic_profile - computed: false, optional: false, required: true
  private _basicProfile?: string; 
  public get basicProfile() {
    return this.getStringAttribute('basic_profile');
  }
  public set basicProfile(value: string) {
    this._basicProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicProfileInput() {
    return this._basicProfile;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // gateway_security_policy - computed: false, optional: false, required: true
  private _gatewaySecurityPolicy?: string; 
  public get gatewaySecurityPolicy() {
    return this.getStringAttribute('gateway_security_policy');
  }
  public set gatewaySecurityPolicy(value: string) {
    this._gatewaySecurityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySecurityPolicyInput() {
    return this._gatewaySecurityPolicy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
    return this._project;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_matcher - computed: false, optional: false, required: true
  private _sessionMatcher?: string; 
  public get sessionMatcher() {
    return this.getStringAttribute('session_matcher');
  }
  public set sessionMatcher(value: string) {
    this._sessionMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMatcherInput() {
    return this._sessionMatcher;
  }

  // tls_inspection_enabled - computed: false, optional: true, required: false
  private _tlsInspectionEnabled?: boolean | cdktf.IResolvable; 
  public get tlsInspectionEnabled() {
    return this.getBooleanAttribute('tls_inspection_enabled');
  }
  public set tlsInspectionEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsInspectionEnabled = value;
  }
  public resetTlsInspectionEnabled() {
    this._tlsInspectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectionEnabledInput() {
    return this._tlsInspectionEnabled;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityGatewaySecurityPolicyRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_matcher: cdktf.stringToTerraform(this._applicationMatcher),
      basic_profile: cdktf.stringToTerraform(this._basicProfile),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gateway_security_policy: cdktf.stringToTerraform(this._gatewaySecurityPolicy),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      session_matcher: cdktf.stringToTerraform(this._sessionMatcher),
      tls_inspection_enabled: cdktf.booleanToTerraform(this._tlsInspectionEnabled),
      timeouts: networkSecurityGatewaySecurityPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
