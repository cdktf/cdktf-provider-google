// https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogEntryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#description DataCatalogEntryGroup#description}
  */
  readonly description?: string;
  /**
  * A short name to identify the entry group, for example, "analytics data - jan 2011".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#display_name DataCatalogEntryGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * The id of the entry group to create. The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#entry_group_id DataCatalogEntryGroup#entry_group_id}
  */
  readonly entryGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#project DataCatalogEntryGroup#project}
  */
  readonly project?: string;
  /**
  * EntryGroup location region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#region DataCatalogEntryGroup#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#timeouts DataCatalogEntryGroup#timeouts}
  */
  readonly timeouts?: DataCatalogEntryGroupTimeouts;
}
export interface DataCatalogEntryGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#create DataCatalogEntryGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#delete DataCatalogEntryGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html#update DataCatalogEntryGroup#update}
  */
  readonly update?: string;
}

function dataCatalogEntryGroupTimeoutsToTerraform(struct?: DataCatalogEntryGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html google_data_catalog_entry_group}
*/
export class DataCatalogEntryGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_catalog_entry_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group.html google_data_catalog_entry_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogEntryGroupConfig
  */
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // entry_group_id - computed: false, optional: false, required: true
  private _entryGroupId: string;
  public get entryGroupId() {
    return this.getStringAttribute('entry_group_id');
  }
  public set entryGroupId(value: string) {
    this._entryGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupIdInput() {
    return this._entryGroupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogEntryGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataCatalogEntryGroupTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      entry_group_id: cdktf.stringToTerraform(this._entryGroupId),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeouts: dataCatalogEntryGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
