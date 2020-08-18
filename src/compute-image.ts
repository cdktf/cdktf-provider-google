// https://www.terraform.io/docs/providers/google/r/compute_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeImageConfig extends TerraformMetaArguments {
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** Size of the image when restored onto a persistent disk (in GB). */
  readonly diskSizeGb?: number;
  /** The name of the image family to which this image belongs. You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035. */
  readonly family?: string;
  /** Labels to apply to this Image. */
  readonly labels?: { [key: string]: string };
  /** Any applicable license URI. */
  readonly licenses?: string[];
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** The source disk to create this image based on.
You must provide either this property or the
rawDisk.source property but not both to create an image. */
  readonly sourceDisk?: string;
  /** URL of the source image used to create this image. In order to create an image, you must provide the full or partial
URL of one of the following:

The selfLink URL
This property
The rawDisk.source URL
The sourceDisk URL */
  readonly sourceImage?: string;
  /** URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

The selfLink URL
This property
The sourceImage URL
The rawDisk.source URL
The sourceDisk URL */
  readonly sourceSnapshot?: string;
  /** guest_os_features block */
  readonly guestOsFeatures?: ComputeImageGuestOsFeatures[];
  /** raw_disk block */
  readonly rawDisk?: ComputeImageRawDisk[];
  /** timeouts block */
  readonly timeouts?: ComputeImageTimeouts;
}
export interface ComputeImageGuestOsFeatures {
  /** The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS"] */
  readonly type: string;
}
export interface ComputeImageRawDisk {
  /** The format used to encode and transmit the block device, which
should be TAR. This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"] */
  readonly containerType?: string;
  /** An optional SHA1 checksum of the disk image before unpackaging.
This is provided by the client when the disk image is created. */
  readonly sha1?: string;
  /** The full Google Cloud Storage URL where disk storage is stored
You must provide either this property or the sourceDisk property
but not both. */
  readonly source: string;
}
export interface ComputeImageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeImage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_image',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._diskSizeGb = config.diskSizeGb;
    this._family = config.family;
    this._labels = config.labels;
    this._licenses = config.licenses;
    this._name = config.name;
    this._project = config.project;
    this._sourceDisk = config.sourceDisk;
    this._sourceImage = config.sourceImage;
    this._sourceSnapshot = config.sourceSnapshot;
    this._guestOsFeatures = config.guestOsFeatures;
    this._rawDisk = config.rawDisk;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_size_bytes - computed: true, optional: false, required: true
  public get archiveSizeBytes() {
    return this.getNumberAttribute('archive_size_bytes');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number;
  public get diskSizeGb() {
    return this._diskSizeGb ?? this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number | undefined) {
    this._diskSizeGb = value;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string;
  public get family() {
    return this._family;
  }
  public set family(value: string | undefined) {
    this._family = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // label_fingerprint - computed: true, optional: false, required: true
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // licenses - computed: true, optional: true, required: false
  private _licenses?: string[];
  public get licenses() {
    return this._licenses ?? this.getListAttribute('licenses');
  }
  public set licenses(value: string[] | undefined) {
    this._licenses = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_disk - computed: false, optional: true, required: false
  private _sourceDisk?: string;
  public get sourceDisk() {
    return this._sourceDisk;
  }
  public set sourceDisk(value: string | undefined) {
    this._sourceDisk = value;
  }

  // source_image - computed: false, optional: true, required: false
  private _sourceImage?: string;
  public get sourceImage() {
    return this._sourceImage;
  }
  public set sourceImage(value: string | undefined) {
    this._sourceImage = value;
  }

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string;
  public get sourceSnapshot() {
    return this._sourceSnapshot;
  }
  public set sourceSnapshot(value: string | undefined) {
    this._sourceSnapshot = value;
  }

  // guest_os_features - computed: false, optional: true, required: false
  private _guestOsFeatures?: ComputeImageGuestOsFeatures[];
  public get guestOsFeatures() {
    return this._guestOsFeatures;
  }
  public set guestOsFeatures(value: ComputeImageGuestOsFeatures[] | undefined) {
    this._guestOsFeatures = value;
  }

  // raw_disk - computed: false, optional: true, required: false
  private _rawDisk?: ComputeImageRawDisk[];
  public get rawDisk() {
    return this._rawDisk;
  }
  public set rawDisk(value: ComputeImageRawDisk[] | undefined) {
    this._rawDisk = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      disk_size_gb: this._diskSizeGb,
      family: this._family,
      labels: this._labels,
      licenses: this._licenses,
      name: this._name,
      project: this._project,
      source_disk: this._sourceDisk,
      source_image: this._sourceImage,
      source_snapshot: this._sourceSnapshot,
      guest_os_features: this._guestOsFeatures,
      raw_disk: this._rawDisk,
      timeouts: this._timeouts,
    };
  }
}
