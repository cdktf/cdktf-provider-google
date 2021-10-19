// https://www.terraform.io/docs/providers/google/d/cloud_identity_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudIdentityGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource name of the entity under which this Group resides in the
Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_identity_groups.html#parent DataGoogleCloudIdentityGroups#parent}
  */
  readonly parent: string;
}
export class DataGoogleCloudIdentityGroupsGroupsGroupKey extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataGoogleCloudIdentityGroupsGroups extends cdktf.ComplexComputedList {

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_key - computed: true, optional: false, required: false
  public get groupKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_key') as any;
  }

  // initial_group_config - computed: true, optional: false, required: false
  public get initialGroupConfig() {
    return this.getStringAttribute('initial_group_config');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/cloud_identity_groups.html google_cloud_identity_groups}
*/
export class DataGoogleCloudIdentityGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_identity_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/cloud_identity_groups.html google_cloud_identity_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudIdentityGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_groups',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: false
  public groups(index: string) {
    return new DataGoogleCloudIdentityGroupsGroups(this, 'groups', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent: cdktf.stringToTerraform(this._parent),
    };
  }
}
