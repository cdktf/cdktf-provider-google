// https://www.terraform.io/docs/providers/google/r/apigee_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}
  */
  readonly consumerAcceptList?: string[];
  /**
  * Description of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#description ApigeeInstance#description}
  */
  readonly description?: string;
  /**
  * Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}
  */
  readonly diskEncryptionKeyName?: string;
  /**
  * Display name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#display_name ApigeeInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#id ApigeeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP range represents the customer-provided CIDR block of length 22 that will be used for
the Apigee instance creation. This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#ip_range ApigeeInstance#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Required. Compute Engine location where the instance resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#location ApigeeInstance#location}
  */
  readonly location: string;
  /**
  * Resource ID of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#name ApigeeInstance#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee instance,
in the format 'organizations/{{org_name}}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#org_id ApigeeInstance#org_id}
  */
  readonly orgId: string;
  /**
  * The size of the CIDR block range that will be reserved by the instance. For valid values, 
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}
  */
  readonly peeringCidrRange?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#timeouts ApigeeInstance#timeouts}
  */
  readonly timeouts?: ApigeeInstanceTimeouts;
}
export interface ApigeeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#create ApigeeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance#delete ApigeeInstance#delete}
  */
  readonly delete?: string;
}

export function apigeeInstanceTimeoutsToTerraform(struct?: ApigeeInstanceTimeoutsOutputReference | ApigeeInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ApigeeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigeeInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_instance google_apigee_instance}
*/
export class ApigeeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_instance google_apigee_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_instance',
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
    this._consumerAcceptList = config.consumerAcceptList;
    this._description = config.description;
    this._diskEncryptionKeyName = config.diskEncryptionKeyName;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipRange = config.ipRange;
    this._location = config.location;
    this._name = config.name;
    this._orgId = config.orgId;
    this._peeringCidrRange = config.peeringCidrRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_accept_list - computed: true, optional: true, required: false
  private _consumerAcceptList?: string[]; 
  public get consumerAcceptList() {
    return this.getListAttribute('consumer_accept_list');
  }
  public set consumerAcceptList(value: string[]) {
    this._consumerAcceptList = value;
  }
  public resetConsumerAcceptList() {
    this._consumerAcceptList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListInput() {
    return this._consumerAcceptList;
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

  // disk_encryption_key_name - computed: false, optional: true, required: false
  private _diskEncryptionKeyName?: string; 
  public get diskEncryptionKeyName() {
    return this.getStringAttribute('disk_encryption_key_name');
  }
  public set diskEncryptionKeyName(value: string) {
    this._diskEncryptionKeyName = value;
  }
  public resetDiskEncryptionKeyName() {
    this._diskEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyNameInput() {
    return this._diskEncryptionKeyName;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
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

  // peering_cidr_range - computed: true, optional: true, required: false
  private _peeringCidrRange?: string; 
  public get peeringCidrRange() {
    return this.getStringAttribute('peering_cidr_range');
  }
  public set peeringCidrRange(value: string) {
    this._peeringCidrRange = value;
  }
  public resetPeeringCidrRange() {
    this._peeringCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringCidrRangeInput() {
    return this._peeringCidrRange;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeInstanceTimeouts) {
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
      consumer_accept_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerAcceptList),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_name: cdktf.stringToTerraform(this._diskEncryptionKeyName),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      peering_cidr_range: cdktf.stringToTerraform(this._peeringCidrRange),
      timeouts: apigeeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
