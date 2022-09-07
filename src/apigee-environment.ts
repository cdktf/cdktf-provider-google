// https://www.terraform.io/docs/providers/google/r/apigee_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#api_proxy_type ApigeeEnvironment#api_proxy_type}
  */
  readonly apiProxyType?: string;
  /**
  * Optional. Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#deployment_type ApigeeEnvironment#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Description of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#description ApigeeEnvironment#description}
  */
  readonly description?: string;
  /**
  * Display name of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#display_name ApigeeEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#id ApigeeEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource ID of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#name ApigeeEnvironment#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee environment,
in the format 'organizations/{{org_name}}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#org_id ApigeeEnvironment#org_id}
  */
  readonly orgId: string;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#node_config ApigeeEnvironment#node_config}
  */
  readonly nodeConfig?: ApigeeEnvironmentNodeConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#timeouts ApigeeEnvironment#timeouts}
  */
  readonly timeouts?: ApigeeEnvironmentTimeouts;
}
export interface ApigeeEnvironmentNodeConfig {
  /**
  * The maximum total number of gateway nodes that the is reserved for all instances that
has the specified environment. If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#max_node_count ApigeeEnvironment#max_node_count}
  */
  readonly maxNodeCount?: string;
  /**
  * The minimum total number of gateway nodes that the is reserved for all instances that
has the specified environment. If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#min_node_count ApigeeEnvironment#min_node_count}
  */
  readonly minNodeCount?: string;
}

export function apigeeEnvironmentNodeConfigToTerraform(struct?: ApigeeEnvironmentNodeConfigOutputReference | ApigeeEnvironmentNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.stringToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.stringToTerraform(struct!.minNodeCount),
  }
}

export class ApigeeEnvironmentNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeEnvironmentNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeEnvironmentNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // current_aggregate_node_count - computed: true, optional: false, required: false
  public get currentAggregateNodeCount() {
    return this.getStringAttribute('current_aggregate_node_count');
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: string; 
  public get maxNodeCount() {
    return this.getStringAttribute('max_node_count');
  }
  public set maxNodeCount(value: string) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: string; 
  public get minNodeCount() {
    return this.getStringAttribute('min_node_count');
  }
  public set minNodeCount(value: string) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface ApigeeEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#create ApigeeEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#delete ApigeeEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment#update ApigeeEnvironment#update}
  */
  readonly update?: string;
}

export function apigeeEnvironmentTimeoutsToTerraform(struct?: ApigeeEnvironmentTimeoutsOutputReference | ApigeeEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class ApigeeEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigeeEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_environment google_apigee_environment}
*/
export class ApigeeEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_environment google_apigee_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_environment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._apiProxyType = config.apiProxyType;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_proxy_type - computed: true, optional: true, required: false
  private _apiProxyType?: string; 
  public get apiProxyType() {
    return this.getStringAttribute('api_proxy_type');
  }
  public set apiProxyType(value: string) {
    this._apiProxyType = value;
  }
  public resetApiProxyType() {
    this._apiProxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProxyTypeInput() {
    return this._apiProxyType;
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ApigeeEnvironmentNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ApigeeEnvironmentNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeEnvironmentTimeouts) {
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
      api_proxy_type: cdktf.stringToTerraform(this._apiProxyType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      node_config: apigeeEnvironmentNodeConfigToTerraform(this._nodeConfig.internalValue),
      timeouts: apigeeEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
