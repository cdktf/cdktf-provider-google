// https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationsClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if sample integrations should be created along with provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#create_sample_integrations IntegrationsClient#create_sample_integrations}
  */
  readonly createSampleIntegrations?: boolean | cdktf.IResolvable;
  /**
  * Indicates if sample workflow should be created along with provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#create_sample_workflows IntegrationsClient#create_sample_workflows}
  */
  readonly createSampleWorkflows?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#id IntegrationsClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location in which client needs to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#location IntegrationsClient#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#project IntegrationsClient#project}
  */
  readonly project?: string;
  /**
  * Indicates provision with GMEK or CMEK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#provision_gmek IntegrationsClient#provision_gmek}
  */
  readonly provisionGmek?: boolean | cdktf.IResolvable;
  /**
  * User input run-as service account, if empty, will bring up a new default service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#run_as_service_account IntegrationsClient#run_as_service_account}
  */
  readonly runAsServiceAccount?: string;
  /**
  * cloud_kms_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#cloud_kms_config IntegrationsClient#cloud_kms_config}
  */
  readonly cloudKmsConfig?: IntegrationsClientCloudKmsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#timeouts IntegrationsClient#timeouts}
  */
  readonly timeouts?: IntegrationsClientTimeouts;
}
export interface IntegrationsClientCloudKmsConfig {
  /**
  * A Cloud KMS key is a named object containing one or more key versions, along
  * with metadata for the key. A key exists on exactly one key ring tied to a
  * specific location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#key IntegrationsClient#key}
  */
  readonly key: string;
  /**
  * Each version of a key contains key material used for encryption or signing.
  * A key's version is represented by an integer, starting at 1. To decrypt data
  * or verify a signature, you must use the same key version that was used to
  * encrypt or sign the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#key_version IntegrationsClient#key_version}
  */
  readonly keyVersion?: string;
  /**
  * Location name of the key ring, e.g. "us-west1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#kms_location IntegrationsClient#kms_location}
  */
  readonly kmsLocation: string;
  /**
  * The Google Cloud project id of the project where the kms key stored. If empty,
  * the kms key is stored at the same project as customer's project and ecrypted
  * with CMEK, otherwise, the kms key is stored in the tenant project and
  * encrypted with GMEK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#kms_project_id IntegrationsClient#kms_project_id}
  */
  readonly kmsProjectId?: string;
  /**
  * A key ring organizes keys in a specific Google Cloud location and allows you to
  * manage access control on groups of keys. A key ring's name does not need to be
  * unique across a Google Cloud project, but must be unique within a given location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#kms_ring IntegrationsClient#kms_ring}
  */
  readonly kmsRing: string;
}

export function integrationsClientCloudKmsConfigToTerraform(struct?: IntegrationsClientCloudKmsConfigOutputReference | IntegrationsClientCloudKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_version: cdktf.stringToTerraform(struct!.keyVersion),
    kms_location: cdktf.stringToTerraform(struct!.kmsLocation),
    kms_project_id: cdktf.stringToTerraform(struct!.kmsProjectId),
    kms_ring: cdktf.stringToTerraform(struct!.kmsRing),
  }
}


export function integrationsClientCloudKmsConfigToHclTerraform(struct?: IntegrationsClientCloudKmsConfigOutputReference | IntegrationsClientCloudKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_version: {
      value: cdktf.stringToHclTerraform(struct!.keyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_location: {
      value: cdktf.stringToHclTerraform(struct!.kmsLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_project_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_ring: {
      value: cdktf.stringToHclTerraform(struct!.kmsRing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsClientCloudKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsClientCloudKmsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVersion = this._keyVersion;
    }
    if (this._kmsLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsLocation = this._kmsLocation;
    }
    if (this._kmsProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsProjectId = this._kmsProjectId;
    }
    if (this._kmsRing !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsRing = this._kmsRing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsClientCloudKmsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._keyVersion = undefined;
      this._kmsLocation = undefined;
      this._kmsProjectId = undefined;
      this._kmsRing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._keyVersion = value.keyVersion;
      this._kmsLocation = value.kmsLocation;
      this._kmsProjectId = value.kmsProjectId;
      this._kmsRing = value.kmsRing;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_version - computed: false, optional: true, required: false
  private _keyVersion?: string; 
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
  }

  // kms_location - computed: false, optional: false, required: true
  private _kmsLocation?: string; 
  public get kmsLocation() {
    return this.getStringAttribute('kms_location');
  }
  public set kmsLocation(value: string) {
    this._kmsLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsLocationInput() {
    return this._kmsLocation;
  }

  // kms_project_id - computed: false, optional: true, required: false
  private _kmsProjectId?: string; 
  public get kmsProjectId() {
    return this.getStringAttribute('kms_project_id');
  }
  public set kmsProjectId(value: string) {
    this._kmsProjectId = value;
  }
  public resetKmsProjectId() {
    this._kmsProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsProjectIdInput() {
    return this._kmsProjectId;
  }

  // kms_ring - computed: false, optional: false, required: true
  private _kmsRing?: string; 
  public get kmsRing() {
    return this.getStringAttribute('kms_ring');
  }
  public set kmsRing(value: string) {
    this._kmsRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsRingInput() {
    return this._kmsRing;
  }
}
export interface IntegrationsClientTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#create IntegrationsClient#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#delete IntegrationsClient#delete}
  */
  readonly delete?: string;
}

export function integrationsClientTimeoutsToTerraform(struct?: IntegrationsClientTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function integrationsClientTimeoutsToHclTerraform(struct?: IntegrationsClientTimeouts | cdktf.IResolvable): any {
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

export class IntegrationsClientTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationsClientTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationsClientTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client google_integrations_client}
*/
export class IntegrationsClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_integrations_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationsClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationsClient to import
  * @param importFromId The id of the existing IntegrationsClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationsClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_integrations_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/integrations_client google_integrations_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationsClientConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationsClientConfig) {
    super(scope, id, {
      terraformResourceType: 'google_integrations_client',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.39.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createSampleIntegrations = config.createSampleIntegrations;
    this._createSampleWorkflows = config.createSampleWorkflows;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._provisionGmek = config.provisionGmek;
    this._runAsServiceAccount = config.runAsServiceAccount;
    this._cloudKmsConfig.internalValue = config.cloudKmsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_sample_integrations - computed: false, optional: true, required: false
  private _createSampleIntegrations?: boolean | cdktf.IResolvable; 
  public get createSampleIntegrations() {
    return this.getBooleanAttribute('create_sample_integrations');
  }
  public set createSampleIntegrations(value: boolean | cdktf.IResolvable) {
    this._createSampleIntegrations = value;
  }
  public resetCreateSampleIntegrations() {
    this._createSampleIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSampleIntegrationsInput() {
    return this._createSampleIntegrations;
  }

  // create_sample_workflows - computed: false, optional: true, required: false
  private _createSampleWorkflows?: boolean | cdktf.IResolvable; 
  public get createSampleWorkflows() {
    return this.getBooleanAttribute('create_sample_workflows');
  }
  public set createSampleWorkflows(value: boolean | cdktf.IResolvable) {
    this._createSampleWorkflows = value;
  }
  public resetCreateSampleWorkflows() {
    this._createSampleWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSampleWorkflowsInput() {
    return this._createSampleWorkflows;
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

  // provision_gmek - computed: false, optional: true, required: false
  private _provisionGmek?: boolean | cdktf.IResolvable; 
  public get provisionGmek() {
    return this.getBooleanAttribute('provision_gmek');
  }
  public set provisionGmek(value: boolean | cdktf.IResolvable) {
    this._provisionGmek = value;
  }
  public resetProvisionGmek() {
    this._provisionGmek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionGmekInput() {
    return this._provisionGmek;
  }

  // run_as_service_account - computed: false, optional: true, required: false
  private _runAsServiceAccount?: string; 
  public get runAsServiceAccount() {
    return this.getStringAttribute('run_as_service_account');
  }
  public set runAsServiceAccount(value: string) {
    this._runAsServiceAccount = value;
  }
  public resetRunAsServiceAccount() {
    this._runAsServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsServiceAccountInput() {
    return this._runAsServiceAccount;
  }

  // cloud_kms_config - computed: false, optional: true, required: false
  private _cloudKmsConfig = new IntegrationsClientCloudKmsConfigOutputReference(this, "cloud_kms_config");
  public get cloudKmsConfig() {
    return this._cloudKmsConfig;
  }
  public putCloudKmsConfig(value: IntegrationsClientCloudKmsConfig) {
    this._cloudKmsConfig.internalValue = value;
  }
  public resetCloudKmsConfig() {
    this._cloudKmsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudKmsConfigInput() {
    return this._cloudKmsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IntegrationsClientTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IntegrationsClientTimeouts) {
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
      create_sample_integrations: cdktf.booleanToTerraform(this._createSampleIntegrations),
      create_sample_workflows: cdktf.booleanToTerraform(this._createSampleWorkflows),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      provision_gmek: cdktf.booleanToTerraform(this._provisionGmek),
      run_as_service_account: cdktf.stringToTerraform(this._runAsServiceAccount),
      cloud_kms_config: integrationsClientCloudKmsConfigToTerraform(this._cloudKmsConfig.internalValue),
      timeouts: integrationsClientTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_sample_integrations: {
        value: cdktf.booleanToHclTerraform(this._createSampleIntegrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_sample_workflows: {
        value: cdktf.booleanToHclTerraform(this._createSampleWorkflows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_gmek: {
        value: cdktf.booleanToHclTerraform(this._provisionGmek),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_as_service_account: {
        value: cdktf.stringToHclTerraform(this._runAsServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_kms_config: {
        value: integrationsClientCloudKmsConfigToHclTerraform(this._cloudKmsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationsClientCloudKmsConfigList",
      },
      timeouts: {
        value: integrationsClientTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationsClientTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
