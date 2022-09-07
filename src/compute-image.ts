// https://www.terraform.io/docs/providers/google/r/compute_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#description ComputeImage#description}
  */
  readonly description?: string;
  /**
  * Size of the image when restored onto a persistent disk (in GB).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#disk_size_gb ComputeImage#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * The name of the image family to which this image belongs. You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#family ComputeImage#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#id ComputeImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to apply to this Image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#labels ComputeImage#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Any applicable license URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#licenses ComputeImage#licenses}
  */
  readonly licenses?: string[];
  /**
  * Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#name ComputeImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#project ComputeImage#project}
  */
  readonly project?: string;
  /**
  * The source disk to create this image based on.
You must provide either this property or the
rawDisk.source property but not both to create an image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#source_disk ComputeImage#source_disk}
  */
  readonly sourceDisk?: string;
  /**
  * URL of the source image used to create this image. In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#source_image ComputeImage#source_image}
  */
  readonly sourceImage?: string;
  /**
  * URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#source_snapshot ComputeImage#source_snapshot}
  */
  readonly sourceSnapshot?: string;
  /**
  * guest_os_features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#guest_os_features ComputeImage#guest_os_features}
  */
  readonly guestOsFeatures?: ComputeImageGuestOsFeatures[] | cdktf.IResolvable;
  /**
  * raw_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#raw_disk ComputeImage#raw_disk}
  */
  readonly rawDisk?: ComputeImageRawDisk;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#timeouts ComputeImage#timeouts}
  */
  readonly timeouts?: ComputeImageTimeouts;
}
export interface ComputeImageGuestOsFeatures {
  /**
  * The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#type ComputeImage#type}
  */
  readonly type: string;
}

export function computeImageGuestOsFeaturesToTerraform(struct?: ComputeImageGuestOsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeImageGuestOsFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeImageGuestOsFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageGuestOsFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ComputeImageGuestOsFeaturesList extends cdktf.ComplexList {
  public internalValue? : ComputeImageGuestOsFeatures[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeImageGuestOsFeaturesOutputReference {
    return new ComputeImageGuestOsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeImageRawDisk {
  /**
  * The format used to encode and transmit the block device, which
should be TAR. This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#container_type ComputeImage#container_type}
  */
  readonly containerType?: string;
  /**
  * An optional SHA1 checksum of the disk image before unpackaging.
This is provided by the client when the disk image is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#sha1 ComputeImage#sha1}
  */
  readonly sha1?: string;
  /**
  * The full Google Cloud Storage URL where disk storage is stored
You must provide either this property or the sourceDisk property
but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#source ComputeImage#source}
  */
  readonly source: string;
}

export function computeImageRawDiskToTerraform(struct?: ComputeImageRawDiskOutputReference | ComputeImageRawDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_type: cdktf.stringToTerraform(struct!.containerType),
    sha1: cdktf.stringToTerraform(struct!.sha1),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class ComputeImageRawDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageRawDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerType = this._containerType;
    }
    if (this._sha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeImageRawDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerType = undefined;
      this._sha1 = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerType = value.containerType;
      this._sha1 = value.sha1;
      this._source = value.source;
    }
  }

  // container_type - computed: false, optional: true, required: false
  private _containerType?: string; 
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  public resetContainerType() {
    this._containerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1?: string; 
  public get sha1() {
    return this.getStringAttribute('sha1');
  }
  public set sha1(value: string) {
    this._sha1 = value;
  }
  public resetSha1() {
    this._sha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface ComputeImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#create ComputeImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#delete ComputeImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_image#update ComputeImage#update}
  */
  readonly update?: string;
}

export function computeImageTimeoutsToTerraform(struct?: ComputeImageTimeoutsOutputReference | ComputeImageTimeouts | cdktf.IResolvable): any {
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

export class ComputeImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeImageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeImageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_image google_compute_image}
*/
export class ComputeImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_image google_compute_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeImageConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_image',
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
    this._diskSizeGb = config.diskSizeGb;
    this._family = config.family;
    this._id = config.id;
    this._labels = config.labels;
    this._licenses = config.licenses;
    this._name = config.name;
    this._project = config.project;
    this._sourceDisk = config.sourceDisk;
    this._sourceImage = config.sourceImage;
    this._sourceSnapshot = config.sourceSnapshot;
    this._guestOsFeatures.internalValue = config.guestOsFeatures;
    this._rawDisk.internalValue = config.rawDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_size_bytes - computed: true, optional: false, required: false
  public get archiveSizeBytes() {
    return this.getNumberAttribute('archive_size_bytes');
  }

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

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // licenses - computed: true, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return this.getListAttribute('licenses');
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_disk - computed: false, optional: true, required: false
  private _sourceDisk?: string; 
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }
  public resetSourceDisk() {
    this._sourceDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskInput() {
    return this._sourceDisk;
  }

  // source_image - computed: false, optional: true, required: false
  private _sourceImage?: string; 
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }
  public set sourceImage(value: string) {
    this._sourceImage = value;
  }
  public resetSourceImage() {
    this._sourceImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage;
  }

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string; 
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }
  public set sourceSnapshot(value: string) {
    this._sourceSnapshot = value;
  }
  public resetSourceSnapshot() {
    this._sourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotInput() {
    return this._sourceSnapshot;
  }

  // guest_os_features - computed: false, optional: true, required: false
  private _guestOsFeatures = new ComputeImageGuestOsFeaturesList(this, "guest_os_features", true);
  public get guestOsFeatures() {
    return this._guestOsFeatures;
  }
  public putGuestOsFeatures(value: ComputeImageGuestOsFeatures[] | cdktf.IResolvable) {
    this._guestOsFeatures.internalValue = value;
  }
  public resetGuestOsFeatures() {
    this._guestOsFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeaturesInput() {
    return this._guestOsFeatures.internalValue;
  }

  // raw_disk - computed: false, optional: true, required: false
  private _rawDisk = new ComputeImageRawDiskOutputReference(this, "raw_disk");
  public get rawDisk() {
    return this._rawDisk;
  }
  public putRawDisk(value: ComputeImageRawDisk) {
    this._rawDisk.internalValue = value;
  }
  public resetRawDisk() {
    this._rawDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDiskInput() {
    return this._rawDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeImageTimeouts) {
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
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      family: cdktf.stringToTerraform(this._family),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenses),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      source_disk: cdktf.stringToTerraform(this._sourceDisk),
      source_image: cdktf.stringToTerraform(this._sourceImage),
      source_snapshot: cdktf.stringToTerraform(this._sourceSnapshot),
      guest_os_features: cdktf.listMapper(computeImageGuestOsFeaturesToTerraform, true)(this._guestOsFeatures.internalValue),
      raw_disk: computeImageRawDiskToTerraform(this._rawDisk.internalValue),
      timeouts: computeImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
