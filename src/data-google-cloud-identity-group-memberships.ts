// https://www.terraform.io/docs/providers/google/r/data_google_cloud_identity_group_memberships.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudIdentityGroupMembershipsConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Group to get memberships from. */
  readonly group: string;
}
export class DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataGoogleCloudIdentityGroupMembershipsMembershipsRoles extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataGoogleCloudIdentityGroupMembershipsMemberships extends cdktf.ComplexComputedList {

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preferred_member_key - computed: true, optional: false, required: false
  public get preferredMemberKey() {
    return this.interpolationForAttribute('preferred_member_key') as any;
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

// Resource

export class DataGoogleCloudIdentityGroupMemberships extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group_memberships',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memberships - computed: true, optional: false, required: false
  public memberships(index: string) {
    return new DataGoogleCloudIdentityGroupMembershipsMemberships(this, 'memberships', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
    };
  }
}
