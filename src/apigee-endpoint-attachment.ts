// https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEndpointAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the endpoint attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#endpoint_attachment_id ApigeeEndpointAttachment#endpoint_attachment_id}
  */
  readonly endpointAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the endpoint attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#location ApigeeEndpointAttachment#location}
  */
  readonly location: string;
  /**
  * The Apigee Organization associated with the Apigee instance,
in the format 'organizations/{{org_name}}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#org_id ApigeeEndpointAttachment#org_id}
  */
  readonly orgId: string;
  /**
  * Format: projects/*\/regions/*\/serviceAttachments/*
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#service_attachment ApigeeEndpointAttachment#service_attachment}
  */
  readonly serviceAttachment: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#timeouts ApigeeEndpointAttachment#timeouts}
  */
  readonly timeouts?: ApigeeEndpointAttachmentTimeouts;
}
export interface ApigeeEndpointAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#create ApigeeEndpointAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#delete ApigeeEndpointAttachment#delete}
  */
  readonly delete?: string;
}

export function apigeeEndpointAttachmentTimeoutsToTerraform(struct?: ApigeeEndpointAttachmentTimeoutsOutputReference | ApigeeEndpointAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ApigeeEndpointAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeEndpointAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigeeEndpointAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment google_apigee_endpoint_attachment}
*/
export class ApigeeEndpointAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_endpoint_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment google_apigee_endpoint_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeEndpointAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeEndpointAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_endpoint_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._endpointAttachmentId = config.endpointAttachmentId;
    this._id = config.id;
    this._location = config.location;
    this._orgId = config.orgId;
    this._serviceAttachment = config.serviceAttachment;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_attachment_id - computed: false, optional: false, required: true
  private _endpointAttachmentId?: string; 
  public get endpointAttachmentId() {
    return this.getStringAttribute('endpoint_attachment_id');
  }
  public set endpointAttachmentId(value: string) {
    this._endpointAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAttachmentIdInput() {
    return this._endpointAttachmentId;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // service_attachment - computed: false, optional: false, required: true
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeEndpointAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeEndpointAttachmentTimeouts) {
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
      endpoint_attachment_id: cdktf.stringToTerraform(this._endpointAttachmentId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      org_id: cdktf.stringToTerraform(this._orgId),
      service_attachment: cdktf.stringToTerraform(this._serviceAttachment),
      timeouts: apigeeEndpointAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
