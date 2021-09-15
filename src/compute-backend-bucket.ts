// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud Storage bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#bucket_name ComputeBackendBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Headers that the HTTP/S load balancer should add to proxied responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#custom_response_headers ComputeBackendBucket#custom_response_headers}
  */
  readonly customResponseHeaders?: string[];
  /**
  * An optional textual description of the resource; provided by the
client when the resource is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#description ComputeBackendBucket#description}
  */
  readonly description?: string;
  /**
  * If true, enable Cloud CDN for this BackendBucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#enable_cdn ComputeBackendBucket#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#name ComputeBackendBucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#project ComputeBackendBucket#project}
  */
  readonly project?: string;
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#cdn_policy ComputeBackendBucket#cdn_policy}
  */
  readonly cdnPolicy?: ComputeBackendBucketCdnPolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#timeouts ComputeBackendBucket#timeouts}
  */
  readonly timeouts?: ComputeBackendBucketTimeouts;
}
export interface ComputeBackendBucketCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#code ComputeBackendBucket#code}
  */
  readonly code?: number;
  /**
  * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#ttl ComputeBackendBucket#ttl}
  */
  readonly ttl?: number;
}

function computeBackendBucketCdnPolicyNegativeCachingPolicyToTerraform(struct?: ComputeBackendBucketCdnPolicyNegativeCachingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export interface ComputeBackendBucketCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#cache_mode ComputeBackendBucket#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#client_ttl ComputeBackendBucket#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#default_ttl ComputeBackendBucket#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#max_ttl ComputeBackendBucket#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#negative_caching ComputeBackendBucket#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#serve_while_stale ComputeBackendBucket#serve_while_stale}
  */
  readonly serveWhileStale?: number;
  /**
  * Maximum number of seconds the response to a signed URL request will
be considered fresh. After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#signed_url_cache_max_age_sec ComputeBackendBucket#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * negative_caching_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#negative_caching_policy ComputeBackendBucket#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
}

function computeBackendBucketCdnPolicyToTerraform(struct?: ComputeBackendBucketCdnPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cache_mode: cdktf.stringToTerraform(struct!.cacheMode),
    client_ttl: cdktf.numberToTerraform(struct!.clientTtl),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    negative_caching: cdktf.booleanToTerraform(struct!.negativeCaching),
    serve_while_stale: cdktf.numberToTerraform(struct!.serveWhileStale),
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
    negative_caching_policy: cdktf.listMapper(computeBackendBucketCdnPolicyNegativeCachingPolicyToTerraform)(struct!.negativeCachingPolicy),
  }
}

export interface ComputeBackendBucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#create ComputeBackendBucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#delete ComputeBackendBucket#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html#update ComputeBackendBucket#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html google_compute_backend_bucket}
*/
export class ComputeBackendBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_backend_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket.html google_compute_backend_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeBackendBucketConfig
  */
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
    this._customResponseHeaders = config.customResponseHeaders;
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

  // custom_response_headers - computed: false, optional: true, required: false
  private _customResponseHeaders?: string[];
  public get customResponseHeaders() {
    return this.getListAttribute('custom_response_headers');
  }
  public set customResponseHeaders(value: string[] ) {
    this._customResponseHeaders = value;
  }
  public resetCustomResponseHeaders() {
    this._customResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseHeadersInput() {
    return this._customResponseHeaders
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
  private _enableCdn?: boolean | cdktf.IResolvable;
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }
  public set enableCdn(value: boolean | cdktf.IResolvable ) {
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
      custom_response_headers: cdktf.listMapper(cdktf.stringToTerraform)(this._customResponseHeaders),
      description: cdktf.stringToTerraform(this._description),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      cdn_policy: cdktf.listMapper(computeBackendBucketCdnPolicyToTerraform)(this._cdnPolicy),
      timeouts: computeBackendBucketTimeoutsToTerraform(this._timeouts),
    };
  }
}
