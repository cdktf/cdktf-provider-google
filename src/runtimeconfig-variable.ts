// https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuntimeconfigVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html#name RuntimeconfigVariable#name}
  */
  readonly name: string;
  /**
  * The name of the RuntimeConfig resource containing this variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html#parent RuntimeconfigVariable#parent}
  */
  readonly parent: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html#project RuntimeconfigVariable#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html#text RuntimeconfigVariable#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html#value RuntimeconfigVariable#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html google_runtimeconfig_variable}
*/
export class RuntimeconfigVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_runtimeconfig_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html google_runtimeconfig_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuntimeconfigVariableConfig
  */
  public constructor(scope: Construct, id: string, config: RuntimeconfigVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_runtimeconfig_variable',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._parent = config.parent;
    this._project = config.project;
    this._text = config.text;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
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

  // text - computed: false, optional: true, required: false
  private _text?: string | undefined; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string | undefined) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // value - computed: false, optional: true, required: false
  private _value?: string | undefined; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string | undefined) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      project: cdktf.stringToTerraform(this._project),
      text: cdktf.stringToTerraform(this._text),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
