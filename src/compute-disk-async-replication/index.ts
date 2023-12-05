/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeDiskAsyncReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Primary disk for asynchronous replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#primary_disk ComputeDiskAsyncReplication#primary_disk}
  */
  readonly primaryDisk: string;
  /**
  * secondary_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#secondary_disk ComputeDiskAsyncReplication#secondary_disk}
  */
  readonly secondaryDisk: ComputeDiskAsyncReplicationSecondaryDisk;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#timeouts ComputeDiskAsyncReplication#timeouts}
  */
  readonly timeouts?: ComputeDiskAsyncReplicationTimeouts;
}
export interface ComputeDiskAsyncReplicationSecondaryDisk {
  /**
  * Secondary disk for asynchronous replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#disk ComputeDiskAsyncReplication#disk}
  */
  readonly disk: string;
}

export function computeDiskAsyncReplicationSecondaryDiskToTerraform(struct?: ComputeDiskAsyncReplicationSecondaryDiskOutputReference | ComputeDiskAsyncReplicationSecondaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktf.stringToTerraform(struct!.disk),
  }
}

export class ComputeDiskAsyncReplicationSecondaryDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskAsyncReplicationSecondaryDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskAsyncReplicationSecondaryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk = value.disk;
    }
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface ComputeDiskAsyncReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}
  */
  readonly delete?: string;
}

export function computeDiskAsyncReplicationTimeoutsToTerraform(struct?: ComputeDiskAsyncReplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeDiskAsyncReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeDiskAsyncReplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskAsyncReplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication google_compute_disk_async_replication}
*/
export class ComputeDiskAsyncReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_disk_async_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeDiskAsyncReplication to import
  * @param importFromId The id of the existing ComputeDiskAsyncReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeDiskAsyncReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_disk_async_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/compute_disk_async_replication google_compute_disk_async_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeDiskAsyncReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeDiskAsyncReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_disk_async_replication',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.8.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._primaryDisk = config.primaryDisk;
    this._secondaryDisk.internalValue = config.secondaryDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // primary_disk - computed: false, optional: false, required: true
  private _primaryDisk?: string; 
  public get primaryDisk() {
    return this.getStringAttribute('primary_disk');
  }
  public set primaryDisk(value: string) {
    this._primaryDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDiskInput() {
    return this._primaryDisk;
  }

  // secondary_disk - computed: false, optional: false, required: true
  private _secondaryDisk = new ComputeDiskAsyncReplicationSecondaryDiskOutputReference(this, "secondary_disk");
  public get secondaryDisk() {
    return this._secondaryDisk;
  }
  public putSecondaryDisk(value: ComputeDiskAsyncReplicationSecondaryDisk) {
    this._secondaryDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDiskInput() {
    return this._secondaryDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeDiskAsyncReplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeDiskAsyncReplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      primary_disk: cdktf.stringToTerraform(this._primaryDisk),
      secondary_disk: computeDiskAsyncReplicationSecondaryDiskToTerraform(this._secondaryDisk.internalValue),
      timeouts: computeDiskAsyncReplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
