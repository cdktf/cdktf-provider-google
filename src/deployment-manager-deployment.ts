// https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentManagerDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the policy to use for creating new resources. Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}
  */
  readonly createPolicy?: string;
  /**
  * Set the policy to use for deleting new resources on update/delete.
Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * Optional user-provided description of deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#description DeploymentManagerDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#id DeploymentManagerDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for the deployment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#name DeploymentManagerDeployment#name}
  */
  readonly name: string;
  /**
  * If set to true, a deployment is created with "shell" resources
that are not actually instantiated. This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
 ~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#project DeploymentManagerDeployment#project}
  */
  readonly project?: string;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}
  */
  readonly labels?: DeploymentManagerDeploymentLabels[] | cdktf.IResolvable;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#target DeploymentManagerDeployment#target}
  */
  readonly target: DeploymentManagerDeploymentTarget;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}
  */
  readonly timeouts?: DeploymentManagerDeploymentTimeouts;
}
export interface DeploymentManagerDeploymentLabels {
  /**
  * Key for label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#key DeploymentManagerDeployment#key}
  */
  readonly key?: string;
  /**
  * Value of label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#value DeploymentManagerDeployment#value}
  */
  readonly value?: string;
}

export function deploymentManagerDeploymentLabelsToTerraform(struct?: DeploymentManagerDeploymentLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DeploymentManagerDeploymentLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentManagerDeploymentLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentManagerDeploymentLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentManagerDeploymentLabelsList extends cdktf.ComplexList {
  public internalValue? : DeploymentManagerDeploymentLabels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeploymentManagerDeploymentLabelsOutputReference {
    return new DeploymentManagerDeploymentLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentManagerDeploymentTargetConfig {
  /**
  * The full YAML contents of your configuration file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#content DeploymentManagerDeployment#content}
  */
  readonly content: string;
}

export function deploymentManagerDeploymentTargetConfigToTerraform(struct?: DeploymentManagerDeploymentTargetConfigOutputReference | DeploymentManagerDeploymentTargetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}

export class DeploymentManagerDeploymentTargetConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentManagerDeploymentTargetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentManagerDeploymentTargetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface DeploymentManagerDeploymentTargetImports {
  /**
  * The full contents of the template that you want to import.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#content DeploymentManagerDeployment#content}
  */
  readonly content?: string;
  /**
  * The name of the template to import, as declared in the YAML
configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#name DeploymentManagerDeployment#name}
  */
  readonly name?: string;
}

export function deploymentManagerDeploymentTargetImportsToTerraform(struct?: DeploymentManagerDeploymentTargetImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DeploymentManagerDeploymentTargetImportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentManagerDeploymentTargetImports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentManagerDeploymentTargetImports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DeploymentManagerDeploymentTargetImportsList extends cdktf.ComplexList {
  public internalValue? : DeploymentManagerDeploymentTargetImports[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeploymentManagerDeploymentTargetImportsOutputReference {
    return new DeploymentManagerDeploymentTargetImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentManagerDeploymentTarget {
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#config DeploymentManagerDeployment#config}
  */
  readonly config: DeploymentManagerDeploymentTargetConfig;
  /**
  * imports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#imports DeploymentManagerDeployment#imports}
  */
  readonly imports?: DeploymentManagerDeploymentTargetImports[] | cdktf.IResolvable;
}

export function deploymentManagerDeploymentTargetToTerraform(struct?: DeploymentManagerDeploymentTargetOutputReference | DeploymentManagerDeploymentTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: deploymentManagerDeploymentTargetConfigToTerraform(struct!.config),
    imports: cdktf.listMapper(deploymentManagerDeploymentTargetImportsToTerraform, true)(struct!.imports),
  }
}

export class DeploymentManagerDeploymentTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentManagerDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._imports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imports = this._imports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentManagerDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
      this._imports.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
      this._imports.internalValue = value.imports;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new DeploymentManagerDeploymentTargetConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeploymentManagerDeploymentTargetConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // imports - computed: false, optional: true, required: false
  private _imports = new DeploymentManagerDeploymentTargetImportsList(this, "imports", false);
  public get imports() {
    return this._imports;
  }
  public putImports(value: DeploymentManagerDeploymentTargetImports[] | cdktf.IResolvable) {
    this._imports.internalValue = value;
  }
  public resetImports() {
    this._imports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importsInput() {
    return this._imports.internalValue;
  }
}
export interface DeploymentManagerDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#create DeploymentManagerDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment#update DeploymentManagerDeployment#update}
  */
  readonly update?: string;
}

export function deploymentManagerDeploymentTimeoutsToTerraform(struct?: DeploymentManagerDeploymentTimeoutsOutputReference | DeploymentManagerDeploymentTimeouts | cdktf.IResolvable): any {
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

export class DeploymentManagerDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentManagerDeploymentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentManagerDeploymentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment google_deployment_manager_deployment}
*/
export class DeploymentManagerDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_deployment_manager_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/deployment_manager_deployment google_deployment_manager_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentManagerDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentManagerDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_deployment_manager_deployment',
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
    this._createPolicy = config.createPolicy;
    this._deletePolicy = config.deletePolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._preview = config.preview;
    this._project = config.project;
    this._labels.internalValue = config.labels;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_policy - computed: false, optional: true, required: false
  private _createPolicy?: string; 
  public get createPolicy() {
    return this.getStringAttribute('create_policy');
  }
  public set createPolicy(value: string) {
    this._createPolicy = value;
  }
  public resetCreatePolicy() {
    this._createPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPolicyInput() {
    return this._createPolicy;
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string; 
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
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

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
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

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktf.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktf.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
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

  // labels - computed: false, optional: true, required: false
  private _labels = new DeploymentManagerDeploymentLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DeploymentManagerDeploymentLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DeploymentManagerDeploymentTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DeploymentManagerDeploymentTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeploymentManagerDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeploymentManagerDeploymentTimeouts) {
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
      create_policy: cdktf.stringToTerraform(this._createPolicy),
      delete_policy: cdktf.stringToTerraform(this._deletePolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      preview: cdktf.booleanToTerraform(this._preview),
      project: cdktf.stringToTerraform(this._project),
      labels: cdktf.listMapper(deploymentManagerDeploymentLabelsToTerraform, true)(this._labels.internalValue),
      target: deploymentManagerDeploymentTargetToTerraform(this._target.internalValue),
      timeouts: deploymentManagerDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
