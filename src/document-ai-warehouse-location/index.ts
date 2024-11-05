// https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocumentAiWarehouseLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access control mode for accessing the customer data. Possible values: ["ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI", "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID", "ACL_MODE_UNIVERSAL_ACCESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#access_control_mode DocumentAiWarehouseLocation#access_control_mode}
  */
  readonly accessControlMode: string;
  /**
  * The type of database used to store customer data. Possible values: ["DB_INFRA_SPANNER", "DB_CLOUD_SQL_POSTGRES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#database_type DocumentAiWarehouseLocation#database_type}
  */
  readonly databaseType: string;
  /**
  * The default role for the person who create a document. Possible values: ["DOCUMENT_ADMIN", "DOCUMENT_EDITOR", "DOCUMENT_VIEWER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#document_creator_default_role DocumentAiWarehouseLocation#document_creator_default_role}
  */
  readonly documentCreatorDefaultRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#id DocumentAiWarehouseLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The KMS key used for CMEK encryption. It is required that
  * the kms key is in the same region as the endpoint. The
  * same key will be used for all provisioned resources, if
  * encryption is available. If the kmsKey is left empty, no
  * encryption will be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#kms_key DocumentAiWarehouseLocation#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * The location in which the instance is to be provisioned. It takes the form projects/{projectNumber}/locations/{location}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#location DocumentAiWarehouseLocation#location}
  */
  readonly location: string;
  /**
  * The unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#project_number DocumentAiWarehouseLocation#project_number}
  */
  readonly projectNumber: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#timeouts DocumentAiWarehouseLocation#timeouts}
  */
  readonly timeouts?: DocumentAiWarehouseLocationTimeouts;
}
export interface DocumentAiWarehouseLocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#create DocumentAiWarehouseLocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#delete DocumentAiWarehouseLocation#delete}
  */
  readonly delete?: string;
}

export function documentAiWarehouseLocationTimeoutsToTerraform(struct?: DocumentAiWarehouseLocationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function documentAiWarehouseLocationTimeoutsToHclTerraform(struct?: DocumentAiWarehouseLocationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseLocationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DocumentAiWarehouseLocationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DocumentAiWarehouseLocationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location google_document_ai_warehouse_location}
*/
export class DocumentAiWarehouseLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_document_ai_warehouse_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DocumentAiWarehouseLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocumentAiWarehouseLocation to import
  * @param importFromId The id of the existing DocumentAiWarehouseLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocumentAiWarehouseLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_document_ai_warehouse_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/document_ai_warehouse_location google_document_ai_warehouse_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocumentAiWarehouseLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DocumentAiWarehouseLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_document_ai_warehouse_location',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.10.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlMode = config.accessControlMode;
    this._databaseType = config.databaseType;
    this._documentCreatorDefaultRole = config.documentCreatorDefaultRole;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._location = config.location;
    this._projectNumber = config.projectNumber;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_mode - computed: false, optional: false, required: true
  private _accessControlMode?: string; 
  public get accessControlMode() {
    return this.getStringAttribute('access_control_mode');
  }
  public set accessControlMode(value: string) {
    this._accessControlMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlModeInput() {
    return this._accessControlMode;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // document_creator_default_role - computed: false, optional: true, required: false
  private _documentCreatorDefaultRole?: string; 
  public get documentCreatorDefaultRole() {
    return this.getStringAttribute('document_creator_default_role');
  }
  public set documentCreatorDefaultRole(value: string) {
    this._documentCreatorDefaultRole = value;
  }
  public resetDocumentCreatorDefaultRole() {
    this._documentCreatorDefaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentCreatorDefaultRoleInput() {
    return this._documentCreatorDefaultRole;
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

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // project_number - computed: false, optional: false, required: true
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DocumentAiWarehouseLocationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DocumentAiWarehouseLocationTimeouts) {
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
      access_control_mode: cdktf.stringToTerraform(this._accessControlMode),
      database_type: cdktf.stringToTerraform(this._databaseType),
      document_creator_default_role: cdktf.stringToTerraform(this._documentCreatorDefaultRole),
      id: cdktf.stringToTerraform(this._id),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      location: cdktf.stringToTerraform(this._location),
      project_number: cdktf.stringToTerraform(this._projectNumber),
      timeouts: documentAiWarehouseLocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_mode: {
        value: cdktf.stringToHclTerraform(this._accessControlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_creator_default_role: {
        value: cdktf.stringToHclTerraform(this._documentCreatorDefaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_number: {
        value: cdktf.stringToHclTerraform(this._projectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: documentAiWarehouseLocationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DocumentAiWarehouseLocationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
