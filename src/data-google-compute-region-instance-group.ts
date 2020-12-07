// https://www.terraform.io/docs/providers/google/r/data_google_compute_region_instance_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeRegionInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly project?: string;
  readonly region?: string;
  readonly selfLink?: string;
}
export class DataGoogleComputeRegionInstanceGroupInstancesNamedPorts extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataGoogleComputeRegionInstanceGroupInstances extends cdktf.ComplexComputedList {

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // named_ports - computed: true, optional: false, required: false
  public get namedPorts() {
    return this.interpolationForAttribute('named_ports') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

// Resource

export class DataGoogleComputeRegionInstanceGroup extends cdktf.TerraformDataSource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  public instances(index: string) {
    return new DataGoogleComputeRegionInstanceGroupInstances(this, 'instances', index);
  }

  // name - computed: true, optional: true, required: false
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
    return this._name
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: true, required: false
  private _selfLink?: string;
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }
  public set selfLink(value: string) {
    this._selfLink = value;
  }
  public resetSelfLink() {
    this._selfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfLinkInput() {
    return this._selfLink
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      self_link: cdktf.stringToTerraform(this._selfLink),
    };
  }
}
