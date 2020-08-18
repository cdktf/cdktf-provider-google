// https://www.terraform.io/docs/providers/google/r/data_google_compute_instance_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComputeInstanceGroupConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly project?: string;
  readonly selfLink?: string;
  readonly zone?: string;
}
export class DataGoogleComputeInstanceGroupNamedPort extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}

// Resource

export class DataGoogleComputeInstanceGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeInstanceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._selfLink = config.selfLink;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: false, required: true
  public get instances() {
    return this.getListAttribute('instances');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // named_port - computed: true, optional: false, required: true
  public namedPort(index: string) {
    return new DataGoogleComputeInstanceGroupNamedPort(this, 'named_port', index);
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getStringAttribute('network');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: true, required: false
  private _selfLink?: string;
  public get selfLink() {
    return this._selfLink ?? this.getStringAttribute('self_link');
  }
  public set selfLink(value: string | undefined) {
    this._selfLink = value;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      self_link: this._selfLink,
      zone: this._zone,
    };
  }
}
