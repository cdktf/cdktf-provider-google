// https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataCatalogEntryGroupConfig extends TerraformMetaArguments {
  /** Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. */
  readonly description?: string;
  /** A short name to identify the entry group, for example, "analytics data - jan 2011". */
  readonly displayName?: string;
  /** The id of the entry group to create. The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters. */
  readonly entryGroupId: string;
  readonly project?: string;
  /** EntryGroup location region. */
  readonly region?: string;
  /** timeouts block */
  readonly timeouts?: DataCatalogEntryGroupTimeouts;
}
export interface DataCatalogEntryGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataCatalogEntryGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCatalogEntryGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_entry_group',
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
    this._entryGroupId = config.entryGroupId;
    this._project = config.project;
    this._region = config.region;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // entry_group_id - computed: false, optional: false, required: true
  private _entryGroupId: string;
  public get entryGroupId() {
    return this._entryGroupId;
  }
  public set entryGroupId(value: string) {
    this._entryGroupId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogEntryGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataCatalogEntryGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      entry_group_id: this._entryGroupId,
      project: this._project,
      region: this._region,
      timeouts: this._timeouts,
    };
  }
}
