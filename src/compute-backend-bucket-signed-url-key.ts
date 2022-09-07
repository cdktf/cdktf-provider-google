// https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeBackendBucketSignedUrlKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The backend bucket this signed URL key belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}
  */
  readonly backendBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}
  */
  readonly keyValue: string;
  /**
  * Name of the signed URL key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}
  */
  readonly timeouts?: ComputeBackendBucketSignedUrlKeyTimeouts;
}
export interface ComputeBackendBucketSignedUrlKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}
  */
  readonly delete?: string;
}

export function computeBackendBucketSignedUrlKeyTimeoutsToTerraform(struct?: ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference | ComputeBackendBucketSignedUrlKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeBackendBucketSignedUrlKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeBackendBucketSignedUrlKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key}
*/
export class ComputeBackendBucketSignedUrlKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_backend_bucket_signed_url_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeBackendBucketSignedUrlKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeBackendBucketSignedUrlKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_bucket_signed_url_key',
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
    this._backendBucket = config.backendBucket;
    this._id = config.id;
    this._keyValue = config.keyValue;
    this._name = config.name;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_bucket - computed: false, optional: false, required: true
  private _backendBucket?: string; 
  public get backendBucket() {
    return this.getStringAttribute('backend_bucket');
  }
  public set backendBucket(value: string) {
    this._backendBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendBucketInput() {
    return this._backendBucket;
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

  // key_value - computed: false, optional: false, required: true
  private _keyValue?: string; 
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }
  public set keyValue(value: string) {
    this._keyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeBackendBucketSignedUrlKeyTimeouts) {
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
      backend_bucket: cdktf.stringToTerraform(this._backendBucket),
      id: cdktf.stringToTerraform(this._id),
      key_value: cdktf.stringToTerraform(this._keyValue),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeBackendBucketSignedUrlKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
