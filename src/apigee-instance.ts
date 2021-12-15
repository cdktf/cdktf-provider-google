// https://www.terraform.io/docs/providers/google/r/apigee_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#description ApigeeInstance#description}
  */
  readonly description?: string;
  /**
  * Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}
  */
  readonly diskEncryptionKeyName?: string;
  /**
  * Display name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#display_name ApigeeInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Compute Engine location where the instance resides. For trial organization
subscriptions, the location must be a Compute Engine zone. For paid organization
subscriptions, it should correspond to a Compute Engine region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#location ApigeeInstance#location}
  */
  readonly location: string;
  /**
  * Resource ID of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#name ApigeeInstance#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee instance,
in the format 'organizations/{{org_name}}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#org_id ApigeeInstance#org_id}
  */
  readonly orgId: string;
  /**
  * The size of the CIDR block range that will be reserved by the instance. Possible values: ["SLASH_16", "SLASH_20", "SLASH_22"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#peering_cidr_range ApigeeInstance#peering_cidr_range}
  */
  readonly peeringCidrRange?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#timeouts ApigeeInstance#timeouts}
  */
  readonly timeouts?: ApigeeInstanceTimeouts;
}
export interface ApigeeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#create ApigeeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html#delete ApigeeInstance#delete}
  */
  readonly delete?: string;
}

export function apigeeInstanceTimeoutsToTerraform(struct?: ApigeeInstanceTimeoutsOutputReference | ApigeeInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApigeeInstanceTimeouts | undefined {
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

  public set internalValue(value: ApigeeInstanceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html google_apigee_instance}
*/
export class ApigeeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_apigee_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_instance.html google_apigee_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._diskEncryptionKeyName = config.diskEncryptionKeyName;
    this._displayName = config.displayName;
    this._location = config.location;
    this._name = config.name;
    this._orgId = config.orgId;
    this._peeringCidrRange = config.peeringCidrRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
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

  // peering_cidr_range - computed: false, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeInstanceTimeoutsOutputReference(this as any, "timeouts", true);
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
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_name: cdktf.stringToTerraform(this._diskEncryptionKeyName),
      display_name: cdktf.stringToTerraform(this._displayName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      peering_cidr_range: cdktf.stringToTerraform(this._peeringCidrRange),
      timeouts: apigeeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
