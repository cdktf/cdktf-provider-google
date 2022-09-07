// https://www.terraform.io/docs/providers/google/r/ml_engine_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlEngineModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description specified for the model when it was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#description MlEngineModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#id MlEngineModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * One or more labels that you can add, to organize your models.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#labels MlEngineModel#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name specified for the model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#name MlEngineModel#name}
  */
  readonly name: string;
  /**
  * If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}
  */
  readonly onlinePredictionConsoleLogging?: boolean | cdktf.IResolvable;
  /**
  * If true, online prediction access logs are sent to StackDriver Logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#online_prediction_logging MlEngineModel#online_prediction_logging}
  */
  readonly onlinePredictionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#project MlEngineModel#project}
  */
  readonly project?: string;
  /**
  * The list of regions where the model is going to be deployed.
Currently only one region per model is supported
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#regions MlEngineModel#regions}
  */
  readonly regions?: string[];
  /**
  * default_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#default_version MlEngineModel#default_version}
  */
  readonly defaultVersion?: MlEngineModelDefaultVersion;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#timeouts MlEngineModel#timeouts}
  */
  readonly timeouts?: MlEngineModelTimeouts;
}
export interface MlEngineModelDefaultVersion {
  /**
  * The name specified for the version when it was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#name MlEngineModel#name}
  */
  readonly name: string;
}

export function mlEngineModelDefaultVersionToTerraform(struct?: MlEngineModelDefaultVersionOutputReference | MlEngineModelDefaultVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class MlEngineModelDefaultVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlEngineModelDefaultVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlEngineModelDefaultVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface MlEngineModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#create MlEngineModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#delete MlEngineModel#delete}
  */
  readonly delete?: string;
}

export function mlEngineModelTimeoutsToTerraform(struct?: MlEngineModelTimeoutsOutputReference | MlEngineModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class MlEngineModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlEngineModelTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlEngineModelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model google_ml_engine_model}
*/
export class MlEngineModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ml_engine_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model google_ml_engine_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlEngineModelConfig
  */
  public constructor(scope: Construct, id: string, config: MlEngineModelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ml_engine_model',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._onlinePredictionConsoleLogging = config.onlinePredictionConsoleLogging;
    this._onlinePredictionLogging = config.onlinePredictionLogging;
    this._project = config.project;
    this._regions = config.regions;
    this._defaultVersion.internalValue = config.defaultVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // online_prediction_console_logging - computed: false, optional: true, required: false
  private _onlinePredictionConsoleLogging?: boolean | cdktf.IResolvable; 
  public get onlinePredictionConsoleLogging() {
    return this.getBooleanAttribute('online_prediction_console_logging');
  }
  public set onlinePredictionConsoleLogging(value: boolean | cdktf.IResolvable) {
    this._onlinePredictionConsoleLogging = value;
  }
  public resetOnlinePredictionConsoleLogging() {
    this._onlinePredictionConsoleLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinePredictionConsoleLoggingInput() {
    return this._onlinePredictionConsoleLogging;
  }

  // online_prediction_logging - computed: false, optional: true, required: false
  private _onlinePredictionLogging?: boolean | cdktf.IResolvable; 
  public get onlinePredictionLogging() {
    return this.getBooleanAttribute('online_prediction_logging');
  }
  public set onlinePredictionLogging(value: boolean | cdktf.IResolvable) {
    this._onlinePredictionLogging = value;
  }
  public resetOnlinePredictionLogging() {
    this._onlinePredictionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinePredictionLoggingInput() {
    return this._onlinePredictionLogging;
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

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion = new MlEngineModelDefaultVersionOutputReference(this, "default_version");
  public get defaultVersion() {
    return this._defaultVersion;
  }
  public putDefaultVersion(value: MlEngineModelDefaultVersion) {
    this._defaultVersion.internalValue = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MlEngineModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MlEngineModelTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      online_prediction_console_logging: cdktf.booleanToTerraform(this._onlinePredictionConsoleLogging),
      online_prediction_logging: cdktf.booleanToTerraform(this._onlinePredictionLogging),
      project: cdktf.stringToTerraform(this._project),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      default_version: mlEngineModelDefaultVersionToTerraform(this._defaultVersion.internalValue),
      timeouts: mlEngineModelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
