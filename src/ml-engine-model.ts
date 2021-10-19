// https://www.terraform.io/docs/providers/google/r/ml_engine_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlEngineModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description specified for the model when it was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#description MlEngineModel#description}
  */
  readonly description?: string;
  /**
  * One or more labels that you can add, to organize your models.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#labels MlEngineModel#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name specified for the model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#name MlEngineModel#name}
  */
  readonly name: string;
  /**
  * If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}
  */
  readonly onlinePredictionConsoleLogging?: boolean | cdktf.IResolvable;
  /**
  * If true, online prediction access logs are sent to StackDriver Logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#online_prediction_logging MlEngineModel#online_prediction_logging}
  */
  readonly onlinePredictionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#project MlEngineModel#project}
  */
  readonly project?: string;
  /**
  * The list of regions where the model is going to be deployed.
Currently only one region per model is supported
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#regions MlEngineModel#regions}
  */
  readonly regions?: string[];
  /**
  * default_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#default_version MlEngineModel#default_version}
  */
  readonly defaultVersion?: MlEngineModelDefaultVersion;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#timeouts MlEngineModel#timeouts}
  */
  readonly timeouts?: MlEngineModelTimeouts;
}
export interface MlEngineModelDefaultVersion {
  /**
  * The name specified for the version when it was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#name MlEngineModel#name}
  */
  readonly name: string;
}

function mlEngineModelDefaultVersionToTerraform(struct?: MlEngineModelDefaultVersionOutputReference | MlEngineModelDefaultVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class MlEngineModelDefaultVersionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._name
  }
}
export interface MlEngineModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#create MlEngineModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#delete MlEngineModel#delete}
  */
  readonly delete?: string;
}

function mlEngineModelTimeoutsToTerraform(struct?: MlEngineModelTimeoutsOutputReference | MlEngineModelTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class MlEngineModelTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html google_ml_engine_model}
*/
export class MlEngineModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_ml_engine_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html google_ml_engine_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlEngineModelConfig
  */
  public constructor(scope: Construct, id: string, config: MlEngineModelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ml_engine_model',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._onlinePredictionConsoleLogging = config.onlinePredictionConsoleLogging;
    this._onlinePredictionLogging = config.onlinePredictionLogging;
    this._project = config.project;
    this._regions = config.regions;
    this._defaultVersion = config.defaultVersion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
    return this._name
  }

  // online_prediction_console_logging - computed: false, optional: true, required: false
  private _onlinePredictionConsoleLogging?: boolean | cdktf.IResolvable | undefined; 
  public get onlinePredictionConsoleLogging() {
    return this.getBooleanAttribute('online_prediction_console_logging') as any;
  }
  public set onlinePredictionConsoleLogging(value: boolean | cdktf.IResolvable | undefined) {
    this._onlinePredictionConsoleLogging = value;
  }
  public resetOnlinePredictionConsoleLogging() {
    this._onlinePredictionConsoleLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinePredictionConsoleLoggingInput() {
    return this._onlinePredictionConsoleLogging
  }

  // online_prediction_logging - computed: false, optional: true, required: false
  private _onlinePredictionLogging?: boolean | cdktf.IResolvable | undefined; 
  public get onlinePredictionLogging() {
    return this.getBooleanAttribute('online_prediction_logging') as any;
  }
  public set onlinePredictionLogging(value: boolean | cdktf.IResolvable | undefined) {
    this._onlinePredictionLogging = value;
  }
  public resetOnlinePredictionLogging() {
    this._onlinePredictionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinePredictionLoggingInput() {
    return this._onlinePredictionLogging
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[] | undefined; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: MlEngineModelDefaultVersion | undefined; 
  private __defaultVersionOutput = new MlEngineModelDefaultVersionOutputReference(this as any, "default_version", true);
  public get defaultVersion() {
    return this.__defaultVersionOutput;
  }
  public putDefaultVersion(value: MlEngineModelDefaultVersion | undefined) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MlEngineModelTimeouts | undefined; 
  private __timeoutsOutput = new MlEngineModelTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MlEngineModelTimeouts | undefined) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      online_prediction_console_logging: cdktf.booleanToTerraform(this._onlinePredictionConsoleLogging),
      online_prediction_logging: cdktf.booleanToTerraform(this._onlinePredictionLogging),
      project: cdktf.stringToTerraform(this._project),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
      default_version: mlEngineModelDefaultVersionToTerraform(this._defaultVersion),
      timeouts: mlEngineModelTimeoutsToTerraform(this._timeouts),
    };
  }
}
