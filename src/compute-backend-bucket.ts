// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeBackendBucketConfig extends TerraformMetaArguments {
  /** Cloud Storage bucket name. */
  readonly bucketName: string;
  /** An optional textual description of the resource; provided by the
client when the resource is created. */
  readonly description?: string;
  /** If true, enable Cloud CDN for this BackendBucket. */
  readonly enableCdn?: boolean;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** cdn_policy block */
  readonly cdnPolicy?: ComputeBackendBucketCdnPolicy[];
  /** timeouts block */
  readonly timeouts?: ComputeBackendBucketTimeouts;
}
export interface ComputeBackendBucketCdnPolicy {
  /** Maximum number of seconds the response to a signed URL request will
be considered fresh. After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered. */
  readonly signedUrlCacheMaxAgeSec: number;
}
export interface ComputeBackendBucketTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeBackendBucket extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeBackendBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_bucket',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketName = config.bucketName;
    this._description = config.description;
    this._enableCdn = config.enableCdn;
    this._name = config.name;
    this._project = config.project;
    this._cdnPolicy = config.cdnPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName: string;
  public get bucketName() {
    return this._bucketName;
  }
  public set bucketName(value: string) {
    this._bucketName = value;
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

  // enable_cdn - computed: false, optional: true, required: false
  private _enableCdn?: boolean;
  public get enableCdn() {
    return this._enableCdn;
  }
  public set enableCdn(value: boolean | undefined) {
    this._enableCdn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy?: ComputeBackendBucketCdnPolicy[];
  public get cdnPolicy() {
    return this._cdnPolicy;
  }
  public set cdnPolicy(value: ComputeBackendBucketCdnPolicy[] | undefined) {
    this._cdnPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeBackendBucketTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeBackendBucketTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: this._bucketName,
      description: this._description,
      enable_cdn: this._enableCdn,
      name: this._name,
      project: this._project,
      cdn_policy: this._cdnPolicy,
      timeouts: this._timeouts,
    };
  }
}
