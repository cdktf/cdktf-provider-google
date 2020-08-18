// https://www.terraform.io/docs/providers/google/r/ml_engine_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MlEngineModelConfig extends TerraformMetaArguments {
  /** The description specified for the model when it was created. */
  readonly description?: string;
  /** One or more labels that you can add, to organize your models. */
  readonly labels?: { [key: string]: string };
  /** The name specified for the model. */
  readonly name: string;
  /** If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging */
  readonly onlinePredictionConsoleLogging?: boolean;
  /** If true, online prediction access logs are sent to StackDriver Logging. */
  readonly onlinePredictionLogging?: boolean;
  readonly project?: string;
  /** The list of regions where the model is going to be deployed.
Currently only one region per model is supported */
  readonly regions?: string[];
  /** default_version block */
  readonly defaultVersion?: MlEngineModelDefaultVersion[];
  /** timeouts block */
  readonly timeouts?: MlEngineModelTimeouts;
}
export interface MlEngineModelDefaultVersion {
  /** The name specified for the version when it was created. */
  readonly name: string;
}
export interface MlEngineModelTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class MlEngineModel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // online_prediction_console_logging - computed: false, optional: true, required: false
  private _onlinePredictionConsoleLogging?: boolean;
  public get onlinePredictionConsoleLogging() {
    return this._onlinePredictionConsoleLogging;
  }
  public set onlinePredictionConsoleLogging(value: boolean | undefined) {
    this._onlinePredictionConsoleLogging = value;
  }

  // online_prediction_logging - computed: false, optional: true, required: false
  private _onlinePredictionLogging?: boolean;
  public get onlinePredictionLogging() {
    return this._onlinePredictionLogging;
  }
  public set onlinePredictionLogging(value: boolean | undefined) {
    this._onlinePredictionLogging = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this._regions;
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }

  // default_version - computed: false, optional: true, required: false
  private _defaultVersion?: MlEngineModelDefaultVersion[];
  public get defaultVersion() {
    return this._defaultVersion;
  }
  public set defaultVersion(value: MlEngineModelDefaultVersion[] | undefined) {
    this._defaultVersion = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MlEngineModelTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MlEngineModelTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      labels: this._labels,
      name: this._name,
      online_prediction_console_logging: this._onlinePredictionConsoleLogging,
      online_prediction_logging: this._onlinePredictionLogging,
      project: this._project,
      regions: this._regions,
      default_version: this._defaultVersion,
      timeouts: this._timeouts,
    };
  }
}
