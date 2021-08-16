// https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#description DialogflowCxEnvironment#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#display_name DialogflowCxEnvironment#display_name}
  */
  readonly displayName: string;
  /**
  * The Agent to create an Environment for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#parent DialogflowCxEnvironment#parent}
  */
  readonly parent?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#timeouts DialogflowCxEnvironment#timeouts}
  */
  readonly timeouts?: DialogflowCxEnvironmentTimeouts;
  /**
  * version_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#version_configs DialogflowCxEnvironment#version_configs}
  */
  readonly versionConfigs: DialogflowCxEnvironmentVersionConfigs[];
}
export interface DialogflowCxEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#create DialogflowCxEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#delete DialogflowCxEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#update DialogflowCxEnvironment#update}
  */
  readonly update?: string;
}

function dialogflowCxEnvironmentTimeoutsToTerraform(struct?: DialogflowCxEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface DialogflowCxEnvironmentVersionConfigs {
  /**
  * Format: projects/{{project}}/locations/{{location}}/agents/{{agent}}/flows/{{flow}}/versions/{{version}}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html#version DialogflowCxEnvironment#version}
  */
  readonly version: string;
}

function dialogflowCxEnvironmentVersionConfigsToTerraform(struct?: DialogflowCxEnvironmentVersionConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html google_dialogflow_cx_environment}
*/
export class DialogflowCxEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_environment.html google_dialogflow_cx_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_environment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._timeouts = config.timeouts;
    this._versionConfigs = config.versionConfigs;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string ) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DialogflowCxEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DialogflowCxEnvironmentTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // version_configs - computed: false, optional: false, required: true
  private _versionConfigs: DialogflowCxEnvironmentVersionConfigs[];
  public get versionConfigs() {
    return this.interpolationForAttribute('version_configs') as any;
  }
  public set versionConfigs(value: DialogflowCxEnvironmentVersionConfigs[]) {
    this._versionConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionConfigsInput() {
    return this._versionConfigs
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: dialogflowCxEnvironmentTimeoutsToTerraform(this._timeouts),
      version_configs: cdktf.listMapper(dialogflowCxEnvironmentVersionConfigsToTerraform)(this._versionConfigs),
    };
  }
}
