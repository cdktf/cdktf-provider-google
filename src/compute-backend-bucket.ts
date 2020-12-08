// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendBucketConfig extends cdktf.TerraformMetaArguments {
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
  readonly signedUrlCacheMaxAgeSec?: number;
}

function computeBackendBucketCdnPolicyToTerraform(struct?: ComputeBackendBucketCdnPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
  }
}

export interface ComputeBackendBucketTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeBackendBucketTimeoutsToTerraform(struct?: ComputeBackendBucketTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeBackendBucket extends cdktf.TerraformResource {

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
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
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

  // enable_cdn - computed: false, optional: true, required: false
  private _enableCdn?: boolean;
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }
  public set enableCdn(value: boolean ) {
    this._enableCdn = value;
  }
  public resetEnableCdn() {
    this._enableCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCdnInput() {
    return this._enableCdn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy?: ComputeBackendBucketCdnPolicy[];
  public get cdnPolicy() {
    return this.interpolationForAttribute('cdn_policy') as any;
  }
  public set cdnPolicy(value: ComputeBackendBucketCdnPolicy[] ) {
    this._cdnPolicy = value;
  }
  public resetCdnPolicy() {
    this._cdnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnPolicyInput() {
    return this._cdnPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeBackendBucketTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeBackendBucketTimeouts ) {
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      description: cdktf.stringToTerraform(this._description),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      cdn_policy: cdktf.listMapper(computeBackendBucketCdnPolicyToTerraform)(this._cdnPolicy),
      timeouts: computeBackendBucketTimeoutsToTerraform(this._timeouts),
    };
  }
}
