// https://www.terraform.io/docs/providers/google/r/runtimeconfig_variable.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RuntimeconfigVariableConfig extends TerraformMetaArguments {
  /** The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname"). */
  readonly name: string;
  /** The name of the RuntimeConfig resource containing this variable. */
  readonly parent: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  readonly text?: string;
  readonly value?: string;
}

// Resource

export class RuntimeconfigVariable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string;
  public get text() {
    return this._text;
  }
  public set text(value: string | undefined) {
    this._text = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // value - computed: false, optional: true, required: false
  private _value?: string;
  public get value() {
    return this._value;
  }
  public set value(value: string | undefined) {
    this._value = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      parent: this._parent,
      project: this._project,
      text: this._text,
      value: this._value,
    };
  }
}
