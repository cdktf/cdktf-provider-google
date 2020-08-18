// https://www.terraform.io/docs/providers/google/r/data_google_compute_region_instance_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComputeRegionInstanceGroupConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly project?: string;
  readonly region?: string;
  readonly selfLink?: string;
}
export class DataGoogleComputeRegionInstanceGroupInstancesNamedPorts extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataGoogleComputeRegionInstanceGroupInstances extends ComplexComputedList {

  // instance - computed: true, optional: false, required: true
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // named_ports - computed: true, optional: false, required: true
  public get namedPorts() {
    return 'not implemented' as any;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }
}

// Resource

export class DataGoogleComputeRegionInstanceGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeRegionInstanceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_group',
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
    this._region = config.region;
    this._selfLink = config.selfLink;
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

  // instances - computed: true, optional: false, required: true
  public instances(index: string) {
    return new DataGoogleComputeRegionInstanceGroupInstances(this, 'instances', index);
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      region: this._region,
      self_link: this._selfLink,
    };
  }
}
