// https://www.terraform.io/docs/providers/google/r/data_google_compute_global_forwarding_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComputeGlobalForwardingRuleConfig extends TerraformMetaArguments {
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
}
export class DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleComputeGlobalForwardingRuleMetadataFilters extends ComplexComputedList {

  // filter_labels - computed: true, optional: false, required: true
  public get filterLabels() {
    return 'not implemented' as any;
  }

  // filter_match_criteria - computed: true, optional: false, required: true
  public get filterMatchCriteria() {
    return this.getStringAttribute('filter_match_criteria');
  }
}

// Resource

export class DataGoogleComputeGlobalForwardingRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeGlobalForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_forwarding_rule',
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

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_protocol - computed: true, optional: false, required: true
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // ip_version - computed: true, optional: false, required: true
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // load_balancing_scheme - computed: true, optional: false, required: true
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }

  // metadata_filters - computed: true, optional: false, required: true
  public metadataFilters(index: string) {
    return new DataGoogleComputeGlobalForwardingRuleMetadataFilters(this, 'metadata_filters', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // port_range - computed: true, optional: false, required: true
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
    };
  }
}
