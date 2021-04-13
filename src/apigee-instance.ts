// https://www.terraform.io/docs/providers/google/r/apigee_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeInstanceConfig extends cdktf.TerraformMetaArguments {
  /** Description of the instance. */
  readonly description?: string;
  /** Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)' */
  readonly diskEncryptionKeyName?: string;
  /** Display name of the instance. */
  readonly displayName?: string;
  /** Compute Engine location where the instance resides. For trial organization
subscriptions, the location must be a Compute Engine zone. For paid organization
subscriptions, it should correspond to a Compute Engine region. */
  readonly location: string;
  /** Resource ID of the instance. */
  readonly name: string;
  /** The Apigee Organization associated with the Apigee instance,
in the format 'organizations/{{org_name}}'. */
  readonly orgId: string;
  /** The size of the CIDR block range that will be reserved by the instance. Possible values: ["SLASH_16", "SLASH_20"] */
  readonly peeringCidrRange?: string;
  /** timeouts block */
  readonly timeouts?: ApigeeInstanceTimeouts;
}
export interface ApigeeInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function apigeeInstanceTimeoutsToTerraform(struct?: ApigeeInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ApigeeInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disk_encryption_key_name - computed: false, optional: true, required: false
  private _diskEncryptionKeyName?: string;
  public get diskEncryptionKeyName() {
    return this.getStringAttribute('disk_encryption_key_name');
  }
  public set diskEncryptionKeyName(value: string ) {
    this._diskEncryptionKeyName = value;
  }
  public resetDiskEncryptionKeyName() {
    this._diskEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyNameInput() {
    return this._diskEncryptionKeyName
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // peering_cidr_range - computed: false, optional: true, required: false
  private _peeringCidrRange?: string;
  public get peeringCidrRange() {
    return this.getStringAttribute('peering_cidr_range');
  }
  public set peeringCidrRange(value: string ) {
    this._peeringCidrRange = value;
  }
  public resetPeeringCidrRange() {
    this._peeringCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringCidrRangeInput() {
    return this._peeringCidrRange
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigeeInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApigeeInstanceTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_name: cdktf.stringToTerraform(this._diskEncryptionKeyName),
      display_name: cdktf.stringToTerraform(this._displayName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      peering_cidr_range: cdktf.stringToTerraform(this._peeringCidrRange),
      timeouts: apigeeInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
