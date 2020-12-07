// https://www.terraform.io/docs/providers/google/r/cloud_identity_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIdentityGroupConfig extends cdktf.TerraformMetaArguments {
  /** An extended description to help users determine the purpose of a Group.
Must not be longer than 4,096 characters. */
  readonly description?: string;
  /** The display name of the Group. */
  readonly displayName?: string;
  /** The labels that apply to the Group.

Must not contain more than one entry. Must contain the entry
'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or
'system/groups/external': '' if the Group is an external-identity-mapped group. */
  readonly labels: { [key: string]: string };
  /** The resource name of the entity under which this Group resides in the
Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups. */
  readonly parent: string;
  /** group_key block */
  readonly groupKey: CloudIdentityGroupGroupKey[];
  /** timeouts block */
  readonly timeouts?: CloudIdentityGroupTimeouts;
}
export interface CloudIdentityGroupGroupKey {
  /** The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace. */
  readonly id: string;
  /** The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'. */
  readonly namespace?: string;
}

function cloudIdentityGroupGroupKeyToTerraform(struct?: CloudIdentityGroupGroupKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudIdentityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudIdentityGroupTimeoutsToTerraform(struct?: CloudIdentityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudIdentityGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudIdentityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group',
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
    this._labels = config.labels;
    this._parent = config.parent;
    this._groupKey = config.groupKey;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: false, required: true
  private _labels: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // group_key - computed: false, optional: false, required: true
  private _groupKey: CloudIdentityGroupGroupKey[];
  public get groupKey() {
    return this.interpolationForAttribute('group_key') as any;
  }
  public set groupKey(value: CloudIdentityGroupGroupKey[]) {
    this._groupKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeyInput() {
    return this._groupKey
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudIdentityGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudIdentityGroupTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      parent: cdktf.stringToTerraform(this._parent),
      group_key: cdktf.listMapper(cloudIdentityGroupGroupKeyToTerraform)(this._groupKey),
      timeouts: cloudIdentityGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
