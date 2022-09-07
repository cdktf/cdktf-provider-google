// https://www.terraform.io/docs/providers/google/r/compute_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#description ComputeDisk#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#id ComputeDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image from which to initialize this disk. This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#image ComputeDisk#image}
  */
  readonly image?: string;
  /**
  * Labels to apply to this disk.  A list of key->value pairs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#labels ComputeDisk#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#name ComputeDisk#name}
  */
  readonly name: string;
  /**
  * Physical block size of the persistent disk, in bytes. If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#physical_block_size_bytes ComputeDisk#physical_block_size_bytes}
  */
  readonly physicalBlockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#project ComputeDisk#project}
  */
  readonly project?: string;
  /**
  * Indicates how many IOPS must be provisioned for the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#provisioned_iops ComputeDisk#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Size of the persistent disk, specified in GB. You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#size ComputeDisk#size}
  */
  readonly size?: number;
  /**
  * The source snapshot used to create this disk. You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#snapshot ComputeDisk#snapshot}
  */
  readonly snapshot?: string;
  /**
  * URL of the disk type resource describing which disk type to use to
create the disk. Provide this when creating the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#type ComputeDisk#type}
  */
  readonly type?: string;
  /**
  * A reference to the zone where the disk resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#zone ComputeDisk#zone}
  */
  readonly zone?: string;
  /**
  * disk_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#disk_encryption_key ComputeDisk#disk_encryption_key}
  */
  readonly diskEncryptionKey?: ComputeDiskDiskEncryptionKey;
  /**
  * source_image_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#source_image_encryption_key ComputeDisk#source_image_encryption_key}
  */
  readonly sourceImageEncryptionKey?: ComputeDiskSourceImageEncryptionKey;
  /**
  * source_snapshot_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#source_snapshot_encryption_key ComputeDisk#source_snapshot_encryption_key}
  */
  readonly sourceSnapshotEncryptionKey?: ComputeDiskSourceSnapshotEncryptionKey;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#timeouts ComputeDisk#timeouts}
  */
  readonly timeouts?: ComputeDiskTimeouts;
}
export interface ComputeDiskDiskEncryptionKey {
  /**
  * The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#raw_key ComputeDisk#raw_key}
  */
  readonly rawKey?: string;
}

export function computeDiskDiskEncryptionKeyToTerraform(struct?: ComputeDiskDiskEncryptionKeyOutputReference | ComputeDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export class ComputeDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface ComputeDiskSourceImageEncryptionKey {
  /**
  * The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#raw_key ComputeDisk#raw_key}
  */
  readonly rawKey?: string;
}

export function computeDiskSourceImageEncryptionKeyToTerraform(struct?: ComputeDiskSourceImageEncryptionKeyOutputReference | ComputeDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export class ComputeDiskSourceImageEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskSourceImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskSourceImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface ComputeDiskSourceSnapshotEncryptionKey {
  /**
  * The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
If absent, the Compute Engine Service Agent service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#raw_key ComputeDisk#raw_key}
  */
  readonly rawKey?: string;
}

export function computeDiskSourceSnapshotEncryptionKeyToTerraform(struct?: ComputeDiskSourceSnapshotEncryptionKeyOutputReference | ComputeDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}

export class ComputeDiskSourceSnapshotEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskSourceSnapshotEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface ComputeDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#create ComputeDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#delete ComputeDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_disk#update ComputeDisk#update}
  */
  readonly update?: string;
}

export function computeDiskTimeoutsToTerraform(struct?: ComputeDiskTimeoutsOutputReference | ComputeDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_disk google_compute_disk}
*/
export class ComputeDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_disk google_compute_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeDiskConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_disk',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._image = config.image;
    this._labels = config.labels;
    this._name = config.name;
    this._physicalBlockSizeBytes = config.physicalBlockSizeBytes;
    this._project = config.project;
    this._provisionedIops = config.provisionedIops;
    this._size = config.size;
    this._snapshot = config.snapshot;
    this._type = config.type;
    this._zone = config.zone;
    this._diskEncryptionKey.internalValue = config.diskEncryptionKey;
    this._sourceImageEncryptionKey.internalValue = config.sourceImageEncryptionKey;
    this._sourceSnapshotEncryptionKey.internalValue = config.sourceSnapshotEncryptionKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_attach_timestamp - computed: true, optional: false, required: false
  public get lastAttachTimestamp() {
    return this.getStringAttribute('last_attach_timestamp');
  }

  // last_detach_timestamp - computed: true, optional: false, required: false
  public get lastDetachTimestamp() {
    return this.getStringAttribute('last_detach_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // physical_block_size_bytes - computed: true, optional: true, required: false
  private _physicalBlockSizeBytes?: number; 
  public get physicalBlockSizeBytes() {
    return this.getNumberAttribute('physical_block_size_bytes');
  }
  public set physicalBlockSizeBytes(value: number) {
    this._physicalBlockSizeBytes = value;
  }
  public resetPhysicalBlockSizeBytes() {
    this._physicalBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalBlockSizeBytesInput() {
    return this._physicalBlockSizeBytes;
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
    return this._project;
  }

  // provisioned_iops - computed: true, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // source_image_id - computed: true, optional: false, required: false
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }

  // source_snapshot_id - computed: true, optional: false, required: false
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new ComputeDiskDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: ComputeDiskDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // source_image_encryption_key - computed: false, optional: true, required: false
  private _sourceImageEncryptionKey = new ComputeDiskSourceImageEncryptionKeyOutputReference(this, "source_image_encryption_key");
  public get sourceImageEncryptionKey() {
    return this._sourceImageEncryptionKey;
  }
  public putSourceImageEncryptionKey(value: ComputeDiskSourceImageEncryptionKey) {
    this._sourceImageEncryptionKey.internalValue = value;
  }
  public resetSourceImageEncryptionKey() {
    this._sourceImageEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageEncryptionKeyInput() {
    return this._sourceImageEncryptionKey.internalValue;
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey = new ComputeDiskSourceSnapshotEncryptionKeyOutputReference(this, "source_snapshot_encryption_key");
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }
  public putSourceSnapshotEncryptionKey(value: ComputeDiskSourceSnapshotEncryptionKey) {
    this._sourceSnapshotEncryptionKey.internalValue = value;
  }
  public resetSourceSnapshotEncryptionKey() {
    this._sourceSnapshotEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotEncryptionKeyInput() {
    return this._sourceSnapshotEncryptionKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeDiskTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      physical_block_size_bytes: cdktf.numberToTerraform(this._physicalBlockSizeBytes),
      project: cdktf.stringToTerraform(this._project),
      provisioned_iops: cdktf.numberToTerraform(this._provisionedIops),
      size: cdktf.numberToTerraform(this._size),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      disk_encryption_key: computeDiskDiskEncryptionKeyToTerraform(this._diskEncryptionKey.internalValue),
      source_image_encryption_key: computeDiskSourceImageEncryptionKeyToTerraform(this._sourceImageEncryptionKey.internalValue),
      source_snapshot_encryption_key: computeDiskSourceSnapshotEncryptionKeyToTerraform(this._sourceSnapshotEncryptionKey.internalValue),
      timeouts: computeDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
