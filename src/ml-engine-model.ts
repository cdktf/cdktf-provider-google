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
  readonly labels?: { [key: string]: string };
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
  readonly onlinePredictionConsoleLogging?: boolean;
  /**
  * If true, online prediction access logs are sent to StackDriver Logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html#online_prediction_logging MlEngineModel#online_prediction_logging}
  */
  readonly onlinePredictionLogging?: boolean;
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
  readonly defaultVersion?: MlEngineModelDefaultVersion[];
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

function mlEngineModelDefaultVersionToTerraform(struct?: MlEngineModelDefaultVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
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

function mlEngineModelTimeoutsToTerraform(struct?: MlEngineModelTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model.html google_ml_engine_model}
*/
export class MlEngineModel extends cdktf.TerraformResource {

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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
  private _name: string;
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
  private _onlinePredictionConsoleLogging?: boolean;
  public get onlinePredictionConsoleLogging() {
    return this.getBooleanAttribute('online_prediction_console_logging');
  }
  public set onlinePredictionConsoleLogging(value: boolean ) {
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
  private _onlinePredictionLogging?: boolean;
  public get onlinePredictionLogging() {
    return this.getBooleanAttribute('online_prediction_logging');
  }
  public set onlinePredictionLogging(value: boolean ) {
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

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[] ) {
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
  private _defaultVersion?: MlEngineModelDefaultVersion[];
  public get defaultVersion() {
    return this.interpolationForAttribute('default_version') as any;
  }
  public set defaultVersion(value: MlEngineModelDefaultVersion[] ) {
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
  private _timeouts?: MlEngineModelTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MlEngineModelTimeouts ) {
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
      default_version: cdktf.listMapper(mlEngineModelDefaultVersionToTerraform)(this._defaultVersion),
      timeouts: mlEngineModelTimeoutsToTerraform(this._timeouts),
    };
  }
}
